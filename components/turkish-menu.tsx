"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Edit3, X } from "lucide-react"

// Menu data matching the Turkish menu design
const initialMenuData = {
  yiyecekler: [
    { name: "Tavuklu Pilav", price: "" },
    { name: "Köfteli Pilav", price: "" },
    { name: "Ayvalık Tostu", price: "" },
    { name: "Köfte Ekmek", price: "" },
    { name: "Penne", subtitle: "(Köri - Krema - Tavuk)", price: "" },
    { name: "Mantı", price: "" },
    { name: "Menemen", price: "" },
  ],
  icecekler: [
    { name: "Ayran", price: "" },
    { name: "Kola", price: "" },
    { name: "Ice Tea", price: "" },
    { name: "Cool Lime", price: "" },
    { name: "Meyveli Soda", price: "" },
    { name: "Sade Soda", price: "" },
  ],
  limaCoffee: [
    { name: "Su", price: "" },
    { name: "Çay", price: "" },
    { name: "Türk Kahvesi", price: "" },
    { name: "Filtre Kahve", price: "" },
    { name: "Espresso", price: "" },
    { name: "Americano", price: "" },
    { name: "Latte", price: "" },
    { name: "Karamel Latte", price: "" },
    { name: "White Chocolate", price: "" },
    { name: "Mocha", price: "" },
    { name: "Ice Americano", price: "" },
    { name: "Ice Latte", price: "" },
    { name: "Ice Mocha", price: "" },
    { name: "Limonata", price: "" },
  ],
}

export function TurkishMenu() {
  const [menuData, setMenuData] = useState(initialMenuData)
  const [isEditing, setIsEditing] = useState(false)
  const [phone, setPhone] = useState("+90 533 766 27 10")
  const [address, setAddress] = useState("243 Sokak No:16A Manavkuyu İZMİR")

  const updatePrice = (category: keyof typeof menuData, index: number, price: string) => {
    setMenuData((prev) => ({
      ...prev,
      [category]: prev[category].map((item, i) => (i === index ? { ...item, price } : item)),
    }))
  }

  const DecorativeCorner = ({ className }: { className: string }) => (
    <div className={`absolute w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-white opacity-80">
        
        <path
          d="M20,20 Q40,25 60,20 Q65,40 60,60 Q40,65 20,60 Q15,40 20,20 Z"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <circle cx="30" cy="30" r="2" />
        <circle cx="70" cy="30" r="2" />
        <circle cx="30" cy="70" r="2" />
        <circle cx="70" cy="70" r="2" />
      </svg>
    </div>
  )

  const TableIcon = () => (
    <div className="flex justify-center mb-6">
      
    </div>
  )

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="relative bg-black text-white min-h-[800px] p-8">
          {/* Decorative Corners */}
          <DecorativeCorner className="top-4 left-4" />
          <DecorativeCorner className="top-4 right-4 rotate-90" />
          <DecorativeCorner className="bottom-4 left-4 -rotate-90" />
          <DecorativeCorner className="bottom-4 right-4 rotate-180" />

          {/* Header */}
          <div className="text-center mb-12">
            <TableIcon />
            <h1 className="text-6xl font-serif tracking-wider">MENU</h1>
          </div>

          {/* Edit Button */}
          <div className="absolute top-4 right-20">
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="outline"
              size="sm"
              className="bg-white text-black hover:bg-gray-100"
            >
              {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
              {isEditing ? "Kapat" : "Düzenle"}
            </Button>
          </div>

          {/* Menu Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* YİYECEKLER */}
            <div>
              <h2 className="text-2xl font-serif mb-4 pb-2 border-b-2 border-white">YİYECEKLER</h2>
              <div className="space-y-3">
                {menuData.yiyecekler.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.subtitle && <div className="text-sm text-gray-300">{item.subtitle}</div>}
                    </div>
                    {isEditing ? (
                      <Input
                        value={item.price}
                        onChange={(e) => updatePrice("yiyecekler", index, e.target.value)}
                        className="w-16 h-8 bg-white text-black text-center"
                        placeholder="₺"
                      />
                    ) : (
                      <div className="w-16 h-6 bg-white text-black flex items-center justify-center text-sm font-medium">
                        {item.price || ""}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* İÇECEKLER */}
            <div>
              <h2 className="text-2xl font-serif mb-4 pb-2 border-b-2 border-white">İÇECEKLER</h2>
              <div className="space-y-3">
                {menuData.icecekler.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="font-medium">{item.name}</div>
                    {isEditing ? (
                      <Input
                        value={item.price}
                        onChange={(e) => updatePrice("icecekler", index, e.target.value)}
                        className="w-16 h-8 bg-white text-black text-center"
                        placeholder="₺"
                      />
                    ) : (
                      <div className="w-16 h-6 bg-white text-black flex items-center justify-center text-sm font-medium">
                        {item.price || ""}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* LİMA COFFEE */}
            <div>
              <h2 className="text-2xl font-serif mb-4 pb-2 border-b-2 border-white">LİMA COFFEE</h2>
              <div className="space-y-3">
                {menuData.limaCoffee.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="font-medium">{item.name}</div>
                    {isEditing ? (
                      <Input
                        value={item.price}
                        onChange={(e) => updatePrice("limaCoffee", index, e.target.value)}
                        className="w-16 h-8 bg-white text-black text-center"
                        placeholder="₺"
                      />
                    ) : (
                      <div className="w-16 h-6 bg-white text-black flex items-center justify-center text-sm font-medium">
                        {item.price || ""}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2">
            {isEditing ? (
              <div className="space-y-2">
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white text-black text-center max-w-xs mx-auto"
                />
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-white text-black text-center max-w-md mx-auto"
                />
              </div>
            ) : (
              <>
                <div className="text-xl font-medium">{phone}</div>
                <div className="text-lg">{address}</div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
