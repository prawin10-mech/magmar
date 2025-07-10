'use client'

import React, { useEffect, useState } from "react";


const glossaryTerms = [
  {
    id: "account-abstraction",
    title: "Account Abstraction",
    content:
      "A transformative protocol design that merges the functionalities of Externally Owned Accounts (EOAs) and smart contract accounts into unified, programmable entities. Enables features such as gasless transactions, social recovery, transaction batching, and multi-signature security.",
  },
  {
    id: "smart-contract-accounts",
    title: "Smart Contract Accounts",
    content:
      "Programmable accounts governed by smart contract logic instead of private keys. Enable enhanced user features such as upgradeable logic, embedded security controls, and recovery mechanisms. Serve as the foundation for Magmar's smart wallets.",
  },
  {
    id: "paymaster",
    title: "Paymaster",
    content:
      "An entity within the Magmar protocol that sponsors transaction fees, allowing users to perform operations without needing ETH. Supports payments in ERC-20 tokens and enables gas abstraction, especially valuable for onboarding new users.",
  },
  {
    id: "paymaster-system",
    title: "Paymaster System",
    content:
      "Magmar's implementation of fee abstraction. It intelligently sponsors or subsidizes gas fees based on user behavior, wallet score, or dApp integrations, streamlining the user experience and reducing friction.",
  },
  {
    id: "user-operations",
    title: "UserOperations",
    content:
      "A standardized transaction format used in account abstraction under EIP-4337. Users submit actions off-chain, which are then bundled, validated, and executed on-chain by third-party actors.",
  },
  {
    id: "bundlers",
    title: "Bundlers",
    content:
      "Actors in the Magmar ecosystem that collect multiple UserOperations, validate them, and submit them as batch transactions to the blockchain. Help reduce gas overhead and improve scalability.",
  },
  {
    id: "magmar-wallet-sdk",
    title: "Magmar Wallet SDK",
    content:
      "Developer toolkit to build, deploy, and interact with smart accounts on the Magmar infrastructure. Includes prebuilt modules for social recovery, gasless execution, and plugin extensibility.",
  },
  {
    id: "magmar-token",
    title: "Magmar Token (MAG)",
    content:
      "The native utility token of the Magmar ecosystem, used for governance, transaction fee subsidies, and accessing premium account features.",
  },
  {
    id: "social-recovery",
    title: "Social Recovery",
    content:
      "A mechanism that allows users to recover access to their smart accounts by involving trusted parties or time-delayed methods, reducing reliance on seed phrases or private keys.",
  },
  {
    id: "meta-transactions",
    title: "Meta-Transactions",
    content:
      "Transactions submitted and sponsored by third parties on behalf of a user. Magmar supports meta-transactions via its Paymaster system to improve accessibility and lower entry barriers.",
  },
  {
    id: "session-keys",
    title: "Session Keys",
    content:
      "Temporary, permissioned cryptographic keys issued by a smart contract account to allow limited actions (e.g., within a dApp session) without exposing full control. Enhance both security and UX.",
  },
  {
    id: "action-templates",
    title: "Action Templates",
    content:
      "Reusable logic bundles that allow users or developers to define common workflows (e.g., Swap + Stake + Notify) that can be triggered by a single operation or scheduled event.",
  },
  {
    id: "dynamic-gas-pricing",
    title: "Dynamic Gas Pricing",
    content:
      "An algorithm within Magmar's Paymaster system that adjusts the fee subsidy model based on network load, user trust score, and token availability, optimizing cost-efficiency and accessibility.",
  },
  {
    id: "chain-aware-scheduling",
    title: "Chain-Aware Scheduling",
    content:
      "A multi-chain coordination module that delays or routes transactions depending on current gas conditions or performance metrics of target networks.",
  },
  {
    id: "magmar-router",
    title: "Magmar Router",
    content:
      "The component responsible for handling cross-chain account interactions and gas abstraction. Allows seamless smart account operations across supported EVM-compatible chains.",
  },
  {
    id: "revenue-engine",
    title: "Revenue Engine",
    content:
      "Mechanism for tracking, collecting, and redistributing protocol revenue. Includes modules for staking, developer incentives, and token buyback and burn.",
  },
  {
    id: "smart-wallet-score",
    title: "Smart Wallet Score",
    content:
      "A dynamic metric based on on-chain activity and behavioral analysis. Determines eligibility for gas sponsorship, increased limits, or other incentives within the Magmar ecosystem.",
  },
  {
    id: "guardian-contracts",
    title: "Guardian Contracts",
    content:
      "Secondary contracts tied to a smart account that act as emergency guardians, providing a secure failsafe for initiating account recovery or halting malicious actions.",
  },
  {
    id: "upgradeable-smart-wallets",
    title: "Upgradeable Smart Wallets",
    content:
      "Smart accounts that allow for secure, non-destructive upgrades to their logic without asset migration. Ensures forward compatibility and access to new features.",
  },
  {
    id: "role-based-access-control",
    title: "Role-Based Access Control (RBAC)",
    content:
      "A permission model integrated into Magmar smart wallets allowing assignment of specific roles (e.g., Admin, Executor, Recovery Agent) to different addresses or devices.",
  },
  {
    id: "failproof-ux-layer",
    title: "Failproof UX Layer",
    content:
      "The design layer of Magmar that handles transaction fallbacks, replay protection, and interface-level alerts to ensure smooth wallet interactions even in edge cases.",
  },
  {
    id: "developer-plugin-registry",
    title: "Developer Plugin Registry",
    content:
      "A modular system within the Magmar SDK allowing developers to build and integrate custom functionality into smart accounts, such as custom recovery modules, analytics, or dApp connectors.",
  },
  {
    id: "hot-swappable-modules",
    title: "Hot-Swappable Modules",
    content:
      "Components of a smart account that can be swapped or updated live without interrupting service or compromising user assets, used in both plugins and security features.",
  },
  {
    id: "defi-strategy-engine",
    title: "DeFi Strategy Engine",
    content:
      "An AI-enabled module that proposes or executes optimized yield, staking, or liquidity actions based on the user's risk profile and current market conditions.",
  },
  {
    id: "magmar-revenue-visualizer",
    title: "Magmar Revenue Visualizer",
    content:
      "A front-end dashboard showing real-time protocol earnings, fee usage, user growth, and token circulation. Offers transparency to developers, users, and investors.",
  },
  {
    id: "cross-chain-gas-abstraction",
    title: "Cross-Chain Gas Abstraction",
    content:
      "A feature that allows users to fund and execute transactions across one or more supported chains using a single token balance, managed by the Magmar Router.",
  },
  {
    id: "governance-hooks",
    title: "Governance Hooks",
    content:
      "Trigger-based smart contract functions that automatically perform governance-related actions like voting, delegation, or proposal creation based on user preferences or schedules.",
  },
  {
    id: "safe-extensions",
    title: "Safe Extensions",
    content:
      "Enhanced multi-signature wallet compatibility layers within Magmar that integrate AI-based transaction analysis, risk scoring, and automatic alerting before signature aggregation.",
  },
  {
    id: "smart-wallet-dao-integration",
    title: "Smart Wallet DAO Integration",
    content:
      "Direct interfaces and logic allowing users to participate in decentralized governance directly through their smart wallets, with support for multi-chain proposal management.",
  },
  {
    id: "intelligent-resource-allocation",
    title: "Intelligent Resource Allocation",
    content:
      "AI-driven allocation of gas sponsorships, computation time, and bandwidth across users and smart contracts based on their reputation, usage patterns, and strategic value.",
  },
  {
    id: "magmar-testnet",
    title: "Magmar Testnet",
    content:
      "An experimental environment mirroring the mainnet where developers can deploy and test smart wallets, recovery flows, plugins, and fee abstractions with no financial risk.",
  },
  {
    id: "zero-migration-upgrades",
    title: "Zero Migration Upgrades",
    content:
      "The ability to add new features or patch bugs in smart wallet accounts without requiring users to transfer assets or reinitialize their wallets.",
  },
  {
    id: "magmar-chain-compatibility-layer",
    title: "Magmar Chain Compatibility Layer",
    content:
      "A middleware component that allows smart wallet deployments on different chains while maintaining a uniform interface and functionality.",
  },
  {
    id: "gas-estimation-engine",
    title: "Gas Estimation Engine",
    content:
      "A predictive module that estimates future gas fees for planned operations, enabling users and dApps to time transactions for cost efficiency. Integrated with Magmar's dynamic pricing model.",
  },
  {
    id: "reputation-oracle",
    title: "Reputation Oracle",
    content:
      "A protocol-native service that tracks wallet behavior and aggregates trust signals to feed into the Smart Wallet Score, fee sponsorship eligibility, and DAO privileges.",
  },
  {
    id: "wallet-recovery-graph",
    title: "Wallet Recovery Graph",
    content:
      "A visualization and smart logic engine that maps out recovery flows, trusted guardians, and time-based conditions across the user's smart accounts.",
  },
  {
    id: "mgr-locking-mechanism",
    title: "MGR Locking Mechanism",
    content:
      "Allows users to lock Magmar tokens (MGR) in smart wallets to unlock advanced features, gain voting power, or earn passive rewards through platform engagement.",
  },
  {
    id: "modular-execution-layer",
    title: "Modular Execution Layer",
    content:
      "An architecture layer in Magmar that allows developers to plug in and execute custom logic paths in user transactions without modifying base contracts.",
  },
  {
    id: "signature-throttling",
    title: "Signature Throttling",
    content:
      "A security system that limits signing frequency or enforces timeouts after high-risk actions (e.g., transfers or upgrades) to prevent wallet compromise.",
  },
  {
    id: "time-locked-permissions",
    title: "Time-Locked Permissions",
    content:
      "An extension of role-based access where certain roles are granted temporary privileges that expire automatically, useful for time-sensitive actions.",
  },
  {
    id: "programmable-spending-limits",
    title: "Programmable Spending Limits",
    content:
      "A user-configurable restriction that sets daily/weekly/monthly spending thresholds per smart wallet, address, or token.",
  },
  {
    id: "session-guard",
    title: "Session Guard",
    content:
      "A feature that monitors active wallet sessions and can suspend activity when anomalies or risk behaviors are detected.",
  },
  {
    id: "plugin-verification-protocol",
    title: "Plugin Verification Protocol",
    content:
      "A review and audit system within the Developer Plugin Registry that evaluates plugin safety, resource usage, and compatibility before approval.",
  },
  {
    id: "magmar-signature-aggregator",
    title: "Magmar Signature Aggregator",
    content:
      "A system that aggregates multiple user signatures across wallets and chains, used for collective actions like DAO proposals or batch delegation.",
  },
  {
    id: "action-flow-composer",
    title: "Action Flow Composer",
    content:
      "A visual or code-based editor enabling users and developers to construct custom transaction flows that integrate with DeFi, NFTs, and dApps in one interface.",
  },
  {
    id: "custom-token-gas-sponsor",
    title: "Custom Token Gas Sponsor",
    content:
      "Enables project teams or token issuers to sponsor user gas fees in their own tokens, using Magmar's paymaster framework.",
  },
  {
    id: "magmar-usage-index",
    title: "Magmar Usage Index (MUI)",
    content:
      "A composite metric that tracks smart wallet activity, gas sponsorship efficiency, developer plugin adoption, and cross-chain interactions.",
  },
  {
    id: "chain-snapshot-system",
    title: "Chain Snapshot System",
    content:
      "Captures real-time and historical account states for debugging, analytics, and recovery auditing across different Magmar-compatible chains.",
  },
  {
    id: "failover-bundling",
    title: "Failover Bundling",
    content:
      "A resilience mechanism where Bundlers re-route UserOperations to fallback executors in the event of network congestion or partial failure.",
  },
  {
    id: "magmar-insight-engine",
    title: "Magmar Insight Engine",
    content:
      "An internal analytics system used to surface trends, vulnerabilities, and feature adoption across the Magmar ecosystem.",
  },
];

export default function GlossaryPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = glossaryTerms.map((term) => term.id);
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
  }, []);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* <Navbar /> */}
      <div
        className="min-h-screen pt-[200px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(/assets/bg.6ec3205349cc3c90b87262679bdfb72f.svg)`,
        }}
      >
        <div className="max-w-[1280px] mx-auto flex relative">
          {/* Desktop Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block w-80 sticky top-0 h-screen overflow-y-auto py-[100px] px-8 border-r border-white/10 scrollbar-hide">
            <div className="space-y-1">
              <h3 className="mb-6 text-lg font-semibold text-white/90">
                ON THIS PAGE
              </h3>
              <nav className="space-y-1">
                {glossaryTerms.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => scrollToSection(term.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded transition-all duration-200 hover:bg-white/5 hover:text-white ${
                      activeSection === term.id
                        ? "text-orange-500 bg-orange-500/10 border-l-2 border-orange-500"
                        : "text-white/70"
                    }`}
                  >
                    {term.title}
                  </button>
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
                  Glossary
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                  This document provides definitions for the main Magmar concepts and terms, along with their relationships to one another. Familiarity with blockchain infrastructure and smart account abstraction is assumed.
                </p>
              </div>

              {/* Glossary Terms */}
              <div className="space-y-16">
                {glossaryTerms.map((term) => (
                  <section key={term.id} id={term.id} className="scroll-mt-24">
                    <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white">
                      {term.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-white/80 leading-relaxed text-lg">
                        {term.content}
                      </p>
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
