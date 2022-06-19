const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('atractive', {
    //-------------------------------------- ---> OBLIGATORIA
    ID : {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    //-------------------------------------- ---> OBLIGATORIA
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //-------------------------------------- ---> OBLIGATORIA
    difficulty : {
      type : DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false,
    },
    //-------------------------------------- ---> OBLIGATORIA
    duration: {
      type : DataTypes.INTEGER,
      allowNull: false,
    }, 
    season : {
      type : DataTypes.ENUM('summer','winter','otono','primavera', 'all seasons'),
      defaultValue : 'all seasons'
    }
  });
};