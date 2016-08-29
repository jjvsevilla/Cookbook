exports.seed = function(knex, Promise) {
  var tblName = 'recipe';
  var rows =
  [
{
  "category_id": 1, // id 1
  "recipeName": "Knorr Creamy Shrimp Alfredo",
  "chef": "Ronald Bradley",
  "preparation": ""
  +"1. HEAT oil in large nonstick skillet over medium-high heat and cook shrimp, stirring occasionally, until shrimp turn pink, about 5 minutes. \n\n"
  +"2. Remove and set aside. \n\n"
  +"3. PREPARE Knorr® Pasta Sides - Alfredo in same skillet according to package directions, stirring in tomatoes and spinach during the last 5 minutes of cook time. \n\n"
  +"4. STIR in cooked shrimp. \n\n"
  +"5. Sprinkle with cheese. \n\n",
  "rating": 2,
  "imageUrl": "http://162.61.226.249/PicOriginal/P170292013090324_5.jpg",
  "publishdate": "6/15/2016"
},

{
  "category_id": 2, // id 2
  "recipeName": "Spring Roll Salad Recipe",
  "chef": "Carl Wilson",
  "preparation": ""
  +"1. Bring a large pot of water to a boil. While the water is heating, make both your sauces. To make the peanut sauce, place all the ingredients - coconut milk, peanut butter, cayenne pepper, shallots, brown sugar, soy sauce, and lime juice - in a food processor or blender, and blend until smooth. Taste, and adjust with more soy sauce or lime, if needed. Also, thin with little splashes of hot water to thin the consistency, if you like. Set aside. \n\n"
  +"2. To make the lime dressing, place the hot water in a small bowl and sprinkle in the sugar. Stir in the garlic, chile pepper, lime juice, and soy sauce. The sauces will keep for a week refrigerated. Bring to room temperature, or gently heat, before using. \n\n"
  +"3. Once the water is boiling, salt well, and add your vegetables to the pot. Blanch for just under a minute, remove with a slotted spoon or strainer, and run under cold water to stop the cooking. Set aside. Bring the water back to a boil, and cook the noodles per package instructions. Drain, and rinse under cold water until completely cold. \n\n"
  +"4. Place the noodles in a large bowl, or on a large platter, and toss with the cabbage, peanuts, and a generous amount of the peanut sauce. Top with the blanched vegetables, and give another light toss. Just before serving, drizzle generously with the lime dressing. Serve both dressings at the table, so people can add more to their liking. \n\n",
  "rating": 4,
  "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/spring-roll-salad-recipe.jpg",
  "publishdate": "9/26/2015"
},

{
  "category_id": 3, // id 3
  "recipeName": "Homestyle Beef Stew",
  "chef": "Lois Gonzalez",
  "preparation": ""
  +"1. Toss beef with flour; set aside. \n\n" 
  +"2. Heat oil in large saucepan over medium heat and brown beef. Remove beef from saucepot; set aside. \n\n"
  +"3. Stir onions and garlic into same saucepot and cook, stirring frequently, until onions are tender, about 4 minutes. \n\n"
  +"4. Stir in Knorr® Homestyle Stock - Beef, water, Worcestershire sauce and beef. \n\n"
  +"5. Bring to a boil over high heat, stirring until Stock is melted. \n\n"
  +"6. Reduce heat to low and simmer covered, stirring occasionally, 40 minutes or until beef is almost tender. \n\n"
  +"7. Stir in potatoes and carrots and simmer an additional 40 minutes or until beef and vegetables are tender. \n\n",
  "rating": 5,
  "imageUrl": "http://162.61.226.249/PicOriginal/P63192612080949_5.jpg",
  "publishdate": "3/8/2016"
},

{
  "category_id": 4, // id 4
  "recipeName": "Blackberry Saffron Honey Recipe",
  "chef": "Phyllis Knight",
  "preparation": ""
  +"1. Place the saffron threads in a tiny bowl. \n\n"
  +"2. Add the extract and stir until the saffron is wet. \n\n" 
  +"3. Let it sit for 10 minutes before stirring the saffron mixture into the honey. \n\n" 
  +"4. You'll want to stir well, until the honey is uniform and the threads are evenly distributed throughout. \n\n" 
  +"5. In the meantime, gently heat the blackberries in a saucepan over medium heat. \n\n" 
  +"6. You want the berries to begin to breakdown and release juices, but not overcook. \n\n" 
  +"7. Stir the berries into the honey, and store in a jar in the refrigerator for up to a week. \n\n",
  "rating": 5,
  "imageUrl": "http://www.101cookbooks.com/mt-static/images/food/saffron-blackberry-honey-h.jpg",
  "publishdate": "9/12/2015"
},

{
  "category_id": 4, // id 5
  "recipeName": "Strawberry Parfait",
  "chef": "Sanjo ",
  "preparation": "Prepare Fillings: \n\n"
  +"1. Prepare ice bath by placing ice cubes and water in a large bowl. Place a clean and dry mixing bowl in the ice bath and add 473 ml (1 Pint) heavy whipping cream, and 38 g (3 Tbsp.) sugar to keep cool. \n\n"
  +"2. Once cooled, transfer the mixing bowl to the stand mixer and whisk on high speed until medium to firm peaks. Transfer the whipped cream to a piping bag. You can put the bag in a tall glass and fold the top half of the bag outward as you see in the picture below. \n\n"
  +"3. Cut sponge cakes/castella/brownies into small cubes. \n\n"
  +"4. Slice fresh fruits of your choice. \n\n"
  +"Assemble Strawberry Parfait: \n\n"
  +"1. Put cornflakes on the bottom of the glass. Place the strawberry slices vertically around the inner glass so that we can see the strawberry from outside the glass. Fill the void with whipped cream. \n\n"
  +"2. Add the chocolate syrup and some Castella cubes. \n\n"
  +"3. Add a scoop of ice cream and strawberry halves around the glass rim. Decorate with almond slices and whipped cream. \n\n"
  +"4. And put one whole strawberry, mint, and 2 pockys on top. \n\n",
  "rating": 5,
  "imageUrl": "http://www.justonecookbook.com/wp-content/uploads/2016/08/Parfait-8.jpg",
  "publishdate": "9/12/2015"
},

{
  "category_id": 4, // id 6
  "recipeName": "Chocolate Parfait",
  "chef": "Sanjo ",
  "preparation": "Prepare Fillings: \n\n"
  +"1. Prepare ice bath by placing ice cubes and water in a large bowl. Place a clean and dry mixing bowl in the ice bath and add 473 ml (1 Pint) heavy whipping cream, and 38 g (3 Tbsp.) sugar to keep cool. \n\n"
  +"2. Once cooled, transfer the mixing bowl to the stand mixer and whisk on high speed until medium to firm peaks. Transfer the whipped cream to a piping bag. You can put the bag in a tall glass and fold the top half of the bag outward as you see in the picture below. \n\n"
  +"3. Cut sponge cakes/castella/brownies into small cubes. \n\n"
  +"4. Slice fresh fruits of your choice. \n\n"
  +"Assemble Strawberry Parfait: \n\n"
  +"1. Put granolas on the bottom of the glass. Add some whipped cream and brownie cubes. Squirt some chocolate syrup vertically on the inner glass so you can see chocolate marks from outside the glass. \n\n"
  +"2. Add whipped cream, granolas, and sliced almonds, then two scoops of ice cream, decorate with whipped cream and banana slices. \n\n"
  +"3. Top off with sliced almonds, chocolate syrups, mint leaves, and cigarette cookie on top. \n\n",
  "rating": 3,
  "imageUrl": "http://www.justonecookbook.com/wp-content/uploads/2016/08/Parfait-11.jpg",
  "publishdate": "8/19/2015"
},

{
  "category_id": 1, // id 7
  "recipeName": "Classic Mentaiko Pasta",
  "chef": "Nami ",
  "preparation": ""
  +"1. Bring a large pot of water to boil. Once boiling, add 1-2 tsp. kosher salt and cook the spaghetti until al dente, about 10 minutes (check the package instructions as well). \n\n"
  +"2. In a large bowl, combine 2 Tbsp. milk, 2 Tbsp. heavy whipping cream, 2 Tbsp. unsalted butter, and 1 Tbsp. soy sauce. Don't worry if the butter becomes solidify. Hot spaghetti will melt the butter again.  \n\n"
  +"3. Add freshly ground black pepper and stir to combine. \n\n"
  +"4. Cut each roe sac in half and squeeze out the roe from the sac with hands or knife. \n\n"
  +"5. Add the roe to the bowl and mix well. Discard the membrane. \n\n"
  +"6. When the spaghetti is done, drain and transfer to the large bowl with the sauce. \n\n"
  +"7. Toss to combine until the butter is melted and the sauce is evenly distributed. Taste and adjust with black pepper and kosher salt. \n\n"
  +"8. Serve immediately, garnished with shredded nori. If you can find shiso leaves in a Japanese grocery store, roll them up and cut it into thin strips and garnish. Shiso is a wonderful addition to this dish. \n\n",
  "rating": 4,
  "imageUrl": "http://www.justonecookbook.com/wp-content/uploads/2016/07/Mentaiko-Pasta-580x386.jpg",
  "publishdate": "3/22/2016"
},

{
  "category_id": 1, // id 8
  "recipeName": "Spaghetti alle Vongole",
  "chef": "Nami ",
  "preparation": ""
  +"1. De-grit clams \n\n"
  +"2. Bring a pot of salted water to a boil. Add pasta, stirring constantly in the beginning to prevent it from sticking together. Cook until al dente. Drain pasta into a colander. \n\n"
  +"3. Meanwhile, in a large sauté pan heat the olive oil over medium heat. When it’s hot, add garlic and red chili pepper. Reduce heat to medium low and sauté until fragrant. Be careful not to burn the garlic. \n\n"
  +"4. Add the clams and wine and increase the heat to medium. Quickly cover and steam for 5 minutes or until all the clams have opened. \n\n"
  +"5. Discard the clams that didn’t open and add 1 Tbps. parsley and season with pepper. Transfer the clams to a plate. \n\n"
  +"6. Taste the sauce and season with pepper and salt (clams are already salty so you probably don't need to add too much salt). \n\n"
  +"7. Add the pasta and toss until pasta is coated with the sauce. \n\n"
  +"8. Remove from the heat and place pasta on a serving plate and put clams on top. Garnish with remaining parsley and serve immediately. \n\n",
  "rating": 5,
  "imageUrl": "http://www.justonecookbook.com/wp-content/uploads/2013/06/Clam-Pasta.jpg",
  "publishdate": "5/28/2016"
},

{
  "category_id": 2, // id 9
  "recipeName": "Caesar Salad",
  "chef": "Nami ",
  "preparation": "For Homemade Croutons: \n\n"
  +"1. Preheat the oven to 400F. Crush the garlic clove (or finely mince it) into a large bowl. Add olive oil, salt, pepper, and mix well. Let the garlic infuse the olive oil for a few minutes. \n\n"
  +"2. Meanwhile, slice the bread and cut into about ¾ inch (2 cm) cubes. \n\n"
  +"3. Add the bread cubes into the bowl and toss until the bread is lightly and evenly coated with the olive oil. Spread bread cubes in a single layer on a baking sheet. \n\n"
  +"4. Bake at 400F for 15 minutes, or until golden brown. Turn once halfway through cooking in order to brown all sides of the croutons. Cooking time will depend on the thickness of the bread cubes (mine is about 15-20 minutes). Remove from oven and cool on wire rack completely. After cooling, use immediately, or store in an air-tight container/bag for up to 1 week. \n\n"
  +"For the Caesar Salad: \n\n"
  +"5. In a large bowl, combine the dressing ingredients and whisk until dressing is thick and glossy. The dressing can be made one day in advance. \n\n"
  +"6. Cut the romaine lettuce into bite size pieces and wash them. Drain and dry thoroughly so that the dressing won’t be diluted. \n\n"
  +"7. Gently toss the lettuce and dressing, and then top off with the grated or shaved Parmesan cheese and croutons. \n\n",
  "rating": 4,
  "imageUrl": "http://www.justonecookbook.com/wp-content/uploads/2015/10/Caesar-Salad-IV.jpg",
  "publishdate": "1/11/2016"
},

{
  "category_id": 2, // id 10
  "recipeName": "Shrimp Salad Recipe",
  "chef": "Nami ",
  "preparation": ""
  +"1. Clean shrimp with corn starch and devein (See How to Clean Shrimp). Keep the shell on so the shrimp won’t lose the flavor while being cooked. \n\n"
  +"2. Bring water to a boil in a medium saucepan. Add sake and salt (to remove smell) and the shrimp and reduce the heat to medium. Cook uncovered for 2 minutes or until the shrimp turns pink.  \n\n"
  +"3. Monitor closely to avoid overcooking. The meat of uncooked shrimp will turn from translucent (raw) to pink and opaque (cooked).Remove with a mesh strainer to a bowl of iced water to let cool. The ice bath will help the shrimp have firm texture. \n\n"
  +"4. Peel the shrimp shell and cut into bite size pieces. \n\n"
  +"5. In a small saucepan, bring water to a boil. Once boiling, lower the heat to medium and cook the eggs for 10 minutes. Transfer the eggs to iced water and let cool for 3 minutes to stop cooking. \n\n"
  +"6. Peel the egg shell and cut into small pieces. \n\n"
  +"7. Cut broccoli florets in bite size pieces. Bring water to a boil in the medium saucepan and cook broccoli for 1 minute or till tender. Watch closely to avoid overcooking. \n\n"
  +"8. Transfer to iced water to stop cooking further and drain well. \n\n"
  +"9. Peel the cucumber and cut it in half lengthwise. Then cut into ¼ inch slices. \n\n"
  +"10. Cut avocado into cubes and scoop out the avocado into a large bowl with spoon. \n\n"
  +"11. Put all the ingredients in the bowl, and add mayonnaise and milk. \n\n"
  +"12. Sprinkle salt and freshly ground black pepper and toss all together. Add more salt and pepper to taste, if desired. Serve chilled or at room temperature. \n\n",
  "rating": 5,
  "imageUrl": "http://www.justonecookbook.com/wp-content/uploads/2014/11/Shrimp-Salad-Recipe.jpg",
  "publishdate": "5/28/2016"
}
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function()
    {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
};