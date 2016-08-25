
exports.up = function(knex, Promise) {
  return knex.schema   

	//<category>
  .createTable('category', function(tbl){
    //PK
    tbl.increments();  
		//UQ / Fields
    tbl.string('description', 50).notNullable().unique('uq_category_description');
    tbl.string('iconUrl', 250).notNullable().defaultTo('n/a');
  })

	//<recipe>
	.createTable('recipe', function(tbl)
	{
		//PK
		tbl.increments();		
		//FK
		tbl.integer('category_id').notNullable().references('id').inTable('category');		
		//Fields
    //tbl.string('recipeName', 100).notNullable().unique('uq_recipe_recipeName').defaultTo('');
    tbl.string('recipeName', 100).notNullable().defaultTo(''); 
		tbl.string('chef', 100).notNullable().defaultTo('');
    tbl.string('preparation', 999).notNullable().defaultTo('');
    //tbl.integer('rating').notNullable().defaultTo(5);
    tbl.integer('rating').nullable().defaultTo(1);
		tbl.string('imageUrl', 250).notNullable().defaultTo('');
    tbl.date('publishdate').nullable();
	})

	//<tag>
  .createTable('ingredient', function (tbl)
  {
    //PK
    tbl.increments();
    //Fields
    tbl.string('name', 100);
    tbl.string('amount', 50);
  })

  //<ingredient_recipe>
  .createTable('ingredient_recipe', function (tbl)
  {
    //PK/FK
    tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredient').onDelete('CASCADE');
    tbl.integer('recipe_id').notNullable().references('id').inTable('recipe').onDelete('CASCADE');
    tbl.primary(['ingredient_id', 'recipe_id']);
  })
};

exports.down = function(knex, Promise) {	
  return knex.schema
    .dropTable('ingredient_recipe')
    .dropTable('ingredient')
    .dropTable('recipe')
    .dropTable('category');  
};