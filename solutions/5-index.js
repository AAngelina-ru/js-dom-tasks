import extractData from './5-search.js';

const data = extractData(document);
console.log(data);
// 5-search.js должен экспортировать функцию, работающую с DOM
import { JSDOM } from 'jsdom';
import extractData from './5-search.js';

const dom = new JSDOM('<!DOCTYPE html><html>...</html>');
const data = extractData(dom.window.document);
console.log(data);
