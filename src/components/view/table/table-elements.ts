import { ElementParameters } from '../../util/create-element';

export const tableElements: Record<string, ElementParameters> = {
  tableElementParameters: {
    tag: 'div',
    classNames: ['table'],
  },
  gameFieldTitleParameters: {
    tag: 'h2',
    classNames: ['table__title'],
    textContent: 'level title',
  },
  gameFieldParameters: {
    tag: 'div',
    classNames: ['game-field__wrapper'],
  },
  gameFieldSurfaceParameters: {
    tag: 'div',
    classNames: ['game-field__surface'],
  },
};
