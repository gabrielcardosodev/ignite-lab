import { List, X } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'

interface HeaderProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export function Header({ isOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-600 bg-gray-700 px-6 py-5 lg:justify-center lg:px-0">
      <Link to="/">
        <Logo />
      </Link>

      <button
        onClick={toggleSidebar}
        className="flex items-center gap-2 lg:invisible lg:hidden"
      >
        Aulas
        {!isOpen ? (
          <List className="text-blue-300" size={32} />
        ) : (
          <X className="text-blue-300" size={32} />
        )}
      </button>
    </header>
  )
}
