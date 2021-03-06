import './styles.css';
import './js/table-panel.js';

// Нужно реализовать работу кафе:
//
// 1. Написать функцию, которая из списка официантов(массив объектов) выбрает официантов,
// которые  есть на смене по свойству isPresent: true; и записывает их всех в массив, который
// хранится в переменной presentWorkers = [].
// Пример:
// concole.log(presentWorkers); // [{name: "Ann", isPresent: true, tables: [], tips: 0}, {name: "Bob", isPresent: true, tables: [], tips: 0}]
//
//
// 2. Написать ф-цию, которая принимает два параметра (список столиков, список официантов на смене) распределяет все столики в кафе - tables,
// между всеми официантами, которые есть на смене и перезаписывает в свойство каждому столику, имя оффицианта, который его обслуживает,
// и оффицианту, в свою очередь, в сойство tabeles, перезаписывает все номера столиков, которые он обслуживает
// на этой смене - функция ничего не возвращает, а перезаписывает объекты в массивах
// Пример:
// console.log(presentWorkers); // [{name: "Ann", isPresent: true, tables: [1, 3, 6, 7], tips: 0}, {name: "Bob", isPresent: true, tables: [2, 4, 5, 8], tips: 0}]
// console.log(tables); // [{tabel: 1, service: "Ann"}, {tabel: 2, service: "Bob"}, {tabel: 3, service: "Ann"}, ... ]
//
//
// 3. Написать функцию getOrder(table, dishId, num), которая принимает номер столика, id блюда(меню с блюдами внешняя переменная из глобальной области видимости) и кол-во данных блюд в заказе. добавляет в объекте столика, свойство currentOrder - объект со свойствами, где ключ - id блюда, значение ключа - кол-во этих блюд в текущем заказе, Пример currentOrder: {capuchino: 2, napoleon: 2, zavarnoe: 1},
//
//
// 4. Написать функцию для обработки заказа на кухне и на баре, которая принимает объект tabel(номер столика) и если в нём есть заполненное свойствами значение currentOrder, создает массив вида - пример: ["Капучино - 2", "Торт Наполеон - 2", "Пирожное заварное - 1"] и добавляет
// этот массив в свойстово prepearing в объекте соотвоетствующего столика.
//
//
// 5. Написать функцию которая принимает столик, название блюда и кол-во, перезаписывает свойство prepearing, удаляя из него блюда и кол-во, которые были приготовлены.
//
//
// 6. Написать функцию, которая проверяет приготовлены ли все блюда и когда это условие выполняется она в объект столика добавляет своййство:
//  currentCheck в которое записывает стоимость всего заказа + 15% чаевых,
//  totalCheck, в которое записывает стоимость текущего заказа или добавляет эту стоимость к сумме предыдущих заказов на этом столике.
// а также добавляет в свойство tips объекта оффоицианта, который обслуживает этот столик 15% от стоимости заказа.
// и возвращает строку типа:
// "Капучино - 2*45 - 90грн
// Торт Наполеон - 2*75 - 150грн
// Пирожное заварное - 1*38 - 38грн
// СТОИМОСТЬ ЗАКАЗА: 278грн
// ЧАЕВЫЕ: 42грн
// ИТОГО: 320грн"
//
//
// 7. Написать функцию которая проверяет изменился ли totalCheck столика и если это произошло то в объекте столика удаляются все свойства кроме
// {table: 1, service: "", totalCheck: ""} удаляя все остальные свойства и добавляя свойство isFree: true

// const oficiants = [
//     {
//         name: "Ann",
//         isPresent: true,
//         tables: [],
//         tips: 0
//     },
//     {
//         name: "Nick",
//         isPresent: false,
//         tables: [],
//         tips: 0
//     },
//     {
//         name: "Carrol",
//         isPresent: true,
//         tables: [],
//         tips: 0
//     },
//     {
//         name: "Jack",
//         isPresent: false,
//         tables: [],
//         tips: 0
//     },
//     {
//         name: "Berry",
//         isPresent: false,
//         tables: [],
//         tips: 0
//     },
//     {
//         name: "Jim",
//         isPresent: true,
//         tables: [],
//         tips: 0
//     },
// ];
// const tables = [
//     {
//         table: 1,
//         service: "",
//     },
//     {
//         table: 2,
//         service: "",
//     },
//     {
//         table: 3,
//         service: "",
//     },
//     {
//         table: 4,
//         service: "",
//     },
//     {
//         table: 5,
//         service: "",
//     },
//     {
//         table: 6,
//         service: "",
//     },
//     {
//         table: 7,
//         service: "",
//     },
//     {
//         table: 8,
//         service: "",
//     },
// ];
// const menu = [
//     {
//         id: "capuchino",
//         name: "Капучино",
//         price: 45
//     },
//     {
//         id: "late",
//         name: "Лате",
//         price: 40
//     },
//     {
//         id: "napoleon",
//         name: "Торт Наполеон",
//         price: 75
//     },
//     {
//         id: "water-0.5",
//         name: "Вода без газа 0,5",
//         price: 20
//     },
//     {
//         id: "zavarnoe",
//         name: "Пирожное Заварное",
//         price: 38
//     },
//     {
//         id: "espresso",
//         name: "Еспрессо",
//         price: 30
//     },
//     {
//         id: "marcepan",
//         name: "Марцепан",
//         price: 45
//     },
//     {
//         id: "fresh-orang-0.3",
//         name: "Фреш Апельсиновый 0,3",
//         price: 45
//     },
// ]
