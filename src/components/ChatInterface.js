import React from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
  return (
    <div className="chat-interface">
      <div className="chat-content"></div>
      <div className="chat-input">
        <input type="text" placeholder="Chat with me..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;




