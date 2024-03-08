import React from 'react'

const contact = () => {
  return (
    <div>
    
    <h2 className='text-center' >Feel free to contact!</h2>
    <div>
    <iframe className='mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.176112445235!2d75.87602757406448!3d22.721694627491754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1640000001%3A0xe20580f2dd7ce8f3!2sTreasure%20Island%20Mall%20(TI%20Mall)!5e0!3m2!1sen!2sin!4v1709835001692!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    </div>

    <div className='mt-10 flex justify-center items-center mb-10'>
    <form action='https://formspree.io/f/xzbnvrko' method='POST' className='flex flex-col gap-7 '>
    <input type='text' placeholder='Enter your username' required autoComplete='OFF' className='border-2 border-emerald-700 placeholder:text-center' name='username' />
    <input type='email' placeholder='john123@gmail.com' required autoComplete='OFF' className='border-2 border-emerald-700 placeholder:text-center' name='email' />
    <textarea placeholder='Enter your message' required rows="5" cols="30" className='border-2 border-emerald-700 placeholder:text-center' name='message'/>
    <button type="submit" className='bg-emerald-700'>Submit</button>
    </form>
    
    </div>



    
    </div>
  )
}

export default contact