const content = '<div class="ipad">\n' +
  '              <div class="ipad__screen"></div>\n' +
  '              <div class="ipad__device"></div>\n' +
  '            </div>\n' +
  '            <h2>\n' +
  '              {{title}}Lorem Ipsum is simply dummy text\n' +
  '            </h2>\n' +
  '            <p>\n' +
  '              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
  '              industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n' +
  '              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n' +
  '              into electronic typesetting, remaining essentially unchanged.\n' +
  '            </p>\n' +
  '            <p>\n' +
  '              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
  '              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem\n' +
  '              Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
  '              the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type\n' +
  '              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the\n' +
  '              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n' +
  '              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n' +
  '              publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
  '            </p>';

const ico1 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 200" class="figure-hexagon">\n' +
  '              <path class="figure-hexagon--cyan" fill="#e67624"\n' +
  '                    d="M80.5403625519528 3.4999999999999996Q86.60254037844386 0 92.66471820493493 3.4999999999999996L167.14290293039664 46.5Q173.20508075688772 50 173.20508075688772 57L173.20508075688772 143Q173.20508075688772 150 167.14290293039664 153.5L92.66471820493493 196.5Q86.60254037844386 200 80.5403625519528 196.5L6.062177826491071 153.5Q0 150 0 143L0 57Q0 50 6.062177826491071 46.5Z"></path>\n' +
  '            </svg>\n' +
  '            <div class="absolute-block absolute-block--center absolute-block--fw absolute-block--fh">\n' +
  '              <img src="/dist/assets/ico-phone.svg"/>\n' +
  '            </div>';

const ico2 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 200" class="figure-hexagon">\n' +
  '              <path class="figure-hexagon--yellow" fill="#e67624"\n' +
  '                    d="M80.5403625519528 3.4999999999999996Q86.60254037844386 0 92.66471820493493 3.4999999999999996L167.14290293039664 46.5Q173.20508075688772 50 173.20508075688772 57L173.20508075688772 143Q173.20508075688772 150 167.14290293039664 153.5L92.66471820493493 196.5Q86.60254037844386 200 80.5403625519528 196.5L6.062177826491071 153.5Q0 150 0 143L0 57Q0 50 6.062177826491071 46.5Z"></path>\n' +
  '            </svg>\n' +
  '            <div class="absolute-block absolute-block--center absolute-block--fw absolute-block--fh">\n' +
  '              <img src="/dist/assets/ico-cart.svg"/>\n' +
  '            </div>';

const ico3 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 200" class="figure-hexagon">\n' +
  '              <path class="figure-hexagon--green" fill="#e67624"\n' +
  '                    d="M80.5403625519528 3.4999999999999996Q86.60254037844386 0 92.66471820493493 3.4999999999999996L167.14290293039664 46.5Q173.20508075688772 50 173.20508075688772 57L173.20508075688772 143Q173.20508075688772 150 167.14290293039664 153.5L92.66471820493493 196.5Q86.60254037844386 200 80.5403625519528 196.5L6.062177826491071 153.5Q0 150 0 143L0 57Q0 50 6.062177826491071 46.5Z"></path>\n' +
  '            </svg>\n' +
  '            <div class="absolute-block absolute-block--center absolute-block--fw absolute-block--fh">\n' +
  '              <img src="/dist/assets/ico-world.svg"/>\n' +
  '            </div>';

const ico4 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 200" class="figure-hexagon">\n' +
  '              <path class="figure-hexagon--orange" fill="#e67624"\n' +
  '                    d="M80.5403625519528 3.4999999999999996Q86.60254037844386 0 92.66471820493493 3.4999999999999996L167.14290293039664 46.5Q173.20508075688772 50 173.20508075688772 57L173.20508075688772 143Q173.20508075688772 150 167.14290293039664 153.5L92.66471820493493 196.5Q86.60254037844386 200 80.5403625519528 196.5L6.062177826491071 153.5Q0 150 0 143L0 57Q0 50 6.062177826491071 46.5Z"></path>\n' +
  '            </svg>\n' +
  '            <div class="absolute-block absolute-block--center absolute-block--fw absolute-block--fh">\n' +
  '              <img src="/dist/assets/ico-search.svg"/>\n' +
  '            </div>';

export default [
  {
    id: 1,
    icon: ico1,
    title: 'Responsive <span class="tab__link-title--small">Websites</span>',
    active: true,
    content: content.replace('{{title}}', '2 ')
  },
  {
    id: 2,
    icon: ico2,
    title: 'e Commerce <span class="tab__link-title--small">Websites</span>',
    active: false,
    content: content.replace('{{title}}', '2 ')
  },
  {
    id: 3,
    icon: ico3,
    title: 'Daily blog <span class="tab__link-title--small">Websites</span>',
    active: false,
    content: content.replace('{{title}}', '3 ')
  },
  {
    id: 4,
    icon: ico4,
    title: 'Search based <span class="tab__link-title--small">Websites</span>',
    active: false,
    content: content.replace('{{title}}', '4 ')
  }
];
