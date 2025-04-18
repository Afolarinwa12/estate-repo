import { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Contact = () => {
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)

    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mgvapayq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        toast.success('✅ Message sent successfully!')
        form.reset()
      } else {
        toast.error('❌ Something went wrong. Please try again.')
      }
    } catch (err) {
      toast.error('🚨 Network error. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contact'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact
        <span className='underline underline-offset-4 decoration-1 font-light'> Us</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready to make a move? Let's build your future together
      </p>

      <form onSubmit={handleSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            <label>
              Your Name
              <input
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                type='text'
                name='name'
                placeholder='Your Name'
                required
              />
            </label>
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4 mt-4 md:mt-0'>
            <label>
              Your Email
              <input
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                type='email'
                name='email'
                placeholder='Your Email'
                required
              />
            </label>
          </div>
        </div>
        <div className='my-6 text-left'>
          <label>
            Message
            <textarea
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
              name='message'
              placeholder='Message'
              required
            ></textarea>
          </label>
        </div>
        <button
          type='submit'
          className='bg-blue-600 text-white py-2 px-12 mb-10 rounded disabled:opacity-70'
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
