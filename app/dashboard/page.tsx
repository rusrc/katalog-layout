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
import { Heart, ShoppingCart, MapPin, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Page() {
  // Sample product data with detailed specifications
  const products = [
    {
      id: 1,
      name: "Apple iPhone 16 Pro Max",
      storage: "256 ГБ",
      year: "2024 год",
      image: "/placeholder.svg?height=300&width=200",
      tags: [
        "iPhone 16 Pro Max",
        "камерофон",
        "флагман",
        "120 Гц",
        "NFC",
        "3D сканер лица",
        "без microSD",
        "влагозащита",
        "fast charge",
        "беспроводная зарядка",
        "стерео",
        "Dolby Atmos",
        "USB C 2.5Gbps",
        "нет 3.5 мм",
        "спутник",
        "Wi-Fi 7",
        "безрамочный",
        "Dolby Vision",
        "LTPO",
        "без 3У",
      ],
      specs: {
        screen: '6.9", OLED (LTPO), 2868x1320, 458 ppi, 120 Гц',
        camera: "3 модуля, 48 МП, + 48 МП, и 12 МП",
        video: "fullHD 60 к/с, 4K, стабилизация, замедленная съемка",
        memory: "256 ГБ",
        processor: "Apple A18 Pro",
        ram: "8 ГБ, LPDDR5",
        battery: "4685 мАч",
        body: "стекло, 227 г, толщина 8 мм",
      },
      variants: ["256 ГБ", "512 ГБ", "1 ТБ"],
      colors: ["black", "gray", "gold", "white"],
      priceRange: "от 638 400 до 789 990 тг.",
      stores: [
        {
          name: "Shop.kz",
          location: "из Астаны",
          price: "789 990 тг.",
          color: "black",
        },
        {
          name: "Almajuice.kz",
          location: "из Алматы",
          price: "789 990 тг.",
          color: "orange",
        },
        {
          name: "Gadgetstore.kz",
          location: "из Алматы",
          price: "638 400 тг.",
          color: "orange",
        },
        {
          name: "Shop.kz",
          location: "из Астаны",
          price: "789 990 тг.",
          color: "orange",
        },
      ],
    },
    {
      id: 2,
      name: "Xiaomi Redmi Note 14",
      storage: "256 ГБ / 8 ГБ",
      year: "2025 год",
      image: "/placeholder.svg?height=300&width=200",
      tags: [
        "Redmi Note",
        "120 Гц",
        "NFC",
        "fast charge",
        "стерео",
        "Dolby Atmos",
        "без 3У",
      ],
      specs: {
        screen: '6.67", AMOLED, 2400x1080 (20:9), 395 ppi, 120 Гц',
        camera: "3 модуля, 108 МП, макро",
        video: "fullHD 60 к/с",
        memory: "256 ГБ, UFS 2.2, карта памяти",
        processor: "Helio G99-Ultra",
        ram: "8 ГБ, LPDDR4X",
        battery: "5500 мАч",
        body: "пластик, 197 г, толщина 8.16 мм",
      },
      variants: ["128 ГБ / 6 ГБ", "128 ГБ / 8 ГБ", "256 ГБ / 8 ГБ"],
      colors: ["green", "black", "blue"],
      priceRange: "от 99 990 тг.",
      stores: [
        {
          name: "Shop.kz",
          location: "из Астаны",
          price: "99 990 тг.",
          color: "green",
        },
        {
          name: "Shop.kz",
          location: "из Астаны",
          price: "99 990 тг.",
          color: "black",
        },
        {
          name: "Shop.kz",
          location: "из Астаны",
          price: "99 990 тг.",
          color: "blue",
        },
      ],
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-xl font-semibold">Marketplace</h1>

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
          <div className="space-y-6">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row gap-4 p-4 lg:gap-6 lg:p-6">
                    {/* Left: Image and Actions */}
                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-48 h-64 object-cover rounded-md"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-2 left-2 h-8 w-8 rounded-full bg-background/80"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                      </div>
                      <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
                        <Checkbox id={`compare-${product.id}`} />
                        <Label
                          htmlFor={`compare-${product.id}`}
                          className="text-sm"
                        >
                          Сравнить
                        </Label>
                      </div>
                    </div>

                    {/* Center: Product Details */}
                    <div className="flex-1 space-y-4 order-3 lg:order-2">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {product.name}{" "}
                          <span className="text-muted-foreground">
                            {product.storage}
                          </span>
                        </h3>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Экран:</span>{" "}
                          <Badge variant="outline" className="ml-1">
                            {product.specs.screen}
                          </Badge>
                        </div>
                        <div>
                          <span className="font-medium">Камера:</span>{" "}
                          <Badge variant="outline" className="ml-1">
                            {product.specs.camera}
                          </Badge>
                        </div>
                        <div>
                          <span className="font-medium">Видео:</span>{" "}
                          <Badge variant="outline" className="ml-1">
                            {product.specs.video}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                          <span className="font-medium">Память:</span>{" "}
                          <Badge variant="outline" className="ml-1">
                            {product.specs.memory}
                          </Badge>
                          <span className="font-medium">Процессор:</span>{" "}
                          <Badge variant="outline" className="ml-1">
                            {product.specs.processor}
                          </Badge>
                          <span className="font-medium">ОЗУ:</span>{" "}
                          <Badge variant="outline" className="ml-1">
                            {product.specs.ram}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                          <div>
                            <span className="font-medium">Аккумулятор:</span>{" "}
                            <Badge variant="outline" className="ml-1">
                              {product.specs.battery}
                            </Badge>
                          </div>
                          <div>
                            <span className="font-medium">Корпус:</span>{" "}
                            <span className="text-muted-foreground">
                              {product.specs.body}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Links */}
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-sm">
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Видео 12
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Фото 16
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Обсуждение 1
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Обзоры 6
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Где купить 11
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Чехлы
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Стекла
                        </Button>
                      </div>

                      {/* Variants and Colors */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex gap-2">
                          {product.variants.map((variant, index) => (
                            <Button
                              key={index}
                              variant={index === 0 ? "secondary" : "outline"}
                              size="sm"
                              className="h-8"
                            >
                              {variant}
                            </Button>
                          ))}
                        </div>
                        <div className="flex gap-2 sm:ml-auto items-center">
                          <span className="text-sm text-muted-foreground">
                            Цвет:
                          </span>
                          {product.colors.map((color, index) => (
                            <div
                              key={index}
                              className={`w-6 h-6 rounded-full border ${
                                index === 0 ? "border-primary" : "border-border"
                              }`}
                              style={{
                                backgroundColor:
                                  color === "black"
                                    ? "black"
                                    : color === "gray"
                                    ? "#9ca3af"
                                    : color === "gold"
                                    ? "#fbbf24"
                                    : color === "white"
                                    ? "white"
                                    : color === "green"
                                    ? "#10b981"
                                    : color === "blue"
                                    ? "#3b82f6"
                                    : "#d1d5db",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Price Comparison */}
                    <div className="lg:w-80 w-full space-y-3 order-2 lg:order-3">
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">
                          {product.priceRange}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {product.stores.map((store, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor:
                                    store.color === "black"
                                      ? "black"
                                      : store.color === "orange"
                                      ? "hsl(var(--primary))"
                                      : store.color === "green"
                                      ? "#10b981"
                                      : store.color === "blue"
                                      ? "#3b82f6"
                                      : "#9ca3af",
                                }}
                              />
                              <Button
                                variant="link"
                                size="sm"
                                className="h-auto p-0"
                              >
                                {store.name}
                              </Button>
                              <span className="text-muted-foreground">
                                ({store.location})
                              </span>
                            </div>
                            <span className="font-medium text-primary">
                              {store.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full">
                        Сравнить цены {product.stores.length} →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
