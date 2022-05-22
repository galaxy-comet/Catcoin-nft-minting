import * as React from 'react';
import { MdOutlineBarChart } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";
import { MdLocalMall } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='x-footer'>
                <div className='x-footers'>
                    <MdOutlineBarChart className='x-footer-icon' />
                    <div>Trade</div>
                </div>
                <div className='x-footers'>
                    <MdAdsClick className='x-footer-icon' />
                    <div>Trade</div>
                </div>
                <div className='x-footers'>
                    <MdLocalMall className='x-footer-icon' />
                    <div>Trade</div>
                </div>
                <div className='x-footers'>
                    <MdOutlinePermContactCalendar className='x-footer-icon' />
                    <div>Trade</div>
                </div>
            </div>
        </div>
    )
}