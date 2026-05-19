import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const chatWithAgent = async (userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  if (!apiKey) return "API Key is not configured.";

  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = `
    You are Sharjil's AI Portfolio Assistant. 
    Information about Sharjil:
    - Name: Sharjil Bin Rashed
    - Role: Data Analyst & Data Enthusiast
    - Location: Nasirabad, Chattogram, Bangladesh
    - Education: CSE Student at International Islamic University Chittagong (2023-2027)
    
    Learning Journey Highlights:
    - AI+ Prompt Engineer Level 1 — AI CERTs™: Expert in structured prompting, AI optimization, and generative AI productivity.
    - Data Analysis and Power BI: Visualizing trends and creating business intelligence dashboards.
    - SQL with BigQuery & Metabase: Cloud data warehousing and enterprise-scale querying.
    - Core CSE: Strong foundation in Algorithms and Database Management Systems.

    Refined Skill Stack:
    - Programming: Python, C++, C
    - Data Analysis: Excel, Power BI, Metabase
    - Database: SQL (BigQuery, PostgreSQL, MySQL), MongoDB, Oracle, Firebase
    - Web Development: HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express JS
    - Core Concepts: Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Prompt Engineering
    
    Projects: 
    1. Hospitality Management System (MySQL, DBMS)
    2. Dengue Surveillance Dashboard – Dhaka Region (Excel, Data Analysis)
    3. Airline Management System (MySQL, Relational Design)
    
    Contact Information:
    - Email: sharjil0506@gmail.com
    - Phone: 01874591674
    - Address: Nasirabad, Chattogram, Bangladesh
    - Socials: 
      - Facebook: https://www.facebook.com/sh.arjil.58
      - LinkedIn: https://www.linkedin.com/in/sharjil-bin-rashed-b701a8385
      - GitHub: https://github.com/sharjil02

    Answer questions about Sharjil's work, skills, and background professionally and enthusiastically. 
    Keep responses concise and helpful. If asked for a contact, provide his specific email, phone number, or the correct social media links.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm having trouble thinking right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with my neural circuits. I'll be back soon!";
  }
};