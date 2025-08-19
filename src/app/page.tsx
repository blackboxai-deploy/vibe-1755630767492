import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-4">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hello World!
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Welcome to your Next.js application
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-700 leading-relaxed">
            This is a simple Hello World page built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Ready to start building something amazing?
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}