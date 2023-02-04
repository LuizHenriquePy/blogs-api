const categoryModel = (sequelize, dataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      allowNull: false,
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: dataTypes.STRING,
    }
  },
  {
    underscored: true,
    tableName: 'categories',
    timestamps: false,
  });

  return category;
};

module.exports = categoryModel;