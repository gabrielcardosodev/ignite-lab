import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  )

  return (
    <a href={slug}>
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="mt-2 rounded border border-gray-600 p-4 transition-all hover:border-blue-500">
        <header className="flex justify-between">
          {isAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-blue-300">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="flex items-center rounded border border-blue-500 px-2 py-[0.125rem] text-xs font-bold uppercase text-white">
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>

        <p className="mt-4 font-bold text-gray-200">{title}</p>
      </div>
    </a>
  )
}
