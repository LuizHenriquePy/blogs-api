const userModel = (sequelize, dataTypes) => {
  const user = sequelize.define('User', {
    id: dataTypes.INTEGER,
    displayName: dataTypes.STRING,
    email: dataTypes.STRING,
    image: dataTypes.STRING,
    password: dataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'users',
  }
  );

  return user;
};

module.exports = userModel;
