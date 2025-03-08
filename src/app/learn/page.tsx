"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
const page = () => {
    useEffect(() => {
        document.body.classList.add('vsc-initialized');
      }, []);
  return (
    <div className='flex-col mt-28'>
       <section>
          <p className="mb-5 text-2xl font-bold text-center ">TRAIN HARDER THAN BEFORE WITH RAW</p>
          <div className="flex gap-5 mx-5 mb-20 display:">
            {/* first img and components */}
            <div className="">
              <a href=""><Image src="/images/woman.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" /></a>
            <div className="max-w-sm ml-10">
              <p className="my-3 text-2xl font-bold">How to Incorporate Strength Training into Your Endurance Plan</p>
            <p className="mb-12 text-sm">Strength training is the secret sauce for any endurance athlete looking to elevate their performance. Whether you're running, cycling, or tackling long-distance challenges, building a stronger, more resilient body is...</p>
            <p className="text-sm">October 21, 2024</p></div>
            </div>
            {/* second img and components */}
            <div>
              <a href=""><Image src="/images/wbatta.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" /></a>
              <div className="ml-10">
              <p className="max-w-sm my-3 text-2xl font-bold">Boost Your Endurance: Essential Supplements for Athletes</p>
            <p className="max-w-sm mb-12 text-sm">Whether you're a bodybuilder, cyclist, distance runner, swimmer, CrossFitter, triathlete, or participate in a sport, your performance strongly depends on endurance. Proper nutrition, sleep, and recovery will always be the...</p>
            <p className="text-sm">October 21, 2024</p></div>
              </div>
              {/* third img and components */}
            <div>
              <a href=""><Image src="/images/manrun.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" /></a>
              <div className="max-w-sm ml-10">
              <p className="my-3 text-2xl font-bold">Exercise-Induced Cortisol: Friend or Foe?</p>
            <p className="mb-12 text-sm">When we think about exercise, we often focus on its numerous benefits, improved cardiovascular health, better mood, increased strength, endurance, and more. However, one critical aspect often overlooked in training...</p>
            <p className="text-sm">October 17, 2024</p></div></div> 
          </div>
            </section>

            <section>
          <div className="flex gap-5 mx-5 mb-40 display:">
            {/* first img and components */}
            <div className="">
              <a href=""><Image src="/images/woman.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" /></a>
            <div className="max-w-sm ml-10">
              <p className="my-3 text-2xl font-bold">How to Incorporate Strength Training into Your Endurance Plan</p>
            <p className="mb-12 text-sm">Strength training is the secret sauce for any endurance athlete looking to elevate their performance. Whether you're running, cycling, or tackling long-distance challenges, building a stronger, more resilient body is...</p>
            <p className="text-sm">October 21, 2024</p></div>
            </div>
            {/* second img and components */}
            <div>
              <a href=""><Image src="/images/wbatta.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" /></a>
              <div className="ml-10">
              <p className="max-w-sm my-3 text-2xl font-bold">Boost Your Endurance: Essential Supplements for Athletes</p>
            <p className="max-w-sm mb-12 text-sm">Whether you're a bodybuilder, cyclist, distance runner, swimmer, CrossFitter, triathlete, or participate in a sport, your performance strongly depends on endurance. Proper nutrition, sleep, and recovery will always be the...</p>
            <p className="text-sm">October 21, 2024</p></div>
              </div>
              {/* third img and components */}
            <div>
              <a href=""><Image src="/images/manrun.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" /></a>
              <div className="max-w-sm ml-10">
              <p className="my-3 text-2xl font-bold">Exercise-Induced Cortisol: Friend or Foe?</p>
            <p className="mb-12 text-sm">When we think about exercise, we often focus on its numerous benefits, improved cardiovascular health, better mood, increased strength, endurance, and more. However, one critical aspect often overlooked in training...</p>
            <p className="text-sm">October 17, 2024</p></div></div> 
          </div>
            </section>
    </div>
  )
}

export default page
