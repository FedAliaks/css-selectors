import { ElementParameters } from '../../../util/create-element';

export const inputElements: Record<string, ElementParameters> = {
  inputParameters: {
    tag: 'input',
    classNames: ['input', 'css-input'],
    attributes: {
      placeholder: 'write CSS selector',
    },
  },
};
