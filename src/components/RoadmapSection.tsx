
import { Card, CardContent } from "@/components/ui/card";
import { 
  Beaker, 
  Bot, 
  Rocket, 
  Users, 
  GraduationCap,
  Store,
  Code
} from "lucide-react";

const roadmapItems = [
  {
    icon: Beaker,
    title: "STEM Labs",
    description: "Establish cutting-edge STEM laboratories with state-of-the-art equipment"
  },
  {
    icon: Bot,
    title: "AI & Robotics",
    description: "Implement AI automation and robotics facilities for hands-on learning"
  },
  {
    icon: Store,
    title: "Digital Infrastructure",
    description: "Set up digital store and portals for enhanced institutional connectivity"
  },
  {
    icon: Code,
    title: "Innovation Hub",
    description: "Support hardware design and hackathons for problem-solving competitions"
  },
  {
    icon: Users,
    title: "Global Communities",
    description: "Connect with worldwide student programs, clubs, and societies"
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Establish platforms like TEDx for international standard exposure"
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Transform institutions to meet international standards through CSR grants"
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80" />
      
      {/* Floating orbs for dynamic background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Institutional Empowerment Roadmap
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Transform your institution with cutting-edge technology and global connections
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <Card 
              key={index} 
              className="relative group backdrop-blur-sm bg-white/50 border border-white/20 shadow-xl 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 
                              text-white transform transition-transform duration-300 
                              group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700
                             transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
              
              {/* Decorative corner gradient */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-400/20 
                            to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
