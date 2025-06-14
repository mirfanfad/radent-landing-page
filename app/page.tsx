import { BenefitsSection } from "@/components/layout/sections/benefits";
// import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
// import { SponsorsSection } from "@/components/layout/sections/sponsors";
// import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Radent - Solusi Digital Klinik Gigi Modern",
  description: "Radent adalah platform SAAS untuk digitalisasi dan otomasi operasional klinik gigi di Indonesia.",
  openGraph: {
    type: "website",
    url: "https://radent.id",
    title: "Radent - Solusi Digital Klinik Gigi Modern",
    description: "Radent adalah platform SAAS untuk digitalisasi dan otomasi operasional klinik gigi di Indonesia.",
    images: [
      {
        url: "/og-radent.jpg",
        width: 1200,
        height: 630,
        alt: "Radent - Solusi Digital Klinik Gigi Modern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://radent.id",
    title: "Radent - Solusi Digital Klinik Gigi Modern",
    description: "Radent adalah platform SAAS untuk digitalisasi dan otomasi operasional klinik gigi di Indonesia.",
    images: [
      "/og-radent.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
