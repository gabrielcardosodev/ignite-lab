import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
  return (
    <footer className="mx-6 mt-20 mb-5 flex h-14 items-center justify-between border-t border-gray-200 pt-6 2xl:mt-52">
      <div className="flex items-center gap-6">
        <RocketseatLogo />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>

      <div>
        <a href="#" className="hover:underline">
          Políticas de privacidade
        </a>
      </div>
    </footer>
  )
}
