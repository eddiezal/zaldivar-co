// apps/web/app/about/page.tsx
import { Hero } from "@/components/sections/Hero";
import { SectionBox } from '@/components/SectionBox';

export default function AboutPage() {
  return (
    <main>
      <SectionBox />
      <Hero
        title="About Zaldivar & Co."
        subtitle="Elegant, strategic, and human-centered solutions"
      />
    </main>
  );
}
