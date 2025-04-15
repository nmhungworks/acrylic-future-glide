import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg -z-10" />
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzAgMEMxMy40MzEgMCAwIDEzLjQzMSAwIDMwYzAgMTYuNTY5IDEzLjQzMSAzMCAzMCAzMCAxNi41NjkgMCAzMC0xMy40MzEgMzAtMzBDNjAgMTMuNDMxIDQ2LjU2OSAwIDMwIDB6bTAgNDhjLTkuOTQxIDAtMTgtOC4wNTktMTgtMThoNmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyIDYuNjI3IDAgMTItNS4zNzMgMTItMTJoNmMwIDkuOTQxLTguMDU5IDE4LTE4IDE4eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            Shaping Tomorrow with <span className="text-black dark:text-white">AI</span> Today
          </h1>
          <p className="text-lg md:text-xl text-white/80 dark:text-white/90 mb-8 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Future Vision leverages cutting-edge artificial intelligence to transform how businesses operate, 
            innovate, and connect with their customers. Our suite of intelligent solutions 
            empowers you to stay ahead in a rapidly evolving digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <Button size="lg" className="bg-white text-futureBlue hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-white">Contract Us</Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;