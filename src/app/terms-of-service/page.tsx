import React from "react";

export default function TermsOfService() {
  return (
    <div className="text-white min-h-screen">
      <div
        className="min-h-screen pt-[200px] bg-[url('/assets/bg.6ec3205349cc3c90b87262679bdfb72f.svg')] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-8">
            Effective Date: May 22, 2025
          </p>
          <p className="mb-4">
            <strong>Company:</strong> Magmar Infra LLC
            <br />
            <strong>Website:</strong> https://www.magmarinfra.com
          </p>
          <p className="mb-8">
            These Terms of Service govern your access to and use of Magmar
            Infra&apos;s website, products, and services. By using our
            infrastructure, software development kits, and smart wallet tooling,
            you acknowledge that you have read, understood, and agree to be
            legally bound by these terms.
          </p>
          <p className="mb-8">
            If you do not accept these terms, you may not access or use any part
            of our offerings.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p className="mb-4">
              Magmar Infra LLC provides a set of infrastructure services
              designed to accelerate decentralized application development using
              account abstraction. This includes a smart wallet system,
              developer SDKs, APIs, paymaster tools, and related utilities.
            </p>
            <p>
              We reserve the right to update or change any portion of these
              terms at our discretion. It is your responsibility to periodically
              review the terms. Continued use of our services following any
              updates constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p>
              To access or use Magmar Infra&apos;s services, you must be at least 18
              years of age and possess the legal capacity to enter into binding
              agreements. If you are accessing the services on behalf of an
              organization, you affirm that you are authorized to act on its
              behalf.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Nature of Services
            </h2>
            <p className="mb-4">
              Magmar Infra is a non-custodial infrastructure provider. We offer
              development tools and smart contract systems compatible with
              ERC-4337, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Gasless transaction handling</li>
              <li>Account abstraction wallet deployment</li>
              <li>Paymaster and bundler services</li>
              <li>Social login integration</li>
              <li>Developer APIs and SDKs</li>
            </ul>
            <p>
              We do not control, store, or recover user wallet keys or funds.
              Your smart contract accounts remain fully under your control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="mb-4">
              You agree not to misuse Magmar Infra&apos;s services. Misuse includes
              but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Deploying malicious or illegal smart contracts</li>
              <li>
                Attempting to exploit or interfere with the platform&apos;s security
              </li>
              <li>
                Using the infrastructure for unlawful, deceptive, or harmful
                purposes
              </li>
              <li>
                Circumventing rate limits, API restrictions, or authentication
                mechanisms
              </li>
            </ul>
            <p>
              Violations may result in immediate suspension or permanent
              termination of access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Fees and Payments
            </h2>
            <p className="mb-4">
              Some services may be subject to fees, including paymaster support,
              API access, or custom deployments. We will notify users of pricing
              structures where applicable. All fees are non-refundable unless
              otherwise specified.
            </p>
            <p>
              You are responsible for any gas fees or on-chain transaction costs
              associated with using Magmar&apos;s tools or deploying smart contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. No Custody or Guarantees
            </h2>
            <p className="mb-4">
              Magmar Infra does not provide custody over any digital assets. We
              do not store, recover, or manage your keys. If you lose access to
              your wallet, we cannot assist in recovery.
            </p>
            <p>
              Additionally, Magmar Infra does not guarantee uptime, specific
              functionality, or compatibility with third-party services or
              chains. Use the services at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Intellectual Property
            </h2>
            <p className="mb-4">
              All content, technology, software, branding, and documentation
              associated with Magmar Infra is the exclusive property of Magmar
              Infra LLC. You may not copy, reverse engineer, or distribute our
              intellectual property without prior written consent.
            </p>
            <p>
              Using our SDKs or APIs does not grant you ownership or license to
              any part of our proprietary technology beyond what is explicitly
              stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Third Party Tools
            </h2>
            <p>
              Some services may integrate with third-party tools, blockchain
              networks, or APIs. We do not control these providers and are not
              liable for changes in their performance, security, or
              availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              Magmar Infra reserves the right to restrict or terminate access to
              any user who violates these terms, poses a security risk, or
              abuses the services. Termination may occur without prior notice.
            </p>
            <p>
              You may stop using the services at any time. Upon termination,
              your rights under these terms will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              10. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Magmar Infra shall not be
              held liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loss of assets, data, or contracts</li>
              <li>Security breaches or smart contract vulnerabilities</li>
              <li>Service interruptions, errors, or bugs</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
            <p>
              The total liability of Magmar Infra shall not exceed the total
              amount paid by you to us in the previous twelve months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Indemnity</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Magmar Infra
              LLC, its officers, employees, and affiliates from any claims,
              liabilities, losses, or expenses arising out of your use of the
              services, violation of these terms, or infringement of any rights
              of a third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed under the laws of
              the State of Delaware, without regard to conflict of laws
              principles. All disputes shall be subject to the exclusive
              jurisdiction of the state or federal courts located in Delaware.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              13. Contact Information
            </h2>
            <p className="mb-2">
              For questions or legal inquiries, please contact us at:
            </p>
            <p className="mb-2">Magmar Infra LLC</p>
            <p className="mb-2">Registered in Delaware, United States</p>
            <p className="mb-2">📧 legal@magmarinfra.com</p>
            <p>🌐 https://www.magmarinfra.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
