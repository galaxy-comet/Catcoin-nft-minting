import * as React from 'react';

import { Container } from '@mui/material';

import Coins from "../assets/json/coin_list.json";

import { useBlockchainContext } from "../context";

export default function Wallet() {

    const [,
        { setCurrentPage }] = useBlockchainContext();

    React.useEffect(() => {
        setCurrentPage(3)
    }, [])

    return (
        <div id="wallet">
            <Container>
                <div className=''>
                    <div className='x-wallet-header'>
                        <div className='x-hd-title'>Wallet</div>
                    </div>
                    <div className='x-wallet-body'>
                        {
                            Coins.list.map((d, ind) => (
                                <div className='x-wallet-patten' key={ind}>
                                    <div className='x-wallet-inside'>
                                        <div className='x-patten-1'>
                                            <div className='x-hd'>
                                                <img src={'/crypto_rec_icons/' + d.url} alt={d.name} />
                                                <span>{d.symbol}</span>
                                            </div>
                                            <div className='x-comment'>{d.name}&nbsp;balance</div>
                                        </div>
                                        <div className='x-patten-2'>
                                            <div className='x-balance-1'>Balance <span>USD&nbsp;{d.usd_balance.toFixed(2)}</span></div>
                                            <div className='x-balance-2'><span>{d.balance.toFixed(6)}</span>BTC</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div >

                </div >
            </Container>
        </div>
    )
}