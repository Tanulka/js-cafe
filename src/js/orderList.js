import cafe from './classCafe.js';
import orderListtmp from '../order-list.hbs';

// const orderItemsMarkup = cafe.menu.reduce((acc, el) => {
//   return (
//     acc +
//     `<li id="${el.id}">
//   <span> ${el.name}</span>
//   <span>0</span>
//   <button type="button" data-action="add">+</button>
//   <button type="button" data-action="remove">-</button>
//   <button type="button" data-action="reset">reset</button>

//   </li>`
//   );
// }, '');

const createOrderList = (tableNum, parentNode) => {
  const markup = orderTemplate;
  orderTemplateMarkup = orderListtmp({ table1Num, parentNode });
  parentNode.insertAdjacentHTML('beforeend', orderTemplateMarkup);
};

export default createOrderList;
