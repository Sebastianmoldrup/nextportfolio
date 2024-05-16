import Image from 'next/image';
import { GithubIcon, GmailIcon } from './icons';

export default function Hero() {
  const experience = [
    'js',
    'ts',
    'php',
    'html',
    'css',
    'nextjs',
    'astro',
    'react',
    'wordpress',
    'supabase',
    'vercel',
    'tailwind',
    'shadcnui',
    'github',
    'git',
    'laravel',
    'figma',
  ];

  const exploring = ['cs', 'dotnet', 'gcp', 'aws', 'azure'];

  return (
    <section className='flex justify-center items-center bg-[#fafafa] w-full h-fit py-8 space-y-12'>
      <div className='flex flex-col items-start justify-start gap-y-4'>
        <div className='flex justify-center items-center flex-col md:flex-row-reverse md:gap-x-8'>
          {/* Blob morphing */}
          <div className='blob'></div>

          <div className='grid place-content-center gap-y-2 p-2 max-w-[450px]'>
            <h1 className='text-6xl font-bold'>IT Utvikler</h1>
            <p className='text-lg font-medium'>
              Hei, jeg er Sebastian Møldrup. En engasjert og motivert utvikler
              lokalisert i Bergen.📍
            </p>

            <div className='flex gap-x-4'>
              <a
                href='https://github.com/Sebastianmoldrup'
                target='_blank'
                className='hover:scale-110'
              >
                <GithubIcon />
              </a>
              <a
                href='mailto:sebastian.moldrup@gmail.com'
                className='hover:scale-110'
              >
                <GmailIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className='flex flex-col md:flex-row justify-start items-center gap-y-4 px-4 md:gap-x-8 my-8'>
          <h3 className='border-b-2 md:border-r-2 md:border-b-0 border-[#2d2e32] md:pr-4'>
            Erfaring
          </h3>
          <ul className='flex flex-wrap gap-6 justify-start px-2 max-w-[650px]'>
            {experience.map((tech, index) => {
              if (tech === 'shadcnui')
                return (
                  <li key={index} className='w-[48px] h-[48px]'>
                    <Image
                      src='/logo/shadcnui.webp'
                      alt='skill-icon'
                      width={45}
                      height={45}
                      className='rounded-xl'
                    />
                  </li>
                );
              else
                return (
                  <li key={index} className=''>
                    <Image
                      src={`https://skillicons.dev/icons?i=${tech}`}
                      alt='skill-icon'
                      width={45}
                      height={45}
                      className=''
                    />
                  </li>
                );
            })}
          </ul>
        </div>

        {/* Exploring */}
        <div className='flex flex-col md:flex-row w-full justify-start items-center gap-y-4 px-4 md:gap-x-8 my-8'>
          <h3 className='border-b-2 md:border-r-2 md:border-b-0 border-[#2d2e32] md:pr-2'>
            Utforsker
          </h3>
          <ul className='flex flex-wrap gap-6 justify-start px-2 max-w-[700px]'>
            {exploring.map((tech, index) => {
              return (
                <li key={index}>
                  <Image
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt='skill-icon'
                    width={45}
                    height={45}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
