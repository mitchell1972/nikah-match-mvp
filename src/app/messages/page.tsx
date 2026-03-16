'use client';

import { useState } from 'react';
import {
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  CheckCircle,
  MessageCircle,
  ArrowLeft,
} from 'lucide-react';
import { mockConversations } from '@/lib/mock-data';

export default function MessagesPage() {
  const [selectedConv, setSelectedConv] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedConversation = mockConversations.find((c) => c.id === selectedConv);

  const mockMessages = [
    { id: '1', senderId: 'them', content: 'Assalamu Alaikum! How are you?', time: '10:30 AM' },
    { id: '2', senderId: 'me', content: 'Walaikum Assalam! I am doing well, Alhamdulillah. How about you?', time: '10:32 AM' },
    { id: '3', senderId: 'them', content: 'Alhamdulillah, I am good. I saw your profile and found it very interesting.', time: '10:35 AM' },
    { id: '4', senderId: 'me', content: 'Thank you! I appreciate that. Your profile is impressive as well.', time: '10:37 AM' },
    { id: '5', senderId: 'them', content: 'JazakAllah! Would you like to know more about my family background?', time: '10:40 AM' },
  ];

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleSend = () => {
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 160px)' }}>
          <div className="flex h-full">
            {/* Conversation List */}
            <div
              className={`${
                selectedConv ? 'hidden md:flex' : 'flex'
              } flex-col w-full md:w-80 border-r border-gray-100`}
            >
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search conversations..."
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {mockConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConv(conv.id)}
                    className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 text-left ${
                      selectedConv === conv.id ? 'bg-primary-50' : ''
                    }`}
                  >
                    <div className="relative shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          conv.user.gender === 'female'
                            ? 'bg-gradient-to-br from-primary-400 to-primary-600'
                            : 'bg-gradient-to-br from-blue-400 to-blue-600'
                        }`}
                      >
                        {getInitials(conv.user.name)}
                      </div>
                      {conv.user.isOnline && <div className="online-dot" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 text-sm truncate">{conv.user.name}</h3>
                        <span className="text-xs text-gray-400 shrink-0">{formatTime(conv.lastMessage.timestamp)}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-0.5">{conv.lastMessage.content}</p>
                    </div>
                    {conv.unreadCount > 0 && (
                      <span className="bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shrink-0">
                        {conv.unreadCount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className={`${selectedConv ? 'flex' : 'hidden md:flex'} flex-col flex-1`}>
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                    <button
                      onClick={() => setSelectedConv(null)}
                      className="md:hidden p-1 text-gray-400 hover:text-gray-600"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          selectedConversation.user.gender === 'female'
                            ? 'bg-gradient-to-br from-primary-400 to-primary-600'
                            : 'bg-gradient-to-br from-blue-400 to-blue-600'
                        }`}
                      >
                        {getInitials(selectedConversation.user.name)}
                      </div>
                      {selectedConversation.user.isOnline && <div className="online-dot" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm flex items-center gap-1.5">
                        {selectedConversation.user.name}
                        {selectedConversation.user.isVerified && (
                          <CheckCircle className="w-3.5 h-3.5 text-primary-600" />
                        )}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {selectedConversation.user.isOnline ? 'Online' : selectedConversation.user.lastActive}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
                        <Video className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {mockMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                            msg.senderId === 'me'
                              ? 'bg-primary-600 text-white rounded-br-md'
                              : 'bg-gray-100 text-gray-800 rounded-bl-md'
                          }`}
                        >
                          <p>{msg.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.senderId === 'me' ? 'text-white/70' : 'text-gray-400'
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <button
                        onClick={handleSend}
                        className="p-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Conversation</h3>
                    <p className="text-gray-500 text-sm">Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
