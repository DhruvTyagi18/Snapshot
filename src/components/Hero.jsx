import React from "react";

import { snap } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={snap} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://dhruvtyagi18-portfolio.netlify.app/", "_blank")
          }
          className='black_btn'
        >
          Contact Developer
        </button>
      </nav>

      <h1 className='head_text'>
      Nuggets of Knowledge in a Blink With<br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Streamline your understanding with Snapshot, the ultimate article summarizer. Transform dense articles into clear, concise summaries in seconds, all at your fingertips.
      </h2>
    </header>
  );
};

export default Hero;
