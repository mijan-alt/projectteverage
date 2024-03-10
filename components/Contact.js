import React from 'react'

const Contact = () => {
  return (
  

<section class="bg-gray-200 bg-[url('/flatbed.jpg')] bg-cover bg-center relative bg-no-repeat ">
   <div className='absolute top-0 left-0 bottom-0 w-full bg-black opacity-60 z-10 '></div>
   <div className='relative z-[20]'>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <h2 class="text-3xl font-bold sm:text-4xl text-green-500 mb-4">Explore Road Transportation across Nigeria</h2>
        <p class="max-w-xl text-lg text-white">
           Traveling shouldn't be stressful. We handle all the details, so you can relax and enjoy the journey
        </p>

      </div>

      <div class="rounded-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 shadow-lg lg:col-span-3 lg:p-12 mt-4 relative">
         

        
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none opacity-80 backdrop-blur-lg"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none opacity-80 backdrop-blur-lg"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none opacity-80 backdrop-blur-lg"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            

          </div>

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none opacity-80 backdrop-blur-lg "
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
    </div>
  
</section>
  )
}

export default Contact