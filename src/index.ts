import './css/main.scss';
import App from './js/App';

window.addEventListener('DOMContentLoaded', async(event) => {
  App.loadFontAwesome();
  const el = document.getElementById('choco-filter');
  if (el) {
    await App.initChoco(el);
  }
});
