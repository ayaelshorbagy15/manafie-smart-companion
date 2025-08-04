import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  ArrowLeft, 
  DollarSign, 
  Calendar, 
  Users, 
  Star,
  Hotel,
  Car,
  Utensils,
  ShoppingBag,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BudgetAssistant = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState([1500]);
  const [duration, setDuration] = useState("3");
  const [travelers, setTravelers] = useState("2");
  const [priorities, setPriorities] = useState<string[]>([]);

  const priorityOptions = [
    { id: "comfort", label: "Comfort", icon: Star },
    { id: "location", label: "Close to Haram", icon: Hotel },
    { id: "transport", label: "Transportation", icon: Car },
    { id: "food", label: "Dining", icon: Utensils }
  ];

  const togglePriority = (priority: string) => {
    setPriorities(prev => 
      prev.includes(priority) 
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };

  const budgetBreakdown = {
    accommodation: Math.round(budget[0] * 0.45),
    transportation: Math.round(budget[0] * 0.20),
    food: Math.round(budget[0] * 0.25),
    shopping: Math.round(budget[0] * 0.10)
  };

  const recommendations = [
    {
      category: "Accommodation",
      option: "Fairmont Makkah",
      price: "180 SAR/night",
      rating: 4.7,
      distance: "500m from Haram",
      savings: "Save 25% vs premium hotels"
    },
    {
      category: "Transportation", 
      option: "Shuttle + Occasional Taxi",
      price: "40 SAR/day",
      rating: 4.5,
      distance: "Every 15 minutes",
      savings: "60% vs private car"
    },
    {
      category: "Dining",
      option: "Mix of hotel & local restaurants",
      price: "80 SAR/day per person",
      rating: 4.6,
      distance: "Within 300m",
      savings: "40% vs hotel-only dining"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-celestial">
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
          <div className="flex-1">
            <h1 className="text-xl font-bold">Budget Assistant | مساعد الميزانية</h1>
            <p className="text-sm opacity-80">Smart planning for your blessed journey</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Budget Input */}
        <Card className="p-6 shadow-gentle">
          <h2 className="text-lg font-semibold mb-4">Plan Your Budget</h2>
          
          <div className="space-y-6">
            {/* Total Budget */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Total Budget: {budget[0]} SAR
              </Label>
              <Slider
                value={budget}
                onValueChange={setBudget}
                max={5000}
                min={500}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>500 SAR</span>
                <span>5000 SAR</span>
              </div>
            </div>

            {/* Duration & Travelers */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="duration" className="text-sm font-medium">Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  min="1"
                  max="30"
                />
              </div>
              <div>
                <Label htmlFor="travelers" className="text-sm font-medium">Travelers</Label>
                <Input
                  id="travelers"
                  type="number"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  min="1"
                  max="10"
                />
              </div>
            </div>

            {/* Priorities */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Your Priorities</Label>
              <div className="grid grid-cols-2 gap-2">
                {priorityOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={priorities.includes(option.id) ? "default" : "outline"}
                    className="justify-start h-auto p-3"
                    onClick={() => togglePriority(option.id)}
                  >
                    <option.icon className="h-4 w-4 mr-2" />
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Budget Breakdown */}
        <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 shadow-gentle">
          <h2 className="text-lg font-semibold mb-4">Smart Budget Breakdown</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <Hotel className="h-5 w-5 text-primary" />
                <span className="font-medium">Accommodation</span>
              </div>
              <span className="font-semibold text-primary">{budgetBreakdown.accommodation} SAR</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <Car className="h-5 w-5 text-secondary" />
                <span className="font-medium">Transportation</span>
              </div>
              <span className="font-semibold text-secondary">{budgetBreakdown.transportation} SAR</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <Utensils className="h-5 w-5 text-gold" />
                <span className="font-medium">Food & Dining</span>
              </div>
              <span className="font-semibold text-gold">{budgetBreakdown.food} SAR</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Shopping & Misc</span>
              </div>
              <span className="font-semibold text-muted-foreground">{budgetBreakdown.shopping} SAR</span>
            </div>
          </div>
        </Card>

        {/* AI Recommendations */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">AI Recommendations</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Optimized
            </Badge>
          </div>
          
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <Card key={index} className="p-4 shadow-gentle hover:shadow-sacred transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {rec.category}
                    </Badge>
                    <h3 className="font-semibold">{rec.option}</h3>
                    <p className="text-sm text-muted-foreground">{rec.distance}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{rec.price}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-gold" />
                      <span className="text-xs">{rec.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary text-xs">
                    {rec.savings}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Total Savings */}
        <Card className="p-4 bg-gradient-sacred text-white shadow-sacred">
          <div className="text-center">
            <DollarSign className="h-8 w-8 mx-auto mb-2 opacity-80" />
            <h3 className="font-semibold text-lg">Estimated Total Savings</h3>
            <p className="text-2xl font-bold">425 SAR</p>
            <p className="text-sm opacity-80">Compared to premium options</p>
            <Button 
              variant="secondary" 
              className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Apply These Recommendations
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BudgetAssistant;