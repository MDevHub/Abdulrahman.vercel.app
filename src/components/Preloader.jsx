import React, { useEffect, useState } from 'react'

const Preloader = ({ onFinish }) => {
   const [count, setCount] = useState(0)

   useEffect(() => {
      if (count < 100) {
         const timer = setTimeout(() => setCount(count + 1), 10) // faster: 10ms instead of 30ms
         return () => clearTimeout(timer)
      } else {
         // When done counting, wait 300ms instead of 1000ms before triggering finish
         const finishTimer = setTimeout(() => {
            onFinish()
         }, 300)
         return () => clearTimeout(finishTimer)
      }
   }, [count])

   return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-sans transition-all duration-500">
         <h1 className="text-white text-3xl mb-8 tracking-widest">MDEV<span className='text-gray-600'>HUB</span></h1>
         <div className="w-[80%] h-3 bg-gray-800 rounded overflow-hidden">
            <div
               className="h-full bg-white transition-all duration-50"
               style={{ width: `${count}%` }}
            ></div>
         </div>
         <p className="text-white mt-4 text-sm tracking-wider">{count}%</p>
      </div>
   )
}

export default Preloader
