const questionAnswerPrompt =(topicsToFocus, numberOfQuestions)=>(`
    You are an AI trained to generate techinal interview questions and answers.
    
    Task:
    -Role: SDE
    -The candidate is focusing on early career options, might be in penultimate/final year or recent graduate
    -Focus Topics: ${topicsToFocus}
    -Write ${numberOfQuestions} interview questions
    -For each question the candidate will answer and then you have give feedback and generate a detailed but beginner-friendly answer.
    -If the answer needs a code example,add a small code block inside.
    -keep formatting very clean
    -Return a pure JSON array like:
    [
        {
            "question" : "Question here?",
            "answer":"Answer here."
        },
    ...
    ]
    Important: Do NOT add any extra text.Onlt return vaild JSON.
    `
)

const conceptExplainPrompt =(question,answer)=>`
    You are an AI trained to generate explanations for a given interview question.

    TASK:
    -Give feedback of the follwing question's answer, in depth as if you're teaching a beginner developer.
    -Question:${question}
    -Answer:${answer}
    -You are helping the user do a mock interview so after feedback provide a short and concise summary of that concept/
    -Keep the formatting very clean and clear
    -Return the result as a valid JSON object in the following format:
    {   
        "title":"Short title here",
        "feedback":"feedback here"
            
    }
    
    Important: do NOT add any extra text outside the JSON format.Only return the valid JSON.
    `

module.exports ={questionAnswerPrompt,conceptExplainPrompt};