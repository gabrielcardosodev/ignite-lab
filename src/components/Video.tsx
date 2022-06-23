import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning
} from 'phosphor-react'

import { Footer } from './Footer'

export function Video() {
  return (
    <>
      <div className="flex-1">
        <div className="flex justify-center bg-black">
          <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]"></div>
        </div>

        <div className="mx-auto max-w-[1100px] p-6">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-100">
                Aula 01 - Criando o projeto e realizando o setup inicial
              </h1>
              <p className="mt-4 text-gray-200">
                Nessa aula vamos dar início ao projeto criando a estrutura base
                da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos
                também realizar o setup do nosso projeto no GraphCMS criando as
                entidades da aplicação e integrando a API GraphQL gerada pela
                plataforma no nosso front-end utilizando Apollo Client.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-300"
                  src="https://avatars.githubusercontent.com/u/83722145?v=4"
                />

                <div className="flex flex-col leading-relaxed">
                  <strong className="text-2xl text-gray-100">
                    Diego Fernandes
                  </strong>
                  <span className="text-sm text-gray-300">
                    Co-fundador e CTO na Rocketseat
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                className="flex items-center justify-center gap-2 rounded bg-blue-500 py-[17px] px-[14px] text-sm font-bold uppercase text-white transition-colors hover:opacity-90"
                href="#"
              >
                <DiscordLogo size={24} />
                Comunidade no Discord
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded border border-blue-300 py-[17px] px-[14px] text-sm font-bold uppercase text-blue-300 transition-colors hover:bg-blue-300 hover:text-gray-900"
                href="#"
              >
                <Lightning size={24} />
                Acesse o desafio
              </a>
            </div>
          </div>

          <div className="mt-20 flex gap-8">
            <a
              className="flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors hover:opacity-90"
              href="#"
            >
              <div className="flex h-full items-center bg-blue-500 p-6">
                <FileArrowDown size={39} />
              </div>

              <div className="flex flex-col items-start justify-center gap-2 py-6 leading-relaxed">
                <strong className="text-2xl text-gray-100">
                  Material complementar
                </strong>
                <span className="text-sm text-gray-200">
                  Acesse o material complementar para acelerar o seu
                  desenvolvimento
                </span>
              </div>

              <div className="flex items-center p-6">
                <CaretRight className="text-blue-300" size={24} />
              </div>
            </a>

            <a
              className="flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors hover:opacity-90"
              href="#"
            >
              <div className="flex h-full items-center bg-blue-500 p-6">
                <Image size={39} />
              </div>

              <div className="flex flex-col items-start justify-center gap-2 py-6 leading-relaxed">
                <strong className="text-2xl text-gray-100">
                  Wallpapers exclusivos
                </strong>
                <span className="text-sm text-gray-200">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                  máquina
                </span>
              </div>

              <div className="flex items-center p-6">
                <CaretRight className="text-blue-300" size={24} />
              </div>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
