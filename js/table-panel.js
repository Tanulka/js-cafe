import cafe from './classCafe.js';
import createOrderList from './orderList.js';

const refs = {
  body: document.body,
  servicePanel: document.createElement('section'),
  tableList: document.createElement('ul'),
};
console.log(refs.body);
refs.servicePanel.insertAdjacentElement('afterbegin', refs.tableList);
refs.body.insertAdjacentElement('afterbegin', refs.servicePanel);
cafe.checkTables();
const tables = cafe.presentWorkers[0].tables;
console.log(cafe.presentWorkers);

const getTableMarkup = (tableNum) => {
  return `<li class="table" data-id="${tableNum}">
<h3 class="table-title">table - ${tableNum}</h3>
<button class="table-btn" data-action="open-order"> Open order list</button>
</li>`;
};
console.log(getTableMarkup(3));

// const itemsMarkup = tables
//   .map((elem) => {
//     return getTableMarkup(elem);
//   })
//   .join('');

const itemsMarkup = tables.reduce((acc, el) => {
  return acc + getTableMarkup(el);
}, '');

const handleOpenOrder = (e) => {
  if (e.target.nodeName !== 'BUTTON') return;
  const item = e.target.closest('li');
  const tableNum = item.dataset.id;
  createOrderList(tableNum, refs.servicePanel);
};

refs.tableList.insertAdjacentHTML('afterBegin', itemsMarkup);

refs.tableList.addEventListener('click', handleOpenOrder);
