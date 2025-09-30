import { Button } from "@/components/ui/button";
import { Check, Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-ceiling.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-scale-in">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span className="text-accent font-medium text-sm">№1 по качеству в Караганде</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Натяжные потолки
            <span className="block text-accent">премиум класса</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Профессиональная установка натяжных потолков в Караганде. 
            Европейское качество, доступные цены, гарантия 10 лет.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Бесплатный замер и консультация",
              "Установка за 1 день",
              "Гарантия 10 лет",
              "Европейские материалы"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Бесплатный замер
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+77212345678" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+7 (721) 234-56-78</span>
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-primary-foreground/20 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-primary-foreground/80">Довольных клиентов</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">5</div>
              <div className="text-sm text-primary-foreground/80">Лет опыта</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-primary-foreground/80">Поддержка</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;