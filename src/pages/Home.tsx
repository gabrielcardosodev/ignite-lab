import { useNavigate } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'

export function Home() {
  const navigation = useNavigate()
  function handleSubmitForm() {
    navigation('event/lesson/abertura')
  }

  return (
    <>
      <main className="mx-auto flex min-h-screen flex-col items-center">
        <div className="mx-auto mt-32 flex w-full max-w-[1100px] items-center justify-between">
          <div className="w-full max-w-[640px]">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] text-gray-100">
              Construa uma{' '}
              <span className="font-medium text-blue-300">
                aplicação completa,
              </span>{' '}
              do zero, com{' '}
              <span className="font-medium text-blue-300">React JS</span>
            </h1>

            <p className="mt-6 text-gray-200">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="rounded border border-gray-600 bg-gray-700 p-8">
            <span className="mb-6 block text-2xl font-bold text-gray-100">
              Inscrever-se gratuitamente
            </span>

            <form
              className="flex w-full flex-col gap-2"
              onSubmit={handleSubmitForm}
            >
              <input
                className="h-14 rounded border border-transparent bg-gray-900 px-5 text-gray-100 placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Seu nome completo"
                type="text"
              />

              <input
                type="email"
                placeholder="Digite seu email"
                className="h-14 rounded border border-transparent bg-gray-900 px-5 text-gray-100 placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
              />

              <button
                className="mt-4 h-14 rounded bg-blue-500 py-4 text-sm font-bold uppercase text-white transition-colors hover:opacity-90"
                type="submit"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
