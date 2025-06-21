import React from 'react'
import { Form } from 'react-router-dom'
export const contactData=async ({request}) => {
  try {
      const res= await request.formData();
      const data = Object.fromEntries(res)
      console.log(data)
      return 0;
  } catch (error) {
      console.log(`Contact Error ${error}`);
  }
}
const Contact = () => {

  return (
    <section className='pl-30 pr-30 mt-10'>
        <div className='flex items-center justify-center flex-col '>
          <h1 className='text-2xl font-bold text-center mb-6'>Contact Us</h1>
          <Form method='POST' action='/contact' className='flex flex-col items-center justify-center gap-6 w-[50%]'>
            <input className='w-full birder border border-gray-400 text-sm p-2 rounded' type="text"
            required
            autoComplete='false'
            placeholder='Enter Your Name'
            name='username' />
            <input className='w-full birder border border-gray-400 text-sm p-2 rounded' type="email"
            required
            autoComplete='false'
            placeholder='Enter Your Email'
            name='email' />
            <textarea name="message" id="message"
            className='w-full birder border border-gray-400 text-sm p-2 rounded'
            rows='10'
            autoComplete='false'
            ></textarea>
            <button className='w-full text-start p-1 pl-7 border border-gray-400 rounded-[45px] hover:border-emerald-400 hover:bg-emerald-400' type='submit'value='send'>Send</button>
          </Form>
        </div>
    </section>
  )
}

export default Contact;
