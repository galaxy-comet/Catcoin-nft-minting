import * as React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AccountStatics() {
    return (
        <div id='recent_transaction' className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Account statistics</div>
                <div>
                    <Link to="/trading"><Button className='x-hd-btn'>Open order</Button></Link>
                    <Link to="/wallet"><Button className='x-hd-btn'>Add balance</Button></Link>
                </div>
            </div>
            <div className='x-recent-body'>
                <div className='x-tbl-header'>
                    <div className='x-title col-1'>ASSET, DATE</div>
                    <div className='x-title col-2'>CURRENCY</div>
                    <div className='x-title col-3'>AMOUNT</div>
                    <div className='x-title col-4'>ORDER</div>
                    <div className='x-title col-5'></div>
                </div>
                <div className='x-tbl-body'></div>
            </div>
        </div >
    )
}