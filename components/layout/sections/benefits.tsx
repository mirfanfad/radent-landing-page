import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Cloud",
    title: "Akses Data Klinik di Mana Saja",
    description:
      "Seluruh data klinik gigi Anda tersimpan aman di cloud, dapat diakses kapan saja dan di mana saja tanpa perlu instalasi rumit.",
  },
  {
    icon: "LineChart",
    title: "Laporan & Analitik Otomatis",
    description:
      "Pantau performa klinik, keuangan, dan statistik pasien secara real-time dengan laporan otomatis yang mudah dipahami.",
  },
  {
    icon: "Users",
    title: "Manajemen Pasien Terpusat",
    description:
      "Kelola data pasien, riwayat perawatan, dan jadwal kunjungan secara terpusat dan terorganisir, sehingga pelayanan lebih efisien.",
  },
  {
    icon: "CalendarCheck",
    title: "Jadwal Praktik Fleksibel",
    description:
      "Atur jadwal dokter dan staf dengan mudah, serta pantau ketersediaan ruang perawatan secara real-time.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Keunggulan</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solusi Praktis untuk Klinik Gigi Modern
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Radent membantu klinik gigi mengelola operasional, meningkatkan pelayanan, dan memperluas jangkauan pasien dengan teknologi terkini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
