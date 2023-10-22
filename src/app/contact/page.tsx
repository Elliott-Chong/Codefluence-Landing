import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

import { Github } from 'lucide-react'
type Props = {}

const people = [
  {
    name: 'Elliott Chong',
    role: 'Developer',
    imageUrl: '/elliott.jpg',
    githubUrl: 'https://github.com/elliott-chong',
  },
  {
    name: 'Kaung Sithu Hlaing',
    role: 'Developer',
    imageUrl: 'sithu.jpg',
    githubUrl: 'https://github.com/CptKingFish',
  },
  {
    name: 'Timothy Chia',
    role: 'Business Development',
    imageUrl: 'timothy.jpg',
    githubUrl: 'https://github.com/chiatzeheng',
  },
  {
    name: 'Elston Tan',
    role: 'AI Engineer',
    imageUrl: 'elston.jpg',
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
