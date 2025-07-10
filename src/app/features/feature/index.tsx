"use client"
import { useState, useEffect, useRef } from "react";
import Content from "../content";

const Feature = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  const items = [
    {
      title: "Gas Sponsorship",
      heading: "Gas Sponsorship",
      subparagraph:
        "Gas Sponsorship removes the obstacle of gas fees, making it easier for new users to engage with blockchain technology. By eliminating this financial barrier, users can interact with decentralized applications (dApps) without worrying about the cost of transactions, fostering wider adoption and a smoother onboarding experience.",
      paragraph:
        "This innovative solution allows dApps to cover transaction costs on behalf of their users. With flexible sponsorship models, dApps can tailor their approach to fit different scenarios, ensuring they can support their user base effectively. This flexibility not only enhances user experience but also encourages more robust interaction within the blockchain ecosystem.",
      background: "/assets/GasSponsorship.png",
    },
    {
      title: "Self-Custody",
      heading: "Self-Custody",
      subparagraph:
        "Self-Custody allows you to maintain full control over your digital assets, ensuring that you are the sole owner and manager of your funds. By eliminating the need for third-party custodians or intermediaries, you retain direct access to your cryptocurrencies, giving you complete autonomy over transactions and holdings.",
      paragraph:
        "This approach enhances security and privacy for your crypto holdings, as it reduces the risks associated with external breaches and data leaks. With self-custody, your assets are safeguarded from potential threats posed by third-party custodians, providing a more secure and private method to manage your digital wealth.",
      background: "/assets/Selfcustody.png",
    },
    {
      title: "ERC-4337 Support",
      heading: "ERC-4337 Support",
      subparagraph:
        "ERC-4337 Support leverages the latest account abstraction standard to enhance the user experience in the blockchain ecosystem. This standard simplifies interactions with blockchain accounts, making them more intuitive and user-friendly without compromising on security. By abstracting account management complexities, users can enjoy a seamless experience that aligns more closely with traditional financial systems, thereby lowering the barrier to entry for newcomers.",
      paragraph:
        "In addition to simplifying the user experience, ERC-4337 enables advanced features such as recovery options and spending limits. These features provide added layers of security and flexibility, allowing users to set predefined parameters for account usage and recover their accounts in case of loss. This enhanced functionality ensures that users can manage their digital assets with greater confidence and control, fostering a more secure and adaptable blockchain environment.",

      background: "/assets/ERC-4337Support.png",
    },
    {
      title: "Batch Transactions",
      heading: "Batch Transactions",
      subparagraph:
        "Batch transactions allow users to execute multiple operations in a single transaction, optimizing both time and resources. This method significantly saves on gas fees and helps to reduce blockchain congestion by bundling several actions together, ensuring smoother and more efficient network performance.",
      paragraph:
        "In addition to cost efficiency, batch transactions streamline complex DeFi interactions by simplifying the process of executing multiple smart contract operations simultaneously. This not only enhances the user experience but also contributes to a more robust and scalable decentralized finance ecosystem.",
      background: "/assets/BatchTransactions.png",
    },
    {
      title: "Social Login",
      heading: "Social Login",
      subparagraph:
        "Social Login simplifies the onboarding process by allowing users to sign in using their existing social media accounts, eliminating the need to create new usernames and passwords. This user-friendly approach enhances convenience and reduces friction, making it easier for individuals to access services without the hassle of remembering complex seed phrases or additional login credentials.",
      paragraph:
        "This feature seamlessly integrates with popular platforms such as Google, Facebook, and Twitter, providing a smooth and secure login experience. By leveraging trusted social media networks, Social Login ensures a quick and reliable authentication process, fostering a more engaging and accessible user experience across various applications and websites.",
      background: "/assets/SocialLogin.png",
    },

    {
      title: "Modular Smart Contracts",
      heading: "Modular Smart Contracts",
      subparagraph:
        "Modular Smart Contracts offer a flexible and upgradeable wallet architecture, enabling users to adapt and enhance their wallets seamlessly. This approach allows for the easy addition of new features and capabilities, ensuring that users can customize their wallets to meet their specific needs and preferences without disrupting the existing functionality. The modular nature of these contracts ensures that each component operates independently, allowing for targeted upgrades and modifications.",
      paragraph:
        "Moreover, this architecture is designed to be future-proof, safeguarding your wallet against the rapid evolution of blockchain technology. As new advancements and innovations emerge, modular smart contracts enable swift integration of these developments, keeping your wallet up-to-date and secure. This proactive adaptability ensures that users remain at the forefront of technological progress, maintaining optimal functionality and security in an ever-changing blockchain landscape.",
      background: "/assets/ModularSmartContracts.png",
    },
    {
      title: "Multi-Chain Support",
      heading: "Multi-Chain Support",
      subparagraph:
        "Multi-chain support enables the management of assets across multiple blockchain networks, providing users with unparalleled flexibility and control over their digital holdings. This feature simplifies the complexity of interacting with different blockchains, ensuring that users can efficiently and securely handle their assets without needing to switch between various platforms or interfaces.",
      paragraph:
        "With seamless cross-chain transactions and interactions, users can effortlessly transfer and manage their assets across different blockchain ecosystems. The unified interface integrates diverse crypto ecosystems into a single, cohesive platform, streamlining the user experience and enhancing overall efficiency. This holistic approach to multi-chain support empowers users to maximize their engagement and potential within the crypto space.",
      background: "/assets/Multi-chainSupport.png",
    },
    {
      title: "Easy User Onboarding",
      heading: "Easy User Onboarding",
      subparagraph:
        "Magmar allows users to integrate social login into your games simplifying the process of onboarding new users to the platform. This cuts out the account creation process removing the biggest hurdle in onboarding new gamers to the platform.",
      paragraph:
        "Additionally, when the user interface is governed by smart contracts, you don’t need to remember long seed phrases. Even when you forget your password, you can easily recover your account by making changes to the code.",
      background: "/assets/EasyUserOnboarding.png",
    },
  ];


  return (
    <div className="px-[5%] " id="features">
      <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-4">
        <div className="col-span-2 sm:mb-0 mb-4">
          <Content
            heading={items[selectedTab].heading}
            paragraph={items[selectedTab].paragraph}
            subparagraph={items[selectedTab].subparagraph}
          />
        </div>
        <div className="col-span-3">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-1 space-y-4">
              {items.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  ref={index === 0 ? firstBtnRef : null}
                  className={`relative  cursor-pointer  w-full sm:h-[250px] h-[40px]   uppercase sm:text-[20px] font-semibold  rounded-[16px] ${
                    selectedTab === index
                      ? " text-white border border-[#fd1d1d]"
                      : " text-white"
                  }`}
                >
                  <h5 className="absolute sm:top-[4%] top-[20%] left-[4%] z-[10] ">
                    {" "}
                    {item.title}
                  </h5>
                  <img
                    className=" absolute md:flex hidden  left-0 w-full h-full object-cover rounded-[16px]"
                    src={item.background}
                    alt="background"
                  />
                </div>
              ))}
            </div>
            <div className="col-span-1 space-y-4 sm:mt-[50%]">
              {items.slice(3, 6).map((item, index) => (
                <div
                  key={index + 3}
                  onClick={() => setSelectedTab(index + 3)}
                  className={`relative cursor-pointer  w-full sm:h-[250px] h-[40px] uppercase sm:text-[20px] font-semibold rounded-[16px] hover:border-[2px] hover:border-[#3a3a3a] ${
                    selectedTab === index + 3
                      ? " text-white border border-[#fd1d1d]"
                      : "text-white"
                  }`}
                >
                  <h5 className="absolute sm:top-[4%] top-[20%] left-[4%] z-[10] ">
                    {" "}
                    {item.title}
                  </h5>
                  <img
                    className="absolute md:flex hidden  left-0 w-full h-full object-cover rounded-[16px]"
                    src={item.background}
                    alt="background"
                  />
                </div>
              ))}
            </div>
            <div className="col-span-1 space-y-4">
              {items.slice(6, 8).map((item, index) => (
                <div
                  key={index + 6}
                  onClick={() => setSelectedTab(index + 6)}
                  className={`relative cursor-pointer  w-full sm:h-[250px] h-[40px] uppercase sm:text-[20px] font-semibold rounded-[16px] hover:border-[2px] hover:border-[#3a3a3a] ${
                    selectedTab === index + 6
                      ? " text-white border border-[#fd1d1d]"
                      : "text-white"
                  }`}
                >
                  <h5 className="absolute sm:top-[4%] top-[20%] left-[4%] z-[10] ">
                    {" "}
                    {item.title}
                  </h5>
                  <img
                    className="absolute md:flex hidden  left-0 w-full h-full object-cover rounded-[16px]"
                    src={item.background}
                    alt="background"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
