import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

import { Github } from 'lucide-react'
type Props = {}

const people = [
  {
    name: 'Elliott Chong',
    role: 'Developer',
    imageUrl:
      'https://media.canva.com/1/image-resize/1/600_800_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS84ZmRrRS9NQUZtUUY4ZmRrRS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAO-s0waTHwEIzbsypF17CYFqyEQrQzwdT2B0Gm3t1BO0&exp=1697945640&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAAC44CCmf0tRy_qRRKogqQ4VukXS2byPI9sQUL7AIGEc',
    githubUrl: 'https://github.com/elliott-chong',
  },
  {
    name: 'Kaung Sithu Hlaing',
    role: 'Developer',
    imageUrl:
      'https://media.canva.com/1/image-resize/1/200_168_75_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9TR3h6QS9NQUZtUUJTR3h6QS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAACZOCOneKwLpNg4p767aVuFeyPwShuMhXl-nJV8kIV-C&exp=1697947962&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAANQaXFu26FJ_E_W8bcj_NtW5uN0fIJNM7Fdc3rZVUSY',
    githubUrl: 'https://github.com/CptKingFish',
  },
  {
    name: 'Timothy Chia',
    role: 'Business Development',
    imageUrl:
      'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wellQUS9NQUZtUU9wellQUS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAGe1kyNlaV_kXVHwSHwwAUjOE_n2XK4Qv5DRoJTOXs18&exp=1697948190&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAANOfmXeeU1mtWaYtp1CrSqIougl-Yp9gu8Ag1DCGGilW',
    githubUrl: 'https://github.com/chiatzeheng',
  },
  {
    name: 'Elston Tan',
    role: 'AI Engineer',
    imageUrl:
      'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9nZDI2dy9NQUZtUVBnZDI2dy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAOL92V9_TtO0nThH1nXb8DMY8VjCcO1XNMpoOVUu1fd_&exp=1697947029&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAADkLtTKZ5cr8YxiuCvQDr2Uh4_Ir3VDUQcexEVCpfFfc',
    githubUrl: 'https://github.com/Elstuhn/',
  },
]

const ContactPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a team of hackathon enthusiasts who love to build cool
              stuff. If you have any questions or feedback, please feel free to
              reach out to us.
            </p>
            <Link
              target="_blank"
              href="https://github.com/reluvate"
              className="mt-4 inline-flex font-semibold text-indigo-600 underline"
            >
              View our Hackathon Projects
            </Link>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-32 w-32 rounded-full object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                    <Link
                      href={person.githubUrl}
                      target="_blank"
                      className="mt-4 flex items-center text-sm font-semibold text-indigo-600"
                    >
                      <Github />
                      Github
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ContactPage
