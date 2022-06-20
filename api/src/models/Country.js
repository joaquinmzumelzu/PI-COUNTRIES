const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    //-------------------------------------- ---> OBLIGATORIA
    ID : {
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull: false,
    },
    //-------------------------------------- ---> OBLIGATORIA
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //-------------------------------------- ---> OBLIGATORIA
    img : {
      type : DataTypes.TEXT,
      allowNull: false,
    },
    //-------------------------------------- ---> OBLIGATORIA
    continent: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    // //--------------------------------------
    capitalCity : {
      type : DataTypes.STRING,
      allowNull: false,
    },
    // //--------------------------------------
    subRegion : {
      type : DataTypes.STRING
    },
    //--------------------------------------
    area :{
      type : DataTypes.INTEGER
    },
    //--------------------------------------
    population : {
      type: DataTypes.INTEGER
    }
  });
};
