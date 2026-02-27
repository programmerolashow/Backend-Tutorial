import mongoose, { Schema } from "mongoose";

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

export const user = mongoose.model("user", userSchema)