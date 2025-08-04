import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Globe, Users, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import islamicPattern from "@/assets/islamic-pattern.jpg";
import manafieLogo from "@/assets/manafie-logo.png";

const Welcome = () => {
  const [isArabic, setIsArabic] = useState(false);
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Manafie",
      subtitle: "Smart Makkah Companion",
      description: "Your intelligent guide for a blessed journey",
      visitor: "Visitor",
      stakeholder: "Stakeholder",
      visitorDesc: "Pilgrims & Tourists",
      stakeholderDesc: "Observers & Decision Makers",
      language: "العربية"
    },
    ar: {
      title: "منافع",
      subtitle: "رفيق مكة الذكي",
      description: "دليلك الذكي لرحلة مباركة",
      visitor: "زائر",
      stakeholder: "صاحب مصلحة",
      visitorDesc: "الحجاج والسياح",
      stakeholderDesc: "المراقبون وصناع القرار",
      language: "English"
    }
  };

  const currentContent = isArabic ? content.ar : content.en;

  return (
    <div className={`min-h-screen bg-gradient-celestial relative overflow-hidden ${isArabic ? 'rtl font-arabic' : ''}`}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${islamicPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 pattern-geometric opacity-20"></div>
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
        <Globe className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium">{currentContent.language}</span>
        <Switch 
          checked={isArabic} 
          onCheckedChange={setIsArabic}
          className="data-[state=checked]:bg-secondary"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* App Logo & Title */}
        <div className="text-center mb-12 animate-float">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <img 
              src={manafieLogo} 
              alt="Manafie Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-2 bg-gradient-spiritual bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <h2 className="text-xl text-primary-light mb-2 font-semibold">
            {currentContent.subtitle}
          </h2>
          <p className="text-muted-foreground">
            {currentContent.description}
          </p>
        </div>

        {/* User Type Selection */}
        <div className="w-full max-w-sm space-y-4">
          <Card 
            className="p-6 cursor-pointer transition-all duration-300 hover:shadow-sacred hover:scale-105 glass-effect border-primary/20"
            onClick={() => navigate('/visitor')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-spiritual rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{currentContent.visitor}</h3>
                <p className="text-sm text-muted-foreground">{currentContent.visitorDesc}</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer transition-all duration-300 hover:shadow-sacred hover:scale-105 glass-effect border-secondary/20"
            onClick={() => navigate('/stakeholder')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-sacred rounded-xl flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{currentContent.stakeholder}</h3>
                <p className="text-sm text-muted-foreground">{currentContent.stakeholderDesc}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sacred Decoration */}
        <div className="mt-12 flex items-center gap-2 text-gold opacity-60">
          <div className="w-2 h-2 bg-gold rounded-full"></div>
          <div className="w-3 h-3 bg-gold-light rounded-full"></div>
          <div className="w-2 h-2 bg-gold rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;