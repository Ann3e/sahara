import React from 'react'

const saharaReviews = [
  {
    rating: 5,
    quote:
      '"Sahara transformed my interview prep! The voice-based feedback felt like a real mock interview — I gained confidence and improved drastically."',
    name: "Anjali Verma",
    title: "Software Engineer Intern @ Microsoft",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 5,
    quote:
      '"Finally a platform that *understands* behavioral prep! The AI responses helped me polish my answers and stay calm during actual interviews."',
    name: "Rohan Patel",
    title: "SDE-1 @ Amazon",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    rating: 4,
    quote:
      '"Loved the clean UI and ability to record voice notes. Great tool for both DSA tracking and interview rehearsals!"',
    name: "Mira Shah",
    title: "CS Undergrad, NIT Trichy",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const review = saharaReviews[0]; // Just the first one



 const features = [
    {
    //   icon: <Target className="w-6 h-6" />,
      title: "DSA Question Tracker",
      desc: "Track your progress through data structures and algorithms problems with smart categorization and progress visualization.",
      badge: "Core Feature"
    },
    {
    //   icon: <Mic className="w-6 h-6" />,
      title: "Voice & Text Notes",
      desc: "Record voice explanations or write detailed notes for each problem you solve. Never forget your approach again.",
      badge: "Voice Enabled"
    },
    {
    //   icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Interview Practice",
      desc: "Practice behavioral interviews with AI feedback on leadership, teamwork, and problem-solving scenarios.",
      badge: "AI Powered"
    },
    {
    //   icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analytics",
      desc: "Get insights into your practice patterns, strengths, and areas for improvement with detailed analytics.",
      badge: "Analytics"
    }
  ];

const LandingPage = () => {
  return (
    <div >

        {/* navbar */}
        

<nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"> */}
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">sahara</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  </div>
</nav>


        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center mt-15 py-14">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Master</h1>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-orange-600">DSA & Interviews</h1>
            <p class="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Master coding interviews with voice-enabled practice. Track your progress, record explanations, and ace your next technical interview.</p>
            <div className='flex gap-4'>
                <button className="bg-gradient-to-r from-orange-500 to-orange-200 hover:to-orange-800 px-8 py-3 rounded-3xl">
                  Get Started Free
                </button>
                <button  className="rounded-3xl px-8 py-3 border-2">
                  Sign In
                </button>
            </div>

        </div>
      

         {/* Features Section */}
      <div className="bg-amber-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sahara combines traditional problem tracking with innovative voice recording to create the ultimate interview prep experience.
          </p>
        </div>
        </div>


        {/* grid for features */}
        <div className='grid sm:grid-cols-1 md:grid-cols-4 px-4 gap-10 py-10'>
             {features.map((feature, index) => (
    <div key={index} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl/20 hover:shadow-2xl">
              <span class=" text-black text-xs font-medium me-2 px-2.5 py-0.5  bg-gradient-to-r from-orange-500 to-orange-200 hover:to-orange-800 rounded-3xl">{feature.badge}</span>

      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.desc}</p>
      </div>))}
    </div>
        {/* reviewss */}


        {/*start your journry section */}
         <div className="bg-amber-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to ace your next interview?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of engineers who've landed their dream jobs with Sahara
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-200 hover:to-orange-800 mt-6 px-8 py-3 rounded-3xl">
                 Start your journey
                </button>
        </div>
        </div>


{/* review section*/}
{/* const review = saharaReviews[0];  */}
<div className='flex flex-col md:flex-row mt-10 md:mt-2 justify-center items-center md:gap-30 sm:p-10'>
    <div >
     <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">What</h1>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-orange-600">Our Users Say</h1>
</div>
<div className='py-2'>
<figure className="p-10 max-w-screen-md mx-auto mb-12 ">
  <div class="flex items-center mb-4 text-yellow-300">
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 me-1 ${i < review.rating ? "" : "opacity-30"}`}
        fill="currentColor"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.924 7.625a1.523...Z" />
      </svg>
    ))}
  </div>

  <blockquote>
    <p className="text-2xl font-semibold text-gray-900">
      {review.quote}
    </p>
  </blockquote>

  <figcaption className="flex items-center mt-6 space-x-3">
    <img
      className="w-6 h-6 rounded-full"
      src={review.avatar}
      alt="profile picture"
    />
    <div className="flex items-center divide-x-2 divide-gray-300">
      <cite className="pe-3 font-medium text-gray-900">{review.name}</cite>
      <cite className="ps-3 text-sm text-gray-500">{review.title}</cite>
    </div>
  </figcaption>
</figure>
</div>

</div>




        {/* footer */}        

<footer >
    <div class="w-full max-w-screen-xl mx-auto md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center  sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">sahara</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">sahara</span> */}
    </div>
</footer>




    </div>
  )
}

export default LandingPage