export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface AIAgent {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  systemPrompt: string;
}