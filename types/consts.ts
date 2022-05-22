import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
// import { TabOption } from './index';
// import { enumToLabel } from '../utils/enum.util';
import { BigNumber } from 'ethers';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const {appName, networkUrl, chainId} = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};
export const purchaseSteps = [
  {
    image: '/assets/steps/metamask.gif',
    title: 'DOWNLOAD METAMASK',
    content: 'The Chrome Metamask extension will allow you to make purchases with Binance. If you are on mobile, please use the Metamask app.',
    label: 'METAMASK',
    link: 'https://metamask.io',
  },
  {
    image: '/assets/steps/binance.gif',
    title: 'ADD SOME BNB',
    content: 'You can purhcase Binance through your Metamask wallet using Wyre or send Binance from an exchange like Coinbase.',
    label: 'COINBASE',
    link: 'https://coinbase.com',
  },
  {
    image: '/assets/mark.png',
    title: 'MINT A Catcoin World',
    content: 'Connect your Metamask to our website. Once connected, you will be able to mint your Catcoin World and approve the transaction.',
    label: 'MINT',
    link: '#mint',
    padding: 2,
  },
];
export const faqs = [
  {
    title: 'WHAT IS THE Catcoin World CLUB?',
    content: 'The Catcoin World CLUB is a collection of 5,000 Non Fungible Token going absolutely bonkers within the Binance blockchain.',
  },
  {
    title: 'HOW MUCH WILL IT COST TO MINT?',
    content: 'The price of the mint is 0.35BNB.',
  },
  {
    title: 'WHEN WILL MINING BE AVAILABLE?',
    content: 'The Catcoin World reveal occurs on May.',
  },
  {
    title: 'HOW MANY CAN WE MINT PER WALLET?',
    content: '10 Per Wallet. The amount of royalties was fixed at 7.5% to finance the NFT Club\'s projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests. The funds collected will benefit the holders. This percentage can decrease over time.',
  },
  {
    title: 'HOW CAN I USE MY NFT?',
    content: 'You will be able to use your NFT as an avatar in the metaverse.',
  },
  {
    title: 'WAHT IS THE METAVERSE?',
    content: 'The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. The future pahses in the NFT club\'s roadmap will allow you to join this Metaverse using the assets you own.',
  },
];
// export const NFT_CONTRACT_ADDRESS = '0xd8a984a2d4887721dedf0ffb59fd8432fa60243b'; // ETH mainnet
export const NFT_CONTRACT_ADDRESS = '0x7850Fa4dC8AD9E50e70323BB365b7D158Ca30f08'; // BSC Testnet
export const PRICE = BigNumber.from('350000000000000000'); // 0.08 ether
export const MAX_PER_WALLET = 100;

