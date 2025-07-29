import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
import jwt from "jsonwebtoken";

// what is a req body? req.body is an object containing data from the client (POST request)

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create([{ name, email, password: hashedPassword }], { session });

        const token = jwt.sign({userId: newUser[0]._id}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUser[0],
            }
        })
        
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }

}

export const signIp = async (req, res, next) => { 
    
}

export const signOut = async (req, res, next) => { }

