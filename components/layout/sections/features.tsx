import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Akses di Semua Perangkat",
    description:
      "Radent dapat diakses melalui komputer, tablet, maupun smartphone tanpa instalasi tambahan.",
  },
  {
    icon: "ShieldCheck",
    title: "Keamanan Data Terjamin",
    description:
      "Data klinik dan pasien Anda terenkripsi dan tersimpan aman di cloud, hanya dapat diakses oleh pihak berwenang.",
  },
  {
    icon: "Clock",
    title: "Realtime & Otomatis",
    description:
      "Semua data, laporan, dan jadwal terupdate secara otomatis dan dapat dipantau kapan saja.",
  },
  {
    icon: "UserCheck",
    title: "Multi User & Hak Akses",
    description:
      "Kelola dokter, staf, dan admin dengan hak akses berbeda sesuai kebutuhan operasional klinik.",
  },
  {
    icon: "CalendarDays",
    title: "Manajemen Jadwal Praktik",
    description:
      "Atur jadwal dokter, staf, dan ruang perawatan dengan mudah serta pantau ketersediaan secara real-time.",
  },
  {
    icon: "FileText",
    title: "Rekam Medis Digital",
    description:
      "Simpan dan kelola rekam medis pasien secara digital, sehingga riwayat perawatan mudah diakses dan lebih aman.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 relative"
    >
      {/* Background gradient & shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="#D247BF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
        <div className="absolute left-1/2 top-0 w-[80vw] h-[60vw] max-w-5xl -translate-x-1/2 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-full blur-2xl opacity-70" />
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl opacity-60" />
      </div>

      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Fitur Unggulan
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Semua yang Dibutuhkan Klinik Gigi Modern
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Radent hadir dengan fitur lengkap untuk mendukung operasional klinik gigi
        Anda secara efisien, aman, dan mudah digunakan oleh seluruh tim.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};