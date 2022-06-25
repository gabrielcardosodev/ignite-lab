import { ReactNode } from 'react'

interface AssetsProps {
  title: string
  description: string
  iconLeft: ReactNode
  iconRight: ReactNode
}

export function Assets({
  title,
  description,
  iconLeft,
  iconRight
}: AssetsProps) {
  return (
    <a
      className="flex items-stretch overflow-hidden rounded bg-gray-700 transition-colors hover:opacity-90"
      href="#"
    >
      <div className="flex items-center bg-blue-500 p-6">{iconLeft}</div>

      <div className="flex flex-1 flex-col items-start justify-center gap-1 p-6 leading-relaxed lg:gap-0">
        <strong className="text-lg text-gray-100 lg:text-2xl">{title}</strong>
        <span className="text-xs text-gray-200 lg:text-sm">{description}</span>
      </div>

      <div className="flex items-center p-6 text-blue-300">{iconRight}</div>
    </a>
  )
}
