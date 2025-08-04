import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Globe, Users, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import islamicPattern from "@/assets/islamic-pattern.jpg";

const Welcome = () => {
  const [isArabic, setIsArabic] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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
    <div className={`min-h-screen bg-gradient-celestial relative overflow-hidden mobile-safe-area ${isArabic ? 'rtl font-arabic' : ''}`}>
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
      <div className={`absolute ${isMobile ? 'top-4 right-4' : 'top-6 right-6'} flex items-center gap-3 z-10 touch-target`}>
        <Globe className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-primary`} />
        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{currentContent.language}</span>
        <Switch 
          checked={isArabic} 
          onCheckedChange={setIsArabic}
          className="data-[state=checked]:bg-secondary mobile-button"
        />
      </div>

      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen ${isMobile ? 'mobile-container' : 'p-6'}`}>
        {/* App Logo & Title */}
        <div className={`text-center ${isMobile ? 'mb-8' : 'mb-12'} animate-float`}>
          <div className={`${isMobile ? 'w-20 h-20 mb-4' : 'w-24 h-24 mb-6'} mx-auto bg-gradient-spiritual rounded-3xl flex items-center justify-center shadow-sacred`}>
            <div className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'} bg-white rounded-2xl flex items-center justify-center`}>
              <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} bg-gradient-kaaba rounded-lg`}></div>
            </div>
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-2 bg-gradient-spiritual bg-clip-text text-transparent`}>
            {currentContent.title}
          </h1>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} text-primary-light mb-2 font-semibold`}>
            {currentContent.subtitle}
          </h2>
          <p className={`text-muted-foreground ${isMobile ? 'text-sm px-4' : ''}`}>
            {currentContent.description}
          </p>
        </div>

        {/* User Type Selection */}
        <div className={`w-full ${isMobile ? 'max-w-xs' : 'max-w-sm'} space-y-4`}>
          <Card 
            className={`${isMobile ? 'p-4' : 'p-6'} cursor-pointer transition-all duration-300 hover:shadow-sacred hover:scale-105 mobile-card glass-effect border-primary/20 touch-target`}
            onClick={() => navigate('/visitor')}
          >
            <div className={`flex items-center ${isMobile ? 'space-x-3' : 'space-x-4'}`}>
              <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-spiritual rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Users className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-white`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'} truncate`}>{currentContent.visitor}</h3>
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground truncate`}>{currentContent.visitorDesc}</p>
              </div>
            </div>
          </Card>

          <Card 
            className={`${isMobile ? 'p-4' : 'p-6'} cursor-pointer transition-all duration-300 hover:shadow-sacred hover:scale-105 mobile-card glass-effect border-secondary/20 touch-target`}
            onClick={() => navigate('/stakeholder')}
          >
            <div className={`flex items-center ${isMobile ? 'space-x-3' : 'space-x-4'}`}>
              <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-sacred rounded-xl flex items-center justify-center flex-shrink-0`}>
                <BarChart3 className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-white`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'} truncate`}>{currentContent.stakeholder}</h3>
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground truncate`}>{currentContent.stakeholderDesc}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sacred Decoration */}
        <div className={`${isMobile ? 'mt-8' : 'mt-12'} flex items-center gap-2 text-gold opacity-60`}>
          <div className="w-2 h-2 bg-gold rounded-full"></div>
          <div className="w-3 h-3 bg-gold-light rounded-full"></div>
          <div className="w-2 h-2 bg-gold rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;