import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
          </div>
          <p className='text-xl mt-20'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit molestias ab reprehenderit aspernatur praesentium similique, accusantium dicta dolorem, corrupti magnam neque veritatis ipsa ullam quisquam repellat error ad laborum officia! Repudiandae quia quod dolor aliquam ipsa. Quaerat quod dolorum, quo saepe minus cupiditate dicta ad animi atque quia alias maiores?
          </p>
      <br></br>
          <p className='text-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint consequatur facilis vitae itaque ipsum libero nostrum officiis magni commodi? Deserunt earum expedita, maiores nisi ipsa praesentium corrupti quo iste ratione fugit distinctio quis ea reiciendis placeat consectetur in nulla quae fugiat, quaerat, eveniet perspiciatis. Ipsum cumque suscipit beatae corrupti ratione.
          </p>
        </div>
    </div>
  );
};

export default About;