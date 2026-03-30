import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "@/lib/chatbot-knowledge";

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Map chat messages to Anthropic format
    const anthropicMessages = messages.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })
    );

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages: anthropicMessages,
    });

    const textBlock = response.content.find((block) => block.type === "text");
    const text = textBlock && textBlock.type === "text" ? textBlock.text : "";

    return Response.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again or call our office directly." },
      { status: 500 }
    );
  }
}
