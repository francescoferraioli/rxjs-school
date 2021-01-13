import { Component } from '@angular/core';
import { entries, keys } from 'lodash';
import {
  OperatorGraphItemClass,
  OperatorGraphItemDoc,
} from 'src/data/operator-graph';
import { getAllData } from 'src/services/rxjs-test.service';
import { getRandomElement } from 'src/utils/random';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  question: string | undefined;
  answer: string;
  docs: string[];
  constructor() {
    const data = getAllData();
    const [a, qs] = getRandomElement(entries(data));

    this.answer = a;
    this.question = getRandomElement(qs)
      .map((x) => x.label)
      .join(' ');
    this.docs = keys(data).sort();
  }

  getLabel(doc: OperatorGraphItemDoc) {
    return `${doc.label}${
      doc.docType === 'class'
        ? `.${(doc as OperatorGraphItemClass).method}`
        : ''
    }`;
  }

  docOptionClicked(answer: string) {
    alert(answer === this.answer ? 'Correct' : `Wrong - it was ${this.answer}`);
  }
}
