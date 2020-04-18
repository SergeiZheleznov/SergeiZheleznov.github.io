import 'alpinejs';
import './css/main.scss';
import chocolateiFilter from './js/chocolateyFilter';

window.addEventListener('DOMContentLoaded', async(event) => {
  const {default: App} = await require(/* webpackChunkName: "app" */ './js/App');
  App.loadFontAwesome();
});

window.chocolateiFilter = chocolateiFilter;
