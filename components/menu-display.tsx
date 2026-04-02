"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample menu data
const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Garlic Bread",
      price: 5.99,
      description: "Toasted bread with garlic butter and herbs",
      dietary: ["vegetarian"],
    },
    {
      id: 2,
      name: "Mozzarella Sticks",
      price: 7.99,
      description: "Breaded mozzarella with marinara sauce",
      dietary: ["vegetarian"],
    },
    {
      id: 3,
      name: "Chicken Wings",
      price: 9.99,
      description: "Crispy wings with choice of sauce: BBQ, Buffalo, or Honey Garlic",
      dietary: [],
    },
  ],
  mains: [
    {
      id: 4,
      name: "Classic Burger",
      price: 12.99,
      description: "Beef patty with lettuce, tomato, onion, and special sauce",
      dietary: [],
    },
    {
      id: 5,
      name: "Margherita Pizza",
      price: 14.99,
      description: "Tomato sauce, fresh mozzarella, and basil",
      dietary: ["vegetarian"],
    },
    {
      id: 6,
      name: "Grilled Salmon",
      price: 18.99,
      description: "Served with seasonal vegetables and lemon butter sauce",
      dietary: ["gluten-free"],
    },
    {
      id: 7,
      name: "Vegetable Stir Fry",
      price: 13.99,
      description: "Mixed vegetables with tofu in a savory sauce",
      dietary: ["vegan", "gluten-free"],
    },
  ],
  desserts: [
    {
      id: 8,
      name: "Chocolate Cake",
      price: 6.99,
      description: "Rich chocolate cake with ganache",
      dietary: ["vegetarian"],
    },
    {
      id: 9,
      name: "Fruit Sorbet",
      price: 5.99,
      description: "Refreshing fruit sorbet, ask for today's flavors",
      dietary: ["vegan", "gluten-free"],
    },
  ],
  drinks: [
    { id: 10, name: "Soft Drinks", price: 2.99, description: "Cola, Lemon-Lime, Orange, or Root Beer", dietary: [] },
    {
      id: 11,
      name: "Fresh Lemonade",
      price: 3.99,
      description: "Homemade lemonade with mint",
      dietary: ["vegan", "gluten-free"],
    },
    { id: 12, name: "Coffee", price: 2.99, description: "Regular or decaf", dietary: [] },
  ],
}

export function MenuDisplay() {
  const [activeCategory, setActiveCategory] = useState("appetizers")

  const dietaryBadgeColor = (type: string) => {
    switch (type) {
      case "vegetarian":
        return "bg-green-100 text-green-800"
      case "vegan":
        return "bg-emerald-100 text-emerald-800"
      case "gluten-free":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Our Menu</CardTitle>
        <CardDescription>Browse our delicious offerings</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
            <TabsTrigger value="mains">Mains</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <div className="flex gap-1 mt-1">
                        {item.dietary.map((diet) => (
                          <Badge key={diet} variant="outline" className={dietaryBadgeColor(diet)}>
                            {diet}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
