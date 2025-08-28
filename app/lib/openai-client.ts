export async function getAIResponse(messages: { role: string; content: string }[], systemPrompt: string = '') {
  try {
    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gemma:2b', // 👈 change model here
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.message?.content || 'No response from AI';
  } catch (error) {
    console.error('Ollama Error:', error);
    throw new Error('Failed to get AI response');
  }
}
