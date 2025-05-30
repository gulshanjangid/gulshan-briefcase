
import { Bot } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="flex items-center gap-3 p-4 border-b border-gray-700">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
        <Bot size={16} className="text-white" />
      </div>
      <div>
        <h3 className="text-white font-semibold">AI Assistant</h3>
        <p className="text-gray-400 text-xs">Ask me about Gulshan</p>
      </div>
    </div>
  );
};

export default ChatHeader;
