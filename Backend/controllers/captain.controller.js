const captainModel=require('../models/captain.model');
const captainService=require('../services/captain.service');
const {validationResult}=require('express-validator');
const blackListTokenModel=require('../models/blackListToken.model');


module.exports.registerCaptain=async(req,res)=>{
    
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password,fullname,vehicle}=req.body;

    const isCaptainAlreadyExist=await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({errors:[{msg:'Captain already exist'}]});
    }

const hashedPassword=await captainModel.hashPassword(password);

const captain=await captainService.createCaptain({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword,
    color:vehicle.color,
    capacity:vehicle.capacity,
    plate:vehicle.plate,
    vehicleType:vehicle.vehicleType
});

const token=await captainModel.generateAuthToken();

res.status(201).json({captain,token});
        
}


module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}=req.body;

    const captain=await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(404).json({errors:[{msg:'Captain not found'}]});
    }

    const isMatch=await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({errors:[{msg:'Invalid password'}]});
    }

    const token=await captain.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({captain,token});
        
}

module.exports.getCaptainProfile=(req,res)=>{
    res.status(200).json({captain:req.captain});
}

module.exports.logoutCaptain=async(req,res)=>{
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1];

    await blackListTokenModel.create({token});
    
    res.clearCookie('token');
    res.status(200).json({message:'Logged out successfully'});
}