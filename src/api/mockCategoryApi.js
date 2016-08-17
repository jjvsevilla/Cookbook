import delay from './delay';

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

}

export default CategoryApi;