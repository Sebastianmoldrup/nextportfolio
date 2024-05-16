import About from './_components/about';
import Contact from './_components/contact';
import Hero from './_components/hero';
import Projects from './_components/projects';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
