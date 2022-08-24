module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, defaultValue: 1 },
    published: { type: DataTypes.DATE, defaultValue: '2011-08-01T19:58:00.000Z' },
    updated: { type: DataTypes.DATE, defaultValue: '2011-08-01T19:58:01.000Z' },
  }, { timestamps: false });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
    // BlogPosts.belongsToMany(models.Categories, { through: 'PostsCategories', as: 'categories' });
  };
  return BlogPosts;
};
