exports.seed = function(knex, Promise) {
  var tblName = 'ingredient';
  var rows =
  [
    // recipe 1 "Knorr Creamy Shrimp Alfredo" 
    // ingredients 6
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
    },

    // recipe 2 "Spring Roll Salad Recipe"
    // ingredients 7
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
    },

    // recipe 3 "Homestyle Beef Stew"
    // ingredients 10
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
    },

    // recipe 4 "Blackberry Saffron Honey Recipe"
    // ingredients 4
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
  ];    
  return knex(tblName)
    .del() //Remove all rows from table
    .then(function()
    {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
};