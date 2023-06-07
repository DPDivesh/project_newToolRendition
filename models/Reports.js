module.exports = (sequelize, DataTypes)=>{
  const Reports = sequelize.define("Reports",{
   reportBody:{
    type:DataTypes.STRING,
    allowNull:false
   },
  })
  return Reports;
}
