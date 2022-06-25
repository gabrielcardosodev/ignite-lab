import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { data } = useGetLessonsQuery()

  return (
    <>
      <aside
        className={`${
          isOpen
            ? 'fixed right-0 lg:static lg:flex'
            : 'fixed -right-full lg:static lg:flex'
        } z-10 max-h-screen w-screen animate-slide flex-col overflow-y-scroll border-l border-gray-600 bg-gray-700 p-6 transition-all md:w-[348px]`}
      >
        <span className="mb-6 block border-b border-gray-500 pb-6 text-2xl font-bold text-white">
          Cronograma das aulas
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                type={lesson.lessonType}
                availableAt={new Date(lesson.availableAt)}
              />
            )
          })}
        </div>
      </aside>
    </>
  )
}
