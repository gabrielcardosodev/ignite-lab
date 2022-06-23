import { gql, useQuery } from '@apollo/client'
import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  CircleNotch,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning
} from 'phosphor-react'

import { Footer } from './Footer'

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonResponse($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface VideoProps {
  lessonSlug: string
}

interface GetLessonBySlugResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug
    },
    fetchPolicy: 'no-cache'
  })

  if (!data) {
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
      <div className="flex-1">
        <div className="flex justify-center bg-black">
          <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
            <Player>
              <Youtube videoId={data.lesson.videoId} />
              <DefaultUi />
            </Player>
          </div>
        </div>

        <div className="mx-auto max-w-[1100px] p-6">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-100">
                {data.lesson.title}
              </h1>
              <p className="mt-4 text-gray-200">{data.lesson.description}</p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-300"
                  src={data.lesson.teacher.avatarURL}
                />

                <div className="flex flex-col leading-relaxed">
                  <strong className="text-2xl text-gray-100">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-300">
                    {data.lesson.teacher.bio}
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
