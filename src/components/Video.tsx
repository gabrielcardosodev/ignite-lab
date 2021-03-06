import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  CircleNotch,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning
} from 'phosphor-react'

import { useGetLessonBySlugQuery } from '../graphql/generated'
import { Assets } from './Assets'
import { Button } from './Button'
import { Footer } from './Footer'

import '@vime/core/themes/default.css'

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    },
    fetchPolicy: 'no-cache'
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <div className="2xl:mt[10vh] mx-0 mt-[30vh] flex items-center justify-center">
          <CircleNotch className="animate-spin" size={32} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="z-0 max-h-full flex-1 flex-col overflow-y-scroll scrollbar-none lg:scrollbar-thin lg:scrollbar-thumb-gray-600 lg:scrollbar-track-blue-500">
        <div className="flex justify-center bg-black">
          <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
            <Player>
              <Youtube videoId={data.lesson.videoId} />
              <DefaultUi />
            </Player>
          </div>
        </div>

        <div className="mx-auto max-w-[1100px] p-6 lg:mt-2">
          <div className="flex flex-1 flex-col items-center gap-16 lg:flex-row lg:items-start">
            <div className="flex-1">
              <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                {data.lesson.title}
              </h1>
              <p className="mt-4 text-sm text-gray-200 lg:text-base">
                {data.lesson.description}
              </p>

              {data.lesson.teacher && (
                <div className="mt-6 flex items-center gap-4">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-300"
                    src={data.lesson.teacher.avatarURL}
                  />

                  <div className="flex flex-col leading-relaxed">
                    <strong className="text-lg text-gray-100 lg:text-2xl">
                      {data.lesson.teacher.name}
                    </strong>
                    <span className="text-sm text-gray-300">
                      {data.lesson.teacher.bio}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-auto">
              <Button
                title="Comunidade no Discord"
                icon={<DiscordLogo size={24} />}
                variant={'primary'}
              />

              <Button
                title="Acesse o Desafio"
                icon={<Lightning size={24} />}
                variant={'secondary'}
              />
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-8 py-20 lg:flex-shrink-0 2xl:flex-row 2xl:items-center">
            <Assets
              title="Material complementar"
              description="Acesse o material complementar para acelerar o seu desenvolvimento"
              iconLeft={<FileArrowDown size={39} />}
              iconRight={<CaretRight size={24} />}
            />

            <Assets
              title="Wallpapers exclusivos"
              description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina"
              iconLeft={<Image size={39} />}
              iconRight={<CaretRight size={24} />}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
