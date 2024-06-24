import { ElementParameters } from '../../util/create-element';

export const footerElements: Record<string, ElementParameters> = {
  footer: {
    tag: 'footer',
    classNames: ['footer'],
  },
  footerYear: {
    tag: 'div',
    classNames: ['footer__content'],
    textContent: `${String.fromCharCode(0xa9)} 2023`,
  },
  footerGithub: {
    tag: 'a',
    classNames: ['footer__content'],
    textContent: 'github',
    attributes: {
      href: 'https://https://github.com/FedAliaks',
      target: '_blank',
    },
  },
  footerImage: {
    tag: 'a',
    classNames: ['footer__image'],
    attributes: {
      href: 'https://rs.school/js/',
      target: '_blank',
    },
  },
};
