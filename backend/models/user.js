const mongoose=require("mongoose")
const {Schema}= mongoose

const UserScheama =new Schema({
    email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required: true
    }

})
module.exports = mongoose.model('User',UserScheama)