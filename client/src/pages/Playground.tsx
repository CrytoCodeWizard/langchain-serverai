import React, { useState } from 'react';

interface IMessage {
  author: 'user' | 'bot';
  text: string;
  timestamp: string;  // Adding timestamp for each message
}

const Playground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSendPrompt = () => {
    const currentTime = new Date().toLocaleTimeString();

    const userMessage: IMessage = {
      author: 'user',
      text: prompt,
      timestamp: currentTime,
    };

    setMessages(messages => [...messages, userMessage]);

    // Simulating a response from the bot
    const botResponse: IMessage = {
      author: 'bot',
      text: `Chatgpt: ${prompt}`,
      timestamp: currentTime,
    };

    setTimeout(() => {
      setMessages(messages => [...messages, botResponse]);
    }, 1000); // simulate a slight delay for bot response

    setPrompt('');
  };

  return (
    <div className="max-w-2xl mx-auto my-4 p-4 bg-white rounded shadow-lg">
      <div className="messages overflow-auto h-[80vh] bg-gray-100 rounded-md p-3 space-y-2">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.author === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md bg-${message.author === 'user' ? 'blue-500' : ''} ${message.author === 'user' ? 'text-white' : 'text-black'} rounded-lg p-2`}>
              <p>{message.text}</p>
              <p className="text-xs text-gray-300 text-right">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="form-input mt-1 block flex-1 rounded-md border-gray-300 shadow-sm px-4"
          placeholder="Type your message here..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          onClick={handleSendPrompt}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Playground;
