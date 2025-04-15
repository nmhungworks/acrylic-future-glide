
import { 
  Type, 
  Image, 
  LineChart, 
  Mic, 
  Video, 
  BarChart4 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "text-generation",
    icon: <Type className="h-10 w-10 text-futureBlue" />,
    title: "AI Text Generation",
    description: "Create high-quality content, translations, and conversational responses with our advanced NLP models."
  },
  {
    id: "image-synthesis",
    icon: <Image className="h-10 w-10 text-futureBlue" />,
    title: "Image Synthesis",
    description: "Generate photorealistic images and artistic visuals from text descriptions or reference images."
  },
  {
    id: "data-analytics",
    icon: <LineChart className="h-10 w-10 text-futureBlue" />,
    title: "Data Analytics",
    description: "Extract meaningful insights from your data with our AI-powered analytics solutions."
  },
  {
    id: "voice-recognition",
    icon: <Mic className="h-10 w-10 text-futureBlue" />,
    title: "Voice Recognition",
    description: "Convert speech to text with high accuracy across multiple languages and accents."
  },
  {
    id: "video-processing",
    icon: <Video className="h-10 w-10 text-futureBlue" />,
    title: "Video Processing",
    description: "Analyze, generate, and enhance video content with our powerful video AI capabilities."
  },
  {
    id: "predictive-modeling",
    icon: <BarChart4 className="h-10 w-10 text-futureBlue" />,
    title: "Predictive Modeling",
    description: "Forecast trends and outcomes using our advanced predictive algorithms and time-series analysis."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our AI Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations
            and create new opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              id={service.id}
              className="service-card-hover border-2 border-gray-100 dark:border-gray-800"
            >
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
