import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {
  faBoxOpen,
  faEnvelope,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faGithubAlt,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebook,
  faGithub,
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
  faBoxOpen,
  faEnvelope,
  faLink
);

export default {
  loadFontAwesome: () => {
    dom.watch();
  },
  initChoco: async(el: any) => {
    const _window = window as any;
    _window.chocolateyFilter = function chocolateiFilter() {
      return ({
        filterStr: '',
        isShow(str: string) {
          if (!this.filterStr) {
            return true;
          }
          return !!str.toLowerCase().includes(this.filterStr.toLowerCase());
        }
      });
    };
    el.setAttribute('x-data', 'chocolateyFilter()');
    await require(/* webpackChunkName: "alpinejs" */ 'alpinejs');
  }
};
