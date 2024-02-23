const {Schema, model}  = require('mongoose')

const userSchema = new Schema(
    {
        fullName: {
            type:String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        salt: {
            type: String,
            
        },
        password: {
            type:String,
            required: true,
        },
        profileImage: {
            type:String,
            default: "/images/default.png"
        },
        role: {
            type: String,
            enum: ["USER","ADMIN"],
            default: "USER",
        },
    },{timestamps: true})


const User = model("user",userSchema);

module.exports = User