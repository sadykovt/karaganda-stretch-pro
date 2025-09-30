import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">П</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Потолок-КРГ</h1>
              <p className="text-xs text-muted-foreground">Караганда</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Портфолио
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+77778904754" 
              className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+7 777 890 47 54</span>
            </a>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="animate-scale-in"
            >
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Контакты
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <a 
                  href="tel:+77778904754" 
                  className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">+7 777 890 47 54</span>
                </a>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;