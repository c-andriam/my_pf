import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Projects from '@/components/sections/Projects';
import Stack from '@/components/sections/Stack';
import Stats from '@/components/sections/Stats';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Stack />
      <Stats />
      <Contact />
    </>
  );
}
