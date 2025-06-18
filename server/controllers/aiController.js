const { GoogleGenAI } =require("@google/genai");
const {conceptExplainPrompt, questionAnswerPrompt} =require('../utils/prompts');

const ai=new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

//gnerate interview ques and ans using Gemini
//route: POST/ api/ai/generate-questions

const generateInterviewQuestions=async(req,res)=>{
    try {

        const {topicsToFocus, numberOfQuestions}=req.body;
        if(!topicsToFocus ||!numberOfQuestions){
            return res.status(400).json({message:"missing required fields"});
        }

        const prompt=questionAnswerPrompt(topicsToFocus,numberOfQuestions);
                // console.log(prompt)

        const response= await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:prompt,
            // contents: "Explain how AI works in a few words",
        });
        let rawText=response.text;
        // clean it: remove ```json and ``` from beginning and end
        const cleanedText=rawText
            .replace(/^```json\s*/,"")//removing starting  ```json
            .replace(/```$/,"")//remove ending ```
            .trim()//remove extra spaces

            //Now its safe to parse
            const data=JSON.parse(cleanedText);
            res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message:"Failed to generate questions",
            error: error.message,
        });
    }
}

const generateFeedback= async(req,res)=>{
    try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Missing question or answer" });
    }
    const prompt=conceptExplainPrompt(question, answer);
                // console.log(prompt)

        const response= await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:prompt,
            // contents: "Explain how AI works in a few words",
        });
        let rawText=response.text;
        // clean it: remove ```json and ``` from beginning and end
        const cleanedText=rawText
            .replace(/^```json\s*/,"")//removing starting  ```json
            .replace(/```$/,"")//remove ending ```
            .trim()//remove extra spaces

            //Now its safe to parse
            const data=JSON.parse(cleanedText);
            res.status(200).json(data);
    } catch (error) {
        
    }
}

module.exports={generateInterviewQuestions,generateFeedback};