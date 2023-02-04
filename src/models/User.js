const userModel = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    displayName: dataTypes.STRING,
    email: dataTypes.STRING,
    image: dataTypes.STRING,
    password: dataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'users',
    timestamps: false,
  }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as:'userId' });
  };

  return User;
};

module.exports = userModel;
