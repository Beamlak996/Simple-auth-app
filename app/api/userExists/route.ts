import { connectMongoDB } from "@/app/libs/mongodb"
import User from "@/app/models/users"
import { NextResponse } from "next/server"


export const POST = async (request: Request)=>{
    try {
        await connectMongoDB()
        const { email } = await request.json()
        const user = await User.findOne({ email }).select("_id")
        console.log("User: ", user)
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}  