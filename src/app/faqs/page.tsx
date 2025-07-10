'use client'

import React, { useEffect, useState } from "react";

const faqCategories = [
  {
    id: "general",
    title: "General Overview",
    questions: [
      {
        id: "what-is-magmar",
        question: "What is Magmar?",
        answer:
          "Magmar is a smart account abstraction infrastructure that enhances blockchain usability by merging smart contracts with externally owned accounts. It enables features like gasless transactions, social recovery, and multi-signature wallets.",
      },
      {
        id: "improve-ux",
        question: "How does Magmar improve blockchain user experience?",
        answer:
          "Magmar abstracts away complex wallet management, allowing users to perform transactions without needing to manage private keys directly or pay gas fees upfront, making blockchain more accessible.",
      },
      {
        id: "supported-blockchains",
        question: "What blockchains does Magmar support?",
        answer:
          "Magmar currently supports Ethereum and EVM-compatible chains, with plans to expand to multiple Layer 2 and sidechains through its Magmar Router.",
      },
      {
        id: "magmar-token",
        question: "What is the Magmar Token (MAG) used for?",
        answer:
          "MAG is the native utility token for governance, paying transaction fees in the ecosystem, staking, and accessing premium features within Magmar smart wallets.",
      },
      {
        id: "security",
        question: "How secure is Magmar?",
        answer:
          "Magmar incorporates multi-signature wallets, social recovery, and role-based access controls to ensure enhanced security for users' assets and transactions.",
      },
    ],
  },
  {
    id: "account-abstraction",
    title: "Account Abstraction & Smart Wallets",
    questions: [
      {
        id: "smart-contract-accounts",
        question: "What are smart contract accounts in Magmar?",
        answer:
          "They are programmable wallets controlled by smart contract logic rather than private keys, enabling features like transaction batching, recovery, and gas sponsorship.",
      },
      {
        id: "social-recovery",
        question: "How does social recovery work in Magmar wallets?",
        answer:
          "Users designate trusted contacts or contracts to assist in recovering access to their wallets if keys are lost or compromised, without relying on seed phrases.",
      },
      {
        id: "gasless-transactions",
        question: "Can I use gasless transactions with Magmar?",
        answer:
          "Yes, the Paymaster system sponsors transaction fees, enabling users to send transactions without holding native blockchain tokens.",
      },
      {
        id: "session-keys",
        question: "What are session keys?",
        answer:
          "Session keys are temporary keys with limited permissions issued by smart wallets, allowing safer interactions with dApps or limited-time access.",
      },
      {
        id: "upgradeable-wallets",
        question: "Are Magmar wallets upgradeable?",
        answer:
          "Yes, smart wallets support zero migration upgrades allowing new features or fixes to be applied without moving assets or recreating wallets.",
      },
      {
        id: "role-based-permissions",
        question: "What role-based permissions does Magmar support?",
        answer:
          "Magmar wallets allow assignment of specific roles such as Admin, Executor, or Recovery Agent, giving granular control over wallet operations.",
      },
    ],
  },
  {
    id: "paymaster",
    title: "Paymaster & Gas Fee Abstraction",
    questions: [
      {
        id: "what-is-paymaster",
        question: "What is a Paymaster in Magmar?",
        answer:
          "A Paymaster is an entity that sponsors transaction fees for users, allowing them to pay gas fees in ERC-20 tokens or have fees subsidized based on their behavior or dApp partnerships.",
      },
      {
        id: "paymaster-selection",
        question: "How does Magmar's Paymaster system choose which transactions to sponsor?",
        answer:
          "The system uses AI-driven behavioral analysis and wallet scores to intelligently subsidize gas fees for eligible users.",
      },
      {
        id: "dapp-integration",
        question: "Can dApps integrate with the Paymaster system?",
        answer:
          "Yes, dApps can integrate to sponsor fees for their users, improving onboarding and reducing friction.",
      },
      {
        id: "payment-tokens",
        question: "What tokens can be used to pay fees via Magmar Paymasters?",
        answer:
          "Primarily ERC-20 tokens supported on the underlying blockchain, with support expanding over time.",
      },
      {
        id: "cross-chain-fees",
        question: "Does the Paymaster system support cross-chain fee payments?",
        answer:
          "Through the Magmar Router, gas abstraction can be handled across supported chains, enabling multi-chain fee sponsorship.",
      },
      {
        id: "run-paymaster",
        question: "Can I run my Paymaster?",
        answer:
          "Yes, Magmar supports third parties running Paymasters to offer fee sponsorship services to specific user groups or dApps.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Recovery",
    questions: [
      {
        id: "wallet-security",
        question: "How does Magmar enhance wallet security?",
        answer:
          "By combining multi-signature approvals, role-based access, session keys, and behavioral analytics for risk scoring.",
      },
      {
        id: "lost-private-key",
        question: "What happens if I lose my private key?",
        answer:
          "Social recovery mechanisms allow you to regain control by involving trusted guardians or through time-delayed recovery processes.",
      },
      {
        id: "emergency-controls",
        question: "Are there emergency controls in Magmar wallets?",
        answer:
          "Yes, Guardian Contracts act as failsafes to pause or restrict wallet actions in case of suspected compromise.",
      },
      {
        id: "role-access-control",
        question: "How does role-based access control work?",
        answer:
          "Wallet owners can assign roles with different permissions to addresses, enabling delegation while limiting risk.",
      },
      {
        id: "revoke-session-keys",
        question: "Can I revoke session keys?",
        answer:
          "Yes, session keys can be revoked at any time, limiting their lifespan and permissions.",
      },
      {
        id: "fraud-protection",
        question: "How does Magmar protect against transaction replay or fraud?",
        answer:
          "Built-in failproof UX layers and AI-driven transaction analysis detect anomalies and prevent malicious activity.",
      },
      {
        id: "contract-bugs",
        question: "Are smart wallets protected from contract bugs?",
        answer:
          "Upgradeable wallets allow patching logic without asset migration, reducing risk from contract vulnerabilities.",
      },
    ],
  },
];

export default function FAQSPage() {
  const [activeSection, setActiveSection] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  // Flatten all questions for navigation
  const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((q) => ({
      ...q,
      categoryTitle: category.title,
      categoryId: category.id,
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = allQuestions.map((q) => q.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [allQuestions]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen text-white">
      <div
        className="min-h-screen pt-[200px] bg-[url('/assets/bg.svg')] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="max-w-[1280px] mx-auto flex relative">
          {/* Desktop Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block w-80 sticky top-0 h-screen overflow-y-auto py-[100px] px-8 border-r border-white/10 scrollbar-hide">
            <div className="space-y-1">
              <h3 className="mb-6 text-lg font-semibold text-white/90">
                ON THIS PAGE
              </h3>
              <nav className="space-y-1">
                {faqCategories.map((category) => (
                  <div key={category.id} className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-white/90">
                      {category.title}
                    </div>
                    {category.questions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => scrollToSection(question.id)}
                        className={`block w-full text-left px-3 py-2 text-sm rounded transition-all duration-200 hover:bg-white/5 hover:text-white ml-2 ${
                          activeSection === question.id
                            ? "text-orange-500 bg-orange-500/10 border-l-2 border-orange-500"
                            : "text-white/70"
                        }`}
                      >
                        {question.question}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-5 pb-24 lg:px-12">
            <div className="max-w-4xl">
              {/* Header */}
              <div className="mb-16">
                <h1 className="text-5xl lg:text-[82px] leading-[90%] font-medium mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                  Find answers to common questions about Magmar, our smart account abstraction infrastructure, and how to build powerful, user-friendly blockchain applications using our developer tools.
                </p>
              </div>

              {/* FAQ Categories */}
              <div className="space-y-16">
                {faqCategories.map((category) => (
                  <section key={category.id} className="space-y-8">
                    <h2 className="text-3xl font-medium text-white lg:text-4xl">
                      {category.title}
                    </h2>
                    <div className="space-y-6">
                      {category.questions.map((question) => (
                        <div
                          key={question.id}
                          id={question.id}
                          className="overflow-hidden border rounded-lg scroll-mt-24 border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                          <button
                            onClick={() => toggleQuestion(question.id)}
                            className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-200 hover:bg-white/5"
                          >
                            <h3 className="pr-4 text-lg font-medium text-white">
                              {question.question}
                            </h3>
                            <svg
                              className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                                expandedQuestion === question.id
                                  ? "rotate-180"
                                  : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedQuestion === question.id
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-4">
                              <p className="leading-relaxed text-white/80">
                                {question.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Bottom spacing */}
              <div className="h-32"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
