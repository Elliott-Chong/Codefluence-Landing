import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

type Props = {}

const TermsAndConditionsPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className="mt-8 flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="w-full rounded-lg bg-white p-8 shadow-lg sm:w-4/5 md:w-3/5 lg:w-2/5">
          <h1 className="mb-4 text-2xl font-semibold">Terms and Conditions</h1>
          <p className="mb-6 text-gray-700">
            Please read these terms and conditions carefully before using our
            service.
          </p>
          <h2 className="mb-4 text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms. If you do
            not agree to these Terms, please do not use our services.
          </p>
          <h2 className="mb-4 text-xl font-semibold">2. Privacy Policy</h2>
          <p className="mb-4">
            Your use of our services is also governed by our Privacy Policy,
            which can be found <Link href="/privacy-policy">here</Link>. By
            using our services, you consent to the collection and use of your
            personal information as outlined in the Privacy Policy.
          </p>
          <h2 className="mb-4 text-xl font-semibold">
            4. User Responsibilities
          </h2>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in a
            manner that does not violate any applicable laws, regulations, or
            these Terms. You are solely responsible for all your activity in
            connection with our services.
          </p>
          <h2 className="mb-4 text-xl font-semibold">
            5. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the extent permitted by law, we shall not be liable for any
            direct, indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses
          </p>
          <h2 className="mb-4 text-xl font-semibold">6.Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to our services immediately,
            without prior notice or liability, for any reason, including without
            limitation if you breach these Terms. Upon termination, your right
            to use our services will cease immediately.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsAndConditionsPage
