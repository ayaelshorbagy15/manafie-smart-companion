import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  ArrowLeft, 
  Bot, 
  User, 
  Clock,
  MapPin,
  DollarSign,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
  suggestions?: string[];
}

const ChatBot = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "السلام عليكم! Welcome to your Smart Makkah Assistant. How can I help you today?",
      timestamp: "2:30 PM",
      suggestions: [
        "Best time for Tawaf?",
        "Nearest hotel deals",
        "Traffic updates",
        "Budget planning"
      ]
    }
  ]);

  const quickQuestions = [
    { icon: Clock, text: "What's the best time for Umrah?", color: "bg-primary" },
    { icon: MapPin, text: "How to reach the Haram?", color: "bg-secondary" },
    { icon: DollarSign, text: "Budget recommendations", color: "bg-gold" },
    { icon: Star, text: "Spiritual guidance", color: "bg-primary-light" }
  ];

  const handleSend = () => {
    if (message.trim()) {
      const newUserMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: generateBotResponse(message),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: getSuggestions(message)
      };

      setMessages(prev => [...prev, newUserMessage, botResponse]);
      setMessage("");
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('tawaf') || lowerMessage.includes('طواف')) {
      return "Best times for Tawaf: 2-4 AM (lowest crowd), 10 PM-12 AM (moderate). Current wait time: ~15 minutes. Would you like me to book a guided session?";
    } else if (lowerMessage.includes('hotel') || lowerMessage.includes('فندق')) {
      return "I found 3 great hotels near Haram: Abraj Al Bait (200m, 4.8★, 250 SAR), Fairmont (500m, 4.7★, 180 SAR), Raffles (300m, 4.9★, 320 SAR). Shall I show details?";
    } else if (lowerMessage.includes('budget') || lowerMessage.includes('ميزانية')) {
      return "I can help optimize your budget! Please share: 1) Your total budget 2) Duration of stay 3) Priorities (comfort/cost/location). I'll create a personalized plan.";
    } else if (lowerMessage.includes('traffic') || lowerMessage.includes('مرور')) {
      return "Current traffic: Zone A (Light), Mataf Area (Moderate), Transport Hub (Heavy). Recommended route: Take shuttle from Gate 79. ETA: 12 minutes.";
    }
    
    return "I understand you're asking about " + userMessage + ". Let me provide you with the most relevant and up-to-date information. How else can I assist your blessed journey?";
  };

  const getSuggestions = (userMessage: string): string[] => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('tawaf')) {
      return ["Book guided Tawaf", "Check crowd levels", "Prayer times"];
    } else if (lowerMessage.includes('hotel')) {
      return ["Compare prices", "Check availability", "View amenities"];
    } else if (lowerMessage.includes('budget')) {
      return ["Create budget plan", "Find deals", "Track expenses"];
    }
    
    return ["More details", "Other options", "Book now"];
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
    handleSend();
  };

  const handleSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-celestial flex flex-col">
      {/* Header */}
      <div className="bg-gradient-spiritual text-white p-4 shadow-sacred">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-semibold">Smart Assistant</h1>
              <p className="text-sm opacity-80">Always here to help</p>
            </div>
          </div>
          <div className="ml-auto">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Online
            </Badge>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 custom-scroll">
        <div className="space-y-4 pb-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex space-x-3 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'user' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  {msg.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <Card className={`p-3 shadow-gentle ${
                    msg.type === 'user' ? 'bg-primary text-white' : 'bg-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </Card>
                  
                  <div className={`flex items-center space-x-2 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                    <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                  </div>

                  {msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs h-8"
                          onClick={() => handleSuggestion(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Quick Questions */}
      <div className="p-4 bg-white border-t border-border">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Questions</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickQuestions.map((question, index) => (
            <Card 
              key={index}
              className="p-3 cursor-pointer hover:shadow-gentle transition-all"
              onClick={() => handleQuickQuestion(question.text)}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 ${question.color} rounded-md flex items-center justify-center`}>
                  <question.icon className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs flex-1">{question.text}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-border">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Type your message... اكتب رسالتك"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button 
            onClick={handleSend}
            disabled={!message.trim()}
            className="bg-gradient-spiritual hover:opacity-90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;