import { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id='About'
      className='flex flex-col items-center justify-center container mx-auto py-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate About Properties, Dedicated to our Vision
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-12'>
        <img 
          src={assets.brand_img} 
          alt='Our brand representation' 
          className='w-full sm:w-1/2 max-w-lg object-cover rounded' 
        />

        <div className='flex flex-col items-center md:items-start text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-center md:text-left'>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>10+</p>
              <p className='text-sm'>Years of Experience</p>
            </div>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>12+</p>
              <p className='text-sm'>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>20+</p>
              <p className='text-sm'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>25+</p>
              <p className='text-sm'>Ongoing Projects</p>
            </div>
          </div>

          <p className='my-10 max-w-lg text-center md:text-left leading-relaxed'>
            We believe finding the perfect property is more than just a transaction—
            it’s a journey toward building the life you envision. Whether you're buying your first home, 
            investing in property, or looking for the ideal space to start a new chapter, 
            we're here to make the process seamless, transparent, and rewarding.

            {showMore && (
              <span className='block mt-4'>
                With a deep understanding of the real estate market and a passion for helping people,
                we offer expert guidance and personalized service every step of the way. Our listings include a wide range of 
                residential, commercial, and luxury properties, carefully curated to match diverse needs and lifestyles. 
                We’re not just about properties—we’re about people. Your goals, your vision, your future.
              </span>
            )}
          </p>

          <button 
            onClick={() => setShowMore(prev => !prev)} 
            className='bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-2 rounded shadow-md'
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
