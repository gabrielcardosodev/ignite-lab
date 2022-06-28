import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between border-t border-gray-500 bg-transparent py-4 text-sm md:text-base lg:flex-row lg:px-6">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
        <RocketseatLogo />
        <span className="ml-0 text-gray-300 lg:ml-6">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#" className="mt-6 text-gray-300 hover:underline lg:mt-0">
        Políticas de privacidade
      </a>
    </footer>
  )
}
