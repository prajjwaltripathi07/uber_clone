const captainModel=require('../models/captain.model');
const captainService=require('../services/captain.service');
const {validationResult}=require('express-validator');


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