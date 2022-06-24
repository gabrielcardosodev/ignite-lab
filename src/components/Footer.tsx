import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-gray-700 bg-transparent px-8 py-4">
      <div className="flex items-center">
        <RocketseatLogo />
        <span className="ml-6 text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#" className="text-gray-300 hover:underline">
        Políticas de privacidade
      </a>
    </footer>
  )
}
