"use client"

import type * as React from "react"
import { useState } from "react"
import { ChevronDown, ChevronRight, Filter, SlidersHorizontal, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // State for expanded sections
  const [expandedCategories, setExpandedCategories] = useState(false)
  const [expandedBrands, setExpandedBrands] = useState(false)

  // Sample data
  const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Sports & Outdoors",
    "Beauty",
    "Toys & Games",
    "Automotive",
    "Health",
    "Grocery",
    "Pet Supplies",
    "Office Products",
  ]

  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Nike",
    "Adidas",
    "LG",
    "Microsoft",
    "Amazon",
    "Google",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Acer",
    "Xiaomi",
  ]

  // Display only first 6 items if not expanded
  const displayedCategories = expandedCategories ? categories : categories.slice(0, 6)
  const displayedBrands = expandedBrands ? brands : brands.slice(0, 6)

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <Button variant="ghost" size="sm">
            Clear All
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Search Filter */}
        <SidebarGroup>
          <SidebarGroupLabel>Search</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-1">
              <Input placeholder="Search products..." />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Price Range Filter */}
        <SidebarGroup>
          <SidebarGroupLabel>Price Range</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-1 space-y-4">
              <Slider defaultValue={[0, 1000]} min={0} max={1000} step={10} />
              <div className="flex items-center justify-between">
                <div className="w-[45%]">
                  <Label htmlFor="min-price" className="text-xs">
                    Min
                  </Label>
                  <Input id="min-price" type="number" placeholder="0" className="h-8" />
                </div>
                <span className="text-muted-foreground">-</span>
                <div className="w-[45%]">
                  <Label htmlFor="max-price" className="text-xs">
                    Max
                  </Label>
                  <Input id="max-price" type="number" placeholder="1000" className="h-8" />
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Category Filter - 2 columns */}
        <SidebarGroup>
          <SidebarGroupLabel>Category</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {displayedCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal truncate">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
            {categories.length > 6 && (
              <Button
                variant="link"
                size="sm"
                className="mt-2 h-auto p-0"
                onClick={() => setExpandedCategories(!expandedCategories)}
              >
                {expandedCategories ? (
                  <span className="flex items-center">
                    Show less <ChevronDown className="ml-1 h-3 w-3" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Show more ({categories.length - 6}) <ChevronRight className="ml-1 h-3 w-3" />
                  </span>
                )}
              </Button>
            )}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Brand Filter - 2 columns */}
        <SidebarGroup>
          <SidebarGroupLabel>Brand</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {displayedBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} />
                  <Label htmlFor={`brand-${brand}`} className="text-sm font-normal truncate">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
            {brands.length > 6 && (
              <Button
                variant="link"
                size="sm"
                className="mt-2 h-auto p-0"
                onClick={() => setExpandedBrands(!expandedBrands)}
              >
                {expandedBrands ? (
                  <span className="flex items-center">
                    Show less <ChevronDown className="ml-1 h-3 w-3" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Show more ({brands.length - 6}) <ChevronRight className="ml-1 h-3 w-3" />
                  </span>
                )}
              </Button>
            )}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Rating Filter */}
        <SidebarGroup>
          <SidebarGroupLabel>Rating</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2 px-1">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm font-normal flex items-center">
                    {Array(rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    {Array(5 - rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-muted-foreground" />
                      ))}
                    <span className="ml-1">& Up</span>
                  </Label>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Availability Filter */}
        <SidebarGroup>
          <SidebarGroupLabel>Availability</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 px-1">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock" className="text-sm font-normal">
                  In Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2 px-1">
                <Checkbox id="on-sale" />
                <Label htmlFor="on-sale" className="text-sm font-normal">
                  On Sale
                </Label>
              </div>
              <div className="flex items-center space-x-2 px-1">
                <Checkbox id="free-shipping" />
                <Label htmlFor="free-shipping" className="text-sm font-normal">
                  Free Shipping
                </Label>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <Select>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <SelectValue placeholder="Sort By: Featured" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
