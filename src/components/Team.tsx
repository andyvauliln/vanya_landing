import React from 'react';

import Image from 'next/image';

const Team = () => {
  return (
    <section className={`mast py-8 h-auto md:h-[100vh]`} id="product">
      <figure
        className="mast__bg hidden md:block"
        style={{
          backgroundImage: 'url(/images/bg3.jpeg)',
        }}
      ></figure>
      <div className="flex flex-col  items-center w-full h-full">
        <div className="stars cursor-pointer underline underline-offset-8 z-10">
          Bad Asses
        </div>

        <div id="cards2">
          <div class="card2">
            <div class="card-image2">
              <Image
                src="/images/vanya_ava2.png"
                // fill={true}
                width={290}
                height={350}
                alt="Vanya"
              />
            </div>
            <div class="flex flex-grow p-6">
              <div class="card-info-title">
                <h3>Viola Octovanya</h3>
                <h4>* COMPOSE RWAMI 2016 - now</h4>
                <h4>* COMPOSER AQUARIUS PUSTAKA MUSIKINDO 2015 - now</h4>
                <h4>* COMPOSER AQUARIUS PUSTAKA MUSIKINDO 2015 - now</h4>
                <h4>
                  * LEGAL & BUSINESS DEVELOPMENT TIFLA ORGANIZATION 2019 - 2019
                </h4>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="card-image2">
              <Image
                src="/images/vanya_tatto.png"
                width={290}
                height={350}
                alt="Vanya"
              />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-unicorn"></i>
                <div class="card-info-title">
                  <h3>Viola Octovanys</h3>
                  <h4>* COMPOSE RWAMI 2016 - now</h4>
                  <h4>* COMPOSER AQUARIUS PUSTAKA MUSIKINDO 2015 - now</h4>
                  <h4>* COMPOSER AQUARIUS PUSTAKA MUSIKINDO 2015 - now</h4>
                  <h4>
                    * LEGAL & BUSINESS DEVELOPMENT TIFLA ORGANIZATION 2019 -
                    2019
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="card-image2">
              <Image
                src="/images/vanya_ava2.png"
                loading="eager"
                width={290}
                height={350}
                alt="Vanya"
              />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-blender-phone"></i>
                <div class="card-info-title">
                  <h3>Viola Octovany</h3>
                  <h4>* COMPOSE RWAMI 2016 - now</h4>
                  <h4>* COMPOSER AQUARIUS PUSTAKA MUSIKINDO 2015 - now</h4>
                  <h4>* COMPOSER AQUARIUS PUSTAKA MUSIKINDO 2015 - now</h4>
                  <h4>
                    * LEGAL & BUSINESS DEVELOPMENT TIFLA ORGANIZATION 2019 -
                    2019
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
