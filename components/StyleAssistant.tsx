
import React, { useState, useRef, useEffect } from 'react';
import { getStylingAdvice } from '../services/gemini';
import { Message, Product } from '../types';

interface StyleAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  availableProducts: Product[];
}

const StyleAssistant: React.FC<StyleAssistantProps> = ({ isOpen, onClose, availableProducts }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Namaste! I am Harshita, your personal fashion curator. Looking for styling tips for a wedding, or want to know what goes best with a Banarasi saree?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const productContext = availableProducts.map(p => `${p.name} (${p.category})`).join(', ');
    const response = await getStylingAdvice(userText, productContext);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] w-full max-w-sm sm:max-w-md h-[600px] flex flex-col bg-white shadow-2xl rounded-2xl border border-royal-gold/20 overflow-hidden transition-all animate-in slide-in-from-bottom-10">
      <div className="bg-deep-maroon p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-royal-gold flex items-center justify-center font-bold text-deep-maroon">HF</div>
          <div>
            <h3 className="text-white font-serif font-bold text-sm">Harshita</h3>
            <p className="text-[10px] text-royal-gold uppercase tracking-widest">AI Fashion Expert</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fdfdfd]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-deep-maroon text-white rounded-tr-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-royal-gold rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-royal-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-royal-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="relative">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about styling..."
            className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-gold text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-royal-gold text-white rounded-lg disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-2">Powered by Gemini AI • Harshita is here to help you shine.</p>
      </div>
    </div>
  );
};

export default StyleAssistant;
