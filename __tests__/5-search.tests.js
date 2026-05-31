import fs from 'fs';
import { jest } from '@jest/globals';
import path from 'path';

test('index', async () => {
  const initHtml = fs.readFileSync(path.join('public', '5-index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  const spy = jest.spyOn(window.console, 'log');
  await import('../solutions/5-index.js');
  const expected = {
    description: 'Category Description',
    title: 'Category Name',
    items: [
      { description: 'Article Description 1', title: 'Article Name 1' },
      { description: 'Article Description 2', title: 'Article Name 2' },
    ],
  };
  expect(spy).toHaveBeenCalledWith(expected);
});


// solutions/5-index.js
const categoryTitleElement = document.querySelector('.category-title');
const categoryDescriptionElement = document.querySelector('.category-description');
const itemElements = document.querySelectorAll('.item');
const items = Array.from(itemElements).map(item => {
  const title = item.querySelector('.item-title').textContent;
  const description = item.querySelector('.item-description').textContent;
  return { title, description };
});
const result = {
  title: categoryTitleElement.textContent,
  description: categoryDescriptionElement.textContent,
  items: items
};
console.log(result);
