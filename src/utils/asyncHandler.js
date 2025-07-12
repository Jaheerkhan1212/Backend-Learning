// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next);

//     } catch (error) {
//         res.status(err.code||500).json({
//             message:err.message,
//             success:false
//         })
//     }
// }

//other syntax (both are correct)
const asyncHandler=(fn)=>(req,res,next)=>{
Promise.resolve(fn(req,res,next)).catch((error)=>{next(error)})
}

export {asyncHandler}