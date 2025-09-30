import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      location: "ЖК Элитный",
      rating: 5,
      text: "Превосходная работа! Потолок установили за один день, никакой грязи и пыли. Результат превзошел все ожидания. Глянцевый потолок визуально увеличил комнату. Рекомендую всем!",
      date: "15 марта 2024"
    },
    {
      id: 2,
      name: "Михаил Сергеев",
      location: "Частный дом",
      rating: 5,
      text: "Обращался в несколько компаний, но здесь предложили лучшую цену и качество. Мастера работали аккуратно, объяснили все нюансы ухода. Потолок выглядит идеально уже полгода.",
      date: "28 февраля 2024"
    },
    {
      id: 3,
      name: "Елена Казакова",
      location: "ЖК Астана",
      rating: 5,
      text: "Делали потолки во всей квартире. Особенно понравился подход к работе - все четко, профессионально, в срок. Консультация была очень подробной, помогли выбрать идеальный вариант.",
      date: "10 февраля 2024"
    },
    {
      id: 4,
      name: "Дмитрий Иванов",
      location: "Микрорайон Восток", 
      rating: 5,
      text: "Заказывал многоуровневый потолок с подсветкой. Сложная работа, но выполнили на отлично! Теперь гостиная выглядит как в дизайнерском журнале. Спасибо за профессионализм!",
      date: "05 января 2024"
    },
    {
      id: 5,
      name: "Светлана Морозова",
      location: "ЖК Комфорт",
      rating: 5,
      text: "Очень довольна сервисом! Замерщик приехал в тот же день, стоимость оказалась точно как в смете. Установка прошла быстро и чисто. Гарантию дали сразу на 10 лет.",
      date: "22 декабря 2023"
    },
    {
      id: 6,
      name: "Александр Ким",
      location: "Бизнес-центр",
      rating: 5,
      text: "Делали потолки в офисе. Работали в выходные, чтобы не мешать рабочему процессу. Очень ответственный подход! Качество материалов и монтажа - на высшем уровне.",
      date: "18 ноября 2023"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "text-accent fill-current" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверили нам свои потолки. 
            Читайте честные отзывы о нашей работе.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-accent" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {review.location}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-2xl font-bold text-accent mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Отзывов</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Рекомендуют нас</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">0</div>
              <div className="text-sm text-muted-foreground">Негативных отзывов</div>
            </div>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            Больше отзывов вы можете прочитать в Google Reviews
          </p>
          <a 
            href="#"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent-dark transition-colors"
          >
            <span>Читать все отзывы в Google</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;