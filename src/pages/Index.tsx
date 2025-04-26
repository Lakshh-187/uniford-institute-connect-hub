import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DocumentsSection from "@/components/DocumentsSection";
import ProgramFeatures from "@/components/ProgramFeatures";
import CSRPrograms from "@/components/CSRPrograms";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">UIEC</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4">Uniford Institutional Empowerment Council</p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming member institutes to international standards through CSR, Venture & Alumni funded projects
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">CSR Establishment</h3>
                <p className="text-gray-600">
                  Connect & establish innovative projects, programs, portals & ecosystem using CSR grants & hackathons
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technology Integration</h3>
                <p className="text-gray-600">
                  Implement AI automation, AR/VR labs, robotics facilities, and cutting-edge digital infrastructure
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Global Connections</h3>
                <p className="text-gray-600">
                  Access to worldwide student programs, clubs, societies, and platforms like TEDx
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Eligibility Criteria</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Minimum 600 student strength</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Basic infrastructure including auditorium, labs, library, and exhibition room</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Valid affiliation and compliance with all rules, regulations, and policies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* New Interactive Components */}
      <ProgramFeatures />
      <CSRPrograms />

      {/* How it Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Stage One</h3>
                <p className="text-gray-600">Implementation of AI, Website, Digital Store, and Portals</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Stage Two</h3>
                <p className="text-gray-600">Implementation of Uni-talks, Uni-pitch, Labs, and Programs</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Stage Three</h3>
                <p className="text-gray-600">Establishment of Physical Infrastructure and Advanced Labs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <DocumentsSection />

      {/* Application CTA */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join UIEC and access world-class resources, funding, and opportunities for your institution
          </p>
          <Button size="lg">Apply for Membership</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
