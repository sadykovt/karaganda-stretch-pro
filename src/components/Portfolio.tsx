import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";
import ceiling1 from "@/assets/ceiling-1.jpg";
import ceiling2 from "@/assets/ceiling-2.jpg";
import ceiling3 from "@/assets/ceiling-3.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      image: ceiling1,
      title: "Современная гостиная",
      description: "Глянцевый белый потолок с LED-подсветкой",
      type: "Глянцевый",
      area: "25 м²",
      location: "ЖК Элитный"
    },
    {
      id: 2,
      image: ceiling2,
      title: "Уютная спальня",
      description: "Сатиновый потолок кремового цвета",
      type: "Сатиновый", 
      area: "18 м²",
      location: "Частный дом"
    },
    {
      id: 3,
      image: ceiling3,
      title: "Современная кухня",
      description: "Матовый потолок с встроенными светильниками",
      type: "Матовый",
      area: "15 м²",
      location: "ЖК Астана"
    },
    {
      id: 4,
      image: ceiling1,
      title: "Детская комната",
      description: "Цветной глянцевый потолок",
      type: "Глянцевый",
      area: "12 м²",
      location: "Микрорайон Восток"
    },
    {
      id: 5,
      image: ceiling2,
      title: "Ванная комната",
      description: "Влагостойкий потолок",
      type: "Влагостойкий",
      area: "6 м²",
      location: "ЖК Комфорт"
    },
    {
      id: 6,
      image: ceiling3,
      title: "Офисное помещение",
      description: "Многоуровневый потолок",
      type: "Многоуровневый",
      area: "40 м²",
      location: "Бизнес-центр"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 успешно завершенных проектов в Караганде. 
            Посмотрите примеры наших работ и убедитесь в качестве.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:scale-110"
                >
                  <Eye className="w-5 h-5 text-primary-foreground" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>Площадь: {project.area}</span>
                  <span>{project.location}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={scrollToContact}
                  className="w-full group/btn"
                >
                  Заказать подобный
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-primary/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
              <img 
                src={selectedImage} 
                alt="Увеличенное изображение"
                className="w-full h-full object-contain rounded-lg shadow-elegant"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/20 backdrop-blur-md rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:scale-110 transition-all"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card rounded-2xl p-8 shadow-soft animate-fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">10</div>
            <div className="text-muted-foreground">Лет гарантии</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-muted-foreground">День установки</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;