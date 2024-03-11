const { Schema, model } = require('mongoose')

const { createHmac, randomBytes } = require('crypto')

const {createTokenForUser} = require('../services/authentication')

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
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
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "./public/images/default.png"
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
    }, { timestamps: true })

userSchema.pre("save", function (next) {
    try {
        const user = this

        if (!user.isModified("password")) return;

        const salt = randomBytes(16).toString();

        const hashedPassword = createHmac('sha256', salt)
            .update(user.password)
            .digest("hex");

        this.salt = salt
        this.password = hashedPassword

        next();
    } catch (error) {
        console.log("error in pre save", error)
    }

})

// Virtual Function for matching the hash password

userSchema.static("matchPasswordandgenerateToken", async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("User not found!");

    // User password store in db
    const salt = user.salt;
    const hashedPassword = user.password;
    //  *** //

    // User provided password for login 
    const userProvidedHash = createHmac("sha256", salt)
        .update(password)
        .digest("hex");
    //  ****** //

    if (hashedPassword !== userProvidedHash)
        throw new Error("Incorrect Password!")

    // if match password then it will only return user
    const token = createTokenForUser(user)
    return token;

})

const userModel = model('user', userSchema);

module.exports = userModel;