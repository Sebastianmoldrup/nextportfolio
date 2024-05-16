import Image from 'next/image';
import { GmailIcon, LocationLink, PhoneIcon } from './icons';

export default function Contact() {
  return (
    <section className='text-gray-600 body-font relative w-full'>
      <div className='absolute inset-0 bg-gray-300'>
        <iframe
          width='100%'
          height='100%'
          frameBorder={0}
          marginWidth={0}
          title='map'
          scrolling='no'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bergen+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className='flex items-center justify-center py-24 px-10'>
        <div className='bg-white rounded-lg p-8 flex flex-col gap-y-4 w-fit relative z-10 shadow-md'>
          <h2 id='kontakt' className='font-bold text-red-400 text-xl'>
            Kontakt
          </h2>
          {/* Gmail */}
          <div className='flex items-center gap-x-4'>
            <a href='mailto:sebastian.moldrup@gmail.com'>
              <GmailIcon />
            </a>
            <span>
              Gmail: <br />
              <strong>Sebastian.moldrup@gmail.com</strong>
            </span>
          </div>
          {/* Phone */}
          <div className='flex items-center gap-x-4'>
            <a href='mailto:sebastian.moldrup@gmail.com'>
              <PhoneIcon />
            </a>
            <span>
              Telefon: <br />
              <strong>41 39 11 74</strong>
            </span>
          </div>
          {/* Location */}
          <div className='flex items-center gap-x-4'>
            <LocationLink />
            <span>
              Lokasjon: <br />
              <strong>Bergen, Norge</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
