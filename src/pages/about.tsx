'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, Users, Calendar, Trophy } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="合唱団の集合写真"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">私たちについて</h1>
            <p className="text-xl md:text-2xl">九州の歌声を世界へ</p>
          </div>
        </div>
      </section>

      {/* ミッションとビジョン */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">ミッションとビジョン</h2>
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="mission">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="mission">ミッション</TabsTrigger>
                    <TabsTrigger value="vision">ビジョン</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mission" className="mt-4">
                    <p className="text-lg">
                      私たちは、九州、特に大分を中心に活動し、地域の合唱文化を盛り上げることを目指しています。
                      3年間の限定プロジェクトとして、情熱的な歌声を通じて人々の心に感動を届けます。
                    </p>
                  </TabsContent>
                  <TabsContent value="vision" className="mt-4">
                    <p className="text-lg">
                      合唱を通じて地域コミュニティを強化し、音楽の力で人々をつなぎます。
                      私たちの活動が、将来的な九州の合唱シーンの発展につながることを願っています。
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 活動内容 */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">活動内容</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">定期練習</h3>
                <p className="text-muted-foreground">
                  毎週土曜日に定期練習を行い、技術向上に努めています。
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">コンサート</h3>
                <p className="text-muted-foreground">
                  年2回の定期コンサートを開催し、日頃の成果を披露します。
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">地域イベント</h3>
                <p className="text-muted-foreground">
                  地域のイベントに積極的に参加し、音楽を通じて貢献します。
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">コンクール</h3>
                <p className="text-muted-foreground">
                  各種合唱コンクールに参加し、技術向上を図ります。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 団の歴史 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">団の歴史</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-lg font-semibold">2025年</span>
                </div>
                <div className="flex-grow pl-4 border-l border-primary">
                  <h3 className="text-xl font-semibold mb-2">団体設立</h3>
                  <p className="text-muted-foreground">
                    音楽を愛する仲間が集まり、3年間の限定プロジェクトとして合唱団を設立。
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-lg font-semibold">2026年</span>
                </div>
                <div className="flex-grow pl-4 border-l border-primary">
                  <h3 className="text-xl font-semibold mb-2">初のコンサート開催</h3>
                  <p className="text-muted-foreground">
                    大分市民ホールにて、設立1周年を記念した初のコンサートを成功裏に開催。
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-lg font-semibold">2027年</span>
                </div>
                <div className="flex-grow pl-4 border-l border-primary">
                  <h3 className="text-xl font-semibold mb-2">九州合唱コンクール出場</h3>
                  <p className="text-muted-foreground">
                    九州合唱コンクールに初出場し、銀賞を受賞。地域の期待を集める。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">私たちと一緒に歌いませんか？</h2>
          <p className="text-xl mb-8">
            音楽を愛する仲間たちが待っています。あなたの声で、新しい物語を紡ぎましょう。
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/join">入団案内を見る</Link>
          </Button>
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