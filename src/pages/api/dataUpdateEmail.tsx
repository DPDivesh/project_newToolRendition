// const emailDatabaseUpdate=async()=>{
//     const nodemailer = require("nodemailer")
//     const transporter = nodemailer.createTransport({
//       service:"hotmail",
//       auth:{
//         user:SECRET_USER_NAME,
//         pass:SECRET_USER_EMAILPASS,
//       },
//       debug:true,
//       logger:true
//     });
//     const sendSummary =async(summaryInfo: Iterable<unknown> | ArrayLike<unknown>)=>{
//     let answer: unknown[] =[];
//     let filteredAnswer: any[] =[];
//     Array.from(summaryInfo).map((data:any) => {
//         //the min reload is currently being taken from the regenerated profile which uses only the default need to update 
//         if (parseInt(data.cashBalance) < parseInt(data.minReload) && data.Name != "undefined") {
//           answer.push(data);
//         }
//       })
  
  
    
//     answer.map((filteredData:any) => {
//         filteredAnswer.push(filteredData.Name);
//       })
//     return filteredAnswer;
//   }
//     let summaryResult = await sendSummary(allPosts);
//     if(summaryResult.length!=0){
//       const options ={
//         from:"outlook_FF5E77480F875B0A@outlook.com",
//         to:["diveshpatel39@gmail.com","diveshpatel39@yahoo.com"],
//         subject:"Sending Email with Nodemailer",
//         text:`${summaryResult}`
//       };
      
//       transporter.sendMail(options, function(err: any,info: any){
//         if(err){
//           return;
//         }
//       });
      
//     }
  
//     }