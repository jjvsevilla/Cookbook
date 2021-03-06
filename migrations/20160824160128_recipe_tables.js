
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
    tbl.string('recipeName', 100).notNullable().unique('uq_recipe_recipeName');
		tbl.string('chef', 100).notNullable().defaultTo('');
    tbl.text('preparation', 999).notNullable().defaultTo('');
    //tbl.integer('rating').notNullable().defaultTo(5);
    tbl.integer('rating').nullable().defaultTo(1);
		tbl.string('imageUrl', 250).notNullable().defaultTo('');
    tbl.date('publishdate').nullable();
	})

	//<ingredient>
  .createTable('ingredient_recipe', function (tbl)
  {
    //PK
    tbl.increments();
    //Fields
    tbl.integer('recipe_id').notNullable().references('id').inTable('recipe').onDelete('CASCADE');
    tbl.string('name', 100);
    tbl.string('amount', 50);
  })

	//<comments>
  .createTable('comment_recipe', function (tbl)
  {
    //PK
    tbl.increments();
    //Fields
    tbl.integer('recipe_id').notNullable().references('id').inTable('recipe').onDelete('CASCADE');
    tbl.text('comment', 999);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('ingredient_recipe')
    .dropTable('recipe')
    .dropTable('category');
};