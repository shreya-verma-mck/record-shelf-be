const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Record.belongsTo(models.artists, {
        foreignKey: 'artistId',
      });
      Record.belongsTo(models.genres, {
        foreignKey: 'genreId',
      });
      Record.hasMany(models.likes);
    }
  }
  Record.init({
    name: DataTypes.STRING,
    albumArtUrl: {
      field: 'album_art_url',
      type: DataTypes.STRING,
    },
    artistId: {
      field: 'artist_id',
      type: DataTypes.INTEGER,
    },
    genreId: {
      field: 'genre_id',
      type: DataTypes.INTEGER,
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
    modelName: 'records',
  });
  return Record;
};
