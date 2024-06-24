import './footer.css';
import ElementCreator from '../../util/create-element';
import View from '../base-classes/view';
import { footerElements } from './footer-elements';

export default class FooterView extends View {
  constructor() {
    super();
  }

  createView() {
    const { footer, footerYear, footerGithub, footerImage } = footerElements;

    const footerView: HTMLElement | null = new ElementCreator(footer).getElement();
    const footerImageElement: HTMLElement | null = new ElementCreator(footerImage).getElement();
    const footerYearElement: HTMLElement | null = new ElementCreator(footerYear).getElement();
    const footerGithubElement: HTMLElement | null = new ElementCreator(footerGithub).getElement();

    if (footerView) {
      if (footerImageElement) footerView.appendChild(footerImageElement);
      if (footerYearElement) footerView.appendChild(footerYearElement);
      if (footerGithubElement) footerView.appendChild(footerGithubElement);
    }

    return footerView as HTMLElement;
  }
}
