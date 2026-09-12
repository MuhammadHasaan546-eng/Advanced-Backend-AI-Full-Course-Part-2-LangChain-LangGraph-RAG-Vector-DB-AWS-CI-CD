import express from "express";
import dotenv from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"


dotenv.config();


const app = express();
const PORT = 3000;


const llm = new ChatGoogleGenerativeAI ({
      model: "gemini-2.5-pro",
    temperature: 0,
    maxRetries: 2,
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});