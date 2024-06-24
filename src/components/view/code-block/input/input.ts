import ElementCreator from '../../../util/create-element';
import View from '../../base-classes/view';
import { inputElements } from './input-elements';
import './input.css';

export default class InputView extends View {
  element: HTMLElement | null;

  constructor() {
    super();
    this.element = this.createView();
  }

  createView(): HTMLElement {
    const { inputParameters } = inputElements;

    this.element = new ElementCreator(inputParameters).getElement();

    this.element?.addEventListener('focus', () => {
      const inputField = document.querySelector('.input') as HTMLInputElement;
      if (inputField) inputField.classList.remove('css-input');
    });

    return this.element as HTMLElement;
  }
}
