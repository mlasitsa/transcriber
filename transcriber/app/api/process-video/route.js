/*
File to procees data from video 
Send text to a model to translate it to another language
Use this text to make an audio using same voice as the video
Add this voice to the video

Prompt user if they want to create a cheetsheet
Give options (Should I do this first of after the parsing)
*/

import { ElevenLabsClient } from "elevenlabs";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req) {
    
    try {
        const { file } = await req.json()
        if (!file) return Response.json({ error: "Missing URL parameter" }, { status: 400 });

        const client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
        const data = await client.speechToText.convert({
                file: file,
                model_id: "scribe_v1"
            });

        const response = data.text 
        console.log(data)
        console.log(response)

        return Response.json({ response }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "An error occurred" }, { status: 500 });
    }

}


