import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 1,
            maxLength: 30
        },

        password: {
            type: String,
            required: true,
            maxLength: 100,
            minLength: 6
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,

        }
    },

    {
        timestamps: true
    }
)

// bcrypt in action - Hashing Password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return (next);
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

// Passwords Comparison
userSchema.method.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("user", userSchema)