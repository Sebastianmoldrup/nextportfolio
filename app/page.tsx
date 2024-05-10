import Image from 'next/image';
import Hero from './_components/hero';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4'>
      <Hero />
    </main>
  );
}
