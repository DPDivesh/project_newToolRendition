module.exports = (sequelize, DataTypes)=>{
  const Posts = sequelize.define("Posts",{
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      foreignKey:true,
    },
    TerminalID:{
      type:DataTypes.STRING,
      allowNull:false,
    },
     Name:{
      type:DataTypes.STRING,
      allowNull: false,
    },    
     cashBalance:{
      type:DataTypes.STRING,
      allowNull: false,
    },
     balType:{
      type:DataTypes.STRING,
      allowNull: false,
    },
     estCashOut:{
      type:DataTypes.STRING,
      allowNull: false,
    },
     lastCommunication:{
      type:DataTypes.STRING,
      allowNull: false,
    },
     lastCashWD:{
      type:DataTypes.STRING,
      allowNull: false,
    },
     rejectBalance:{
      type:DataTypes.STRING,
      allowNull: false,
    },    
     balanceAsOf:{
      type:DataTypes.STRING,
      allowNull: false,
    },
     Cassette1:{
      type:DataTypes.STRING,
      allowNull: false,
     },
      minReload:{
        type:DataTypes.STRING,
        allowNull:false
      },
  })
  Posts.associate = (models)=>{
    Posts.hasOne(models.Reports,{
      onDelete:"cascade",
    })
  }
  return Posts;
}

// const mongoose = require("mongoose");
// const { Sequelize, DataTypes } = require("sequelize");



//   const Machine = mongoose.model("MachineData", machineSchema);

//   module.exports = Machine;