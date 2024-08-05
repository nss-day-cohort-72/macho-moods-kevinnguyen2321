import { moodsHtml } from './moods.js';
const container = document.getElementById('container');

const html = moodsHtml();

container.innerHTML = html;
