
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays } from "lucide-react";

const features = [
  {
    phase: "Phase 1",
    features: ["AI Integration", "Website Development", "Digital Store", "Portal Setup"],
    timeline: "2-3 months",
  },
  {
    phase: "Phase 2",
    features: ["Uni-talks Implementation", "Uni-pitch Platform", "Lab Setup", "Program Integration"],
    timeline: "3-4 months",
  },
  {
    phase: "Phase 3",
    features: ["Physical Infrastructure", "Innovative Labs", "Library Enhancement", "AI & Robotics Labs"],
    timeline: "4-6 months",
  },
];

const ProgramFeatures = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Implementation Roadmap</h2>
      <div className="container mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phase</TableHead>
              <TableHead>Features</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Timeline
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((item) => (
              <TableRow key={item.phase}>
                <TableCell className="font-medium">{item.phase}</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside">
                    {item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="text-right">{item.timeline}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProgramFeatures;
