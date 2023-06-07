module.exports = (sequelize, DataTypes)=>{
  const Users = sequelize.define("Users",{
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
    },
      email_verified:{
      type:DataTypes.STRING,
      allowNull: false,
    },    
   

  })

  return Users;
}

// const mongoose = require("mongoose");
// const { Sequelize, DataTypes } = require("sequelize");



//   const Machine = mongoose.model("MachineData", machineSchema);

//   module.exports = Machine;