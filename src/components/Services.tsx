import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Palette, Droplets, Thermometer, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Глянцевые потолки",
      description: "Элегантные глянцевые потолки, визуально увеличивающие пространство",
      price: "от 1,200 ₸/м²",
      features: ["Отражающая поверхность", "Визуальное увеличение высоты", "Легкий уход"]
    },
    {
      icon: Shield,
      title: "Матовые потолки",
      description: "Классические матовые покрытия для уютной атмосферы",
      price: "от 1,000 ₸/м²",
      features: ["Нейтральная текстура", "Скрывает неровности", "Универсальный дизайн"]
    },
    {
      icon: Star,
      title: "Сатиновые потолки",
      description: "Премиальные сатиновые потолки с благородным блеском",
      price: "от 1,400 ₸/м²",
      features: ["Благородный блеск", "Премиум качество", "Долговечность"]
    },
    {
      icon: Droplets,
      title: "Влагостойкие потолки",
      description: "Специальные потолки для ванных комнат и кухонь",
      price: "от 1,300 ₸/м²",
      features: ["100% влагостойкость", "Антибактериальное покрытие", "Для влажных помещений"]
    },
    {
      icon: Thermometer,
      title: "Многоуровневые конструкции",
      description: "Сложные многоуровневые потолки с подсветкой",
      price: "от 2,000 ₸/м²",
      features: ["Индивидуальный дизайн", "Встроенная подсветка", "Зонирование пространства"]
    },
    {
      icon: Clock,
      title: "Экспресс-установка",
      description: "Быстрая установка потолка за 2-4 часа",
      price: "от 1,500 ₸/м²",
      features: ["Установка за день", "Без пыли и грязи", "Сразу готово к эксплуатации"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по установке натяжных потолков. 
            Гарантируем европейское качество и доступные цены.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-accent">{service.price}</div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  onClick={scrollToContact}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-soft animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Не знаете, какой потолок выбрать?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Наши специалисты проведут бесплатную консультацию и помогут выбрать 
            идеальное решение для вашего интерьера
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToContact}
            className="group"
          >
            Бесплатная консультация
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;