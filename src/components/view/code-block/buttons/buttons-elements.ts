import { ElementParameters } from '../../../util/create-element';

export const buttonElements: Record<string, ElementParameters> = {
  buttonParameters: {
    tag: 'button',
    classNames: ['button'],
    textContent: 'Check your answer',
  },
  buttonHelpParameters: {
    tag: 'button',
    classNames: ['button'],
    textContent: 'Help',
  },
};
