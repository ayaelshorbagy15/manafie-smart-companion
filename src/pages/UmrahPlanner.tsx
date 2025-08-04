import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  CheckCircle, 
  Circle, 
  Star,
  MapPin,
  Info,
  Timer
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UmrahPlanner = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const umrahSteps = [
    {
      id: 1,
      title: "Ihram",
      titleAr: "الإحرام",
      description: "Enter the sacred state before entering the Haram boundaries",
      descriptionAr: "دخول الحالة المقدسة قبل دخول حدود الحرم",
      duration: "30 minutes",
      crowdLevel: "Low",
      tips: [
        "Perform Ghusl (ritual bath) before wearing Ihram",
        "Recite Talbiyah: 'Labbaik Allahumma Labbaik'",
        "Avoid perfumes and certain activities"
      ],
      bestTime: "Before Fajr prayer",
      location: "Miqat or designated area"
    },
    {
      id: 2,
      title: "Tawaf",
      titleAr: "الطواف",
      description: "Circumambulate the Kaaba seven times counterclockwise",
      descriptionAr: "الطواف حول الكعبة سبع مرات عكس اتجاه عقارب الساعة",
      duration: "45-60 minutes",
      crowdLevel: "High",
      tips: [
        "Start from the Black Stone if possible",
        "Make Dua during each round",
        "Stay close to the Kaaba but be mindful of others"
      ],
      bestTime: "2:00 AM - 4:00 AM",
      location: "Around the Kaaba"
    },
    {
      id: 3,
      title: "Sa'i",
      titleAr: "السعي",
      description: "Walk/run between Safa and Marwah hills seven times",
      descriptionAr: "السعي بين الصفا والمروة سبع مرات",
      duration: "30-45 minutes",
      crowdLevel: "Medium",
      tips: [
        "Begin at Safa hill facing the Kaaba",
        "Recite the prescribed Duas",
        "Run between the green markers (men only)"
      ],
      bestTime: "After Tawaf",
      location: "Safa and Marwah corridor"
    },
    {
      id: 4,
      title: "Halq/Taqsir",
      titleAr: "الحلق أو التقصير",
      description: "Shave head completely or trim hair",
      descriptionAr: "حلق الرأس بالكامل أو تقصير الشعر",
      duration: "15-20 minutes",
      crowdLevel: "Low",
      tips: [
        "Halq (complete shaving) is preferred for men",
        "Women trim a fingertip length",
        "This marks the completion of Umrah"
      ],
      bestTime: "After Sa'i",
      location: "Designated barbershops"
    }
  ];

  const getCrowdColor = (level: string) => {
    switch (level) {
      case "Low": return "text-primary bg-primary/10";
      case "Medium": return "text-secondary bg-secondary/10";
      case "High": return "text-destructive bg-destructive/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const getStepIcon = (stepId: number) => {
    if (stepId < currentStep) return CheckCircle;
    if (stepId === currentStep) return Circle;
    return Circle;
  };

  const progress = ((currentStep - 1) / umrahSteps.length) * 100;

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
            <h1 className="text-xl font-bold">Umrah Planner | مخطط العمرة</h1>
            <p className="text-sm opacity-80">Step-by-step guidance for your blessed journey</p>
          </div>
        </div>
        
        {/* Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Progress</span>
            <span className="text-sm">{currentStep}/{umrahSteps.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>
      </div>

      <div className="p-4 space-y-4 pb-20">
        {/* Current Step Highlight */}
        <Card className="p-6 bg-gradient-sacred text-white shadow-sacred">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">
                {umrahSteps[currentStep - 1]?.title} | {umrahSteps[currentStep - 1]?.titleAr}
              </h2>
              <p className="opacity-90 mt-1">{umrahSteps[currentStep - 1]?.description}</p>
              <p className="opacity-80 text-sm font-arabic">{umrahSteps[currentStep - 1]?.descriptionAr}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <Clock className="h-5 w-5 mx-auto mb-1 opacity-80" />
              <p className="text-xs opacity-80">Duration</p>
              <p className="text-sm font-medium">{umrahSteps[currentStep - 1]?.duration}</p>
            </div>
            <div className="text-center">
              <Users className="h-5 w-5 mx-auto mb-1 opacity-80" />
              <p className="text-xs opacity-80">Crowd Level</p>
              <p className="text-sm font-medium">{umrahSteps[currentStep - 1]?.crowdLevel}</p>
            </div>
            <div className="text-center">
              <Timer className="h-5 w-5 mx-auto mb-1 opacity-80" />
              <p className="text-xs opacity-80">Best Time</p>
              <p className="text-sm font-medium">{umrahSteps[currentStep - 1]?.bestTime}</p>
            </div>
          </div>

          <Button 
            variant="secondary" 
            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
            onClick={() => setCurrentStep(Math.min(currentStep + 1, umrahSteps.length))}
          >
            {currentStep === umrahSteps.length ? "Complete Umrah" : "Mark as Complete"}
          </Button>
        </Card>

        {/* All Steps Overview */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Complete Journey</h3>
          
          {umrahSteps.map((step, index) => {
            const StepIcon = getStepIcon(step.id);
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            
            return (
              <Card 
                key={step.id} 
                className={`p-4 transition-all cursor-pointer ${
                  isCurrent ? 'border-primary shadow-gentle' : ''
                } ${isCompleted ? 'bg-muted/50' : ''}`}
                onClick={() => setCurrentStep(step.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                    isCompleted ? 'bg-primary text-white' :
                    isCurrent ? 'bg-primary/20 text-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <StepIcon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{step.title} | {step.titleAr}</h4>
                      <Badge className={getCrowdColor(step.crowdLevel)}>
                        {step.crowdLevel}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{step.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{step.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tips Section */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Info className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-primary mb-2">Tips for {umrahSteps[currentStep - 1]?.title}</h3>
              <ul className="space-y-1">
                {umrahSteps[currentStep - 1]?.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Real-time Updates */}
        <Card className="p-4 border-secondary/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
              <Star className="h-3 w-3 text-white" />
            </div>
            <h3 className="font-medium">Live Updates</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-secondary">• Current Tawaf wait time: ~15 minutes</p>
            <p className="text-primary">• Sa'i area: Low crowd density</p>
            <p className="text-muted-foreground">• Recommended start time: Next 30 minutes</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UmrahPlanner;