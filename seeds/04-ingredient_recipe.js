exports.seed = function(knex, Promise) {
  var tblName = 'ingredient_recipe';
  var rows =
  [
    // recipe 1 "Knorr Creamy Shrimp Alfredo" 
    // ingredients ... 6 ... 1 - 6
    { "ingredient_id": 1, "recipe_id": 1 }, 
    { "ingredient_id": 2, "recipe_id": 1 }, 
    { "ingredient_id": 3, "recipe_id": 1 }, 
    { "ingredient_id": 4, "recipe_id": 1 }, 
    { "ingredient_id": 5, "recipe_id": 1 }, 
    { "ingredient_id": 6, "recipe_id": 1 }, 

    // recipe 2 "Spring Roll Salad Recipe" 
    // ingredients ... 7 ... 7 - 13
    { "ingredient_id": 7, "recipe_id": 2 }, 
    { "ingredient_id": 8, "recipe_id": 2 }, 
    { "ingredient_id": 9, "recipe_id": 2 }, 
    { "ingredient_id": 10, "recipe_id": 2 }, 
    { "ingredient_id": 11, "recipe_id": 2 }, 
    { "ingredient_id": 12, "recipe_id": 2 }, 
    { "ingredient_id": 13, "recipe_id": 2 },      

    // recipe 3 "Homestyle Beef Stew" 
    // ingredients ... 10 ... 14 - 23
    { "ingredient_id": 14, "recipe_id": 3 },
    { "ingredient_id": 15, "recipe_id": 3 },
    { "ingredient_id": 16, "recipe_id": 3 },
    { "ingredient_id": 17, "recipe_id": 3 },
    { "ingredient_id": 18, "recipe_id": 3 },
    { "ingredient_id": 19, "recipe_id": 3 },
    { "ingredient_id": 20, "recipe_id": 3 },
    { "ingredient_id": 21, "recipe_id": 3 },
    { "ingredient_id": 22, "recipe_id": 3 },
    { "ingredient_id": 23, "recipe_id": 3 },

    // recipe 4 "Blackberry Saffron Honey Recipe"
    // ingredients ... 4 ... 24 - 27
    { "ingredient_id": 24, "recipe_id": 4 },
    { "ingredient_id": 25, "recipe_id": 4 },
    { "ingredient_id": 26, "recipe_id": 4 },
    { "ingredient_id": 27, "recipe_id": 4 }
  ];    
  return knex(tblName)
    .del() //Remove all rows from table
    .then(function()
    {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
};