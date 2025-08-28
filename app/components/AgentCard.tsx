'use client';

import { AIAgent } from '@/app/types';
import { Button } from './ui/button';

interface AgentCardProps {
  agent: AIAgent;
  onSelect: (agent: AIAgent) => void;
  isSelected?: boolean;
}

export function AgentCard({ agent, onSelect, isSelected }: AgentCardProps) {
  return (
    <div
      className={`
        p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
        hover:scale-105 hover:shadow-xl
        ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-lg'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }
      `}
      onClick={() => onSelect(agent)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`p-3 rounded-full text-2xl ${agent.color} text-white`}
        >
          {agent.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{agent.description}</p>
      <Button
        variant={isSelected ? 'primary' : 'secondary'}
        className="w-full"
      >
        {isSelected ? 'Selected' : 'Choose Agent'}
      </Button>
    </div>
  );
}