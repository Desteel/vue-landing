const content = '<p class="slide-content__text--style-1">{{title}}Introducing </p>\n' +
  '            <p class="slide-content__text--style-2">Something hot......</p>\n' +
  '            <p class="slide-content__text--style-3">\n' +
  '              <a class="btn btn--medium btn--green btn--shadow" href="#">Try Demo</a>\n' +
  '            </p>';

const image = '/dist/assets/coffee.png';

export default [
  {
    id: 1,
    image,
    content: content.replace('{{title}}', '')
  },
  {
    id: 2,
    image,
    content: content.replace('{{title}}', '2 ')
  },
  {
    id: 3,
    image,
    content: content.replace('{{title}}', '3 ')
  }
];
