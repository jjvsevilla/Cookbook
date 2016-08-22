import delay from './delay';
const knex = require('./knex');  

const categories = [
  {
    "id": 1,
    "description": "Pastas"
  }, {
    "id": 2,
    "description": "Salads"
  }, {
    "id": 3,
    "description": "Meat"
  }, {
    "id": 4,
    "description": "Desserts"
  }
];

class CategoryApi {
  static getAllCategories() {

/*
    debugger;
    //let caterogies = knex('Category').select().timeout(1000);
    //console.log(caterogies);

let category = knex.table('Category').first('id', 'description').then(function(row) {
  console.log(row);
});
*/

    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

}

export default CategoryApi;