import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">Н</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">НатяжПотолок</h3>
                <p className="text-sm opacity-80">Караганда</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Профессиональная установка натяжных потолков премиум класса. 
              Европейское качество, доступные цены, гарантия 10 лет.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Услуги</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Глянцевые потолки</li>
              <li>Матовые потолки</li>
              <li>Сатиновые потолки</li>
              <li>Влагостойкие потолки</li>
              <li>Многоуровневые конструкции</li>
              <li>Экспресс-установка</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+77212345678" 
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (721) 234-56-78</span>
              </a>
              <a 
                href="mailto:info@natyazhpotolok.kz" 
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>info@natyazhpotolok.kz</span>
              </a>
              <div className="flex items-start space-x-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>г. Караганда,<br />ул. Букетова 32/1</span>
              </div>
              <div className="flex items-center space-x-2 opacity-80">
                <Clock className="w-4 h-4" />
                <span>Пн-Вс: 8:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Полезное</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  Наши работы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  О компании
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  Отзывы клиентов
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  Бесплатный замер
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80 text-center md:text-left">
              © {currentYear} НатяжПотолок. Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm opacity-80">
              <span>Политика конфиденциальности</span>
              <span>•</span>
              <span>Гарантия качества</span>
              <span>•</span>
              <span>Сертификаты</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;