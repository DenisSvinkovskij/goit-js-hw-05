// Write code under this line
const Storage = function (goods) {
  this.items = goods;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.getItems = function () {
    return this.items;
  };
  this.removeItem = function (item) {
    if (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
    }
    return this.items;
  };
};

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
'Нанитоиды',
'Пролонгер',
'Железные жупи',
'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
'Нанитоиды',
'Пролонгер',
'Железные жупи',
'Антигравитатор',
'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
'Нанитоиды',
'Железные жупи',
'Антигравитатор',
'Дроид'
] */
