import { NextRequest,NextResponse } from "next/server";
import{ z } from "zod";
import { prismaClient } from "@/app/lib/db";
const CreateStreamSchema = z.object({
    creatorId:z.string(),
    url:z.string()
});


export async function POST(req:NextRequest) {

try{  
    
    const data = CreateStreamSchema.parse(await req.json());


prismaClient.stream.create({
    userId:,
    strea
})


}catch (e: any) {
    return NextResponse.json({
        message:"Error while adding stream"
    },{
        status:411
    })
}
}
