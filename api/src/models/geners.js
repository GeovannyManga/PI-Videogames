const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('geners', {
    ID: {
      type: DataTypes.UUID,
      PimaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
