
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  disabled: boolean;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress, disabled }: ChatInputProps) => {
  return (
    <div className="p-4 border-t border-gray-700">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask about Gulshan..."
          className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
        />
        <Button
          onClick={onSend}
          disabled={disabled}
          size="icon"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 disabled:opacity-50"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
