import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DocumentsSection from "@/components/DocumentsSection";
import ProgramFeatures from "@/components/ProgramFeatures";
import CSRPrograms from "@/components/CSRPrograms";
import ImageHero from "@/components/ImageHero";
import RoadmapSection from "@/components/RoadmapSection";
import AwardCategories from "@/components/AwardCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ImageHero />
      
      {/* Main Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">CSR Establishment</h3>
                <p className="text-gray-600">
                  Connect & establish innovative projects, programs, portals & ecosystem using CSR grants & hackathons
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Technology Integration</h3>
                <p className="text-gray-600">
                  Implement AI automation, AR/VR labs, robotics facilities, and cutting-edge digital infrastructure
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Global Connections</h3>
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

      {/* New Roadmap Section */}
      <RoadmapSection />
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

      {/* Modern Architecture */}
      <section className="bg-gray-50 py-12">
          <div className="container mx-auto text-center">
              <img src="https://i.ibb.co/nMYkWXMk/there-are-three-flags-uniford-foundation-rising-un-N2watci7-Te-C5f1z-Rtb-L0u-A-FSI4-Q-M-T427-OCg1cd.jpg" 
                  alt="Modern Architecture" className="mx-auto mb-8 rounded-lg shadow-md" style={{ width: '80%', height: 'auto' }} />
              <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold mb-4 text-center">
                      Modern Architecture
                  </h2>
                  <p className="text-lg text-gray-600 text-center">
                      Our institutions are designed to inspire and foster collaboration
                  </p>
              </div>
          </div>
      </section>
      <AwardCategories/>

      {/* Program Features and CSR Programs */}
      <ProgramFeatures />
      <CSRPrograms />


      {/* Documents Section */}
      <DocumentsSection />

      {/* Application CTA */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join UIEC and access world-class resources, funding, and opportunities for your institution. No membership fees - only excellence required.
          </p>
          <a href="https://forms.gle/pMYj8WmLE9dVbduM6" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="animate-pulse hover:animate-none">
              Apply for Membership
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
