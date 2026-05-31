const paragraphs = document.querySelectorAll('p');
const texts = Array.from(paragraphs).map(p => p.textContent);
console.log(texts);
