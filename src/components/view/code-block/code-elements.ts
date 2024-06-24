import { ElementParameters } from '../../util/create-element';

export const codeElements: Record<string, ElementParameters> = {
  codeBlockParameter: {
    tag: 'div',
    classNames: ['code'],
  },
  fieldTitleParameters: {
    tag: 'p',
    classNames: ['code__title'],
    textContent: 'CSS Editor',
  },
  fieldAdditionTitleParameters: {
    tag: 'p',
    classNames: ['code__title', 'code__title_additional'],
    textContent: 'style.css',
  },
};

export const CSSInputElements: Record<string, ElementParameters> = {
  fieldParameters: {
    tag: 'div',
    classNames: ['code__field'],
  },
  fieldTitleBlockParameters: {
    tag: 'div',
    classNames: ['code__title-block'],
  },
  inputBlockParameters: {
    tag: 'div',
    classNames: ['css-code-block'],
  },
  lineNumberBlockParameters: {
    tag: 'div',
    classNames: ['line-number-block'],
  },
  cssInputBlockParameters: {
    tag: 'div',
    classNames: ['input-block'],
  },
  describeFieldParameters: {
    tag: 'div',
    classNames: ['input-text'],
    textContent: 'Enter your selector in the form ahead',
  },
};

export const HTMLTitleBlockElements: Record<string, ElementParameters> = {
  fieldTitleParameters: {
    tag: 'p',
    classNames: ['code__title'],
    textContent: 'HTML Viewer',
  },
  fieldAdditionTitleParameters: {
    tag: 'p',
    classNames: ['code__title', 'code__title_additional'],
    textContent: 'table.html',
  },
};

export const HTMLBlockElements: Record<string, ElementParameters> = {
  fieldParameters: {
    tag: 'div',
    classNames: ['code__field'],
  },
  fieldTitleBlockParameters: {
    tag: 'div',
    classNames: ['code__title-block'],
  },
  inputBlockParameters: {
    tag: 'div',
    classNames: ['css-code-block'],
  },
  lineNumberBlockParameters: {
    tag: 'div',
    classNames: ['line-number-block', 'line-number-block_dark'],
  },
  viewHTMLCode: {
    tag: 'div',
    classNames: ['markup-block'],
    textContent: 'auto html code',
  },
};
