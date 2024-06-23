import React from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
  return (
    <div className="chat-interface">
      <div className="chat-header">Chat</div>
      <div className="chat-content"></div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;

