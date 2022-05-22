import * as React from 'react';


export default function RecentTransaction() {
    return (
        <div id='recent_transaction' className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Recent transactions</div>
            </div>
            <div className='x-recent-body'>
                <div className='x-tbl-header'>
                    <div className='x-title col-1'>ASSET, DATE</div>
                    <div className='x-title col-2'>CURRENCY</div>
                    <div className='x-title col-3'>AMOUNT</div>
                    <div className='x-title col-4'>ORDER</div>
                    <div className='x-title col-5'></div>
                </div>
                <div className='x-tbl-body'>
                    <div className='x-tbl-none'>Transactions not found</div>
                </div>
            </div>
        </div>
    )
}