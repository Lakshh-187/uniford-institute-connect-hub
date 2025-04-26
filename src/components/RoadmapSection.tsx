
import { Card, CardContent } from "@/components/ui/card";
import { 
  Flask, 
  Robot, 
  Rocket, 
  Users, 
  GraduationCap,
  Store,
  Code
} from "lucide-react";

const roadmapItems = [
  {
    icon: Flask,
    title: "STEM Labs",
    description: "Establish cutting-edge STEM laboratories with state-of-the-art equipment"
  },
  {
    icon: Robot,
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
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Institutional Empowerment Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-blue-100">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
