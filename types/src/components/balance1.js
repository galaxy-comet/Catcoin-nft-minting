import * as React from 'react';
import { Button, Grid } from '@mui/material';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Coins from "../assets/json/coin_list.json";

import { useBlockchainContext } from "../context";

export default function Balance() {
    const [state,
        { }] = useBlockchainContext();

    const [hdtext, setHdText] = React.useState('');

    React.useEffect(() => {
        switch (state.currentmode) {
            case 0:
                setHdText('Your Balance');
                break;
            case 1:
                setHdText('Manual trading');
                break;
            case 2:
                setHdText('Auto trading');
                break;
        }
    }, [state.currentmode])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
    };
    return (
        <div id="balance" className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Your balance</div>
                <Button className='x-hd-btn'>View balance</Button>
            </div>
            <div className='x-balance-body'>
                <Carousel responsive={responsive} autoPlaySpeed={1000000}>
                    {
                        Coins.list.map((d, ind) => (
                            <div className='x-balance-patten' key={ind}>
                                <div className='x-title'>
                                    <img src={'/crypto_rec_icons/' + d.url} alt={d.name} />
                                    <span>
                                        {d.name}<br />Balance
                                    </span>
                                </div>
                                <div className='x-balance'>
                                    <div className='x-main'>
                                        <span className='x-bal'>{d.balance.toFixed(4)}</span>
                                        <span className='x-symbol'>{d.symbol}<br />{d.symbol_tyle}</span>
                                    </div>
                                    <div className='x-usd'>
                                        <span>USD</span>{d.usd_balance.toFixed(2)}
                                    </div>
                                </div>
                                <div className='x-selector'></div>
                            </div>
                        ))
                    }
                </Carousel>
            </div >
        </div >
    )
}