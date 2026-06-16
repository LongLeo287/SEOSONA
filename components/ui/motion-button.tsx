'use client'

import { FC, ElementType } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: any[]) { return twMerge(clsx(inputs)) } // eslint-disable-line @typescript-eslint/no-explicit-any

interface Props {
  label: string
  classes?: string
  as?: ElementType
  href?: string
}

export const MotionButton: FC<Props> = ({ label, classes, as: Component = "button", href, ...props }) => {
  const componentProps = {
    ...(href ? { href } : {}),
    ...(Component === "button" ? { type: "button" } : {}),
  };

  return (
    <Component
      {...componentProps}
      className={cn(
        'bg-white group relative h-auto w-[200px] cursor-pointer rounded-full border-[none] p-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100',
        classes
      )}
      {...props}
    >
      <span
        className='m-0 block h-12 w-12 overflow-hidden rounded-full bg-[#1D4ED8] duration-500 group-hover:w-full'
        aria-hidden='true'
      ></span>
      <div className='absolute top-1/2 left-4 translate-x-0 -translate-y-1/2 duration-500 group-hover:translate-x-[0.4rem]'>
        <ArrowRight className='text-white size-6' />
      </div>
      <span className='absolute top-2/4 left-2/4 ml-4 -translate-x-2/4 -translate-y-2/4 text-center text-lg font-medium tracking-tight whitespace-nowrap duration-500 text-slate-700 group-hover:text-white'>
        {label}
      </span>
    </Component>
  )
}

