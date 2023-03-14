const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
    ID: {
      type: DataTypes.UUID,
      PimaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    background_image: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    source: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
