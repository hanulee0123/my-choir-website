'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }
  .animate-slide-up {
    animation: slideUp 0.5s ease-out;
  }
`

export default function ConductorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
      <style jsx>{styles}</style>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">指揮者紹介</h1>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="animate-fade-in">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="山田太郎"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover md:w-48"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="animate-slide-up">
                <h2 className="text-2xl font-semibold mb-4">山田 太郎</h2>
                <p className="text-gray-600 mb-4">
                  山田太郎は、国内外で高い評価を受ける指揮者です。その情熱的かつ繊細な指揮スタイルで、
                  合唱団を数々の受賞へと導いてきました。
                </p>
                <p className="text-gray-600 mb-4">
                  東京音楽大学卒業後、ウィーン国立音楽大学で研鑽を積み、帰国後は多くの合唱団や
                  オーケストラを指揮。その卓越した音楽性と教育者としての才能は、次世代の音楽家たちにも
                  大きな影響を与えています。
                </p>
                <p className="text-gray-600 mb-4">
                  山田氏の指導の下、私たちの合唱団は新たな高みを目指し、感動的な音楽体験を
                  創造し続けています。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <Link href="/">
            <Button variant="outline">ホームに戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}