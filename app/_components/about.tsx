import Image from 'next/image';
import { TailorIcon } from './icons';

export default function About() {
  {
    /* 
    TODO:
    - Legg til "ferdigheter" og "utforsker" som temaer om kodespråk som brukes og læres
    - Legg til tidligere prosjekter
    */
  }
  return (
    <section id='about' className=''>
      <div className='flex flex-col gap-y-4 px-4 items-center justify-center text-black py-12 md:gap-x-8 md:flex-row'>
        <Image
          src='/about.webp'
          alt='apple mac laptop programming'
          width={250}
          height={250}
          className='rounded-lg shadow-lg'
        />
        <div className='max-w-[450px]'>
          <h2 className='font-bold text-red-400 text-xl'>Om meg</h2>
          <h3 className='font-semibold text-2xl max-w-[300px] my-2'>
            Front-end utvikler som utforsker back-end
          </h3>
          <p className='text-lg'>
            For tiden jobber jeg som lærling hos{' '}
            <em>
              <a
                href='https://effektivmarkedsforing.no/'
                target='_blank'
                className='text-red-400'
              >
                Effektiv Markedsføring
              </a>
            </em>{' '}
            i Bergen. Tidligere har jeg fullført fagbrev som boreoperatør og
            jobbet offshore på Gullfaks C.
          </p>
        </div>
      </div>

      <div className='my-8 text-center font-semibold text-3xl'>
        [Tidligere arbeidsoppgaver kommer snart]
      </div>
    </section>
  );
}
