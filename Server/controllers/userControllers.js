const User=require('../model/usersModel')
const bcrypt=require('bcrypt')

module.exports.register =async (req, res, next) => {    
    // console.log(req.body)
    try{
        const {username,email,password}=req.body;
    const userNameCheck=await User.findOne({username});
    if(userNameCheck){
        return res.json({msg:"Username already in use",status:false})
    }
    const emailCheck=await User.findOne({email});
    if(emailCheck){
        return res.json({msg:"Email already in use",status:false})
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        email,
        username,
        password:hashedPassword
    })
    delete user.password;
    return res.json({status:true,user})
    }
    catch(error){
        next(error);
    }
};
