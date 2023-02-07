import React from 'react';

export default function Banner() {
  return (
    <>
      <article className="bg-moon-pink   border-moon-navy border-x-4 py-10 flex justify-center">
        <img className="w-80" src="/banner.png" alt="tpdlffjans" />
      </article>
      <div id="item-banner" className="text-2xl font-bold italic text-moon-navy border-x-4 text-center py-3">
        Items
      </div>
    </>
  );
}
