const ai = require("../config/gemini")
const { interviewReportSchema, geminiResponseSchema }=require("../schemas/interviewReport.schema")

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    const prompt = `
    You are an expert technical recruiter and interview coach with 15+ years of experience.
    Analyze the candidate's profile against the job description and generate a comprehensive interview preparation report.
    ## Resume
    ${resume}
    ## Job Description
    ${jobDescription}
    ## Candidate Self-Description
    ${selfDescription}
    `

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: geminiResponseSchema,  // plain JSON Schema, no zod conversion
        }
    })

    const parsed = JSON.parse(response.text)

    // Validate shape with Zod before saving to DB
    return interviewReportSchema.parse(parsed)
}

module.exports = { generateInterviewReport }