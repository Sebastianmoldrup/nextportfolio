import { motion } from 'framer-motion';

export default function Hero() {
  const blobVariants = {
    start: {
      d: 'M458.5,287.5Q400,350,287.5,350Q175,350,175,287.5Q175,225,87.5,225Q0,225,0,150Q0,75,87.5,75Q175,75,175,0Q175,-75,287.5,-75Q400,-75,458.5,87.5Q517,250,458.5,287.5Z',
    },
    end: {
      d: 'M59.3,-49.9C71.8,-31.7,73.3,-7.3,68,15.3C62.7,37.9,50.4,58.6,32.3,67.5C14.2,76.3,-9.8,73.3,-25.4,62.1C-40.9,51,-48,31.8,-53,11.7C-57.9,-8.5,-60.7,-29.5,-51.5,-47C-42.3,-64.5,-21.2,-78.5,1.1,-79.4C23.4,-80.3,46.9,-68.2,59.3,-49.9Z',
    },
  };

  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      {/* Blob morphing - framer motion */}
      {/* <div className='blob'>
        <svg
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='100%'
          height='100%'
        >
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop
                offset='0%'
                style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }}
              ></stop>
              <stop
                offset='100%'
                style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 1 }}
              ></stop>
            </linearGradient>
          </defs>
          <motion.path
            id='blob'
            fill='url(#gradient)'
            variants={blobVariants}
            initial='start'
            animate='end'
            transition={{
              duration: 3,
              repeatType: 'reverse',
              repeat: Infinity,
            }}
          />
        </svg>
      </div> */}

      <h1 className='text-4xl font-bold'>Utvikler</h1>
      <p className='text-lg font-medium'>
        Hei, jeg er Sebastian. En engasjert og motivert utvikler basert i
        Bergen.📍
      </p>
    </section>
  );
}
