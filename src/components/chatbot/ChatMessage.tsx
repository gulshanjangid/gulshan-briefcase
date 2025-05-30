
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex items-start gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
          message.sender === 'user' 
            ? 'bg-blue-500' 
            : 'bg-gradient-to-r from-yellow-400 to-orange-500'
        }`}>
          {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
        </div>
        <div className={`rounded-2xl px-3 py-2 text-sm ${
          message.sender === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-800 text-gray-100 border border-gray-700'
        }`}>
          {message.text}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
