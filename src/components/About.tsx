import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";

const About = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Официальная гарантия 10 лет на все виды работ и материалы"
    },
    {
      icon: Award,
      title: "Сертифицированные материалы",
      description: "Работаем только с европейскими производителями высшего класса"
    },
    {
      icon: Users,
      title: "Опытная команда",
      description: "Наши мастера имеют опыт работы более 5 лет и постоянно повышают квалификацию"
    },
    {
      icon: Clock,
      title: "Быстрая установка",
      description: "Монтаж потолка любой сложности выполняем за 1 рабочий день"
    }
  ];

  const features = [
    "Бесплатный выезд замерщика в течение 24 часов",
    "Точный расчет стоимости без скрытых доплат",
    "Профессиональная консультация по выбору материалов",
    "Монтаж без пыли и строительного мусора",
    "Уборка после завершения работ включена в стоимость",
    "Гарантийное и постгарантийное обслуживание"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            О компании
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы — ведущая компания по установке натяжных потолков в Караганде. 
            Доверьте нам создание идеального интерьера вашего дома.
          </p>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About Text */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Почему выбирают нас?
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">НатяжПотолок</strong> — это команда профессионалов, 
                которая уже более 5 лет создает красивые и функциональные потолки в домах и офисах Караганды.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы работаем только с проверенными европейскими производителями, 
                что гарантирует высочайшее качество материалов и долговечность наших потолков.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наша цель — не просто установить потолок, а создать идеальное решение, 
                которое будет радовать вас долгие годы и подчеркнет красоту вашего интерьера.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Advantages */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Сертифицированная компания
              </h4>
              <p className="text-muted-foreground text-sm">
                Официальные сертификаты качества и безопасности
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Лучшая компания 2023
              </h4>
              <p className="text-muted-foreground text-sm">
                Награда от Ассоциации строителей Караганды
              </p>
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Начать сотрудничество
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;