import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-20 sm:py-20">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Brand & Deskripsi */}
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <Image
                src="/logo.png"
                alt="Radent Logo"
                width={40}
                height={40}
                className="w-9 h-9 mr-2"
                priority
              />
              {/* <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
              <h3 className="text-2xl">RADENT</h3>
            </Link>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Radent adalah platform digital untuk digitalisasi dan otomasi
              operasional klinik gigi di Indonesia. Solusi modern, mudah, dan aman
              untuk kemajuan klinik Anda.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:hidden xl:block">
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Platform</h3>
            <span className="opacity-80">Web</span>
            <span>
              <span className="opacity-80">Android & iOS</span>
            </span>
          </div>

          {/* Bantuan */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Bantuan</h3>
            <Link href="#contact" className="opacity-80 hover:opacity-100">
              Hubungi Kami
            </Link>
            <Link href="#faq" className="opacity-80 hover:opacity-100">
              FAQ
            </Link>
            <Link href="mailto:info@radent.id" className="opacity-80 hover:opacity-100">
              Saran & Masukan
            </Link>
          </div>

          {/* Sosial Media */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Sosial Media</h3>
            <Link href="https://instagram.com/radent.id" target="_blank" className="opacity-80 hover:opacity-100">
              Instagram
            </Link>
            <Link href="https://facebook.com/radent.id" target="_blank" className="opacity-80 hover:opacity-100">
              Facebook
            </Link>
            <Link href="https://linkedin.com/company/radent" target="_blank" className="opacity-80 hover:opacity-100">
              LinkedIn
            </Link>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <h3 className="text-sm text-muted-foreground">
            &copy; 2024 Radent. Dibuat dengan{" "}
            <span className="text-primary">❤️</span> untuk klinik gigi Indonesia.
          </h3>
        </section>
      </div>
    </footer>
  );
};
