import { Card } from './card';
import { getRandomInt } from './generator';

const mainEl = document.querySelector('#main');
let count = 0;
const progress = document.getElementById('progress');
const form = document.getElementById('search-form');

/**
 *
 * @param {string} item
 * @param {number} index
 * @param {string[]} arr
 * @param {number} lim
 * @returns Promise which render card element
 */
export const mapper = (item, index, arr, lim) => {
    const randomIndex = getRandomInt(0, arr.length - 1);
    const title = arr[randomIndex];
    const card = new Card(title, index);
    const resolve = () => {
        card.addContent(item);
        card.addClass('animation');
        count++;
        if (count === arr.length) {
            form.querySelectorAll('input').forEach((i) => (i.disabled = false));
        }
        progress.innerHTML = `<p>Progress: ${count} of ${arr.length}</p>`;
    };
    const shift = Math.floor(index / lim) * lim * 1000;
    return new Promise(() => {
        setTimeout(resolve, Math.round(Math.random() * 9000) + 1000 + shift);
        card.render(mainEl);
    });
};

/**
 *
 * @param {string[]} arr
 * @param {function} fun
 * @param {number} lim
 * @returns array of Promise which the passed function creates
 */
export const queue = (arr, fun, lim) => {
    count = 0;
    mainEl.innerHTML = '';
    progress.innerHTML = '';
    return arr.map((item, index, arr) => fun(item, index, arr, lim));
};
