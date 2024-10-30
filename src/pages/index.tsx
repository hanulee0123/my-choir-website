'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from 'lucide-react'

export default function ChoirHomepage() {
  const choirName = '合唱団名をここに入力' 
  const foundationDate = '2025年4月1日' 

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{choirName}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:underline">概要</Link></li>
              <li><Link href="#events" className="hover:underline">イベント</Link></li>
              <li><Link href="/join" className="hover:underline">入団案内</Link></li>
              <li><Link href="/conductor" className="hover:underline">指揮者紹介</Link></li>
              <li><Link href="#contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative w-full h-[80vh] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site_main_image-I91oRhcfOSc8RoKUrXb4Su8L3xqwEA.png"
              alt="合唱団のメンバーのシルエット"
              width={1920}
              height={1080}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">九州の歌声を世界へ</h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl">私たちと一緒に素晴らしい音楽の旅に出かけましょう</p>
              <Button size="lg" asChild>
                <Link href="#about">詳しく見る</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">私たちについて</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">ミッション</h3>
                <p>私たちは、九州、特に大分を中心に活動し、地域の合唱文化を盛り上げることを目指しています。3年間の限定プロジェクトとして、情熱的な歌声を通じて人々の心に感動を届けます。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">ビジョン</h3>
                <p>合唱を通じて地域コミュニティを強化し、音楽の力で人々をつなぎます。私たちの活動が、将来的な九州の合唱シーンの発展につながることを願っています。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">イベント情報</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">コンサート{index + 1}</h3>
                  <p className="text-gray-600 mb-4">日時: 2024年{index + 5}月1日</p>
                  <p className="text-gray-600 mb-4">場所: 大分市民ホール</p>
                  <Button variant="outline" asChild>
                    <Link href="#events">詳細を見る</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">団員募集中</h2>
            <p className="text-xl mb-8">合唱指導の練習をしたい方から、合唱が大好きな方まで、合唱に対する熱い想いがある方を募集しています！</p>
            <Button size="lg" asChild>
              <Link href="/join">入団案内を見る</Link>
            </Button>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="お名前" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="メールアドレス" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="メッセージ" />
              </div>
              <Button type="submit" className="w-full">送信</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{choirName}</h3>
              <p>設立: {foundationDate}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">連絡先</h3>
              <ul>
                <li className="flex items-center mb-2"><Mail className="mr-2" /> info@kyushu-choir.jp</li>
                <li className="flex items-center mb-2"><MapPin className="mr-2" /> 大分県大分市</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 {choirName}. All rights reserved.</p> 
          </div>
        </div>
      </footer>
    </div>
  )
}