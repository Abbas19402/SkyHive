import React from 'react'

const AboutUsPage = () => {
  return (
    <div className="w-full h-full overflow-x-hidden py-10 px-32">
      <div
        className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[70deg] bg-gradient-to-bl from-[#80d7ff] to-[#fc8989] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-6">
        <span className="text-justify tracking-wide text-2xl font-light leading-relaxed ">
          Welcome to SkyHive! We are dedicated to providing you with a convenient and seamless travel experience. Our platform offers a user-friendly interface that allows you to easily search and compare flights from a range of top airlines across the world.
        </span>

        <span className="text-justify tracking-wide text-2xl font-light leading-relaxed ">
          At our website, we understand that finding the right flight can be stressful, which is why we provide a hassle-free booking process. We are available 24/7 to assist you with any queries you may have, from booking your flight to making changes to your itinerary.
        </span>

        <span className="text-justify tracking-wide text-2xl font-light leading-relaxed "> 
          We believe that traveling should be enjoyable, which is why we provide you with helpful information and tips to make your journey smoother. Our website offers everything you need to book your ideal flight at competitive prices.
        </span>

        <span className="text-justify tracking-wide text-2xl font-light leading-relaxed "> 
          Thank you for choosing SkyHive. We are committed to providing exceptional customer service and ensuring that your travel experience is memorable.
        </span>
      </div>

    </div>
  );
}

export default AboutUsPage