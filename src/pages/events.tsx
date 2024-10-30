'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from 'lucide-react'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "夏のコンサート2025",
      date: "2025年7月15日",
      time: "18:00開演",
      location: "大分市民ホール",
      description: "夏の夜に響く、心温まるハーモニー。クラシックから現代曲まで幅広いレパートリーでお届けします。",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      id: 2,
      title: "秋の野外音楽祭",
      date: "2025年10月10日",
      time: "13:00開演",
      location: "大分城址公園",
      description: "紅葉の美しい公園で、自然と調和した歌声をお楽しみください。地元の食べ物ブースも出店予定です。",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      id: 3,
      title: "クリスマスチャリティーコンサート",
      date: "2025年12月23日",
      time: "19:00開演",
      location: "大分カトリック教会",
      description: "聖夜に捧げる歌声。収益の一部は地域の子どもたちの音楽教育支援に寄付されます。",
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="コンサートの様子"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">イベント情報</h1>
            <p className="text-xl md:text-2xl">感動の瞬間をあなたに</p>
          </div>
        </div>
      </section>

      {/* イベントリスト */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">今後のイベント</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">詳細を見る</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 過去のイベント */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">過去のイベント</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-lg font-semibold">2024年12月</span>
                </div>
                <div className="flex-grow pl-4 border-l  border-primary">
                  <h3 className="text-xl font-semibold mb-2">ウィンターコンサート</h3>
                  <p className="text-muted-foreground">
                    冬の訪れを告げる心温まるコンサートを開催しました。
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-lg font-semibold">2024年9月</span>
                </div>
                <div className="flex-grow pl-4 border-l border-primary">
                  <h3 className="text-xl font-semibold mb-2">地域文化祭出演</h3>
                  <p className="text-muted-foreground">
                    地域の文化祭に出演し、多くの方々に合唱の魅力をお届けしました。
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-lg font-semibold">2024年7月</span>
                </div>
                <div className="flex-grow pl-4 border-l border-primary">
                  <h3 className="text-xl font-semibold mb-2">サマーコンサート</h3>
                  <p className="text-muted-foreground">
                    初めての大規模コンサートを成功裏に開催しました。
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
          <h2 className="text-3xl font-bold mb-8">一緒に感動を創り出しませんか？</h2>
          <p className="text-xl mb-8">
            私たちのコンサートに参加して、音楽の素晴らしさを体験してください。
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