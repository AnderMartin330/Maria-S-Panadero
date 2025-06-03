import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              María S. Panadero
            </h1>
            <p className="text-xl text-accent font-medium font-headline">
              Translator & Interpreter
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl font-body">
              Bridging languages, connecting worlds. Recently graduated with a passion for linguistic precision and cultural nuance.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/cv_maria_s_panadero.pdf"
              download
              className={buttonVariants({ size: "lg" })}
              aria-label="Download CV"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <Image
          src="https://placehold.co/600x600.png"
          alt="María S. Panadero - Professional Photo"
          data-ai-hint="professional woman"
          width={600}
          height={600}
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
          priority // Added priority prop
        />
      </div>
    </section>
  );
}
