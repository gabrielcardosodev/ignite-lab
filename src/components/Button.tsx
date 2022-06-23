import { ReactNode } from 'react'

interface ButtonProps {
  title: string
  icon: ReactNode
  variant: 'primary' | 'secondary'
}

export function Button({ title, icon, variant }: ButtonProps) {
  return (
    <a
      className={`flex items-center justify-center gap-2 rounded ${
        variant === 'primary'
          ? 'bg-blue-500 hover:opacity-90'
          : 'border border-blue-300 bg-transparent text-blue-300 hover:bg-blue-300 hover:text-gray-900'
      } py-[17px] px-[14px] text-sm font-bold uppercase text-white transition-colors`}
      href="#"
    >
      {icon}
      {title}
    </a>
  )
}
