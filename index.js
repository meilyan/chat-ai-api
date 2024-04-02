import express from "express";
import axios from "axios";
import env from "dotenv";


const app = express();
const port = 3000;

env.config();

const API_URL = process.env.SECRET_API;

app.get("/:prompt", async (req, res) => {
    const prompt = req.params.prompt
    try {
        const result = await axios.get(`${API_URL}${prompt}&uid=1`);
        res.json(result.data.gpt4)
    } catch (error) {
        console.log(error)
    }
})


app.listen(port, () => {
    console.log(`Runinng on https://localhost:${port}`);
})