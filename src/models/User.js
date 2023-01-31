const userModel = (sequelize, dataTypes) => {
  const user = sequelize.define('User', {
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

  return user;
};

module.exports = userModel;
