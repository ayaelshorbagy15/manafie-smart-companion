import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Hotel, 
  Car, 
  Bus, 
  MapPin, 
  Clock, 
  DollarSign, 
  MessageCircle,
  Star,
  Navigation,
  Calendar,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisitorDashboard = () => {
  const navigate = useNavigate();

  const quickOffers = [
    {
      id: 1,
      type: "Hotel",
      title: "Abraj Al Bait",
      rating: 4.8,
      price: "250 SAR/night",
      distance: "200m from Haram",
      icon: Hotel,
      color: "bg-primary"
    },
    {
      id: 2,
      type: "Car",
      title: "Private Transfer",
      rating: 4.9,
      price: "150 SAR/trip",
      distance: "Available 24/7",
      icon: Car,
      color: "bg-secondary"
    },
    {
      id: 3,
      type: "Bus",
      title: "Shuttle Service",
      rating: 4.5,
      price: "25 SAR/trip",
      distance: "Every 15 mins",
      icon: Bus,
      color: "bg-gold"
    }
  ];

  const umrahSteps = [
    { name: "Ihram", status: "completed", time: "30 min" },
    { name: "Tawaf", status: "current", time: "45 min" },
    { name: "Sa'i", status: "pending", time: "30 min" },
    { name: "Halq/Taqsir", status: "pending", time: "15 min" }
  ];

  return (
    <div className="min-h-screen bg-gradient-celestial">
      {/* Header */}
      <div className="bg-gradient-spiritual text-white p-6 shadow-sacred">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">مرحباً - Welcome</h1>
            <p className="opacity-90">Your blessed journey begins here</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Offers */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Quick Offers</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/booking')}
            >
              View All
            </Button>
          </div>
          
          <div className="grid gap-4">
            {quickOffers.map((offer) => (
              <Card key={offer.id} className="p-4 shadow-gentle hover:shadow-sacred transition-all">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${offer.color} rounded-xl flex items-center justify-center`}>
                    <offer.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{offer.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        {offer.rating}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{offer.distance}</p>
                    <p className="text-primary font-medium">{offer.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Umrah Planner */}
        <section>
          <Card className="p-6 bg-gradient-sacred text-white shadow-sacred">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Umrah Planner</h2>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => navigate('/planner')}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                View Details
              </Button>
            </div>
            
            <div className="space-y-3">
              {umrahSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.status === 'completed' ? 'bg-white text-secondary' :
                    step.status === 'current' ? 'bg-white/20 text-white border-2 border-white' :
                    'bg-white/10 text-white/60'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${step.status === 'current' ? 'text-white' : 'text-white/80'}`}>
                      {step.name}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-white/60">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card 
              className="p-4 cursor-pointer hover:shadow-gentle transition-all"
              onClick={() => navigate('/route-guide')}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Navigation className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Route Guide</h3>
                <p className="text-sm text-muted-foreground">Smart navigation</p>
              </div>
            </Card>

            <Card 
              className="p-4 cursor-pointer hover:shadow-gentle transition-all"
              onClick={() => navigate('/budget')}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-medium">Budget Assistant</h3>
                <p className="text-sm text-muted-foreground">Smart spending</p>
              </div>
            </Card>
          </div>
        </section>

        {/* AI Tips */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-spiritual rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-primary mb-1">AI Recommendation</h3>
              <p className="text-sm text-muted-foreground">
                Best time for Tawaf: 2-4 AM (Low crowd). Consider booking the shuttle service for comfortable transportation.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Chatbot */}
      <Button
        className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-gradient-spiritual shadow-elevated animate-glow"
        onClick={() => navigate('/chatbot')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-elevated">
        <div className="flex items-center justify-around p-3">
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2" onClick={() => navigate('/planner')}>
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Planner</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2" onClick={() => navigate('/budget')}>
            <DollarSign className="h-5 w-5" />
            <span className="text-xs">Budget</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2" onClick={() => navigate('/booking')}>
            <Hotel className="h-5 w-5" />
            <span className="text-xs">Booking</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2" onClick={() => navigate('/chatbot')}>
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">Chat</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashboard;