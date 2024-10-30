// src/pages/conductor.tsx

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Conductor() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">指揮者紹介</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/images/conductor.jpg" // public/images フォルダに画像を配置してください
            alt="指揮者の写真"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">山田 太郎</h2>
          <p className="mb-4">
            山田太郎は、著名な音楽家であり、多くの合唱団を指揮してきました。彼の指揮のもとで、合唱団は数々の賞を受賞し、地域社会に貢献しています。
          </p>
          <p className="mb-4">
            彼の指揮スタイルは、情熱的でありながらも繊細な表現力が特徴です。山田は、メンバー一人ひとりの声を大切にし、合唱団全体の調和を重視しています。
          </p>
          <p className="mb-4">
            山田は、音楽教育にも力を入れており、次世代の音楽家の育成にも貢献しています。彼のリーダーシップの下、合唱団はさらなる高みを目指しています。
          </p>
          <Link href="/">
            <Button className="mt-4">ホームに戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
