'use client'

import { FC, ElementType, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface Props {
  label: string
  classes?: string
  as?: ElementType
  href?: string
}

export const MotionButton: FC<Props> = ({ label, classes, as: Component = "button", href, ...props }) => {
  return (
    <Component
      href={href}
      className={cn(
        'group relative h-auto w-[200px] cursor-pointer rounded-full bg-white p-1 outline-none transition-all hover:shadow-lg hover:shadow-blue-500/25 block border-none',
        classes
      )}
      {...props}
    >
      <span
        className='m-0 block h-11 w-11 overflow-hidden rounded-full bg-[#1D4ED8] transition-all duration-500 ease-out group-hover:w-full'
        aria-hidden='true'
      ></span>
      <div className='absolute left-[18px] top-1/2 -translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-x-1'>
        <ArrowRight className='size-5 text-white' />
      </div>
      <span className='absolute left-1/2 top-1/2 ml-4 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[15px] font-bold tracking-tight text-slate-700 transition-colors duration-500 ease-out group-hover:text-white'>
        {label}
      </span>
    </Component>
  )
}
