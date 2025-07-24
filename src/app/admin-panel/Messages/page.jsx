'use client';

import { useEffect, useState } from 'react';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:5001/api/message');
    const data = await res.json();
    setMessages(data.messages); // ✅ Correct this line
  };
  

  useEffect(() => {
    fetchMessages();
  }, []);




  return (
    <div className="p-8 text-black">
      <h1 className="text-3xl font-bold mb-6">All Messages</h1>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg._id} className="bg-white shadow p-4 rounded text-black">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{msg.name} ({msg.email})</p>
                <p className="text-gray-700">Phone: {msg.phone}</p>
                <p className="text-gray-900 mt-2 font-semibold">Subject: {msg.subject}</p>
                <p className="mt-1">{msg.message}</p>
              </div>
          

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
