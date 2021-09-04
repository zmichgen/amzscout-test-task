import { data } from './text';

const MIN_LENGTH = 10;
const MAX_LENGTH = 200;
/**
 *
 * @param {number} min
 * @param {number} max
 * @returns random number from min to max
 */
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
/**
 * remove /n and get small array from big string
 */
const textArr = data.replace(/\n/g, '').split('||');

/**
 *
 * @param {number} num
 * @returns array with num elements of rundom strings
 */
export const generate = (num) => {
    const result = [];
    for (let i = 1; i <= num; i += 1) {
        result.push(getRandomString());
    }
    return result;
};

/**
 *
 * @returns string with rundom length
 */
const getRandomString = () => {
    const randomIndex = getRandomInt(0, textArr.length - 1);
    const text = textArr[randomIndex];
    let length = getRandomInt(MIN_LENGTH, MAX_LENGTH);
    if (text.length < length) {
        length = text.length - 1;
    }
    return text.slice(0, length);
};
