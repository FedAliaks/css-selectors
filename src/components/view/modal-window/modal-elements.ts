import { ElementParameters } from '../../util/create-element';

export const modalElements: Record<string, ElementParameters> = {
  modalWindow: {
    tag: 'div',
    classNames: ['overlay', 'overlay_hidden'],
  },
  window: {
    tag: 'div',
    classNames: ['modal'],
  },
  textForWindow: {
    tag: 'p',
    classNames: ['modal_title'],
    textContent: 'You are winner!',
  },
  imageForWindow: {
    tag: 'div',
    classNames: ['modal_image'],
  },
  buttonModal: {
    tag: 'button',
    classNames: ['modal__button'],
    textContent: 'Try again',
  },
};
