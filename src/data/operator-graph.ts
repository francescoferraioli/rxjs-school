export type OperatorGraphItemDocType = 'function' | 'class' | 'const';

export type OperatorGraphItemInitial = {
  id: 'initial';
  options: string[];
};

export interface OperatorGraphItemBase {
  id: string;
  label: string;
}

export interface OperatorGraphItemLink extends OperatorGraphItemBase {
  options: string[];
}

export interface OperatorGraphItemDocBase extends OperatorGraphItemBase {
  docType: OperatorGraphItemDocType;
  path: string;
}

export interface OperatorGraphItemClass extends OperatorGraphItemDocBase {
  docType: 'class';
  method: string;
}

export interface OperatorGraphItemFunction extends OperatorGraphItemDocBase {}

export interface OperatorGraphItemConst extends OperatorGraphItemDocBase {}

export type OperatorGraphItemDoc =
  | OperatorGraphItemClass
  | OperatorGraphItemFunction
  | OperatorGraphItemConst;

export type OperatorGraphItemNormal =
  | OperatorGraphItemLink
  | OperatorGraphItemDoc;

export type OperatorGraphItem =
  | OperatorGraphItemInitial
  | OperatorGraphItemNormal;

export type OperatorGraph = {
  [i: string]: OperatorGraphItem;
};

const operatorGraph: OperatorGraph = {
  '1315': {
    id: '1315',
    label: 'bufferToggle',
    path: 'api/operators/bufferToggle',
    docType: 'function',
  },
  '1511': {
    id: '1511',
    label: 'bufferTime',
    path: 'api/operators/bufferTime',
    docType: 'function',
  },
  '1760': {
    id: '1760',
    label: 'zip',
    path: 'api/index/function/zip',
    docType: 'function',
  },
  '1851': {
    id: '1851',
    label: 'based on the emissions of an Observable created on-demand',
    options: ['6e85', 'b293'],
  },
  '1966': {
    id: '1966',
    label: 'and emit the group as an array',
    options: ['08e5'],
  },
  '2408': {
    id: '2408',
    label: 'until another Observable emits',
    options: ['1966', 'defc'],
  },
  '2470': {
    id: '2470',
    label: 'last',
    path: 'api/operators/last',
    docType: 'function',
  },
  '2609': {
    id: '2609',
    label: 'timeoutWith',
    path: 'api/operators/timeoutWith',
    docType: 'function',
  },
  '3702': {
    id: '3702',
    label: 'and emit the group as a nested Observable',
    options: ['ada3'],
  },
  '4216': {
    id: '4216',
    label: 'I have some Observables to combine together as one Observable, and',
    options: ['5be5', 'b865', '6f8b', 'e3c5', '4f61'],
  },
  '4267': {
    id: '4267',
    label: 'I want to start a new Observable',
    options: ['46eb'],
  },
  '4295': {
    id: '4295',
    label: 'zip',
    path: 'api/index/function/zip',
    docType: 'function',
  },
  '4715': {
    id: '4715',
    label: 'according to a key or object property',
    options: ['094c'],
  },
  '4806': {
    id: '4806',
    label: 'I want to combine this Observable with others, and',
    options: ['275c', 'db61', '724b'],
  },
  '5053': {
    id: '5053',
    label: 'observeOn',
    path: 'api/operators/observeOn',
    docType: 'function',
  },
  '5112': {
    id: '5112',
    label: 'repeat',
    path: 'api/operators/repeat',
    docType: 'function',
  },
  '5138': {
    id: '5138',
    label: 'mergeMap',
    path: 'api/operators/mergeMap',
    docType: 'function',
  },
  '5460': {
    id: '5460',
    label: 'using each source value only once',
    options: ['1760'],
  },
  '5881': {
    id: '5881',
    label: 'ignoreElements',
    path: 'api/operators/ignoreElements',
    docType: 'function',
  },
  '6510': {
    id: '6510',
    label: 'reduce',
    path: 'api/operators/reduce',
    docType: 'function',
  },
  '7059': { id: '7059', label: 'based on a given amount', options: ['435d'] },
  '7330': {
    id: '7330',
    label: 'when another Observable emits',
    options: ['d3f8'],
  },
  '7550': {
    id: '7550',
    label: 'until another Observable emits a value',
    options: ['a771'],
  },
  '7693': {
    id: '7693',
    label: 'skipWhile',
    path: 'api/operators/skipWhile',
    docType: 'function',
  },
  '7705': {
    id: '7705',
    label: 'that routes values to observers',
    options: ['5053'],
  },
  '7809': {
    id: '7809',
    label: 'in batches of a particular size',
    options: ['7fed', '3702'],
  },
  '8141': {
    id: '8141',
    label: 'I want to ensure there is only one value',
    options: ['e71f'],
  },
  '8169': {
    id: '8169',
    label: 'that uses an API to add and remove event handlers',
    options: ['df58'],
  },
  '8171': {
    id: '8171',
    label: 'delay',
    path: 'api/operators/delay',
    docType: 'function',
  },
  '8420': {
    id: '8420',
    label: 'timeout',
    path: 'api/operators/timeout',
    docType: 'function',
  },
  '8956': { id: '8956', label: 'that throws an error', options: ['be15'] },
  '9501': {
    id: '9501',
    label: 'and only output the final computed value',
    options: ['6510'],
  },
  '9947': {
    id: '9947',
    label: 'I have no Observables yet, and',
    options: ['a91f', '42ea'],
  },
  '773f': {
    id: '773f',
    label: 'mapTo',
    path: 'api/operators/mapTo',
    docType: 'function',
  },
  '1b7d': { id: '1b7d', label: 'to be a constant value', options: ['773f'] },
  '663c': {
    id: '663c',
    label: 'map',
    path: 'api/operators/map',
    docType: 'function',
  },
  '5af9': {
    id: '5af9',
    label: 'to be a value calculated through a formula',
    options: ['663c'],
  },
  '1ff3': {
    id: '1ff3',
    label: 'I want to change each emitted value',
    options: ['1b7d', '5af9'],
  },
  db46: {
    id: 'db46',
    label: 'pluck',
    path: 'api/operators/pluck',
    docType: 'function',
  },
  '61bc': {
    id: '61bc',
    label: 'I want to pick a property off each emitted value',
    options: ['db46'],
  },
  '23b6': {
    id: '23b6',
    label: 'tap',
    path: 'api/operators/tap',
    docType: 'function',
  },
  '21f7': {
    id: '21f7',
    label: 'I want to spy the values being emitted without affecting them',
    options: ['23b6'],
  },
  '885b': {
    id: '885b',
    label: 'filter',
    path: 'api/operators/filter',
    docType: 'function',
  },
  '1e4c': { id: '1e4c', label: 'based on custom logic', options: ['885b'] },
  '2cdc': {
    id: '2cdc',
    label: 'first',
    path: 'api/operators/first',
    docType: 'function',
  },
  '6cf4': { id: '6cf4', label: 'and only the first value', options: ['2cdc'] },
  '435d': {
    id: '435d',
    label: 'take',
    path: 'api/operators/take',
    docType: 'function',
  },
  '85a5': {
    id: '85a5',
    label: 'takeWhile',
    path: 'api/operators/takeWhile',
    docType: 'function',
  },
  f4f9: { id: 'f4f9', label: 'based on custom logic', options: ['85a5'] },
  '388f': {
    id: '388f',
    label: 'if they are at the start of the Observable',
    options: ['6cf4', '7059', 'f4f9'],
  },
  bda9: {
    id: 'bda9',
    label: 'elementAt',
    path: 'api/operators/elementAt',
    docType: 'function',
  },
  '4cef': {
    id: '4cef',
    label: 'if they are exactly the n-th emission',
    options: ['bda9'],
  },
  c2ba: { id: 'c2ba', label: 'and only the last value', options: ['2470'] },
  c2bc: {
    id: 'c2bc',
    label: 'takeLast',
    path: 'api/operators/takeLast',
    docType: 'function',
  },
  ed9f: { id: 'ed9f', label: 'based on a given amount', options: ['c2bc'] },
  '23d1': {
    id: '23d1',
    label: 'if they are at the end of the Observable',
    options: ['c2ba', 'ed9f'],
  },
  a771: {
    id: 'a771',
    label: 'takeUntil',
    path: 'api/operators/takeUntil',
    docType: 'function',
  },
  c7ea: {
    id: 'c7ea',
    label: 'I want to allow some values to pass',
    options: ['1e4c', '388f', '4cef', '23d1', '7550'],
  },
  '75ef': { id: '75ef', label: 'altogether', options: ['5881'] },
  c13a: {
    id: 'c13a',
    label: 'skip',
    path: 'api/operators/skip',
    docType: 'function',
  },
  '764c': { id: '764c', label: 'based on a given amount', options: ['c13a'] },
  '0e32': { id: '0e32', label: 'based on custom logic', options: ['7693'] },
  '08ee': {
    id: '08ee',
    label: 'from the start of the Observable',
    options: ['764c', '0e32'],
  },
  c83e: {
    id: 'c83e',
    label: 'skipLast',
    path: 'api/operators/skipLast',
    docType: 'function',
  },
  d0dc: {
    id: 'd0dc',
    label: 'from the end of the Observable',
    options: ['c83e'],
  },
  '83f5': {
    id: '83f5',
    label: 'skipUntil',
    path: 'api/operators/skipUntil',
    docType: 'function',
  },
  '9da9': {
    id: '9da9',
    label: 'until another Observable emits a value',
    options: ['83f5'],
  },
  ded1: {
    id: 'ded1',
    label: 'distinctUntilChanged',
    path: 'api/operators/distinctUntilChanged',
    docType: 'function',
  },
  '97ed': {
    id: '97ed',
    label: 'emitted just before the current value',
    options: ['ded1'],
  },
  '1c9a': {
    id: '1c9a',
    label: 'distinct',
    path: 'api/operators/distinct',
    docType: 'function',
  },
  '9a38': {
    id: '9a38',
    label: 'emitted some time in the past',
    options: ['1c9a'],
  },
  aa40: {
    id: 'aa40',
    label: 'according to value equality',
    options: ['97ed', '9a38'],
  },
  d842: {
    id: 'd842',
    label: 'distinctUntilKeyChanged',
    path: 'api/operators/distinctUntilKeyChanged',
    docType: 'function',
  },
  '094c': {
    id: '094c',
    label: 'emitted just before the current value',
    options: ['d842'],
  },
  d43e: {
    id: 'd43e',
    label: 'that match some previous value',
    options: ['aa40', '4715'],
  },
  fe51: {
    id: 'fe51',
    label: 'throttle',
    path: 'api/operators/throttle',
    docType: 'function',
  },
  '54d1': {
    id: '54d1',
    label:
      "where time windows are determined by another Observable's emissions",
    options: ['fe51'],
  },
  a972: {
    id: 'a972',
    label: 'throttleTime',
    path: 'api/operators/throttleTime',
    docType: 'function',
  },
  de78: {
    id: 'de78',
    label: 'where time windows are determined by a time duration',
    options: ['a972'],
  },
  '58ff': {
    id: '58ff',
    label: 'by emitting the first value in each time window',
    options: ['54d1', 'de78'],
  },
  '0115': {
    id: '0115',
    label: 'audit',
    path: 'api/operators/audit',
    docType: 'function',
  },
  '09b1': {
    id: '09b1',
    label:
      "where time windows are determined by another Observable's emissions",
    options: ['0115'],
  },
  '729c': {
    id: '729c',
    label: 'auditTime',
    path: 'api/operators/auditTime',
    docType: 'function',
  },
  '9f7e': {
    id: '9f7e',
    label: 'where time windows are determined by a time duration',
    options: ['729c'],
  },
  '5e65': {
    id: '5e65',
    label: 'by emitting the last value in each time window',
    options: ['09b1', '9f7e'],
  },
  '8e93': {
    id: '8e93',
    label: 'debounce',
    path: 'api/operators/debounce',
    docType: 'function',
  },
  e179: {
    id: 'e179',
    label:
      'where the silence duration threshold is determined by another Observable',
    options: ['8e93'],
  },
  '42f8': {
    id: '42f8',
    label: 'debounceTime',
    path: 'api/operators/debounceTime',
    docType: 'function',
  },
  af86: {
    id: 'af86',
    label:
      'where the silence duration threshold is determined by a time duration',
    options: ['42f8'],
  },
  e068: {
    id: 'e068',
    label: 'by emitting the last value as soon as enough silence has occured',
    options: ['e179', 'af86'],
  },
  cc4e: {
    id: 'cc4e',
    label: 'that occur too frequently',
    options: ['58ff', '5e65', 'e068'],
  },
  '1baf': {
    id: '1baf',
    label: 'I want to ignore values',
    options: ['75ef', '08ee', 'd0dc', '9da9', 'd43e', 'cc4e'],
  },
  '0f90': {
    id: '0f90',
    label: 'scan',
    path: 'api/operators/scan',
    docType: 'function',
  },
  b0a8: {
    id: 'b0a8',
    label: 'and output the computed values when the source emits a value',
    options: ['0f90'],
  },
  '14ea': {
    id: '14ea',
    label: 'mergeScan',
    path: 'api/operators/mergeScan',
    docType: 'function',
  },
  '01b8': {
    id: '01b8',
    label:
      'and output the computed values as a nested Observable when the source emits a value',
    options: ['14ea'],
  },
  c9e3: {
    id: 'c9e3',
    label: 'I want to compute a formula using all values emitted',
    options: ['9501', 'b0a8', '01b8'],
  },
  '21d5': {
    id: '21d5',
    label: 'materialize',
    path: 'api/operators/materialize',
    docType: 'function',
  },
  bd1c: {
    id: 'bd1c',
    label: 'that describes each notification (next, error, or complete)',
    options: ['21d5'],
  },
  '7f62': {
    id: '7f62',
    label: 'timeInterval',
    path: 'api/operators/timeInterval',
    docType: 'function',
  },
  '7c37': {
    id: '7c37',
    label: 'that includes the time past since the last emitted value',
    options: ['7f62'],
  },
  ed5c: {
    id: 'ed5c',
    label: 'I want to wrap its messages with metadata',
    options: ['bd1c', '7c37'],
  },
  c746: { id: 'c746', label: 'I want to throw an error', options: ['8420'] },
  '83c9': {
    id: '83c9',
    label: 'I want to switch to another Observable',
    options: ['2609'],
  },
  c163: {
    id: 'c163',
    label: 'after a period of inactivity',
    options: ['c746', '83c9'],
  },
  e71f: {
    id: 'e71f',
    label: 'generate',
    path: 'api/index/function/generate',
    docType: 'function',
  },
  e8ca: {
    id: 'e8ca',
    label: 'count',
    path: 'api/operators/count',
    docType: 'function',
  },
  b8e0: {
    id: 'b8e0',
    label: 'I want to know how many values it emits',
    options: ['e8ca'],
  },
  '0483': {
    id: '0483',
    label: 'startWith',
    path: 'api/operators/startWith',
    docType: 'function',
  },
  c49a: { id: 'c49a', label: 'I want to prepend one value', options: ['0483'] },
  aaf6: {
    id: 'aaf6',
    label: 'based on a given amount of time',
    options: ['8171'],
  },
  d5e1: {
    id: 'd5e1',
    label: 'delayWhen',
    path: 'api/operators/delayWhen',
    docType: 'function',
  },
  fddb: {
    id: 'fddb',
    label: 'based on the emissions of another Observable',
    options: ['d5e1'],
  },
  '478e': {
    id: '478e',
    label: 'I want to delay the emissions',
    options: ['aaf6', 'fddb'],
  },
  '4e7f': {
    id: '4e7f',
    label: 'toArray',
    path: 'api/operators/toArray',
    docType: 'function',
  },
  '6ebb': { id: '6ebb', label: 'and convert to an array', options: ['4e7f'] },
  '3ec4': {
    id: '3ec4',
    label: 'Observable',
    path: 'api/index/class/Observable',
    docType: 'class',
    method: 'toPromise',
  },
  '3f2a': { id: '3f2a', label: 'and convert to a Promise', options: ['3ec4'] },
  '31b8': {
    id: '31b8',
    label: 'until the Observable completes',
    options: ['6ebb', '3f2a'],
  },
  e387: {
    id: 'e387',
    label: 'pairwise',
    path: 'api/operators/pairwise',
    docType: 'function',
  },
  d72e: {
    id: 'd72e',
    label: 'consecutively in pairs, as arrays',
    options: ['e387'],
  },
  '0871': {
    id: '0871',
    label: 'partition',
    path: 'api/index/function/partition',
    docType: 'function',
  },
  '43cd': {
    id: '43cd',
    label:
      'based on a criterion, and output two Observables: those that match the criterion and those that do not',
    options: ['0871'],
  },
  f040: {
    id: 'f040',
    label: 'bufferCount',
    path: 'api/operators/bufferCount',
    docType: 'function',
  },
  '7fed': {
    id: '7fed',
    label: 'and emit the group as an array',
    options: ['f040'],
  },
  ada3: {
    id: 'ada3',
    label: 'windowCount',
    path: 'api/operators/windowCount',
    docType: 'function',
  },
  '83ac': {
    id: '83ac',
    label: 'and emit the group as an array',
    options: ['1511'],
  },
  '649a': {
    id: '649a',
    label: 'windowTime',
    path: 'api/operators/windowTime',
    docType: 'function',
  },
  cd5d: {
    id: 'cd5d',
    label: 'and emit the group as a nested Observable',
    options: ['649a'],
  },
  dca1: { id: 'dca1', label: 'based on time', options: ['83ac', 'cd5d'] },
  '08e5': {
    id: '08e5',
    label: 'buffer',
    path: 'api/operators/buffer',
    docType: 'function',
  },
  '63b0': {
    id: '63b0',
    label: 'window',
    path: 'api/operators/window',
    docType: 'function',
  },
  defc: {
    id: 'defc',
    label: 'and emit the group as a nested Observable',
    options: ['63b0'],
  },
  bb84: {
    id: 'bb84',
    label: 'bufferWhen',
    path: 'api/operators/bufferWhen',
    docType: 'function',
  },
  '6e85': {
    id: '6e85',
    label: 'and emit the group as an array',
    options: ['bb84'],
  },
  '89c5': {
    id: '89c5',
    label: 'windowWhen',
    path: 'api/operators/windowWhen',
    docType: 'function',
  },
  b293: {
    id: 'b293',
    label: 'and emit the group as a nested Observable',
    options: ['89c5'],
  },
  '736a': {
    id: '736a',
    label: 'and emit the group as an array',
    options: ['1315'],
  },
  a814: {
    id: 'a814',
    label: 'windowToggle',
    path: 'api/operators/windowToggle',
    docType: 'function',
  },
  '21fc': {
    id: '21fc',
    label: 'and emit the group as a nested Observable',
    options: ['a814'],
  },
  '2bbf': {
    id: '2bbf',
    label: 'when another Observable emits',
    options: ['d002'],
  },
  caf0: {
    id: 'caf0',
    label: 'groupBy',
    path: 'api/operators/groupBy',
    docType: 'function',
  },
  ec1b: {
    id: 'ec1b',
    label: 'based on a key calculated from the emitted values',
    options: ['caf0'],
  },
  e672: {
    id: 'e672',
    label: 'I want to group the values',
    options: [
      '31b8',
      'd72e',
      '43cd',
      '7809',
      'dca1',
      '2408',
      '1851',
      '2bbf',
      'ec1b',
    ],
  },
  e07d: {
    id: 'e07d',
    label: 'mergeMapTo',
    path: 'api/operators/mergeMapTo',
    docType: 'function',
  },
  c4b0: {
    id: 'c4b0',
    label: 'where the nested Observable is the same for every value',
    options: ['e07d'],
  },
  '2de2': {
    id: '2de2',
    label: 'where the nested Observable is calculated for each value',
    options: ['5138'],
  },
  '55df': {
    id: '55df',
    label: 'and emit the values from all nested Observables in parallel',
    options: ['c4b0', '2de2'],
  },
  '63c3': {
    id: '63c3',
    label: 'concatMapTo',
    path: 'api/operators/concatMapTo',
    docType: 'function',
  },
  bfd2: {
    id: 'bfd2',
    label: 'where the nested Observable is the same for every value',
    options: ['63c3'],
  },
  '47df': {
    id: '47df',
    label: 'concatMap',
    path: 'api/operators/concatMap',
    docType: 'function',
  },
  '297e': {
    id: '297e',
    label: 'where the nested Observable is calculated for each value',
    options: ['47df'],
  },
  f6d0: {
    id: 'f6d0',
    label: 'and emit the values from each nested Observable in order',
    options: ['bfd2', '297e'],
  },
  cfef: {
    id: 'cfef',
    label: 'switchMapTo',
    path: 'api/operators/switchMapTo',
    docType: 'function',
  },
  e19e: {
    id: 'e19e',
    label: 'where the nested Observable is the same for every value',
    options: ['cfef'],
  },
  '778d': {
    id: '778d',
    label: 'switchMap',
    path: 'api/operators/switchMap',
    docType: 'function',
  },
  '52d1': {
    id: '52d1',
    label: 'where the nested Observable is calculated for each value',
    options: ['778d'],
  },
  de79: {
    id: 'de79',
    label: 'and cancel the previous nested Observable when a new value arrives',
    options: ['e19e', '52d1'],
  },
  '50f6': {
    id: '50f6',
    label: 'exhaustMap',
    path: 'api/operators/exhaustMap',
    docType: 'function',
  },
  '040b': {
    id: '040b',
    label:
      'and ignore incoming values while the current nested Observable has not yet completed',
    options: ['50f6'],
  },
  a75c: {
    id: 'a75c',
    label: 'expand',
    path: 'api/operators/expand',
    docType: 'function',
  },
  c01e: {
    id: 'c01e',
    label: 'and recursively start a new Observable for each new value',
    options: ['a75c'],
  },
  c57e: {
    id: 'c57e',
    label: 'I want to start a new Observable for each value',
    options: ['55df', 'f6d0', 'de79', '040b', 'c01e'],
  },
  '722a': {
    id: '722a',
    label: 'pipe',
    path: 'api/index/function/pipe',
    docType: 'function',
  },
  b925: {
    id: 'b925',
    label: 'I want to perform custom operations',
    options: ['722a'],
  },
  '7ebc': {
    id: '7ebc',
    label: 'share',
    path: 'api/operators/share',
    docType: 'function',
  },
  bc3f: {
    id: 'bc3f',
    label: 'and start it as soon as the first subscriber arrives',
    options: ['7ebc'],
  },
  '7d5c': {
    id: '7d5c',
    label: 'publish',
    path: 'api/operators/publish',
    docType: 'function',
  },
  ddfd: {
    id: 'ddfd',
    label: 'and start it manually or imperatively',
    options: ['7d5c'],
  },
  f850: {
    id: 'f850',
    label: 'using a conventional Subject',
    options: ['bc3f', 'ddfd'],
  },
  ee2c: {
    id: 'ee2c',
    label: 'publishBehavior',
    path: 'api/operators/publishBehavior',
    docType: 'function',
  },
  '67f4': { id: '67f4', label: 'using a BehaviorSubject', options: ['ee2c'] },
  '8b7b': {
    id: '8b7b',
    label: 'publishReplay',
    path: 'api/operators/publishReplay',
    docType: 'function',
  },
  '803a': { id: '803a', label: 'using a ReplaySubject', options: ['8b7b'] },
  '0e70': {
    id: '0e70',
    label: 'publishLast',
    path: 'api/operators/publishLast',
    docType: 'function',
  },
  '6d9b': { id: '6d9b', label: 'using an AsyncSubject', options: ['0e70'] },
  '8fa9': {
    id: '8fa9',
    label: 'multicast',
    path: 'api/operators/multicast',
    docType: 'function',
  },
  b9ca: {
    id: 'b9ca',
    label: 'using a specific subject implementation',
    options: ['8fa9'],
  },
  '018d': {
    id: '018d',
    label: 'I want to share a subscription between multiple subscribers',
    options: ['f850', '67f4', '803a', '6d9b', 'b9ca'],
  },
  aad1: {
    id: 'aad1',
    label: 'catchError',
    path: 'api/operators/catchError',
    docType: 'function',
  },
  '05fa': {
    id: '05fa',
    label: 'I want to start a new Observable',
    options: ['aad1'],
  },
  '363f': {
    id: '363f',
    label: 'retry',
    path: 'api/operators/retry',
    docType: 'function',
  },
  '9f44': { id: '9f44', label: 'immediately', options: ['363f'] },
  d002: {
    id: 'd002',
    label: 'retryWhen',
    path: 'api/operators/retryWhen',
    docType: 'function',
  },
  '444b': {
    id: '444b',
    label: 'I want to re-subscribe',
    options: ['9f44', '2bbf'],
  },
  fa63: {
    id: 'fa63',
    label: 'when an error occurs',
    options: ['05fa', '444b'],
  },
  '86f0': { id: '86f0', label: 'immediately', options: ['5112'] },
  d3f8: {
    id: 'd3f8',
    label: 'repeatWhen',
    path: 'api/operators/repeatWhen',
    docType: 'function',
  },
  '23d9': {
    id: '23d9',
    label: 'I want to re-subscribe',
    options: ['86f0', '7330'],
  },
  '46eb': {
    id: '46eb',
    label: 'concat',
    path: 'api/index/function/concat',
    docType: 'function',
  },
  fdbd: { id: 'fdbd', label: 'when it completes', options: ['23d9', '4267'] },
  dc58: {
    id: 'dc58',
    label: 'finalize',
    path: 'api/operators/finalize',
    docType: 'function',
  },
  c191: {
    id: 'c191',
    label:
      'when it completes, errors or unsubscribes, I want to execute a function',
    options: ['dc58'],
  },
  '4cc8': {
    id: '4cc8',
    label: 'subscribeOn',
    path: 'api/operators/subscribeOn',
    docType: 'function',
  },
  c3a6: {
    id: 'c3a6',
    label: 'that routes calls to subscribe',
    options: ['4cc8'],
  },
  '15c1': {
    id: '15c1',
    label: 'I want to change the scheduler',
    options: ['c3a6', '7705'],
  },
  '23b3': {
    id: '23b3',
    label: 'race',
    path: 'api/index/function/race',
    docType: 'function',
  },
  '275c': {
    id: '275c',
    label:
      'I want to receive values only from the Observable that emits a value first',
    options: ['23b3'],
  },
  de04: {
    id: 'de04',
    label: 'merge',
    path: 'api/index/function/merge',
    docType: 'function',
  },
  db61: {
    id: 'db61',
    label: 'I want to output the values from either of them',
    options: ['de04'],
  },
  e01e: {
    id: 'e01e',
    label: 'combineLatest',
    path: 'api/index/function/combineLatest',
    docType: 'function',
  },
  d3ed: {
    id: 'd3ed',
    label: 'using the latest value of each source whenever any source emits',
    options: ['e01e'],
  },
  e840: {
    id: 'e840',
    label: 'withLatestFrom',
    path: 'api/operators/withLatestFrom',
    docType: 'function',
  },
  '1b37': {
    id: '1b37',
    label:
      'using the latest value of each source only when the primary Observable emits',
    options: ['e840'],
  },
  fe9c: {
    id: 'fe9c',
    label: 'using each source value only once',
    options: ['4295'],
  },
  '724b': {
    id: '724b',
    label:
      'I want to output a value computed from values of the source Observables',
    options: ['d3ed', '1b37', 'fe9c'],
  },
  '2fd3': {
    id: '2fd3',
    label: 'I have one existing Observable, and',
    options: [
      '1ff3',
      '61bc',
      '21f7',
      'c7ea',
      '1baf',
      'c9e3',
      'ed5c',
      'c163',
      '8141',
      'b8e0',
      'c49a',
      '478e',
      'e672',
      'c57e',
      'b925',
      '018d',
      'fa63',
      'fdbd',
      'c191',
      '15c1',
      '4806',
    ],
  },
  '68d3': {
    id: '68d3',
    label: 'race',
    path: 'api/index/function/race',
    docType: 'function',
  },
  '5be5': {
    id: '5be5',
    label:
      'I want to receive values only from the Observable that emits a value first',
    options: ['68d3'],
  },
  '9f83': {
    id: '9f83',
    label: 'forkJoin',
    path: 'api/index/function/forkJoin',
    docType: 'function',
  },
  b865: {
    id: 'b865',
    label: 'I want to be notified when all of them have completed',
    options: ['9f83'],
  },
  '996c': {
    id: '996c',
    label: 'merge',
    path: 'api/index/function/merge',
    docType: 'function',
  },
  '6f8b': {
    id: '6f8b',
    label: 'I want to output the values from either of them',
    options: ['996c'],
  },
  '9bbe': {
    id: '9bbe',
    label: 'combineLatest',
    path: 'api/index/function/combineLatest',
    docType: 'function',
  },
  '4d10': {
    id: '4d10',
    label: 'using the latest value of each source whenever any source emits',
    options: ['9bbe'],
  },
  e3c5: {
    id: 'e3c5',
    label:
      'I want to output a value computed from values of the source Observables',
    options: ['4d10', '5460'],
  },
  b311: {
    id: 'b311',
    label: 'concat',
    path: 'api/index/function/concat',
    docType: 'function',
  },
  '4f61': {
    id: '4f61',
    label: 'I want to subscribe to each in order',
    options: ['b311'],
  },
  ead0: {
    id: 'ead0',
    label: 'Observable',
    path: 'api/index/class/Observable',
    docType: 'class',
    method: 'create',
  },
  '656e': { id: '656e', label: 'using custom logic', options: ['ead0'] },
  deb4: {
    id: 'deb4',
    label: 'using a state machine similar to a for loop',
    options: ['e71f'],
  },
  be15: {
    id: 'be15',
    label: 'throwError',
    path: 'api/index/function/throwError',
    docType: 'function',
  },
  '7efa': {
    id: '7efa',
    label: 'EMPTY',
    path: 'api/index/const/EMPTY',
    docType: 'const',
  },
  '846c': {
    id: '846c',
    label: 'that just completes, without emitting values',
    options: ['7efa'],
  },
  c065: {
    id: 'c065',
    label: 'NEVER',
    path: 'api/index/const/NEVER',
    docType: 'const',
  },
  a708: { id: 'a708', label: 'that never emits anything', options: ['c065'] },
  '975e': {
    id: '975e',
    label: 'fromEvent',
    path: 'api/index/function/fromEvent',
    docType: 'function',
  },
  '3fc6': {
    id: '3fc6',
    label: 'coming from the DOM or Node.js or similar',
    options: ['975e'],
  },
  df58: {
    id: 'df58',
    label: 'fromEventPattern',
    path: 'api/index/function/fromEventPattern',
    docType: 'function',
  },
  d90d: {
    id: 'd90d',
    label: 'from an existing source of events',
    options: ['3fc6', '8169'],
  },
  '7cb2': {
    id: '7cb2',
    label: 'from',
    path: 'api/index/function/from',
    docType: 'function',
  },
  e84f: {
    id: 'e84f',
    label: 'from a Promise or an event source',
    options: ['7cb2'],
  },
  '93bb': {
    id: '93bb',
    label: 'from',
    path: 'api/index/function/from',
    docType: 'function',
  },
  ba6c: { id: 'ba6c', label: 'over the values in an array', options: ['93bb'] },
  '0b75': {
    id: '0b75',
    label: 'range',
    path: 'api/index/function/range',
    docType: 'function',
  },
  '0cd8': {
    id: '0cd8',
    label: 'over values in a numeric range',
    options: ['0b75'],
  },
  ee34: {
    id: 'ee34',
    label: 'of',
    path: 'api/index/function/of',
    docType: 'function',
  },
  '9b54': {
    id: '9b54',
    label: 'over prefined values given as arguments',
    options: ['ee34'],
  },
  d5bc: {
    id: 'd5bc',
    label: 'that iterates',
    options: ['ba6c', '0cd8', '9b54'],
  },
  b6d3: {
    id: 'b6d3',
    label: 'interval',
    path: 'api/index/function/interval',
    docType: 'function',
  },
  '9c59': { id: '9c59', label: 'regularly', options: ['b6d3'] },
  '7f9a': {
    id: '7f9a',
    label: 'timer',
    path: 'api/index/function/timer',
    docType: 'function',
  },
  ad58: {
    id: 'ad58',
    label: 'with an optional initial delay',
    options: ['7f9a'],
  },
  '0769': {
    id: '0769',
    label: 'that emits values on a timer',
    options: ['9c59', 'ad58'],
  },
  ac65: {
    id: 'ac65',
    label: 'defer',
    path: 'api/index/function/defer',
    docType: 'function',
  },
  b4d5: {
    id: 'b4d5',
    label: 'which is built on demand when subscribed',
    options: ['ac65'],
  },
  a91f: {
    id: 'a91f',
    label: 'I want to create a new Observable',
    options: [
      '656e',
      'deb4',
      '8956',
      '846c',
      'a708',
      'd90d',
      'e84f',
      'd5bc',
      '0769',
      'b4d5',
    ],
  },
  '11d4': {
    id: '11d4',
    label: 'bindCallback',
    path: 'api/index/function/bindCallback',
    docType: 'function',
  },
  '5f25': {
    id: '5f25',
    label: 'supporting a conventional callback API',
    options: ['11d4'],
  },
  '28f6': {
    id: '28f6',
    label: 'bindNodeCallback',
    path: 'api/index/function/bindNodeCallback',
    docType: 'function',
  },
  c349: {
    id: 'c349',
    label: 'supporting Node.js callback style API',
    options: ['28f6'],
  },
  '42ea': {
    id: '42ea',
    label: 'I want to convert a callback to an Observable',
    options: ['5f25', 'c349'],
  },
  initial: { id: 'initial', options: ['2fd3', '4216', '9947'] },
};

export default operatorGraph;
