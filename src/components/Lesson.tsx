import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugRef } = useParams<{ slug: string }>()
  const isAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  )

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={`${!isAvailable ? 'pointer-events-none' : 'group'}`}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`${
          slugRef &&
          slugRef === slug &&
          'bg-blue-500 before:absolute before:left-[-7px] before:top-1/3 before:h-[14px] before:w-[14px] before:rotate-45 before:bg-blue-500 before:content-[""]'
        } relative  mt-2 rounded border border-gray-600 p-4 transition-all group-hover:border-blue-500`}
      >
        <header className="flex justify-between">
          {isAvailable ? (
            <span
              className={`${
                slugRef && slugRef === slug ? 'text-white' : 'text-blue-300'
              } flex items-center gap-2 text-sm font-medium`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`${
              slugRef && slugRef === slug ? 'border-white' : 'border-blue-500'
            } flex items-center rounded border px-2 py-[0.125rem] text-xs font-bold uppercase text-white`}
          >
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>

        <p
          className={`mt-4 font-bold ${
            slugRef && slugRef === slug ? 'text-white' : 'text-gray-200'
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  )
}
