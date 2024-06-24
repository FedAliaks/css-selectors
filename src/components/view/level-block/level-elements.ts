import { ElementParameters } from '../../util/create-element';

export const levelElements: Record<string, ElementParameters> = {
  levelBlockParameter: {
    tag: 'div',
    classNames: ['level-block'],
  },
  levelButton: {
    tag: 'button',
    classNames: ['button', 'level__button'],
    textContent: 'Reset',
  },
};
