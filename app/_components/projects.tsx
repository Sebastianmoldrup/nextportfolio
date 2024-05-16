import Image from 'next/image';
import { LinkIcon } from './icons';

export default function Projects() {
  return (
    <section className='flex flex-col items-center mt-8 bg-[#fafafa] w-full py-8'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-8'>
        <Image
          src='/portfolio/effmark.webp'
          alt='landing page of effektiv markedsforing'
          width={250}
          height={250}
          className='rounded-lg shadow-lg'
        />
        <div className='space-y-2 px-4'>
          <h3 className='font-semibold text-2xl'>Effektiv Markedsforing</h3>
          <p className='max-w-[350px]'>
            Utviklet hjemmesiden for Effektiv markedsforing med bruk av Astro
            rammeverket
          </p>
          <div>
            <a href='https://effektivmarkedsforing.no/' target='_blank'>
              <LinkIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='my-8 text-center font-semibold text-3xl'>
        [Flere prosjekter kommer snart..]
      </div>
    </section>
  );
}
