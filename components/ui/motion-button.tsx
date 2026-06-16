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
        'group relative flex h-11 w-[200px] items-center cursor-pointer rounded-full border border-slate-200 bg-white p-1 pr-4 outline-none transition-all hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25',
        classes
      )}
      {...props}
    >
      <div className="absolute inset-y-1 left-1 w-9 rounded-full bg-[#1D4ED8] transition-all duration-500 group-hover:w-[calc(100%-8px)]" />
      <div className="relative z-10 flex h-9 w-9 items-center justify-center shrink-0 transition-transform duration-500 group-hover:translate-x-1">
        <ArrowRight className="size-4 text-white" />
      </div>
      <div className="relative z-10 flex-1 text-center text-[14px] font-bold text-slate-700 transition-colors duration-500 group-hover:text-white">
        {label}
      </div>
    </Component>
  )
}
