import delay from './delay';

const categories = [
  {
    "id": 1,
    "description": "Pastas",
    "iconUrl": "http://icons.iconarchive.com/icons/icons-land/3d-food/32/Dish-Pasta-Spaghetti-icon.png"
  }, {
    "id": 2,
    "description": "Salads",
    "iconUrl": "http://icons.iconarchive.com/icons/aha-soft/desktop-buffet/32/Salad-icon.png"
  }, {
    "id": 3,
    "description": "Meat",
    "iconUrl": "http://icons.iconarchive.com/icons/graphicloads/food-drink/32/meat-icon.png"
  }, {
    "id": 4,
    "description": "Desserts",
    "iconUrl": "http://icons.iconarchive.com/icons/archigraphs/tea-party/32/Tea-Cake-icon.png"
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