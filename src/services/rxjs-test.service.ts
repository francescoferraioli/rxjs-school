import { chain, initial, values } from 'lodash';
import operatorGraph, {
  OperatorGraphItem,
  OperatorGraphItemClass,
  OperatorGraphItemDoc,
  OperatorGraphItemInitial,
  OperatorGraphItemLink,
  OperatorGraphItemNormal,
} from 'src/data/operator-graph';

const initialGraphItem = getInitialGraphItem();

export function getAllData(): Record<string, OperatorGraphItemNormal[][]> {
  return chain(getAllDocs())
    .map((doc) => getPathToItem(doc))
    .groupBy(([doc]) => getLabel(doc as OperatorGraphItemDoc))
    .mapValues((paths) =>
      paths.map((path) => initial(path.reverse()) as OperatorGraphItemNormal[])
    )
    .value();
}

function getAllDocs(): OperatorGraphItemDoc[] {
  return traverseToDocs(getInitialGraphItem().options);
}

function getLabel(doc: OperatorGraphItemDoc) {
  return `${doc.label}${
    doc.docType === 'class' ? `.${(doc as OperatorGraphItemClass).method}` : ''
  }`;
}

function getPathToItem(item: OperatorGraphItem): OperatorGraphItem[] {
  if (initialGraphItem.options.includes(item.id)) {
    return [item];
  }
  return [
    item,
    ...getPathToItem(
      values(operatorGraph)
        .filter(({ id }) => id !== 'initial')
        .map((x) => x as OperatorGraphItemNormal)
        .filter(({ docType }) => docType === undefined)
        .map((x) => x as OperatorGraphItemLink)
        .find(({ options }) => options.includes(item.id))!
    ),
  ];
}

function traverseToDocs(options: string[]): OperatorGraphItemDoc[] {
  return options
    .map((option) => getNormalGraphItem(option))
    .flatMap((item) => {
      if (item.docType !== undefined) {
        return [item as OperatorGraphItemDoc];
      }

      return traverseToDocs(item.options);
    });
}

function getInitialGraphItem(): OperatorGraphItemInitial {
  return operatorGraph['initial'] as OperatorGraphItemInitial;
}

function getNormalGraphItem(id: string): OperatorGraphItemNormal {
  if (id === 'initial') {
    throw new Error('ID cannot be set to initial for a Normal Graph Item');
  }

  return operatorGraph[id] as OperatorGraphItemNormal;
}
