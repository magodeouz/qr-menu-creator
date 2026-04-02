import { SimpleQRCodeGenerator } from "@/components/simple-qr-code-generator"

export default function QRPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <SimpleQRCodeGenerator />
    </div>
  )
}
