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
      <main className="mx-auto my-0 flex h-screen w-full max-w-[1100px] flex-col justify-center">
        <div className="mt-20 flex justify-between gap-52 px-10">
          <div>
            <Logo />
            <h1 className="mt-8 text-[40px] text-gray-100">
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

          <div className="rounded bg-gray-600 p-8">
            <form onSubmit={handleSubmitForm}>
              <span className="text-2xl font-bold text-gray-100">
                Inscrever-se gratuitamente
              </span>
              <input
                className="mt-6 mb-2 h-14 w-full rounded border border-transparent bg-gray-900 px-4 text-gray-100 placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Seu nome completo"
                type="text"
              />
              <input
                type="email"
                placeholder="Digite seu email"
                className="h-14 w-full rounded border border-transparent bg-gray-900 px-4 text-gray-100 placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <button
                className="mt-6 h-14 w-full rounded bg-blue-500 px-4 text-sm font-bold uppercase text-white transition-colors hover:opacity-90"
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
