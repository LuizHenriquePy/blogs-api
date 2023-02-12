const postCategoryModel = (sequelize, dataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      categoryId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      }
    },
    {
      underscored: true,
      tableName: 'posts_categories',
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'Categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId'
      });
  }

  return PostCategory;
}

module.exports = postCategoryModel;