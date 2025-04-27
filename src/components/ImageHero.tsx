import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

const ImageHero = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Institution to{" "}
              <span className="text-blue-600">International Standards</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join UIEC and access world-class resources, CSR grants, and global opportunities for your institution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-2 hover:shadow-lg transition-all duration-300">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://i.ibb.co/9mT2SXRS/a-photo-of-a-uniford-banner-with-the-tex-F6-Ok-NW-R9u-OSFXki-Mm-HQg-Pma5ofm2-TW-Ewy-M-ya-Vzk-Q.jpg" 
                  alt="Modern educational institution"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Camera className="h-4 w-4" />
                  <span>6 i Campaign</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <AspectRatio ratio={1}>
                <img 
                  src="https://i.ibb.co/0j0NRqzC/a-large-banner-with-the-text-partner-pro-ACeul-EBRQlm-O0-BPws-QRmfw-35-CA-my-AR3-Me-ZQy-SAIq7-A.jpg" 
                  alt="Modern architecture"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </AspectRatio>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <AspectRatio ratio={1}>
                <img 
                  src="https://i.ibb.co/hRSqmjbZ/a-confrence-hall-having-three-young-proffesors-con-TGMWs3-Ma-TPKpk-L6-Qug-Ph-Og-cfv9yv2-OQNC9-UNZ1-G.jpg" 
                  alt="Campus view"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </AspectRatio>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageHero;
