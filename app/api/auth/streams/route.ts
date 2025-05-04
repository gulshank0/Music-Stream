import { NextRequest,NextResponse } from "next/server";
import{ z } from "zod";
import { prismaClient } from "@/app/lib/db";

const YT_REGEX = new RegExp(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:&t=(\d+)s)?$/);

const CreateStreamSchema = z.object({
    creatorId:z.string(),
    url:z.string()
});


export async function POST(req:NextRequest) {

try{  
    
    const data = CreateStreamSchema.parse(await req.json());
    const isYT=data.url.includes("youtube.com");
    if(!isYT){
        return NextResponse.json({
            message:"Invalid URL format"
        },{
            status:400
        })
    }
    const extractedId = data.url.split("?v=")[1];
 await  prismaClient.stream.create({
    data:{
    userId:data.creatorId,
   url:data.url,
   extractedId,
   type:"Youtube"
    }
})
} catch (e: unknown) {
  console.error("Error creating stream:", e);
  return NextResponse.json({
        message:"Error while adding stream",
        error: e instanceof Error ? e.message : "Unknown error"
    },{
        status:411
    })
}
}
