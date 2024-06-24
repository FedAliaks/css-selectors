import ElementCreator, { ElementParameters } from '../../util/create-element';
import View from '../base-classes/view';
import { CodeButtons } from './buttons/buttons';
import './code.css';
import InputView from './input/input';
import { CSSInputElements, codeElements, HTMLTitleBlockElements, HTMLBlockElements } from './code-elements';
import { arrayLevels } from '../start-information/levels-array';

export default class CodeBlockView extends View {
  constructor() {
    super();
  }

  createView() {
    const { codeBlockParameter } = codeElements;

    const codeElement = new ElementCreator(codeBlockParameter).getElement();
    codeElement?.append(this.createCSSInputFieldBlock(), this.createHTMLCodeBlock());

    return codeElement as HTMLElement;
  }

  createCSSTitleBlock() {
    const { fieldTitleParameters, fieldAdditionTitleParameters } = codeElements;

    const fieldFirstTitleElement = new ElementCreator(fieldTitleParameters).getElement();

    const fieldSecondTitleElement = new ElementCreator(fieldAdditionTitleParameters).getElement();
    return [fieldFirstTitleElement, fieldSecondTitleElement];
  }

  createCodeLinesNumber() {
    const arrayElements = [];

    for (let i = 1; i <= 13; i += 1) {
      const numberParameters: ElementParameters = {
        tag: 'p',
        classNames: ['line-number'],
        textContent: `${i}`,
      };
      const numberElement = new ElementCreator(numberParameters).getElement();
      arrayElements.push(numberElement);
    }

    return arrayElements;
  }

  createCSSInputFieldBlock() {
    const {
      fieldParameters,
      fieldTitleBlockParameters,
      inputBlockParameters,
      lineNumberBlockParameters,
      cssInputBlockParameters,
      describeFieldParameters,
    } = CSSInputElements;

    const fieldElement = new ElementCreator(fieldParameters).getElement();
    const titleBlockElement = new ElementCreator(fieldTitleBlockParameters).getElement();

    this.createCSSTitleBlock().forEach((nodeElement) => {
      if (nodeElement) titleBlockElement?.append(nodeElement);
    });

    if (titleBlockElement) fieldElement?.appendChild(titleBlockElement);

    const inputFieldElement = new ElementCreator(inputBlockParameters).getElement();
    if (inputFieldElement) fieldElement?.appendChild(inputFieldElement);

    const lineNumberElement = new ElementCreator(lineNumberBlockParameters).getElement();
    if (lineNumberElement) inputFieldElement?.appendChild(lineNumberElement);

    this.createCodeLinesNumber().forEach((nodeElement) => {
      if (nodeElement) lineNumberElement?.appendChild(nodeElement);
    });

    const cssInputBlockElement = new ElementCreator(cssInputBlockParameters).getElement();
    if (cssInputBlockElement) inputFieldElement?.appendChild(cssInputBlockElement);

    const inputField = new InputView();
    if (inputField) cssInputBlockElement?.appendChild(inputField.getHTMLElement());

    const describeFieldElement = new ElementCreator(describeFieldParameters).getElement();
    if (describeFieldElement) cssInputBlockElement?.appendChild(describeFieldElement);

    CodeButtons.createButtonsCSSCodeBlock().forEach((nodeElement) => {
      if (nodeElement) cssInputBlockElement?.appendChild(nodeElement);
    });

    return fieldElement as HTMLElement;
  }

  createTitleHTMLCodeBlock() {
    const arrayCode = [];
    const { fieldTitleParameters, fieldAdditionTitleParameters } = HTMLTitleBlockElements;

    arrayCode.push(new ElementCreator(fieldTitleParameters).getElement());

    arrayCode.push(new ElementCreator(fieldAdditionTitleParameters).getElement());

    return arrayCode;
  }

  createHTMLCodeBlock() {
    const {
      fieldParameters,
      fieldTitleBlockParameters,
      inputBlockParameters,
      lineNumberBlockParameters,
      viewHTMLCode,
    } = HTMLBlockElements;

    const fieldElement = new ElementCreator(fieldParameters).getElement();

    const titleBlockElement = new ElementCreator(fieldTitleBlockParameters).getElement();

    this.createTitleHTMLCodeBlock().forEach((nodeElement) => {
      if (nodeElement) titleBlockElement?.appendChild(nodeElement);
    });

    if (titleBlockElement) fieldElement?.appendChild(titleBlockElement);

    const inputFieldElement = new ElementCreator(inputBlockParameters).getElement();
    if (inputFieldElement) fieldElement?.appendChild(inputFieldElement);

    const lineNumberElement = new ElementCreator(lineNumberBlockParameters).getElement();
    if (lineNumberElement) inputFieldElement?.appendChild(lineNumberElement);

    this.createCodeLinesNumber().forEach((nodeElement) => {
      if (nodeElement) lineNumberElement?.appendChild(nodeElement);
    });

    const viewHTMLBlockElement = new ElementCreator(viewHTMLCode).getElement();
    if (viewHTMLBlockElement) inputFieldElement?.appendChild(viewHTMLBlockElement);

    return fieldElement as HTMLElement;
  }

  static drawMarkupBlock(level: number) {
    const HTMLCodeBlock: HTMLElement | null = document.querySelector('.markup-block');
    if (HTMLCodeBlock) HTMLCodeBlock.innerHTML = '';
    const lineMarkupWrapper: ElementParameters = {
      tag: 'div',
      classNames: ['markup__wrapper'],
      textContent: `<div class='table'>`,
    };
    const markupWrapper = new ElementCreator(lineMarkupWrapper).getElement();
    if (markupWrapper) HTMLCodeBlock?.appendChild(markupWrapper);

    const arrayTags = arrayLevels[level - 1].HTMLViewer;
    arrayTags.forEach((item) => {
      if (Array.isArray(item)) {
        let innerNode: HTMLElement;
        item.forEach((innerItem, index) => {
          const lineInnerElement: ElementParameters = {
            tag: 'div',
            classNames: ['html-line-code'],
            textContent: `${innerItem.tag}`,
            numberNode: innerItem.numberNode,
          };
          const innerElement = new ElementCreator(lineInnerElement).getElement();
          if (innerElement) innerElement.addEventListener('mouseover', (e: Event) => this.startHoverOnTheMarkup(e));
          if (innerElement) innerElement.addEventListener('mouseout', (e: Event) => this.finishHoverOnTheMarkup(e));
          if (index === 0) {
            if (innerElement) innerNode = innerElement;
            if (innerElement) markupWrapper?.appendChild(innerElement);
          }
          if (index === 1) {
            if (innerElement) innerNode?.appendChild(innerElement);
          }
          if (index === 2) {
            if (innerElement) markupWrapper?.appendChild(innerElement);
          }
        });
      } else {
        const lineMarkupParam: ElementParameters = {
          tag: 'div',
          classNames: ['html-line-code'],
          textContent: `${item.tag}`,
          numberNode: item.numberNode,
        };
        const lineMarkup = new ElementCreator(lineMarkupParam).getElement();
        if (lineMarkup) lineMarkup.addEventListener('mouseover', (e: Event) => this.startHoverOnTheMarkup(e));
        if (lineMarkup) lineMarkup.addEventListener('mouseout', (e: Event) => this.finishHoverOnTheMarkup(e));

        if (lineMarkup) markupWrapper?.appendChild(lineMarkup);
      }
    });

    const lineMarkupWrapperFinish: ElementParameters = {
      tag: 'div',
      classNames: ['markup__wrapper'],
      textContent: `</div>`,
    };
    const markupWrapperFinish = new ElementCreator(lineMarkupWrapperFinish).getElement();
    if (markupWrapperFinish) HTMLCodeBlock?.appendChild(markupWrapperFinish);
  }

  static startHoverOnTheMarkup(e: Event) {
    const target = e.target as HTMLElement;
    const numberNode = target.getAttribute('numberNode');

    const HTMLLinesArray = document.querySelectorAll('.html-line-code');
    HTMLLinesArray.forEach((item) => {
      if (item.getAttribute('numberNode') === numberNode) item.classList.add('html-line-code_colored');
    });

    if (target) {
      const numberNode = target.getAttribute('numberNode');
      const tableElements = document.querySelectorAll('.game-field__surface> plate, apple, cucumber, orange, orange');
      tableElements.forEach((item) => {
        if (item.getAttribute('numbernode') === numberNode) {
          item.classList.add('hover-shadow');
        }
      });
    }
  }

  static finishHoverOnTheMarkup(e: Event) {
    const tableElements = document.querySelectorAll('.game-field__surface> plate, apple, cucumber, orange, orange');
    tableElements.forEach((item) => {
      item.classList.remove('hover-shadow');
    });

    const HTMLLinesArray = document.querySelectorAll('.html-line-code');
    HTMLLinesArray.forEach((item) => {
      item.classList.remove('html-line-code_colored');
    });
  }
}
