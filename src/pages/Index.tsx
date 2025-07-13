import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://cdn.poehali.dev/files/036224cc-89d8-4c6f-9a7c-c9e883d58f20.png"
                alt="Грани"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <div className="flex space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  О компании
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Контакты
                </a>
              </div>
            </nav>

            {/* Contact Info & Social */}
            <div className="flex items-center space-x-6">
              {/* Phone */}
              <div className="hidden lg:flex items-center space-x-2 text-gray-900">
                <Icon name="Phone" size={18} className="text-blue-600" />
                <span className="font-medium">+7 (495) 123-45-67</span>
              </div>

              {/* Social Links */}
              <div className="hidden sm:flex items-center space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
              </div>

              {/* CTA Button */}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                Заказать замер
              </Button>

              {/* Mobile menu button */}
              <button className="md:hidden p-2">
                <Icon name="Menu" size={24} className="text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Качественные окна
                <span className="text-blue-600 block">для вашего дома</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональная установка пластиковых окон с гарантией
                качества. Бесплатный замер и консультация специалиста.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg font-medium">
                  Бесплатный замер
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg font-medium"
                >
                  Рассчитать стоимость
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">
                    Установленных окон
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    5 лет
                  </div>
                  <div className="text-sm text-gray-600">Гарантия</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    24ч
                  </div>
                  <div className="text-sm text-gray-600">Быстрый замер</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Icon name="Home" size={120} className="text-blue-600" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Современные решения
                  </h3>
                  <p className="text-gray-600">
                    Энергоэффективные окна с многокамерными профилями
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл работ от замера до установки с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Ruler",
                title: "Бесплатный замер",
                description: "Точные измерения и консультация специалиста",
              },
              {
                icon: "Settings",
                title: "Изготовление",
                description: "Производство окон по индивидуальным размерам",
              },
              {
                icon: "Wrench",
                title: "Установка",
                description: "Профессиональный монтаж с соблюдением ГОСТов",
              },
              {
                icon: "Shield",
                title: "Гарантия",
                description: "5 лет гарантии на все виды работ",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Готовы заказать качественные окна?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Оставьте заявку и получите бесплатную консультацию специалиста
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg font-medium">
              Заказать звонок
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-lg font-medium"
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://cdn.poehali.dev/files/036224cc-89d8-4c6f-9a7c-c9e883d58f20.png"
                alt="Грани"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Оконная компания «Грани» — качественные окна для вашего комфорта
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пластиковые окна
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Балконные блоки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Входные двери
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ремонт окон
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@grani-okna.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Оконная компания «Грани». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
