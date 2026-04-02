"use client"

import type React from "react"
import { useState, useEffect } from "react"

export function SimpleQRCodeGenerator() {
  const [url, setUrl] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const defaultUrl = window.location.origin
      setUrl(defaultUrl)
      generateQRCode(defaultUrl)
    }
  }, [])

  const generateQRCode = async (urlToEncode: string) => {
    if (!urlToEncode) return

    setIsLoading(true)

    try {
      const encodedUrl = encodeURIComponent(urlToEncode)
      const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodedUrl}&chs=300x300&choe=UTF-8&chld=L|2`
      setQrCodeUrl(qrUrl)
    } catch (error) {
      console.error("Error generating QR code:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateQRCode(url)
  }

  const downloadQRCode = () => {
    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = "lima-coffee-qr.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">QR Kod Oluşturucu</h1>
        <p className="text-gray-600 mt-2">Lima Coffee menünüz için QR kod oluşturun</p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            Menü URL'si
          </label>
          <div className="flex gap-2">
            <input
              id="url"
              type="text"
              placeholder="https://your-menu-url.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 transition-colors"
            >
              {isLoading ? "Yükleniyor..." : "Oluştur"}
            </button>
          </div>
        </div>
      </form>

      {qrCodeUrl && (
        <div className="flex flex-col items-center space-y-4">
          <div className="border-2 border-gray-200 p-6 rounded-xl bg-white">
            <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" className="mx-auto" width={300} height={300} />
          </div>
          <p className="text-sm text-center text-gray-600 max-w-md">
            Bu QR kodu akıllı telefon kamerası ile taratarak Lima Coffee menüsünü görüntüleyebilirsiniz
          </p>
          <button
            onClick={downloadQRCode}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            QR Kodu İndir
          </button>
          <a
            href="/"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
          >
            Menüye Dön
          </a>
        </div>
      )}
    </div>
  )
}
