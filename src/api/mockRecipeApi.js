import delay from './delay';

const recipes = [
  {
    "id": 1,
    "recipeName": "Knorr Creamy Shrimp Alfredo",
    "categoryId": 1,
    "chef": "Ronald Bradley",
    "ingredients": [
      {
        "name": "Knorr Pasta Sides - Alfredo",
        "amount": "1 package"
      },
      {
        "name": "Cherry tomatoes, halved",
        "amount": "1 cup"
      },
      {
        "name": "Baby spinach leaves",
        "amount": "2 cups"
      },
      {
        "name": "Vegetable oil",
        "amount": "1 Tbsp"
      },
      {
        "name": "Uncooked medium shrimp, peeled and deveined",
        "amount": "1 lb"
      },
      {
        "name": "Grated Parmesan cheese",
        "amount": "2 Tbsp"
      }
    ],
    "preparation": "HEAT oil in large nonstick skillet over medium-high heat and cook shrimp, stirring occasionally, until shrimp turn pink, about 5 minutes. Remove and set aside.\n\nPREPARE Knorr® Pasta Sides - Alfredo in same skillet according to package directions, stirring in tomatoes and spinach during the last 5 minutes of cook time.\n\nSTIR in cooked shrimp. Sprinkle with cheese.",
    "rating": 2,
    "imageUrl": "http://162.61.226.249/PicOriginal/P170292013090324_5.jpg",
    "publishdate": "6/15/2016"
  }, {
    "id": 2,
    "recipeName": "Spring Roll Salad Recipe",
    "categoryId": 2,
    "chef": "Carl Wilson",
    "ingredients": [
      {
        "name": "unsweetened full-fat coconut milk",
        "amount": "1 cup"
      },
      {
        "name": "peanut butter",
        "amount": "1/2 cup"
      },
      {
        "name": "cayenne pepper",
        "amount": "1/2 teaspoon"
      },
      {
        "name": "medium shallots, peeled",
        "amount": "2"
      },
      {
        "name": "brown sugar, maple syrup, or honey",
        "amount": "3 tablespoons"
      },
      {
        "name": "shoyu / soy sauce",
        "amount": "1 tablespoon"
      },
      {
        "name": "fresh lime juice",
        "amount": "2 tablespoons "
      }
    ],
    "preparation": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "rating": 4,
    "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/spring-roll-salad-recipe.jpg",
    "publishdate": "9/26/2015"
  }, {
    "id": 3,
    "recipeName": "Homestyle Beef Stew",
    "categoryId": 3,
    "chef": "Lois Gonzalez",
    "ingredients": [
      {
        "name": "beef eye round roast, cut into 1-inch pieces",
        "amount": "1 lb"
      },
      {
        "name": "all-purpose flour",
        "amount": "2 Tbsp"
      },
      {
        "name": "vegetable oil",
        "amount": "2 Tbsp"
      },
      {
        "name": "medium onions, chopped",
        "amount": "2"
      },
      {
        "name": "cloves garlic, finely chopped",
        "amount": "2"
      },
      {
        "name": "Knorr® Homestyle Stock - Beef",
        "amount": "1 tub"
      },
      {
        "name": "water",
        "amount": "2 cups"
      },
      {
        "name": "Worcestershire sauce",
        "amount": "2 tsp"
      },
      {
        "name": "baby red potatoes, halved",
        "amount": "4 cups"
      },
      {
        "name": "carrots, sliced",
        "amount": "3"
      }
    ],
    "preparation": "Toss beef with flour; set aside.\n\nHeat oil in large saucepan over medium heat and brown beef. Remove beef from saucepot; set aside.\n\nStir onions and garlic into same saucepot and cook, stirring frequently, until onions are tender, about 4 minutes. Stir in Knorr® Homestyle Stock - Beef, water, Worcestershire sauce and beef. Bring to a boil over high heat, stirring until Stock is melted. Reduce heat to low and simmer covered, stirring occasionally, 40 minutes or until beef is almost tender. Stir in potatoes and carrots and simmer an additional 40 minutes or until beef and vegetables are tender.",
    "rating": 5,
    "imageUrl": "http://162.61.226.249/PicOriginal/P63192612080949_5.jpg",
    "publishdate": "3/8/2016"
  }, {
    "id": 4,
    "recipeName": "Blackberry Saffron Honey Recipe",
    "categoryId": 4,
    "chef": "Phyllis Knight",
    "ingredients": [
      {
        "name": "pinches of saffron (about 40 threads)",
        "amount": "2"
      },
      {
        "name": "vanilla extract or almond extract",
        "amount": "1 teaspoon"
      },
      {
        "name": "runny wildflower honey",
        "amount": "1/2 cup (120 ml)"
      },
      {
        "name": "pint ripe blackberries",
        "amount": "1"
      }
    ],
    "preparation": "Place the saffron threads in a tiny bowl. Add the extract and stir until the saffron is wet. Let it sit for 10 minutes before stirring the saffron mixture into the honey. You'll want to stir well, until the honey is uniform and the threads are evenly distributed throughout. In the meantime, gently heat the blackberries in a saucepan over medium heat. You want the berries to begin to breakdown and release juices, but not overcook. Stir the berries into the honey, and store in a jar in the refrigerator for up to a week.",
    "rating": 5,
    "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/saffron-blackberry-honey-h.jpg",
    "publishdate": "9/12/2015"
  },  {
    "id": 5,
    "recipeName": "Knorr Creamy Shrimp Alfredo",
    "categoryId": 1,
    "chef": "Ronald Bradley",
    "ingredients": [
      {
        "name": "Knorr Pasta Sides - Alfredo",
        "amount": "1 package"
      },
      {
        "name": "Cherry tomatoes, halved",
        "amount": "1 cup"
      },
      {
        "name": "Baby spinach leaves",
        "amount": "2 cups"
      },
      {
        "name": "Vegetable oil",
        "amount": "1 Tbsp"
      },
      {
        "name": "Uncooked medium shrimp, peeled and deveined",
        "amount": "1 lb"
      },
      {
        "name": "Grated Parmesan cheese",
        "amount": "2 Tbsp"
      }
    ],
    "preparation": "HEAT oil in large nonstick skillet over medium-high heat and cook shrimp, stirring occasionally, until shrimp turn pink, about 5 minutes. Remove and set aside.\n\nPREPARE Knorr® Pasta Sides - Alfredo in same skillet according to package directions, stirring in tomatoes and spinach during the last 5 minutes of cook time.\n\nSTIR in cooked shrimp. Sprinkle with cheese.",
    "rating": 2,
    "imageUrl": "http://162.61.226.249/PicOriginal/P170292013090324_5.jpg",
    "publishdate": "6/15/2016"
  }, {
    "id": 6,
    "recipeName": "Spring Roll Salad Recipe",
    "categoryId": 2,
    "chef": "Carl Wilson",
    "ingredients": [
      {
        "name": "unsweetened full-fat coconut milk",
        "amount": "1 cup"
      },
      {
        "name": "peanut butter",
        "amount": "1/2 cup"
      },
      {
        "name": "cayenne pepper",
        "amount": "1/2 teaspoon"
      },
      {
        "name": "medium shallots, peeled",
        "amount": "2"
      },
      {
        "name": "brown sugar, maple syrup, or honey",
        "amount": "3 tablespoons"
      },
      {
        "name": "shoyu / soy sauce",
        "amount": "1 tablespoon"
      },
      {
        "name": "fresh lime juice",
        "amount": "2 tablespoons "
      }
    ],
    "preparation": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "rating": 4,
    "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/spring-roll-salad-recipe.jpg",
    "publishdate": "9/26/2015"
  }, {
    "id": 7,
    "recipeName": "Homestyle Beef Stew",
    "categoryId": 3,
    "chef": "Lois Gonzalez",
    "ingredients": [
      {
        "name": "beef eye round roast, cut into 1-inch pieces",
        "amount": "1 lb"
      },
      {
        "name": "all-purpose flour",
        "amount": "2 Tbsp"
      },
      {
        "name": "vegetable oil",
        "amount": "2 Tbsp"
      },
      {
        "name": "medium onions, chopped",
        "amount": "2"
      },
      {
        "name": "cloves garlic, finely chopped",
        "amount": "2"
      },
      {
        "name": "Knorr® Homestyle Stock - Beef",
        "amount": "1 tub"
      },
      {
        "name": "water",
        "amount": "2 cups"
      },
      {
        "name": "Worcestershire sauce",
        "amount": "2 tsp"
      },
      {
        "name": "baby red potatoes, halved",
        "amount": "4 cups"
      },
      {
        "name": "carrots, sliced",
        "amount": "3"
      }
    ],
    "preparation": "Toss beef with flour; set aside.\n\nHeat oil in large saucepan over medium heat and brown beef. Remove beef from saucepot; set aside.\n\nStir onions and garlic into same saucepot and cook, stirring frequently, until onions are tender, about 4 minutes. Stir in Knorr® Homestyle Stock - Beef, water, Worcestershire sauce and beef. Bring to a boil over high heat, stirring until Stock is melted. Reduce heat to low and simmer covered, stirring occasionally, 40 minutes or until beef is almost tender. Stir in potatoes and carrots and simmer an additional 40 minutes or until beef and vegetables are tender.",
    "rating": 5,
    "imageUrl": "http://162.61.226.249/PicOriginal/P63192612080949_5.jpg",
    "publishdate": "3/8/2016"
  }, {
    "id": 8,
    "recipeName": "Blackberry Saffron Honey Recipe",
    "categoryId": 4,
    "chef": "Phyllis Knight",
    "ingredients": [
      {
        "name": "pinches of saffron (about 40 threads)",
        "amount": "2"
      },
      {
        "name": "vanilla extract or almond extract",
        "amount": "1 teaspoon"
      },
      {
        "name": "runny wildflower honey",
        "amount": "1/2 cup (120 ml)"
      },
      {
        "name": "pint ripe blackberries",
        "amount": "1"
      }
    ],
    "preparation": "Place the saffron threads in a tiny bowl. Add the extract and stir until the saffron is wet. Let it sit for 10 minutes before stirring the saffron mixture into the honey. You'll want to stir well, until the honey is uniform and the threads are evenly distributed throughout. In the meantime, gently heat the blackberries in a saucepan over medium heat. You want the berries to begin to breakdown and release juices, but not overcook. Stir the berries into the honey, and store in a jar in the refrigerator for up to a week.",
    "rating": 5,
    "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/saffron-blackberry-honey-h.jpg",
    "publishdate": "9/12/2015"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (recipe) => {
  let newId = recipes.length + 1;
  return newId;
};

class RecipeApi {
  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], recipes));
      }, delay);
    });
  }

  static saveRecipe(recipe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minRecipeNameLength = 1;

        if (recipe.recipeName.length < minRecipeNameLength) {
          reject(`Name must be at least ${minRecipeNameLength} characters.`);
        }

        if (recipe.id) {
          const existingRecipeIndex = recipes.findIndex(a => a.id == recipe.id);
          recipes.splice(existingRecipeIndex, 1, recipe);
        } else {
          recipe.id = generateId(recipe);
          recipes.push(recipe);
        }

        resolve(Object.assign({}, recipe));
      }, delay);
    });
  }

}

export default RecipeApi;
