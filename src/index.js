import '@babel/polyfill';
import './index.scss';
import { generate } from './generator';
import { mapper, queue } from './queue';

document.getElementById('submit').addEventListener('click', (e) => {
    const form = document.getElementById('search-form');
    const count = form.querySelector('[name="count"]').value;
    const limit = form.querySelector('[name="limit"]').value;
    if (count && limit) {
        form.querySelectorAll('input').forEach((i) => (i.disabled = true));
        const stringArray = generate(count);
        queue(stringArray, mapper, limit);
    }
});
