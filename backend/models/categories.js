module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  // Categories.associate = (models) => {
  //  Categories.belongsToMany(models.Categories, { through: 'PostsCategories', as: 'categories' });
  // };
  return Categories;
};
