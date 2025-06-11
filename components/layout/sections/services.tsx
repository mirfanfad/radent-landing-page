import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Integrasi Domain Klinik",
    description:
      "Gunakan domain klinik gigi Anda sendiri untuk tampilan yang lebih profesional dan mudah diingat pasien.",
    pro: 0,
  },
  {
    title: "Integrasi WhatsApp & SMS",
    description:
      "Kirim pengingat janji temu dan notifikasi otomatis ke pasien melalui WhatsApp atau SMS.",
    pro: 0,
  },
  {
    title: "Integrasi Email Otomatis",
    description:
      "Kirim email konfirmasi, pengingat, dan promosi secara otomatis ke pasien.",
    pro: 0,
  },
  {
    title: "Optimasi SEO Klinik",
    description:
      "Tingkatkan visibilitas klinik gigi Anda di mesin pencari agar mudah ditemukan pasien baru.",
    pro: 1,
  },
  {
    title: "Laporan Keuangan Lengkap",
    description:
      "Dapatkan laporan keuangan klinik secara otomatis dan terstruktur untuk memudahkan analisis bisnis.",
    pro: 1,
  },
  {
    title: "Support Prioritas",
    description:
      "Dukungan teknis prioritas untuk pengguna PRO, memastikan operasional klinik selalu lancar.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] bg-gradient-to-br from-primary/20 via-[#D247BF33] to-secondary/20 rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] bg-gradient-to-tr from-secondary/20 via-[#7F9CF533] to-primary/20 rounded-full blur-2xl opacity-50" />
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full opacity-10"
        >
          <defs>
            <pattern
              id="services-pattern-circles"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="#7F9CF5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern-circles)" />
        </svg>
      </div>

      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Layanan Radent
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Solusi Lengkap untuk Klinik Gigi Anda
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Mulai dari pengelolaan operasional, komunikasi pasien, hingga laporan
        keuangan, Radent siap membantu klinik gigi Anda berkembang lebih maju.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto relative z-10">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-white/70 dark:bg-card/80 shadow-xl hover:shadow-2xl border-0 transition-all delay-75 h-full relative backdrop-blur-md"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};