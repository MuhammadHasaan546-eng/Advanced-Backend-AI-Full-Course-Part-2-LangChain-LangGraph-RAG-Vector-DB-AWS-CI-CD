import express from "express";
import dotenv from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 3000;

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash",
  temperature: 0,
  maxRetries: 2,
});

app.post("/ai", async (req, res) => {
  try {
    console.log(req.body);

    const { input } = req.body;
    const response = await llm.invoke(input);

    return res.status(200).json({ ai: response.content });
  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});