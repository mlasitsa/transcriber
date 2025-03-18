/*
File to procees data from video 
Send text to a model to translate it to another language
Use this text to make an audio using same voice as the video
Add this voice to the video

Prompt user if they want to create a cheetsheet
Give options (SHould I do this first of after the parsing)
*/

import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({ model: "gpt-4o-mini", openAIApiKey: process.env.OPENAI_API_KEY });