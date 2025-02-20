const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must contain 3 letters atleast'],
        },
        lastname:{
            type:String,
            minlength:[3,'First name must contain 3 letters atleast'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^|S+@|S+|.|S+$/,'Please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },

    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },

    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'minimum 3 characters'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'minimum capacity is 1 person'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motocycle','auto'],
        },
    },

    location:{
           lat:{
           type:Number,
            },
            lng: {
                type:Number,
            }

    },
})

captainSchema.methods.generateAuthToken=function(){
const token=jwt.sign({_id:this.id},process.env.JWT_SECRET,{expiresIn:'24h'})
return token;
}


captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}


captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema)


module.exports=captainModel;