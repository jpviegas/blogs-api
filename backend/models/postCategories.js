module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: { type: DataTypes.INTEGER, references: { model: 'BlogPosts', key: 'id' } },
    categoryId: { type: DataTypes.INTEGER, references: { model: 'Categories', key: 'id' } },
  }, { timestamps: false });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategories;
};
