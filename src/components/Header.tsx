
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { 
  Circle, 
  Menu, 
  X, 
  MessageSquare, 
  Globe, 
  Moon, 
  Sun, 
  ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "AI Text Generation", href: "#text-generation" },
  { name: "Image Synthesis", href: "#image-synthesis" },
  { name: "Data Analytics", href: "#data-analytics" },
  { name: "Voice Recognition", href: "#voice-recognition" },
  { name: "Video Processing", href: "#video-processing" },
  { name: "Predictive Modeling", href: "#predictive-modeling" }
];

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
  { name: "Français", code: "fr" },
  { name: "Deutsch", code: "de" },
  { name: "中文", code: "zh" }
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed w-full z-50 glass-effect">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-8 w-8 text-futureBlue">
              <path fill="#00a3ff" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28A5 5 0 0 1 12 7"/>
            </svg>
            <span className="font-bold text-xl">Future Vision</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>AI Services</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <a href={service.href} className="w-full cursor-pointer">
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Us */}
            <Button variant="ghost" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Contact Us</span>
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>{currentLanguage}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem 
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.name)}
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" onClick={toggleTheme} size="icon">
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="glass-effect md:hidden py-4">
          <div className="container mx-auto px-4 space-y-4">
            {/* Mobile AI Services */}
            <div className="space-y-2">
              <p className="font-medium">AI Services</p>
              <div className="space-y-1 pl-4">
                {services.map((service) => (
                  <a 
                    key={service.name} 
                    href={service.href}
                    className="block py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Contact Us */}
            <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start">
              <MessageSquare className="h-4 w-4" />
              <span>Contact Us</span>
            </Button>

            {/* Mobile Language Selector */}
            <div className="space-y-2">
              <p className="font-medium">Language</p>
              <div className="space-y-1 pl-4">
                {languages.map((language) => (
                  <Button 
                    key={language.code}
                    variant="ghost"
                    className="block w-full justify-start"
                    onClick={() => {
                      setCurrentLanguage(language.name);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {language.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <Button 
              variant="ghost" 
              onClick={toggleTheme} 
              className="flex items-center space-x-2 w-full justify-start"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  <span>Dark Mode</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
