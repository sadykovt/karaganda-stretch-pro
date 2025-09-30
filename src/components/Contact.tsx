import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 30 минут для уточнения деталей.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        area: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      info: "+7 (721) 234-56-78",
      link: "tel:+77212345678",
      description: "Звоните с 8:00 до 20:00"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@natyazhpotolok.kz",
      link: "mailto:info@natyazhpotolok.kz",
      description: "Ответим в течение часа"
    },
    {
      icon: MapPin,
      title: "Адрес",
      info: "г. Караганда, ул. Букетова 32/1",
      link: "https://maps.google.com",
      description: "Офис продаж и склад"
    },
    {
      icon: Clock,
      title: "Режим работы",
      info: "Пн-Вс: 8:00 - 20:00",
      link: null,
      description: "Без выходных"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Получите бесплатную консультацию и точный расчет стоимости. 
            Замерщик приедет в удобное для вас время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in-up shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
                <Send className="w-6 h-6 text-accent" />
                <span>Заказать бесплатный замер</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение 30 минут
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-accent focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-accent focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-border focus:border-accent focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Площадь помещения</Label>
                    <Input
                      id="area"
                      name="area"
                      type="text"
                      placeholder="20 м²"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="border-border focus:border-accent focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о ваших пожеланиях: тип потолка, цвет, особенности помещения..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-border focus:border-accent focus:ring-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>Отправляем...</span>
                    </span>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Конфиденциальность гарантирована</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-accent hover:text-accent-dark transition-colors font-medium"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.info}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Call Section */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">
                  Нужна срочная консультация?
                </h3>
                <p className="mb-4 opacity-90">
                  Позвоните прямо сейчас и получите ответы на все вопросы
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href="tel:+77212345678" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>+7 (721) 234-56-78</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Working Process */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Как мы работаем:
                </h4>
                <div className="space-y-3">
                  {[
                    "Получаем вашу заявку и звоним в течение 30 минут",
                    "Бесплатный выезд замерщика в удобное время",
                    "Точный расчет стоимости без скрытых доплат",
                    "Заключение договора с фиксированной ценой",
                    "Профессиональный монтаж за 1 день",
                    "Гарантия 10 лет и послегарантийное обслуживание"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-accent-foreground text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;