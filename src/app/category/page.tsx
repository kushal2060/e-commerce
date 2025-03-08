"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
function page() {
  
  useEffect(() => {
    document.body.classList.add('vsc-initialized');
  }, []);
  return (
    
    <div>
        <section>
        {/* shop by raw category */}
        <div>
          <h2 className="mb-10 mt-32 text-3xl font-bold text-center text-black">WE ARE BUILD FROM THE GROUND UP.</h2>
          <div className="flex justify-between mx-5 text-center rounded-t-sm display:">
             {/* buttons left and right */}
             <div className="absolute mt-2 right-7 ml-100">
            
          </div>
          {/* images of SRBC with links attached*/}
          <div><a href=""><Image src="/images/cimg/ha.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover" />
          <p className="mt-5 mb-16 text-sm ">APPERAL</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/hb.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Bundles</p></a>
          </div>
          <div><a href=""><Image src="/images/protein.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Protein</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/hc.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">CBUM Itholate Protein</p></a>
          </div>
        </div>
      </div>

        <div className='flex justify-between mx-5 text-center rounded-t-sm display'>
        <div><a href=""><Image src="/images/preworkout.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover" />
          <p className="mt-5 mb-16 text-sm ">Pre-Workout</p></a>
          </div>
          <div><a href=""><Image src="/images/pump.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Pump Non-Stim Pre-Workout</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/hd.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Fat Burners</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/he.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Informed Sport Certified</p></a>
          </div>
        </div>

        <div className='flex justify-between mx-5 text-center rounded-t-sm display'>
        <div><a href=""><Image src="/images/cimg/hf.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover" />
          <p className="mt-5 mb-16 text-sm ">ON the Go</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/hg.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Natural Testostorone Boosters</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/hh.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Our Best Sellers</p></a>
          </div>
          <div><a href=""><Image src="/images/cimg/hi.webp" alt="Example image" width={345} height={0} className="rounded-t-md w-[345px] h-[280px] object-cover"/>
          <p className="mt-5 mb-16 text-sm ">Tranning Gear</p></a>
          </div>
        </div>


        </section>

      
    </div>
  )
}

export default page
