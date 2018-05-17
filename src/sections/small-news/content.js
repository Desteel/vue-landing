const content = '<p>\n' +
  '            Lorem Ipsum is simply dummy text of the printing and\n' +
  '            typesetting industry. Lorem Ipsum has been the industr\n' +
  '            standard dummy text ever since the 1500s,\n' +
  '            when an unknown printer took a\n' +
  '          </p>\n' +
  '          <p>\n' +
  '            <b>\n' +
  '              Lorem Ipsum is simply\n' +
  '              Owner, Lorem Ipsum\n' +
  '            </b>\n' +
  '          </p>';
const title = 'Testimoanials';
const link = '#';

const title2 = '2 ' + title;
const title3 = '3 ' + title;

export default [
  {
    id: 1,
    title,
    link,
    content
  },
  {
    id: 2,
    title: title2,
    link,
    content
  },
  {
    id: 3,
    title: title3,
    link,
    content
  }
];
