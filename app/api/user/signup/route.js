// get post delete put 

import User from "@/app/models/User";
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';


export const POST = async (req) => {
    await Connect();
    try{
        const records = await req.json();
        const {name, email, contact, password} = records;

        //checking if user already exists 
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"user already exist"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);


        const newUser = new User({name,email, contact, password:hashedPassword})

        const savedUser = await newUser.save();
        
        console.log(savedUser);

        return NextResponse.json({message:"User created successfully"},{status:201})
    }
    catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}

