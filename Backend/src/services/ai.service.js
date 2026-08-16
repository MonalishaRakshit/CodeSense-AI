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

//dotenv is used to load secret/configuration values from your .env file into process.env. (apiKey: process.env.GOOGLE_GEMINI_KEY)
/*
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
*/

require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");
const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(code) {
  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: `
    You are a Senior Software Engineer and an expert Code Reviewer.

    Review the following code thoroughly.

    Analyze the code based on these criteria:

    1. Correctness and Bugs
      - Identify logical errors.
      - Find potential runtime errors.
      - Detect missing validations.
      - Point out edge cases that are not handled.

    2. Performance and Efficiency
      - Identify unnecessary operations.
      - Suggest ways to improve time complexity.
      - Suggest ways to improve space complexity.

    3. Readability and Maintainability
      - Check code formatting.
      - Suggest better variable and function names.
      - Recommend clean code practices.
      - Identify duplicate or unnecessary code.

    4. Security
      - Detect potential security vulnerabilities.
      - Identify unsafe coding practices.
      - Suggest secure alternatives.

    5. Key Focus Areas
      - List the most important problems that should be fixed first.

    6. Improvement Steps
      - Provide step-by-step instructions to improve the code.

    7. Improved Code
      - Rewrite the code using best practices.

    Use the following response format:

    ## Code Review

    ### Bugs
    - ...

    ### Performance Issues
    - ...

    ### Readability Issues
    - ...

    ### Security Issues
    - ...

    ### Key Focus
    - ...

    ### Steps for Improvement
    1. ...
    2. ...
    3. ...

    ### Improved Code

    \`\`\`
    <improved code>
    \`\`\`

    Review this code:


    Code: ${code}   `,
  });

  return response.text;
}

module.exports = generateContent;
