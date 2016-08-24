exports.seed = function(knex, Promise) {
  var tblName = 'recipe';
  var rows =
  [
    {
      "category_id": 1, // id 1
      "recipeName": "Knorr Creamy Shrimp Alfredo",
      "chef": "Ronald Bradley",    
      "preparation": "HEAT oil in large nonstick skillet over medium-high heat and cook shrimp, stirring occasionally, until shrimp turn pink, about 5 minutes. Remove and set aside.\n\nPREPARE Knorr® Pasta Sides - Alfredo in same skillet according to package directions, stirring in tomatoes and spinach during the last 5 minutes of cook time.\n\nSTIR in cooked shrimp. Sprinkle with cheese.",
      "rating": 2,
      "imageUrl": "http://162.61.226.249/PicOriginal/P170292013090324_5.jpg",
      "publishdate": "6/15/2016"
    }, 
    {    
      "category_id": 2, // id 2
      "recipeName": "Spring Roll Salad Recipe",
      "chef": "Carl Wilson",    
      "preparation": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "rating": 4,
      "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/spring-roll-salad-recipe.jpg",
      "publishdate": "9/26/2015"
    }, 
    {
      "category_id": 3, // id 3
      "recipeName": "Homestyle Beef Stew",
      "chef": "Lois Gonzalez",
      "preparation": "Toss beef with flour; set aside.\n\nHeat oil in large saucepan over medium heat and brown beef. Remove beef from saucepot; set aside.\n\nStir onions and garlic into same saucepot and cook, stirring frequently, until onions are tender, about 4 minutes. Stir in Knorr® Homestyle Stock - Beef, water, Worcestershire sauce and beef. Bring to a boil over high heat, stirring until Stock is melted. Reduce heat to low and simmer covered, stirring occasionally, 40 minutes or until beef is almost tender. Stir in potatoes and carrots and simmer an additional 40 minutes or until beef and vegetables are tender.",
      "rating": 5,
      "imageUrl": "http://162.61.226.249/PicOriginal/P63192612080949_5.jpg",
      "publishdate": "3/8/2016"
    }, 
    {
      "category_id": 4, // id 4
      "recipeName": "Blackberry Saffron Honey Recipe",
      "chef": "Phyllis Knight",    
      "preparation": "Place the saffron threads in a tiny bowl. Add the extract and stir until the saffron is wet. Let it sit for 10 minutes before stirring the saffron mixture into the honey. You'll want to stir well, until the honey is uniform and the threads are evenly distributed throughout. In the meantime, gently heat the blackberries in a saucepan over medium heat. You want the berries to begin to breakdown and release juices, but not overcook. Stir the berries into the honey, and store in a jar in the refrigerator for up to a week.",
      "rating": 5,
      "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/saffron-blackberry-honey-h.jpg",
      "publishdate": "9/12/2015"
    }
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function()
    {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
};