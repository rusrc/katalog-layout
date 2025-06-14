"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ShoppingCart,
  MapPin,
  Search,
  Share2,
  ChevronRight,
  Play,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCard() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const productImages = [
    {
      src: "/images/iphone2-400x300.webp",
      type: "video",
      thumbnail: "/images/iphone2-100x100.webp",
    },
    {
      src: "/images/iphone1-400x300.webp",
      type: "image",
      thumbnail: "/images/iphone1-100x100.webp",
    },
    {
      src: "/images/iphone2-400x300.webp",
      type: "image",
      thumbnail: "/images/iphone2-100x100.webp",
    },
    {
      src: "/images/iphone1-400x300.webp",
      type: "image",
      thumbnail: "/images/iphone3-100x100.webp",
    },
    {
      src: "/images/iphone2-400x300.webp",
      type: "image",
      thumbnail: "/images/iphone4-100x100.webp",
    },
    {
      src: "/images/iphone1-400x300.webp",
      type: "image",
      thumbnail: "/images/iphone1-100x100.webp",
    },
  ];

  const breadcrumbs = [
    { name: "Каталог", href: "#" },
    { name: "Мобильные и связь", href: "#" },
    { name: "Мобильные и аксессуары", href: "#" },
    { name: "Мобильные телефоны", href: "#" },
    { name: "Apple", href: "#" },
  ];

  const colorVariants = [
    { name: "Natural Titanium", color: "#C0C0C0", selected: true },
    { name: "Black Titanium", color: "#1a1a1a", selected: false },
    { name: "White Titanium", color: "#F5F5F5", selected: false },
    { name: "Blue Titanium", color: "#4A90E2", selected: false },
  ];

  const storageVariants = [
    { size: "256 ГБ", selected: true },
    { size: "512 ГБ", selected: false },
    { size: "1 ТБ", selected: false },
  ];

  const stores = [
    {
      id: 1,
      name: "Apple iPhone 16 Pro Max 256Gb Natural Titanium",
      store: "Gadgetstore.kz",
      delivery: "Доставка: из Алматы",
      canComplain: true,
      price: "637 200",
      logo: "/images/logo1.webp",
      productImage: "/images/iphone1.webp",
    },
    {
      id: 2,
      name: "Смартфон Apple iPhone 16 Pro Max 256GB Natural Titanium",
      store: "Ants.kz",
      delivery: "Доставка: из Алматы",
      canComplain: true,
      price: "728 127",
      logo: "/images/logo2.webp",
      productImage: "/images/iphone1.webp",
    },
    {
      id: 3,
      name: "Смартфон Apple iPhone 16 Pro Max, 256 GB, Natural Titanium (MYWY3HX/A) MYWY3HX/A",
      store: "Shop.kz",
      delivery: "Доставка: из Астаны",
      canComplain: true,
      price: "789 990",
      description:
        "iPhone 16 Pro Max имеет титановый корпус Grade 5 с новой, изысканной микроструктурной текстурой. Титан имеет одно из самых высоких соотношений прочности к весу среди всех металлов, что делает эти модели невероятно прочными и впечатляюще легкими. Новая технология отображения позволяет направлять данные дисплея под активные пиксели... еще",
      logo: "/images/logo3.webp",
      productImage: "/images/iphone1.webp",
    },
    {
      id: 4,
      name: "Apple iPhone 16 Pro Max 256GB Natural Titanium (официальная гарантия)",
      store: "iPoint.kz",
      delivery: "Доставка: из Алматы",
      canComplain: true,
      price: "699 990",
      logo: "/images/logo4.webp",
      productImage: "/images/iphone1.webp",
    },
    {
      id: 5,
      name: "iPhone 16 Pro Max 256GB Natural Titanium",
      store: "Technodom.kz",
      delivery: "Доставка: из Астаны",
      canComplain: true,
      price: "749 990",
      logo: "/images/logo5.webp",
      productImage: "/images/iphone1.webp",
    },
    {
      id: 6,
      name: "Apple iPhone 16 Pro Max 256GB Natural Titanium (MYWY3)",
      store: "Sulpak.kz",
      delivery: "Доставка: из Шымкента",
      canComplain: true,
      price: "759 990",
      logo: "/images/logo6.webp",
      productImage: "/images/iphone1.webp",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <a href="/showcase">
            <h1 className="text-xl font-semibold">Marketplace</h1>
          </a>
          {/* City Selector - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Select defaultValue="almaty">
              <SelectTrigger className="w-32 h-8 border-none shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="almaty">Алматы</SelectItem>
                <SelectItem value="astana">Астана</SelectItem>
                <SelectItem value="shymkent">Шымкент</SelectItem>
                <SelectItem value="aktobe">Актобе</SelectItem>
                <SelectItem value="taraz">Тараз</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Input - Responsive */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8 h-8" />
            </div>
          </div>

          {/* Spacer to push buttons to the right */}
          <div className="flex-1" />

          <div className="flex items-center gap-2">
            {/* City Selector for mobile */}
            <div className="md:hidden">
              <Select defaultValue="almaty">
                <SelectTrigger className="w-8 h-8 border-none shadow-none p-0">
                  <MapPin className="h-4 w-4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="almaty">Алматы</SelectItem>
                  <SelectItem value="astana">Астана</SelectItem>
                  <SelectItem value="shymkent">Шымкент</SelectItem>
                  <SelectItem value="aktobe">Актобе</SelectItem>
                  <SelectItem value="taraz">Тараз</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                2
              </span>
              <span className="sr-only">View Cart</span>
            </Button>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </Button>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 mx-1" />
                )}
              </div>
            ))}
          </nav>

          {/* Product Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Цены на Apple iPhone 16 Pro Max{" "}
                <span className="text-muted-foreground text-lg">256 ГБ</span>
              </h1>
            </div>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="_bg-card grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="buy" className="text-xs md:text-sm">
                ГДЕ КУПИТЬ{" "}
                <Badge variant="secondary" className="ml-1">
                  6
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="description" className="text-xs md:text-sm">
                ОПИСАНИЕ
              </TabsTrigger>
              <TabsTrigger value="specs" className="text-xs md:text-sm">
                ХАРАКТЕРИСТИКИ
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs md:text-sm">
                ОТЗЫВЫ
              </TabsTrigger>
              <TabsTrigger value="questions" className="text-xs md:text-sm">
                ЗАДАТЬ ВОПРОС{" "}
                <Badge variant="secondary" className="ml-1">
                  1
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="accessories" className="text-xs md:text-sm">
                АКСЕССУАРЫ{" "}
                <Badge variant="secondary" className="ml-1">
                  10+
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="mt-6">
              {/* Product Image and Info Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Product Image and Details */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardContent className="p-6">
                      {/* Main Image with Dialog */}
                      <div className="mb-4">
                        {/* Main Image */}
                        <div className="mb-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="relative w-full">
                                <img
                                  src={
                                    productImages[selectedImageIndex].src ||
                                    "/placeholder.svg"
                                  }
                                  alt="iPhone 16 Pro Max"
                                  className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                />
                                {productImages[selectedImageIndex].type ===
                                  "video" && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black/30 rounded-full p-3">
                                      <Play className="h-8 w-8 text-white" />
                                    </div>
                                  </div>
                                )}
                                <div className="absolute bottom-2 left-2 flex gap-2">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    Видео 12
                                  </Badge>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    Фото 16
                                  </Badge>
                                </div>
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full">
                              <div className="relative">
                                <img
                                  src={
                                    productImages[selectedImageIndex].src ||
                                    "/placeholder.svg"
                                  }
                                  alt="iPhone 16 Pro Max"
                                  className="w-full h-auto rounded-lg"
                                />
                                {productImages[selectedImageIndex].type ===
                                  "video" && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black/30 rounded-full p-3">
                                      <Play className="h-12 w-12 text-white" />
                                    </div>
                                  </div>
                                )}
                                <div className="flex justify-center gap-2 mt-4">
                                  {productImages.map((image, index) => (
                                    <button
                                      key={index}
                                      onClick={() =>
                                        setSelectedImageIndex(index)
                                      }
                                      className={`w-16 h-16 rounded border-2 overflow-hidden ${
                                        selectedImageIndex === index
                                          ? "border-primary"
                                          : "border-border"
                                      }`}
                                    >
                                      <img
                                        src={
                                          image.thumbnail || "/placeholder.svg"
                                        }
                                        alt={`Product view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                      {image.type === "video" && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <Play className="h-4 w-4 text-white" />
                                        </div>
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>

                        {/* Thumbnails Carousel */}
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full"
                        >
                          <CarouselContent>
                            {productImages.map((image, index) => (
                              <CarouselItem
                                key={index}
                                className="basis-1/5 pl-1"
                              >
                                <button
                                  onClick={() => setSelectedImageIndex(index)}
                                  className={`relative w-full aspect-square rounded border-2 overflow-hidden ${
                                    selectedImageIndex === index
                                      ? "border-primary"
                                      : "border-border"
                                  }`}
                                >
                                  <img
                                    src={image.thumbnail || "/placeholder.svg"}
                                    alt={`Product view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                  {image.type === "video" && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                      <Play className="h-4 w-4 text-white" />
                                    </div>
                                  )}
                                </button>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-0" />
                          <CarouselNext className="right-0" />
                        </Carousel>
                      </div>

                      {/* Color Variants */}
                      <div className="mb-4">
                        <div className="flex gap-2 mb-2">
                          {colorVariants.map((variant, index) => (
                            <div
                              key={index}
                              className={`w-8 h-8 rounded border-2 cursor-pointer ${
                                variant.selected
                                  ? "border-primary"
                                  : "border-border"
                              }`}
                              style={{ backgroundColor: variant.color }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Storage Variants */}
                      <div className="flex gap-2 mb-4">
                        {storageVariants.map((variant, index) => (
                          <Button
                            key={index}
                            variant={variant.selected ? "default" : "outline"}
                            size="sm"
                            className="h-8"
                          >
                            {variant.size}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Product Info and Price */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      от <span className="text-primary">637 200</span> до{" "}
                      <span className="text-primary">799 990</span> тг.
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      Крупнейший из всех существующих «Айфонов» на момент дебюта
                      осенью 2024 года. Размеры OLED-экрана у модели подросли с
                      6.7 до 6.9 дюймов, в то же время удалось уменьшить рамки.
                      Панель Super Retina XDR выводит изображения в максимальном
                      разрешении 2868x1320 пикселей, обладает адаптивной
                      частотой развёртки до 120 Гц и пиковой яркостью до 2000
                      нит (в режиме HDR). В дисплее по-прежнему находится
                      динамический вырез Dynamic Island, выкроенный под нужды
                      объектива 12 МП селфи-камеры и датчики системы Face ID.
                      Основная камера смартфона содержит трио датчиков
                      изображения: 48 МП ведущий, 48 МП ультраширик и 12 МП
                      телевик с оптическим зумом. Видео на Apple iPhone 16 Pro
                      Max 256GB можно снимать в 4K при 120 к/с (ProRes или Dolby
                      Vision), а за запись пространственного звука впредь
                      отвечают четыре...
                    </p>

                    <div className="flex gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm">В СПИСОК</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="compare" />
                        <Label htmlFor="compare" className="text-sm">
                          ДОБАВИТЬ В СРАВНЕНИЕ
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Listings Section - Now Below */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">
                  Предложения магазинов
                </h2>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <span className="text-sm text-muted-foreground">
                    Когда вы совершаете покупку по ссылкам на нашем сайте, мы
                    можем получать партнерскую комиссию.
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Сортировать
                    </span>
                    <Select defaultValue="rating">
                      <SelectTrigger className="w-32 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">по рейтингу</SelectItem>
                        <SelectItem value="price">по цене</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {stores.map((store) => (
                  <Card key={store.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={store.productImage || "/placeholder.svg"}
                            alt={store.name}
                            className="w-16 h-20 object-cover rounded border"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm mb-1 line-clamp-2">
                            {store.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span className="text-primary">{store.store}</span>
                            <span>•</span>
                            <span>{store.delivery}</span>
                            {store.canComplain && (
                              <>
                                <span>•</span>
                                <span>📋 Пожаловаться</span>
                              </>
                            )}
                          </div>
                          {store.description && (
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {store.description}
                            </p>
                          )}
                        </div>

                        {/* Price and Actions */}
                        <div className="flex flex-col items-end justify-between min-w-[200px]">
                          <div className="text-right mb-2">
                            <div className="text-xl font-bold text-primary">
                              {store.price} тг.
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Button size="sm" className="w-full min-w-[140px]">
                              Перейти в магазин
                            </Button>
                          </div>
                        </div>

                        {/* Store Logo - aligned with product image height */}
                        <div className="flex-shrink-0 flex items-center">
                          <img
                            src={store.logo || "/placeholder.svg"}
                            alt={store.store}
                            className="h-20 object-contain"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="description">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Описание товара
                  </h3>
                  <p className="text-muted-foreground">
                    Подробное описание Apple iPhone 16 Pro Max будет здесь...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Технические характеристики
                  </h3>
                  <p className="text-muted-foreground">
                    Технические характеристики Apple iPhone 16 Pro Max будут
                    здесь...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Отзывы</h3>
                  <p className="text-muted-foreground">
                    Отзывы пользователей будут здесь...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="questions">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Вопросы и ответы
                  </h3>
                  <p className="text-muted-foreground">
                    Вопросы и ответы будут здесь...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accessories">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Аксессуары</h3>
                  <p className="text-muted-foreground">
                    Совместимые аксессуары будут здесь...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
