
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resources & Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Official Documents</h3>
              <ul className="space-y-3">
                <li>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#" className="text-left">Membership Application Form</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#" className="text-left">Eligibility Guidelines</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#" className="text-left">CSR Programs Overview</a>
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/uirad">UIRAD</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/pitchburg">Pitchburg</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
