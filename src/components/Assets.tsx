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
      className="flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors hover:opacity-90"
      href="#"
    >
      <div className="flex h-full items-center bg-blue-500 p-6">{iconLeft}</div>

      <div className="flex flex-col items-start justify-center gap-2 py-6 leading-relaxed">
        <strong className="text-2xl text-gray-100">{title}</strong>
        <span className="text-sm text-gray-200">{description}</span>
      </div>

      <div className="flex items-center p-6 text-blue-300">{iconRight}</div>
    </a>
  )
}
