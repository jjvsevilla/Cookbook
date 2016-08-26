
exports.seed = function(knex, Promise) {
  var tblName = 'ingredient_recipe';
  var rows =
  [
    // recipe 1 "Knorr Creamy Shrimp Alfredo" 
    // ingredients 6
    { 
      "recipe_id" : 1,
      "name": "Knorr Pasta Sides - Alfredo",
      "amount": "1 package" 
    },
    { 
      "recipe_id" : 1,
      "name": "Cherry tomatoes, halved",
      "amount": "1 cup" 
    },
    { 
      "recipe_id" : 1,
      "name": "Baby spinach leaves",
      "amount": "2 cups" 
    },
    { 
      "recipe_id" : 1,
      "name": "Vegetable oil",
      "amount": "1 Tbsp" 
    },
    { 
      "recipe_id" : 1,
      "name": "Uncooked medium shrimp, peeled and deveined",
      "amount": "1 lb" 
    },
    { 
      "recipe_id" : 1,
      "name": "Grated Parmesan cheese",
      "amount": "2 Tbsp" 
    },

    // recipe 2 "Spring Roll Salad Recipe"
    // ingredients 7
    { 
      "recipe_id" : 2,
      "name": "unsweetened full-fat coconut milk",
      "amount": "1 cup" 
    },
    { 
      "recipe_id" : 2,
      "name": "peanut butter",
      "amount": "1/2 cup" 
    },
    { 
      "recipe_id" : 2,
      "name": "cayenne pepper",
      "amount": "1/2 teaspoon" 
    },
    { 
      "recipe_id" : 2,
      "name": "medium shallots, peeled",
      "amount": "2" 
    },
    { 
      "recipe_id" : 2,
      "name": "brown sugar, maple syrup, or honey",
      "amount": "3 tablespoons" 
    },
    { 
      "recipe_id" : 2,
      "name": "shoyu / soy sauce",
      "amount": "1 tablespoon" 
    },
    { 
      "recipe_id" : 2,
      "name": "fresh lime juice",
      "amount": "2 tablespoons " 
    },

    // recipe 3 "Homestyle Beef Stew"
    // ingredients 10
    { 
      "recipe_id" : 3,
      "name": "beef eye round roast, cut into 1-inch pieces",
      "amount": "1 lb"
    },
    {
      "recipe_id" : 3,
      "name": "all-purpose flour",
      "amount": "2 Tbsp"
    },
    {
      "recipe_id" : 3,
      "name": "vegetable oil",
      "amount": "2 Tbsp"
    },
    {
      "recipe_id" : 3,
      "name": "medium onions, chopped",
      "amount": "2"
    },
    {
      "recipe_id" : 3,
      "name": "cloves garlic, finely chopped",
      "amount": "2"
    },
    {
      "recipe_id" : 3,
      "name": "Knorr® Homestyle Stock - Beef",
      "amount": "1 tub"
    },
    {
      "recipe_id" : 3,
      "name": "water",
      "amount": "2 cups"
    },
    {
      "recipe_id" : 3,
      "name": "Worcestershire sauce",
      "amount": "2 tsp"
    },
    {
      "recipe_id" : 3,
      "name": "baby red potatoes, halved",
      "amount": "4 cups"
    },
    {
      "recipe_id" : 3,
      "name": "carrots, sliced",
      "amount": "3"
    },

    // recipe 4 "Blackberry Saffron Honey Recipe"
    // ingredients 4
    {
      "recipe_id" : 4,
      "name": "pinches of saffron (about 40 threads)",
      "amount": "2"
    },
    {
      "recipe_id" : 4,
      "name": "vanilla extract or almond extract",
      "amount": "1 teaspoon"
    },
    {
      "recipe_id" : 4,
      "name": "runny wildflower honey",
      "amount": "1/2 cup (120 ml)"
    },
    {
      "recipe_id" : 4,
      "name": "pint ripe blackberries",
      "amount": "1"
    },

    // recipe 5 "Strawberry Parfait"
    // ingredients 9
    {
      "recipe_id" : 5,
      "name": "Fresh whipped cream",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "1 Castella cake",
      "amount": "1 Homemade recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Fresh strawberries",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Cornflakes",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Chocolate syrup",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Vanilla and/or strawberry Ice Cream",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Toasted sliced almonds",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Mint leaves",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 5,
      "name": "Pocky",
      "amount": "1 box"
    },

    // recipe 6 "Chocolate Parfait"
    // ingredients 8
    {
      "recipe_id" : 6,
      "name": "Fresh whipped cream",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 6,
      "name": "Brownie",
      "amount": "1"
    },
    {
      "recipe_id" : 6,
      "name": "Chocolate granolas",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 6,
      "name": "Chocolate syrup",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 6,
      "name": "Chocolate/Vanilla ice cream",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 6,
      "name": "banana",
      "amount": "1"
    },
    {
      "recipe_id" : 6,
      "name": "Mint leaves",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 6,
      "name": "cigarette cookies",
      "amount": "1 box"
    },

    // recipe 7 "Classic Mentaiko Pasta"
    // ingredients 10
    {
      "recipe_id" : 7,
      "name": "kosher salt (for boiling pasta)",
      "amount": "1-2 tsp"
    },
    {
      "recipe_id" : 7,
      "name": "spaghetti",
      "amount": "6-7 oz (170-200 g)"
    },
    {
      "recipe_id" : 7,
      "name": "spicy salted pollack roe or cod roe (karashi mentaiko)",
      "amount": "2 sacks (2 oz/60g) "
    },
    {
      "recipe_id" : 7,
      "name": "milk",
      "amount": "2 Tbsp"
    },
    {
      "recipe_id" : 7,
      "name": "heavy whipping cream",
      "amount": "2 Tbsp"
    },
    {
      "recipe_id" : 7,
      "name": "unsalted butter, melted",
      "amount": "2 Tbsp"
    },
    {
      "recipe_id" : 7,
      "name": "soy sauce",
      "amount": "1 Tbsp"
    },
    {
      "recipe_id" : 7,
      "name": "Freshly ground black pepper",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 7,
      "name": "Shredded nori seaweed (or sheet of nori, cut into thin strips) for topping",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 7,
      "name": "Shiso leaves for topping",
      "amount": "1 recipe"
    },

    // recipe 8 "Spaghetti alle Vongole"
    // ingredients 9
    {
      "recipe_id" : 8,
      "name": "fresh manila clams",
      "amount": "1 lb (450-500g)"
    },
    {
      "recipe_id" : 8,
      "name": "spaghetti",
      "amount": "lb (227g) "
    },
    {
      "recipe_id" : 8,
      "name": "olive oil",
      "amount": "2 Tbsp."
    },
    {
      "recipe_id" : 8,
      "name": "garlic cloves",
      "amount": "2"
    },
    {
      "recipe_id" : 8,
      "name": "red chilies",
      "amount": "2"
    },
    {
      "recipe_id" : 8,
      "name": "cup dry white wine",
      "amount": "2"
    },
    {
      "recipe_id" : 8,
      "name": "chopped parsley fresh parsley",
      "amount": "2 Tbsp."
    },
    {
      "recipe_id" : 8,
      "name": "Freshly ground black pepper",
      "amount": "1 recipe"
    },
    {
      "recipe_id" : 8,
      "name": "Salt",
      "amount": "1 recipe"
    },

    // recipe 9 "Caesar Salad"
    // ingredients 10  
    {
      "recipe_id" : 9,
      "name": "Ciabatta bread or any baguette",
      "amount": "5 inches (13 cm) "
    },
    {
      "recipe_id" : 9,
      "name": "extra virgin olive oil",
      "amount": "1 Tbsp. "
    },
    {
      "recipe_id" : 9,
      "name": "garlic clove",
      "amount": "3"
    },
    {
      "recipe_id" : 9,
      "name": "freshly ground black pepper",
      "amount": "1 tsp."
    },
    {
      "recipe_id" : 9,
      "name": "lemon juice",
      "amount": "1 Tbsp."
    },
    {
      "recipe_id" : 9,
      "name": "Japanese mayonnaise (key ingredient!)",
      "amount": "1 Tbsp."
    },
    {
      "recipe_id" : 9,
      "name": "Kosher salt (1/4 tsp. table salt)",
      "amount": "2 tsp."
    },
    {
      "recipe_id" : 9,
      "name": "freshly ground black pepper",
      "amount": "1 tsp."
    },
    {
      "recipe_id" : 9,
      "name": "hearts of romaine lettuce",
      "amount": "2"
    },
    {
      "recipe_id" : 9,
      "name": "Freshly grated Parmesan cheese",
      "amount": "1 recipe"
    },

    // recipe 10 "Shrimp Salad Recipe"
    // ingredients 10  
    {
      "recipe_id" : 10,
      "name": "large shrimp",
      "amount": "7"
    },
    {
      "recipe_id" : 10,
      "name": "corn starch to clean shrimp",
      "amount": "1 Tbsp"
    },     
    {
      "recipe_id" : 10,
      "name": "sake",
      "amount": "1 Tbsp."
    },    
    {
      "recipe_id" : 10,
      "name": "broccoli florets",
      "amount": "6 oz"
    },    
    {
      "recipe_id" : 10,
      "name": "avocado",
      "amount": "1"
    },    
    {
      "recipe_id" : 10,
      "name": "eggs",
      "amount": "2"
    },    
    {
      "recipe_id" : 10,
      "name": "small cucumber",
      "amount": "1"
    },    
    {
      "recipe_id" : 10,
      "name": "Japanese mayonnaise",
      "amount": "3 Tbsp."
    }, 
    {
      "recipe_id" : 10,
      "name": "milk",
      "amount": "1 Tbsp"
    },  
    {
      "recipe_id" : 10,
      "name": "kosher salt",
      "amount": "1/2 Tbsp"
    }
  ];        

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function()
    {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
};