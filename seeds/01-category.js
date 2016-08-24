exports.seed = function(knex, Promise) {
  var tblName = 'category';
  var rows =
  [
    {
      "description": "Pastas",
      "iconUrl": "http://icons.iconarchive.com/icons/icons-land/3d-food/32/Dish-Pasta-Spaghetti-icon.png"
    }, 
    {
      "description": "Salads",
      "iconUrl": "http://icons.iconarchive.com/icons/aha-soft/desktop-buffet/32/Salad-icon.png"
    }, 
    {
      "description": "Meat",
      "iconUrl": "http://icons.iconarchive.com/icons/graphicloads/food-drink/32/meat-icon.png"
    }, 
    {
      "description": "Desserts",
      "iconUrl": "http://icons.iconarchive.com/icons/archigraphs/tea-party/32/Tea-Cake-icon.png"
    }
  ];    
  return knex(tblName)
    .del() //Remove all rows from table
    .then(function()
    {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
};