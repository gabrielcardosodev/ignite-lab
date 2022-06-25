import { FormEvent, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading, error, data }] =
    useCreateSubscriberMutation()

  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error('Ocorreu um erro ao processar sua inscrição!')
    }
    if (loading) {
      toast('Processando sua inscrição...')
    }
    if (data) {
      toast.success(
        'Inscrição realizada! você será redirecionado para a página do evento em 3 segundos.'
      )

      setTimeout(() => {
        navigate('/event/lesson/abertura')
      }, 3000)
    }
  }, [data, loading, error])

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault()

    if (name.trim() !== '' && email.trim() !== '') {
      createSubscriber({
        variables: {
          name,
          email
        }
      })
    } else {
      toast.error('Por favor, preencha todos os campos.')
    }
  }

  return (
    <>
      <main className="mx-auto flex min-h-screen flex-col items-center">
        <div className="mx-auto mt-10 flex w-full max-w-[1100px] flex-col items-center justify-between gap-8 lg:mt-32 lg:flex-row lg:gap-0">
          <div className="flex w-full max-w-[312px] flex-col items-center justify-center md:max-w-[512px] lg:max-w-[640px] lg:items-start">
            <Logo />

            <h1 className="mt-8 text-center text-[1.875rem] text-gray-100 lg:text-left lg:text-[2.5rem]">
              Construa uma{' '}
              <span className="font-medium text-blue-300">
                aplicação completa,
              </span>{' '}
              do zero, com{' '}
              <span className="font-medium text-blue-300">React JS</span>
            </h1>

            <p className="mt-6 text-center text-gray-200 lg:text-left">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="rounded border border-gray-600 bg-gray-700 p-8 lg:p-8">
            <span className="mb-6 block text-2xl font-bold text-gray-100">
              Inscrever-se gratuitamente
            </span>

            <form
              className="flex w-full flex-col gap-2"
              onSubmit={handleSubmitForm}
            >
              <input
                type="text"
                placeholder="Seu nome completo"
                className="h-14 rounded border border-transparent bg-gray-900 px-5 text-gray-100 placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
                onChange={e => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Digite seu email"
                className="h-14 rounded border border-transparent bg-gray-900 px-5 text-gray-100 placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
                onChange={e => setEmail(e.target.value)}
              />

              <button
                disabled={loading}
                className="mt-4 h-14 rounded bg-blue-500 py-4 text-sm font-bold uppercase text-white transition-colors hover:opacity-90 disabled:opacity-50"
                type="submit"
              >
                Garantir minha vaga
              </button>
              <Toaster position="top-right" reverseOrder={false} />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
