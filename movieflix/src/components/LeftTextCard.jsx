import React from 'react';

function LeftTextCard() {
  return (
    <div className="flex h-[40vh] justify-center items-center bg-black px-[15%]" >
      <div className="w-1/2 text-white">
        <p className="text-4xl font-bold pb-4">Enjoy on your TV</p>
        <p className="text-base">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>

      <div className="w-1/2 h-full">
       <img className='h-full' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
      </div>
    </div>
  );
}

export default LeftTextCard;
