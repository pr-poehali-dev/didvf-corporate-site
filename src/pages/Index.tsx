import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const chainProducts = [
  {
    id: 1,
    size: '415',
    type: 'Без сальника',
    links: 110,
    strength: '2800 кг',
    price: '850 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 2,
    size: '420',
    type: 'Без сальника',
    links: 114,
    strength: '3200 кг',
    price: '920 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 3,
    size: '428',
    type: 'O-ring',
    links: 120,
    strength: '4100 кг',
    price: '1450 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 4,
    size: '520',
    type: 'X-ring',
    links: 120,
    strength: '8900 кг',
    price: '2100 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 5,
    size: '525',
    type: 'X-ring',
    links: 120,
    strength: '9500 кг',
    price: '2350 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 6,
    size: '530',
    type: 'X-ring',
    links: 120,
    strength: '10200 кг',
    price: '2650 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 7,
    size: '520',
    type: 'O-ring',
    links: 110,
    strength: '8500 кг',
    price: '1950 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  },
  {
    id: 8,
    size: '428',
    type: 'Без сальника',
    links: 130,
    strength: '3800 кг',
    price: '1080 ₽',
    image: 'https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/95f69720-dd60-4d08-8965-d70fcd345795.jpg'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLinks, setSelectedLinks] = useState<string>('all');

  const filteredProducts = chainProducts.filter(product => {
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(product.size);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const linksMatch = selectedLinks === 'all' || product.links.toString() === selectedLinks;
    return sizeMatch && typeMatch && linksMatch;
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Link" size={28} className="text-accent" />
              <span className="text-2xl font-bold tracking-wider">DIDVF</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-accent transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('wholesale')} className="hover:text-accent transition-colors">
                Для оптовиков
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <Button variant="outline" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 border-none">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Приводные цепи DIDVF
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Надежный производитель качественных мотоцепей для мелкооптовых покупателей. 
                Оптимальное соотношение цены и качества, широкий ассортимент.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => scrollToSection('catalog')}>
                  <Icon name="Search" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => scrollToSection('contacts')}>
                  Получить прайс
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98+</div>
                  <div className="text-sm">Моделей цепей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm">Контроль качества</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/069dbcc7-6b35-4af3-b679-24b789b01a58.jpg" 
                alt="Мотоцепи DIDVF" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Award', title: 'Высокое качество', text: 'Усиленные цепи с увеличенной прочностью' },
              { icon: 'TrendingDown', title: 'Оптимальная цена', text: 'Прямые поставки от производителя' },
              { icon: 'Package', title: 'Широкий ассортимент', text: 'Размеры от 415 до 530, все типы' },
              { icon: 'Truck', title: 'Быстрая доставка', text: 'Отгрузка в день заказа по РФ' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-lift border-2">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
          <p className="text-muted-foreground mb-8">Выберите характеристики для подбора нужной цепи</p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Filter" size={24} className="mr-2 text-accent" />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Размер цепи</Label>
                  <div className="space-y-2">
                    {['415', '420', '428', '520', '525', '530'].map(size => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`size-${size}`} 
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => handleSizeToggle(size)}
                        />
                        <label htmlFor={`size-${size}`} className="cursor-pointer">
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Тип цепи</Label>
                  <div className="space-y-2">
                    {['Без сальника', 'O-ring', 'X-ring'].map(type => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`type-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => handleTypeToggle(type)}
                        />
                        <label htmlFor={`type-${type}`} className="cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Количество звеньев</Label>
                  <Select value={selectedLinks} onValueChange={setSelectedLinks}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все</SelectItem>
                      <SelectItem value="110">110</SelectItem>
                      <SelectItem value="114">114</SelectItem>
                      <SelectItem value="120">120</SelectItem>
                      <SelectItem value="130">130</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {(selectedSizes.length > 0 || selectedTypes.length > 0 || selectedLinks !== 'all') && (
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setSelectedSizes([]);
                      setSelectedTypes([]);
                      setSelectedLinks('all');
                    }}
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="hover-lift">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={`Цепь ${product.size}`} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-lg font-bold">{product.size}</Badge>
                    <Badge className="bg-accent">{product.type}</Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex justify-between">
                      <span>Звенья:</span>
                      <span className="font-medium text-foreground">{product.links}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Прочность:</span>
                      <span className="font-medium text-foreground">{product.strength}</span>
                    </div>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="PackageX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">По выбранным фильтрам ничего не найдено</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/4e9b2621-89f3-4ca2-97ea-ee541976c37d/files/dce1b7f4-1aff-48ed-9af4-893c40410800.jpg" 
                alt="Производство DIDVF" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании DIDVF</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на производстве высококачественных приводных цепей для мототехники. 
                Наша продукция проходит строгий контроль качества на всех этапах производства.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Контроль качества</h3>
                    <p className="text-muted-foreground">Каждая партия проходит испытания на прочность и износостойкость</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">Автоматизированные линии производства из Японии и Германии</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Сертификация</h3>
                    <p className="text-muted-foreground">Продукция соответствует международным стандартам ISO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="wholesale" className="py-16 bg-gradient-to-b from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Для оптовых покупателей</h2>
            <p className="text-xl mb-12 text-primary-foreground/90">
              Специальные условия для дилеров, региональных распространителей и сервисных центров
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Percent" size={32} className="text-accent" />
                  </div>
                  <CardTitle>Гибкие скидки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">От 15% при заказе от 100 тыс. ₽</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-accent" />
                  </div>
                  <CardTitle>Отсрочка платежа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">До 30 дней для постоянных клиентов</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Truck" size={32} className="text-accent" />
                  </div>
                  <CardTitle>Логистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Бесплатная доставка от 50 тыс. ₽</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => scrollToSection('contacts')}>
              <Icon name="Mail" size={20} className="mr-2" />
              Запросить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Контакты</h2>
          <p className="text-muted-foreground mb-12 text-center">Свяжитесь с нами любым удобным способом</p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (800) 555-55-55</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">sales@didvf.ru</div>
                    <div className="text-muted-foreground">info@didvf.ru</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15, стр. 2</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    <div className="text-muted-foreground">Сб-Вс: выходной</div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label htmlFor="company">Компания</Label>
                    <Input id="company" placeholder="ООО Ваша компания" />
                  </div>
                  <div>
                    <Label htmlFor="contact">Email или телефон</Label>
                    <Input id="contact" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Опишите ваш вопрос или потребность..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Link" size={24} className="text-accent" />
              <span className="text-xl font-bold">DIDVF</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80">© 2024 DIDVF. Все права защищены.</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Производитель мотоцепей</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
