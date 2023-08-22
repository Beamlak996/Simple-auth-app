import { connectMongoDB } from "@/app/libs/mongodb"
import User from "@/app/models/users"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"


export const POST = async (request: Request)=>{
    try {
        const { name, email, password } = await request.json()
        const hashedPassword = await bcrypt.hash(password, 12);
        await connectMongoDB()
        await User.create({ name, email, password });
        return NextResponse.json({message: "User registered", status: 201})
    } catch (error) {
        return NextResponse.json({message: "An Error occured", status: 500})
    }
}