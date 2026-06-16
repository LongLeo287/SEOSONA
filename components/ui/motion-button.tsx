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
        'group relative h-12 w-[180px] cursor-pointer rounded-full border border-blue-200 bg-white p-1 outline-none transition-all hover:border-blue-600',
        classes
      )}
      {...props}
    >
      <span
        className='absolute inset-1 w-10 bg-blue-600 m-0 block rounded-full duration-500 group-hover:w-[calc(100%-8px)]'
        aria-hidden='true'
      ></span>
      <div className='absolute top-1/2 left-3 -translate-y-1/2 duration-500 group-hover:translate-x-[0.2rem] z-10'>
        <ArrowRight className='text-white size-5' />
      </div>
      <span className='absolute top-1/2 left-1/2 ml-3 -translate-x-1/2 -translate-y-1/2 text-center text-[14px] font-bold tracking-tight whitespace-nowrap duration-500 text-slate-700 group-hover:text-white z-10'>
        {label}
      </span>
    </Component>
  )
}
