"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "drg. Andi Pratama",
    userName: "Pemilik Klinik Gigi Sehat",
    comment:
      "Radent sangat membantu operasional klinik kami. Jadwal dokter dan data pasien jadi lebih teratur dan mudah diakses kapan saja.",
    rating: 5.0,
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "drg. Siti Rahmawati",
    userName: "Klinik Gigi Ceria",
    comment:
      "Fitur laporan otomatis dan pengingat pasien dari Radent membuat pelayanan kami semakin profesional dan efisien.",
    rating: 4.9,
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "drg. Budi Santoso",
    userName: "Klinik Gigi Harmoni",
    comment:
      "Integrasi WhatsApp dan SMS sangat memudahkan komunikasi dengan pasien. Tim support Radent juga sangat responsif.",
    rating: 5.0,
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "drg. Maya Putri",
    userName: "Klinik Gigi Prima",
    comment:
      "Sistem cloud Raden membuat data klinik selalu aman dan bisa diakses dari mana saja. Sangat direkomendasikan!",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimoni Pengguna
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Apa Kata Klinik Gigi tentang Raden?
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0 flex flex-col items-center">
                  {/* Logo Klinik */}
                  <div className="mb-4">
                    <img
                      src={review.image}
                      alt={`Logo ${review.userName}`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary bg-white"
                    />
                  </div>
                  <div className="flex gap-1 pb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${i < Math.round(review.rating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                          }`}
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-col gap-1 items-center">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.userName}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
