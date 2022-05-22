import * as React from 'react';



export default function OrderList() {

    return (
        <div id='recent_transaction' className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Manual orders</div>
            </div>
            <div className='x-recent-body'>
                <div className='x-tbl-header'>
                    <div className='x-title col-1'>Crrency</div>
                    <div className='x-title col-2'>Cash in, Cash out</div>
                    <div className='x-title col-3'>AMOUNT</div>
                    <div className='x-title col-4'>ROI</div>
                    <div className='x-title col-5'></div>
                </div>
                <div className='x-tbl-body'>
                    <div className='x-tbl-none'>Orders not found</div>
                </div>
            </div>
        </div>
    )
}