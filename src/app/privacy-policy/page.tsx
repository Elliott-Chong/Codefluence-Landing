import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

type Props = {}

const PrivacyPolicy = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="w-full rounded-lg bg-white p-8 shadow-lg sm:w-4/5 md:w-3/5 lg:w-2/5">
          <h1 className="mb-4 text-2xl font-semibold">Privacy Policy</h1>
          <p className="mb-6 text-gray-700"></p>
          <h2 className="mb-4 text-xl font-semibold">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of personal information:
            <ul>
              <li>
                Personal Information: Your name, email address, phone number,
                and other similar contact information.
              </li>
              <li>
                Usage Data: Information about how you use our services,
                including your IP address, browser type, pages visited, and the
                time and date of your visit.
              </li>
            </ul>
          </p>
          <h2 className="mb-4 text-xl font-semibold">2. Data Security</h2>
          <p className="mb-4">
            We take appropriate measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
          </p>
          <h2 className="mb-4 text-xl font-semibold">3. Third-Party Links</h2>
          <p className="mb-4">
            Our services may contain links to third-party websites or services
            that we do not own or control. We are not responsible for the
            content, privacy policies, or practices of any third-party websites.
          </p>
          <h2 className="mb-4 text-xl font-semibold">
            4. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page with an updated date.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
