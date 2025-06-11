"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full relative overflow-hidden">
      {/* Motif Batik Jawa SVG Pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full opacity-40"
          style={{ minHeight: 600 }}
        >
          <defs>
            <pattern
              id="batik-jawa"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {/* Motif parang sederhana */}
              <rect x="0" y="0" width="80" height="80" fill="none" />
              <path
                d="M10 70 Q40 40 70 10"
                stroke="url(#batik-parang-gradient)"
                strokeWidth="10"
                fill="none"
                opacity="0.35"
              />
              <circle cx="20" cy="20" r="8" fill="url(#batik-parang-gradient)" opacity="0.35" />
              <circle cx="60" cy="60" r="8" fill="url(#batik-parang-gradient)" opacity="0.35" />
            </pattern>
            <linearGradient id="batik-parang-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d49711" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#7F9CF5" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#batik-jawa)" />
        </svg>
        {/* Extra gradient for depth */}
        <div className="absolute left-1/2 top-0 w-[90vw] h-[60vw] max-w-5xl -translate-x-1/2 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-full blur-2xl opacity-60" />
      </div>
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-28 md:py-28">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Baru</Badge>
            </span>
            <span> Solusi untuk klinik gigi Anda! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Solusi Modern untuk
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Klinik Gigi
              </span>
              Anda
            </h1>
          </div>

          <p className="max-w-screen-lg mx-auto text-xl text-muted-foreground">
            Kelola klinik gigi Anda dengan mudah, cepat, dan efisien bersama <strong>Radent</strong>.
            Dapatkan fitur eksklusif, laporan otomatis, serta dukungan penuh untuk meningkatkan pelayanan dan pengalaman pasien Anda.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Daftar Sekarang
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.png"
                : "/hero-image-dark.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
