
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Gallery } from "lucide-react";

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
                  src="photo-1487958449943-2429e8be8625" 
                  alt="Modern educational institution"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Camera className="h-4 w-4" />
                  <span>State-of-the-art Facilities</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <AspectRatio ratio={1}>
                <img 
                  src="photo-1496307653780-42ee777d4833" 
                  alt="Modern architecture"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </AspectRatio>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <AspectRatio ratio={1}>
                <img 
                  src="photo-1449157291145-7efd050a4d0e" 
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
