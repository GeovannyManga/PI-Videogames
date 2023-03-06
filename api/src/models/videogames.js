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
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Plataformas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Fecha_de_Lamzamiento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Rating: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
