import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
          </div>
          <p className='text-xl mt-20'>
          Anjan Phuyal, a 21-year-old graduate from Rosebud School and Kathmandu Model College, is currently pursuing a Bachelor's in Computer Applications (BCA) at Asian College of Higher Studies. Hailing from Kathmandu, I'm passionate about software development and is currently in the learning phase, demonstrating proficiency in HTML, CSS, Javascript, React, Tailwind, MySQL, and more. Despite already possessing a strong foundation in these technologies, Anjan is committed to further honing his skills and aspires to excel in the field of software development in the days to come.
         </p>
      <br></br>
          <p className='text-xl'>
          With a strong educational background and ongoing learning, I'm a competitive candidate for roles in front-end or full-stack development, and the growing demand for skilled developers bodes well for his future career prospects.
          </p>
        </div>
    </div>
  );
};

export default About;