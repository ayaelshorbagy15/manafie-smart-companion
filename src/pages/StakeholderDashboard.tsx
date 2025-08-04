import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  MapPin,
  BarChart3,
  FileText,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StakeholderDashboard = () => {
  const navigate = useNavigate();

  const realTimeStats = [
    {
      title: "Active Visitors",
      value: "24,567",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Congestion Level",
      value: "Medium",
      change: "68%",
      trend: "stable",
      icon: Activity,
      color: "text-secondary"
    },
    {
      title: "Transit Load",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: BarChart3,
      color: "text-gold"
    }
  ];

  const alerts = [
    {
      id: 1,
      type: "warning",
      zone: "Mataf Area",
      message: "Predicted high congestion in 30 minutes",
      time: "2 min ago"
    },
    {
      id: 2,
      type: "info",
      zone: "Transport Hub",
      message: "Bus frequency increased to every 8 minutes",
      time: "5 min ago"
    },
    {
      id: 3,
      type: "critical",
      zone: "Zone C",
      message: "Emergency route activation recommended",
      time: "8 min ago"
    }
  ];

  const zones = [
    { name: "Mataf", occupancy: 85, status: "high" },
    { name: "Sa'i Area", occupancy: 62, status: "medium" },
    { name: "Zone A", occupancy: 43, status: "low" },
    { name: "Zone B", occupancy: 71, status: "medium" },
    { name: "Transport Hub", occupancy: 89, status: "high" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "high": return "text-destructive";
      case "medium": return "text-secondary";
      case "low": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical": return "🔴";
      case "warning": return "🟡";
      case "info": return "🔵";
      default: return "ℹ️";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-celestial">
      {/* Header */}
      <div className="bg-gradient-spiritual text-white p-6 shadow-sacred">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Stakeholder Dashboard</h1>
            <p className="opacity-90">Real-time insights and control center</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Live
            </Badge>
            <Settings className="h-6 w-6 opacity-80" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-20">
        {/* Real-time Stats */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Real-time Overview</h2>
          <div className="grid gap-4">
            {realTimeStats.map((stat, index) => (
              <Card key={index} className="p-4 shadow-gentle">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center gap-1 ${
                      stat.trend === 'up' ? 'text-secondary' : 'text-muted-foreground'
                    }`}>
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Crowd Heatmap */}
        <section>
          <Card className="p-6 shadow-sacred">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Zone Occupancy</h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/predictions')}
              >
                View Heatmap
              </Button>
            </div>
            
            <div className="space-y-3">
              {zones.map((zone, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{zone.name}</span>
                    <span className={`text-sm font-medium ${getStatusColor(zone.status)}`}>
                      {zone.occupancy}%
                    </span>
                  </div>
                  <Progress 
                    value={zone.occupancy} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* AI Alerts */}
        <section>
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 shadow-gentle">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">AI Alerts & Recommendations</h2>
              <Badge variant="outline" className="text-primary border-primary">
                {alerts.length} Active
              </Badge>
            </div>
            
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-lg">{getAlertIcon(alert.type)}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {alert.zone}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-sm mt-1">{alert.message}</p>
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
              onClick={() => navigate('/predictions')}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Predictions</h3>
                <p className="text-sm text-muted-foreground">View analytics</p>
              </div>
            </Card>

            <Card 
              className="p-4 cursor-pointer hover:shadow-gentle transition-all"
              onClick={() => navigate('/reports')}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-medium">Reports</h3>
                <p className="text-sm text-muted-foreground">Generate insights</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Recommended Actions */}
        <Card className="p-4 bg-gradient-sacred text-white shadow-sacred">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium mb-2">AI Recommendations</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Activate backup Route B in Mataf area</li>
                <li>• Increase shuttle frequency by 25%</li>
                <li>• Deploy additional guidance staff to Zone C</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-elevated">
        <div className="flex items-center justify-around p-3">
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2 text-primary">
            <Activity className="h-5 w-5" />
            <span className="text-xs">Dashboard</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2" onClick={() => navigate('/predictions')}>
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Analytics</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2" onClick={() => navigate('/reports')}>
            <FileText className="h-5 w-5" />
            <span className="text-xs">Reports</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto p-2">
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StakeholderDashboard;