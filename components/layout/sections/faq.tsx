import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa itu Radent?",
    answer:
      "Radent adalah platform digital berbasis cloud untuk membantu digitalisasi dan otomasi operasional klinik gigi di Indonesia.",
    value: "item-1",
  },
  {
    question: "Apakah Radent bisa digunakan di semua perangkat?",
    answer:
      "Ya, Radent dapat diakses melalui komputer, tablet, maupun smartphone tanpa perlu instalasi tambahan.",
    value: "item-2",
  },
  {
    question: "Bagaimana keamanan data di Radent?",
    answer:
      "Data klinik dan pasien Anda terenkripsi dan tersimpan aman di cloud. Hanya pihak berwenang yang dapat mengakses data tersebut.",
    value: "item-3",
  },
  {
    question: "Apakah ada versi gratis Radent?",
    answer:
      "Ya, Radent menyediakan paket gratis dengan fitur dasar untuk membantu klinik gigi memulai digitalisasi.",
    value: "item-4",
  },
  {
    question: "Bagaimana cara mendapatkan demo atau bantuan teknis?",
    answer:
      "Anda dapat menghubungi tim Radent melalui halaman kontak untuk permintaan demo atau bantuan teknis.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-28">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Pertanyaan Umum
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          FAQ Radent
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
