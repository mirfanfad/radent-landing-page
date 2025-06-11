import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Gratis",
    popular: 0,
    price: 0,
    description:
      "Cocok untuk klinik yang ingin mencoba Radent tanpa biaya. Fitur dasar untuk operasional klinik gigi.",
    buttonText: "Coba Gratis",
    benefitList: [
      "1 pengguna",
      "Penyimpanan 1 GB",
      "Maksimal 2 dokter",
      "Dukungan email",
      "Akses fitur dasar",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 149,
    description:
      "Solusi lengkap untuk klinik gigi modern. Semua fitur Radent tanpa batasan.",
    buttonText: "Langganan Sekarang",
    benefitList: [
      "Semua fitur Gratis",
      "Pengguna & dokter tanpa batas",
      "Penyimpanan besar",
      "Laporan keuangan otomatis",
      "Integrasi WhatsApp & SMS",
      "Support prioritas",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 399,
    description:
      "Untuk jaringan klinik atau kebutuhan khusus. Termasuk kustomisasi & integrasi lanjutan.",
    buttonText: "Hubungi Kami",
    benefitList: [
      "Semua fitur Premium",
      "Integrasi sistem lain",
      "Kustomisasi khusus",
      "Akun manager khusus",
      "Dukungan onboarding",
      "Support 24/7",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Paket Harga Radent
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Pilih Paket Sesuai Kebutuhan Klinik Anda
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Mulai dari gratis hingga enterprise, Radent siap mendukung digitalisasi
        klinik gigi Anda.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">
                    {price === 0 ? "Gratis" : `Rp${price}rb`}
                  </span>
                  {price !== 0 && (
                    <span className="text-muted-foreground"> /bulan</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
