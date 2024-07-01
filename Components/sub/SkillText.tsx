"use client"
import React from 'react'
import { motion } from 'framer-motion'

import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div

        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />

      </motion.div>
      <motion.div

        className='text-[30px] font-medium mt-[10px] text-center mb-[15px]'
      >
        We use modern technologies for Developing a website
      </motion.div>
      
    </div>
  )
}

export default SkillText