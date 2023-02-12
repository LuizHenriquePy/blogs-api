const blogPostModel = (sequelize, dataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: dataTypes.STRING,
    content: dataTypes.STRING,
    published: dataTypes.DATE,
    updated: dataTypes.DATE,
    userId: {
      type: dataTypes.INTEGER,
      foreignKey: true
    }
  },
    {
      underscored: true,
      tableName: 'blog_posts',
      timestamps: false,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
}

module.exports = blogPostModel;