import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  Filter, 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee,
  Hotel,
  Bus,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hotels");
  const [priceRange, setPriceRange] = useState("all");
  const [rating, setRating] = useState("all");

  const hotels = [
    {
      id: 1,
      name: "Abraj Al Bait",
      rating: 4.8,
      price: 250,
      distance: "200m",
      image: "/placeholder.svg",
      amenities: ["Wifi", "AC", "Restaurant", "View"],
      aiRecommended: true,
      description: "Luxury hotel with Kaaba view"
    },
    {
      id: 2,
      name: "Fairmont Makkah",
      rating: 4.7,
      price: 180,
      distance: "500m",
      image: "/placeholder.svg",
      amenities: ["Wifi", "Pool", "Spa", "Restaurant"],
      aiRecommended: true,
      description: "Modern comfort with premium service"
    },
    {
      id: 3,
      name: "Raffles Makkah",
      rating: 4.9,
      price: 320,
      distance: "300m",
      image: "/placeholder.svg",
      amenities: ["Wifi", "Concierge", "Spa", "Fine Dining"],
      aiRecommended: false,
      description: "Ultra-luxury experience"
    }
  ];

  const transport = [
    {
      id: 1,
      name: "Private Car Service",
      rating: 4.9,
      price: 150,
      duration: "24/7 Available",
      type: "car",
      aiRecommended: true,
      description: "Comfortable private transport"
    },
    {
      id: 2,
      name: "Shuttle Service",
      rating: 4.5,
      price: 25,
      duration: "Every 15 mins",
      type: "bus",
      aiRecommended: true,
      description: "Regular shuttle to Haram"
    },
    {
      id: 3,
      name: "Premium Transfer",
      rating: 4.8,
      price: 200,
      duration: "On-demand",
      type: "car",
      aiRecommended: false,
      description: "Luxury vehicle service"
    }
  ];

  const getFilteredItems = (items: any[]) => {
    return items.filter(item => {
      const priceMatch = priceRange === "all" || 
        (priceRange === "budget" && item.price <= 100) ||
        (priceRange === "mid" && item.price > 100 && item.price <= 250) ||
        (priceRange === "luxury" && item.price > 250);
      
      const ratingMatch = rating === "all" || 
        (rating === "4+" && item.rating >= 4) ||
        (rating === "4.5+" && item.rating >= 4.5);
      
      return priceMatch && ratingMatch;
    });
  };

  const ItemCard = ({ item, type }: { item: any, type: string }) => (
    <Card className="p-4 shadow-gentle hover:shadow-sacred transition-all">
      {item.aiRecommended && (
        <Badge className="mb-3 bg-gradient-spiritual text-white">
          <Sparkles className="h-3 w-3 mr-1" />
          AI Best for You
        </Badge>
      )}
      
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
          {type === "hotels" ? (
            <Hotel className="h-8 w-8 text-primary" />
          ) : item.type === "car" ? (
            <Car className="h-8 w-8 text-secondary" />
          ) : (
            <Bus className="h-8 w-8 text-gold" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">{item.name}</h3>
            <div className="text-right">
              <p className="font-bold text-primary">{item.price} SAR</p>
              <p className="text-xs text-muted-foreground">
                {type === "hotels" ? "/night" : "/trip"}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
          
          <div className="flex items-center space-x-4 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{type === "hotels" ? item.distance : item.duration}</span>
            </div>
          </div>
          
          {type === "hotels" && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.amenities.slice(0, 3).map((amenity: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {amenity}
                </Badge>
              ))}
              {item.amenities.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{item.amenities.length - 3} more
                </Badge>
              )}
            </div>
          )}
          
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1">
              Book Now
            </Button>
            <Button size="sm" variant="outline">
              Details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

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
            <h1 className="text-xl font-bold">Smart Booking | الحجز الذكي</h1>
            <p className="text-sm opacity-80">Find the best deals with AI assistance</p>
          </div>
        </div>
      </div>

      <div className="p-4 pb-20">
        {/* Filters */}
        <Card className="p-4 mb-4 shadow-gentle">
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="h-4 w-4 text-primary" />
            <h3 className="font-medium">Filters</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium block mb-1">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Budget (≤100 SAR)</SelectItem>
                  <SelectItem value="mid">Mid-range (100-250 SAR)</SelectItem>
                  <SelectItem value="luxury">Luxury (250+ SAR)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-1">Rating</label>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4+">4.0+ Stars</SelectItem>
                  <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Booking Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="transport">Transport</TabsTrigger>
          </TabsList>

          <TabsContent value="hotels" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Hotels near Haram</h2>
              <Badge variant="outline" className="text-primary">
                {getFilteredItems(hotels).length} available
              </Badge>
            </div>
            
            {getFilteredItems(hotels).map((hotel) => (
              <ItemCard key={hotel.id} item={hotel} type="hotels" />
            ))}
          </TabsContent>

          <TabsContent value="transport" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Transportation Options</h2>
              <Badge variant="outline" className="text-primary">
                {getFilteredItems(transport).length} available
              </Badge>
            </div>
            
            {getFilteredItems(transport).map((item) => (
              <ItemCard key={item.id} item={item} type="transport" />
            ))}
          </TabsContent>
        </Tabs>

        {/* AI Suggestion */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mt-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-spiritual rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-primary mb-1">AI Package Recommendation</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Based on your budget and preferences, we recommend: Fairmont Makkah + Shuttle Service
              </p>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                  Save 30%
                </Badge>
                <Button size="sm" variant="outline">
                  View Package
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookingScreen;