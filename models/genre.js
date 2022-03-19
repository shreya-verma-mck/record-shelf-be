const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Genre.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    imageUrl: {
      field: 'image_url',
      type: DataTypes.STRING
    },
    createdAt: {
      field: 'created_at',
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      field: 'updated_at',
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    sequelize,
    modelName: 'genres',
  });
  return Genre;
};
