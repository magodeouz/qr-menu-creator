"use client"

const menuData = {
  yiyecekler: [
    { name: "Tavuklu Pilav", subtitle: "(200gr Pilav - 30gr Tavuk)", price: "200₺" },
    { name: "Köfteli Pilav ", subtitle: "(200gr Pilav - 150gr Köfte)", price: "300₺" },
    { name: "Köfte Ekmek ", subtitle: "(150gr Köfte)", price: "300₺" },
    { name: "Makarna", subtitle: "(Köri - Krema - Tavuk)", price: "200₺" },
    { name: "Makarna", subtitle: "(Pesto Sos - Krema - Tavuk)", price: "200₺" },
    { name: "Makarna", subtitle: "(Domates - Kekik - Tavuk)", price: "200₺" },
    { name: "Çıtır Tavuk Menü", subtitle: "(150gr Tavuk - 150gr Patates)", price: "280₺" },
    { name: "Karışık Pizza", price: "320₺" },
    { name: "Ayvalık Tostu", price: "190₺" },
    { name: "Lima Soğuk Sandviç", subtitle: "(Pesto Sos ve Kaşar Peyniri)", price: "100₺" },
    { name: "Soğuk Sandviç", subtitle: "(Jambon ve Hindi Füme)", price: "120₺" },
  ],
  börekler: [
    { name: "Patatesli Rulo Börek", subtitle: "(95gr)", price: "60₺" },
    { name: "Patlıcanlı Rulo Börek", subtitle: "(95gr)", price: "60₺" },
    { name: "Ispanaklı Peynirli Rulo Börek", subtitle: "(95gr)", price: "60₺" },
    { name: "Peynirli Rulo Börek", subtitle: "(95gr)", price: "60₺" },
    { name: "Balkan Çöreği", subtitle: "(95gr)", price: "70₺" },
    { name: "Pizza Çörek", subtitle: "(95gr, Salam, Sosis, Sucuk)", price: "80₺" },
    { name: "Sarma", subtitle: "(150gr, Yanında Yoğurt İle)", price: "170₺" },
  ],
  tatlılar: [
    { name: "Donut", subtitle: "(Strowjelly 73gr - Nutzilla 71gr)", price: "120₺" },
    { name: "Gökkuşağı Pasta", price: "200₺" },
    { name: "Velvet", subtitle: "(Oreolu - Krokanlı - Kahveli)", price: "200₺" },
    { name: "Kubbe", subtitle: "(Fıstıklı Çikolatalı - Lotus)", price: "200₺" },
    { name: "Cheese Cake", subtitle: "(Lotus - Oreo, Limon - Frambuaz)", price: "200₺" },
  ],
  icecekler: [
    { name: "Su", price: "20₺" },
    { name: "Çay", price: "30₺" },
    { name: "Türk Kahvesi", price: "75₺" },
    { name: "Filtre Kahve", price: "120₺" },
    { name: "Espresso", price: "120₺" },
    { name: "Americano", price: "120₺" },
    { name: "Latte", price: "130₺" },
    { name: "Karamel Latte", price: "140₺" },
    { name: "White Chocolate", price: "140₺" },
    { name: "Mocha", price: "140₺" },
    { name: "Ice Americano", price: "130₺" },
    { name: "Ice Latte", price: "140₺" },
    { name: "Ice Mocha", price: "150₺" },
    { name: "Ayran", price: "30₺" },
    { name: "Kola", price: "80₺" },
    { name: "Ice Tea", price: "80₺" },
    { name: "Cool Lime", price: "160₺" },
    { name: "Meyveli Soda", price: "60₺" },
    { name: "Sade Soda", price: "40₺" },
  ],
}

export function ModernTurkishMenu() {
  const DecorativeElement = ({ className }: { className: string }) => (
    <div className={`absolute ${className}`}>
      <div className="w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="decorative" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <path
            d="M10,10 Q30,5 50,10 Q55,30 50,50 Q30,55 10,50 Q5,30 10,10 Z M20,20 Q35,15 50,20 Q55,35 50,50 Q35,55 20,50 Q15,35 20,20 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <circle cx="30" cy="30" r="2" fill="white" opacity="0.4" />
          <circle cx="70" cy="30" r="1.5" fill="white" opacity="0.3" />
          <circle cx="30" cy="70" r="1" fill="white" opacity="0.5" />
          <circle cx="70" cy="70" r="2.5" fill="white" opacity="0.2" />
        </svg>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <DecorativeElement className="top-8 left-8" />
      <DecorativeElement className="top-8 right-8 rotate-90" />
      <DecorativeElement className="bottom-8 left-8 -rotate-90" />
      <DecorativeElement className="bottom-8 right-8 rotate-180" />

      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-serif tracking-wider mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            MENU
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <h2 className="text-3xl font-light tracking-widest text-gray-300">LIMA COFFEE</h2>
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* LEFT COLUMN: YİYECEKLER + BÖREKLER */}
          <div className="space-y-12">
            {/* YİYECEKLER */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-serif mb-4 tracking-wider">YİYECEKLER</h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
              </div>

              <div className="space-y-6">
                {menuData.yiyecekler.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium mb-1 group-hover:text-gray-200 transition-colors">
                          {item.name}
                        </h4>
                        {item.subtitle && <p className="text-sm text-gray-400 italic">{item.subtitle}</p>}
                      </div>
                      <div className="ml-4 flex items-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white mx-2"></div>
                        <span className="text-xl font-light text-gray-200 min-w-[60px] text-right">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BÖREKLER */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-serif mb-4 tracking-wider">BÖREKLER</h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
              </div>

              <div className="space-y-6">
                {menuData.börekler.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium mb-1 group-hover:text-gray-200 transition-colors">
                          {item.name}
                        </h4>
                        {item.subtitle && <p className="text-sm text-gray-400 italic">{item.subtitle}</p>}
                      </div>
                      <div className="ml-4 flex items-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white mx-2"></div>
                        <span className="text-xl font-light text-gray-200 min-w-[60px] text-right">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TATLILAR + İÇECEKLER */}
          <div className="space-y-12">
            {/* TATLILAR */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-serif mb-4 tracking-wider">TATLILAR</h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
              </div>

              <div className="space-y-6">
                {menuData.tatlılar.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium mb-1 group-hover:text-gray-200 transition-colors">
                          {item.name}
                        </h4>
                        {item.subtitle && <p className="text-sm text-gray-400 italic">{item.subtitle}</p>}
                      </div>
                      <div className="ml-4 flex items-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white mx-2"></div>
                        <span className="text-xl font-light text-gray-200 min-w-[60px] text-right">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* İÇECEKLER */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-serif mb-4 tracking-wider">İÇECEKLER</h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
              </div>

              <div className="space-y-6">
                {menuData.icecekler.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium mb-1 group-hover:text-gray-200 transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <div className="ml-4 flex items-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white mx-2"></div>
                        <span className="text-xl font-light text-gray-200 min-w-[60px] text-right">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 space-y-4">
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <div className="text-2xl font-light tracking-wider text-gray-300">+90 533 766 27 10</div>
          <div className="text-lg text-gray-400 tracking-wide">243 Sokak No:16A Manavkuyu İZMİR</div>
        </div>

        {/* Price Update Date */}
        <div className="flex justify-end mt-8 mr-4">
          <p className="text-sm text-gray-500 italic">Fiyat güncellenme tarihi: 28.02.2026</p>
        </div>
      </div>
    </div>
  )
}
