/*
import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

const interaction = await ai.interactions.create({
  model: "gemini-3.6-flash",
  input: "Explain how AI works in a few words",
});

console.log(interaction.output_text);
*/

//dotenv is used to load secret/configuration values from your .env file into process.env.
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");
const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(prompt) {
  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = generateContent;
