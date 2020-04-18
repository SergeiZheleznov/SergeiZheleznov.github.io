import 'alpinejs';
import './css/main.scss';
import chocolateyFilter from './js/chocolateyFilter';

window.addEventListener('DOMContentLoaded', async(event) => {
  const {default: App} = await require(/* webpackChunkName: "app" */ './js/App');
  App.loadFontAwesome();
});

window.chocolateyFilter = chocolateyFilter;
