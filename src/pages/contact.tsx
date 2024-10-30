'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* お問い合わせフォーム */}
            <Card>
              <CardHeader>
                <CardTitle>メッセージを送る</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
                    <Input id="name" placeholder="山田 花子" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">件名</label>
                    <Input id="subject" placeholder="お問い合わせの件名" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">メッセージ</label>
                    <Textarea id="message" placeholder="お問い合わせ内容をご記入ください" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">送信する</Button>
                </form>
              </CardContent>
            </Card>

            {/* 連絡先情報 */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>連絡先情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>info@kyushu-choir.jp</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>097-123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>〒870-0000 大分県大分市○○町1-2-3</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>よくある質問</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Q: 入団に経験は必要ですか？</h3>
                    <p className="text-muted-foreground">A: 経験は問いません。音楽を愛する心があれば大歓迎です。</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Q: 練習の頻度は？</h3>
                    <p className="text-muted-foreground">A: 毎週土曜日の18:00〜20:00に定期練習を行っています。</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Q: 見学は可能ですか？</h3>
                    <p className="text-muted-foreground">A: はい、事前にご連絡いただければ練習の見学が可能です。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* 地図 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">アクセス</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53650.35700411203!2d131.5868811510836!3d33.23891740701894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a6c5a33a3f3f%3A0x5d0d8f62d7f2a1c0!2z5aSn5YiG5biC!5e0!3m2!1sja!2sjp!4v1652345678901!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* フッター */}
        <footer className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline">ホームに戻る</Button>
          </Link>
        </footer>
      </div>
    </div>
  )
}