'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, Users, Calendar, Trophy } from 'lucide-react'

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="合唱団の練習風景"
          width={1200}
          height={800}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              「感動」を「共に」創る。
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              あなたの声が、新しい物語の始まりです。
            </p>
            <Button size="lg" variant="default" className="text-lg px-8">
              エントリーする
            </Button>
          </div>
        </div>
      </div>

      {/* ビジョンセクション */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              音楽は、人々の心を一つにする力を持っています。
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              私たちは単なる合唱団ではありません。<br />
              感動を創造し、共有し、そして未来へ繋ぐコミュニティです。<br />
              あなたの情熱が、この物語の重要な一部となります。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">音楽への情熱</h3>
                <p className="text-muted-foreground">
                  経験は問いません。大切なのは音楽を愛する心です。
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">仲間との出会い</h3>
                <p className="text-muted-foreground">
                  同じ目標を持つ仲間たちとの素晴らしい出会いが待っています。
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">充実した活動</h3>
                <p className="text-muted-foreground">
                  定期的な練習と本番でスキルアップを実感できます。
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">目標への挑戦</h3>
                <p className="text-muted-foreground">
                  コンクールや演奏会など、様々な挑戦の機会があります。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 活動内容セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">活動について</h2>
          <Tabs defaultValue="schedule" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="schedule">活動スケジュール</TabsTrigger>
              <TabsTrigger value="requirements">応募資格</TabsTrigger>
              <TabsTrigger value="flow">選考フロー</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">定期練習</h4>
                      <p>毎週土曜日 18:00〜20:00</p>
                      <p className="text-muted-foreground">場所：大分市民文化センター</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">特別練習</h4>
                      <p>本番前の集中練習期間があります</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">年間スケジュール</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>4月：新メンバー歓迎会</li>
                        <li>7月：サマーコンサート</li>
                        <li>12月：ウィンターコンサート</li>
                        <li>3月：年度末発表会</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="requirements" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">応募資格</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>音楽を愛する心を持っている方</li>
                        <li>定期的な練習に参加できる方</li>
                        <li>2025年3月に大学・大学院を卒業見込みの方</li>
                        <li>合唱経験は問いません</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">求める人物像</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>音楽を通じて人々に感動を届けたい方</li>
                        <li>チームワークを大切にできる方</li>
                        <li>新しいことにチャレンジする意欲のある方</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="flow" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">エントリー</h4>
                        <p className="text-muted-foreground">応募フォームから必要事項を入力</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">面談</h4>
                        <p className="text-muted-foreground">音楽経験や意欲についてお話を伺います</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">練習見学</h4>
                        <p className="text-muted-foreground">実際の練習を見学・体験していただきます</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold">入団</h4>
                        <p className="text-muted-foreground">仲間としてお迎えします</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* エントリーセクション */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">エントリー</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">お名前</label>
                    <Input placeholder="山田 花子" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">メールアドレス</label>
                    <Input type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">大学・学部</label>
                    <Input placeholder="○○大学 ○○学部" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">音楽経験</label>
                    <Textarea placeholder="これまでの音楽経験についてお聞かせください" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">志望動機</label>
                    <Textarea placeholder="入団を希望される理由をお聞かせください" />
                  </div>
                  <Button type="submit" className="w-full">
                    エントリーする
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 text-center">
        <Link href="/">
          <Button variant="outline">ホームに戻る</Button>
        </Link>
      </footer>
    </div>
  )
}
