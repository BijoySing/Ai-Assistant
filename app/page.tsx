'use client';

import { useState } from 'react';
import { AIAgent } from '@/app/types';
import { AgentCard } from '@/app/components/AgentCard';
import { ChatInterface } from '@/app/components/ChatInterface';
import { Header } from '@/app/components/Header';

const agents: AIAgent[] = [
  {
    id: '1',
    name: 'Code Assistant',
    description: 'Helps with programming questions, code reviews, and technical explanations',
    icon: '💻',
    color: 'bg-purple-500',
    // systemPrompt: 'Answer coding questions briefly and clearly. Show only essential code.'

    systemPrompt: 'You are an expert software engineer specializing in Coding. Help users with code examples, clear explanations, and best practices.'
  },
  {
    id: '2',
    name: 'Creative Writer',
    description: 'Assists with content creation, storytelling, and creative projects',
    icon: '📝',
    color: 'bg-green-500',
            // systemPrompt: 'Give short, creative, and to-the-point responses.'

    systemPrompt: 'You are a creative writer and content creator. Help users with writing, brainstorming, and creative projects.'
  },
  {
    id: '3',
    name: 'Research Assistant',
    description: 'Helps with research, information gathering, and knowledge organization',
    icon: '🔍',
    color: 'bg-blue-500',
        // systemPrompt: 'Provide concise, accurate answers in simple words.'

    systemPrompt: 'You are a research assistant. Help users find information, organize knowledge, and understand complex topics.'
  }
];

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Personal Assistants
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from specialized AI Assistant to help you with coding, writing, research, and more.
          </p>
        </section>

        {/* Agents Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Choose Your AI Assistant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onSelect={setSelectedAgent}
                isSelected={selectedAgent?.id === agent.id}
              />
            ))}
          </div>
        </section>

        {/* Chat Interface */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Chat with {selectedAgent?.name || 'Your Assistant'}
          </h2>
          <ChatInterface agent={selectedAgent} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>Nothing is impossible with AI, keep pushing boundaries!</p>
        </div>
      </footer>
    </div>
  );
}