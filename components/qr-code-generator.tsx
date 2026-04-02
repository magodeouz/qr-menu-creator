"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, RefreshCw } from "lucide-react"
import Link from "next/link"

export function QRCodeGenerator() {
  const [url, setUrl] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Generate QR code on component mount with default URL
  useEffect(() => {
    const defaultUrl = window.location.href
    setUrl(defaultUrl)
    generateQRCode(defaultUrl)
  }, [])

  const generateQRCode = async (urlToEncode: string) => {
    if (!urlToEncode) return

    setIsLoading(true)

    try {
      // Using the Google Charts API to generate QR code
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
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">QR Kod Oluşturucu</CardTitle>
        <CardDescription>Lima Coffee menünüz için QR kod oluşturun</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">Menü URL'si</Label>
            <div className="flex gap-2">
              <Input
                id="url"
                placeholder="https://your-menu-url.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Oluştur"}
              </Button>
            </div>
          </div>
        </form>

        {qrCodeUrl && (
          <div className="flex flex-col items-center space-y-4">
            <div className="border-2 border-gray-200 p-6 rounded-xl bg-white shadow-lg">
              <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" className="mx-auto" width={300} height={300} />
            </div>
            <p className="text-sm text-center text-gray-600 max-w-md">
              Bu QR kodu akıllı telefon kamerası ile taratarak Lima Coffee menüsünü görüntüleyebilirsiniz
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button onClick={downloadQRCode} disabled={!qrCodeUrl} className="bg-black hover:bg-gray-800">
          <Download className="mr-2 h-4 w-4" />
          QR Kodu İndir
        </Button>
        <Link href="/">
          <Button variant="outline">Menüye Dön</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
