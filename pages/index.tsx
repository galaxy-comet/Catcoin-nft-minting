import Head from 'next/head';
import Image from 'next/image';
import { Contract } from 'ethers';
import Body from '../components/body';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import {
  faqs,
  MAX_PER_WALLET,
  NFT_CONTRACT_ADDRESS,
  purchaseSteps,
} from '../types/consts';
import { ethers } from 'ethers';
import PurchaseStepCard from '../components/PurchaseStepCard';
import { Accordion } from '../components/accordion';
import ArchieNFTAbi from '../abis/archie-nft.json';
import useGlobalState from '../hooks/useGlobalState';
import ConnectWalletButton from '../components/ConnectWalletButton';

import { shimmerUrl } from '../components/blur-image';

export const Home = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const { web3Provider } = useGlobalState()
  const [isMinting, setIsMinting] = useState(false);
  const [amount, setAmount] = useState(0);

  const onMint = async () => {
    if (amount === 0 || amount > MAX_PER_WALLET) {
      setMessage('Please put a valid mint amount.');
      return;
    }
    try {
      setIsMinting(true);
      setMessage('');
      const provider = web3Provider;
      const signer = await provider.getSigner();
      const contract = new Contract(NFT_CONTRACT_ADDRESS, ArchieNFTAbi, web3Provider.getSigner());
      const owner = await contract.owner();
      const value = ethers.utils.parseEther(String(0.35 * (amount))).toHexString();
      const mintTx = await contract.mint(amount, { value});
      // await tx.wait();
      alert("Success: Minted "+amount +" CCW")
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      setMessage(e.reason || e.message || 'Contract interaction error');
    } finally {
      setIsMinting(false);
    }
  }
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Catcoin World Club</title>
        <link rel="icon" href="/assets/mark.png" />
      </Head>
      <header>
        <NavBar/>
      </header>
      <div>
        <Body />
      </div>
      <main className="container mt-16 mx-auto px-3 md:px-4">
        <section id="mint">
          <p className="text-center text-4xl font-bold text-orange-400">MINT IS LIVE</p>
          <div className="max-w-full md:max-w-screen-lg mx-auto mt-4 flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 px-0 md:px-4">
              <Image src="/assets/nft.gif" className='rounded-lg' layout="responsive" width={400} height={400} alt="nekos" placeholder="blur" blurDataURL={shimmerUrl} />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col px-4">
              <p className="text-4xl font-bold">Catcoin World</p>
              <div className="mt-6">
                <p className="mb-2">Pick the amount of NFT&apos;s you would like to mint.</p>
                <div className="flex items-center mb-4">
                  <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-xl font-bold pl-4 pr-2 py-2 text-gray-900 rounded-l-full h-12" onClick={() => setAmount(Math.max(0, amount - 1))}>-</button>
                  <input type="number" className="w-20 h-12 outline-0 text-gray-900 text-center" placeholder="1" value={amount} onChange={evt => setAmount(Number(evt.target.value))}/>
                  <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-xl font-bold pl-2 pr-4 py-2 text-gray-900 rounded-r-full h-12" onClick={() => setAmount(Math.min(MAX_PER_WALLET, amount + 1))}>+</button>
                </div>
                {web3Provider ? <button className="btn mt-6 w-64" onClick={onMint} disabled={isMinting}>{isMinting ? 'MINTING...' : 'MINT'}</button> : <ConnectWalletButton/>}
                <p className="text-red-300" dangerouslySetInnerHTML={{ __html: message || '&nbsp;' }}/>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-center text-lg font-semibold">Welcome to our community. Being part of the Catcoin World Club introduces you to a community of world wide entrepreneurs. It will give you the opportunity to get in touch with masters of e-commerce already set-up in the real life business. Many IRL meet up events as online events will be organized between holders so that they can exchange their network, discuss marketing strategies and all subjects related to their business, so we can grow up and improve together.</p>
          <div className="mt-12 flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 px-0 md:px-4">
              <Image src="/assets/nft.gif" className='rounded-lg' layout="responsive" width={400} height={400} alt="nekos" placeholder="blur" blurDataURL={shimmerUrl} />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col px-4">
              <p className="text-sky-500 font-medium">ABOUT</p>
              <p className="text-3xl font-bold font-semibold mr-0 xl:mr-20">2022 UNIQUE Catcoin World WHO NEED DRIVERS</p>
              <p className="mt-10 text-lg font-medium">The Catcoin World is a collection of 2022 generative Catcoin World with hundreds of elements.</p>
              <p className="mt-6 text-lg font-medium">Each artwork is original, with its own color palette and creation.The objective was to make each Catcoin World unique in order to prioritize quality above quantity.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {purchaseSteps.map(step => <PurchaseStepCard
            key={step.title}
            image={step.image}
            title={step.title}
            content={step.content}
            label={step.label}
            link={step.link}
            padding={step.padding}
          />)}
        </section>

        <section className="mt-20">
          <p className="text-4xl mb-10 text-sky-500 text-center font-bold">FREQUENTLY ASKED QUESTIONS</p>
          <div className="px-0 md:px-20">
            {faqs.map(faq => <Accordion content={faq.content} name={faq.title} key={faq.title} expanded/>)}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-2xl text-sky-500 font-semibold text-center">What are you waiting for?</p>
          <p className="text-4xl font-bold text-center mt-6">BECOME AN Catcoin World</p>
        </section>

        <section className="mt-20">
          <div className="flex justify-center mb-2">
            <Image src="/assets/logo.png" alt="logo with text" width="300" height="60" />
          </div>
          <p className="text-sky-500 text-center font-semibold pb-4">&copy; 2022 Catcoin World Club. All rights reserved</p>
        </section>
      </main>
    </div>
  )
}

export default Home
