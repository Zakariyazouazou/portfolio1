import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-orange-300 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold text-black inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-gray-800'>Hi. I'm Zakariya Zouazou, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-gray-800'>Im a front-end developer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, Im focused on
                building responsive  web applications I can work full-Stock devloper but I Like front-End MOre.. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
