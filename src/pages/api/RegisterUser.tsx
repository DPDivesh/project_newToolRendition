// import {prisma} from "./db"

//  const RegisterUser = async(req:any,res:any) =>{
//   const Users = await prisma.users.findMany();
//   console.log("=======================================Module===================================")



//   const {name,userEmail,email_verified} = req.body;
//   const userCheck:any =await prisma.users.findMany(
//   )

//     console.log("=======================================else===================================")
//     const newUser =await prisma.users.create({
//       //ts-ignore
//       data: {
//         name:name,
//         email:userEmail,
//         email_verified:"true",
//       },
//     }).then(()=>{
//       console.log("User Registered",newUser)
//       res.json("User Registered")
//     }).catch((err:any)=>{
//       if(err){
//         res.status(400).json({error:"err"});
//       }
//     })
//   // }
// }

// export default RegisterUser;