
import { LayoutDashboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    title: "CSR Grants & Development",
    items: [
      "Innovative Projects",
      "Educational Programs",
      "Digital Infrastructure",
      "Ecosystem Development"
    ]
  },
  {
    title: "Academic Enhancement",
    items: [
      "Verified Scholar Integration",
      "Teacher Staff Internships",
      "Workshop Organization",
      "International Cohorts"
    ]
  },
  {
    title: "Infrastructure Development",
    items: [
      "STEM Labs",
      "AR/VR Facilities",
      "AI Integration",
      "Robotics Labs"
    ]
  }
];

const CSRPrograms = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <LayoutDashboard className="h-6 w-6" />
          CSR Programs & Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                <ul className="space-y-2">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRPrograms;
