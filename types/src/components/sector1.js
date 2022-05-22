import { Button, Container, Grid } from '@mui/material';
import * as React from 'react';

import laptop_bg from '../assets/img/firstpage/laptop_bg.svg';
import main_header1 from '../assets/img/firstpage/main_header1.png';

export default function Sector1() {
    return (
        <div id='first-sector1'>
            <Grid container pt={20} pb={20} justifyContent='flex-start' alignItems='flex-start' >
                <Grid item xs={12} sm={6} md={6} lg={6} container justifyContent='flex-start' alignItems='center' >
                    <div className='ali-l x-64'>Lorem Ipsum</div>
                    <div className='ali-l x-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} container justifyContent='flex-start' alignItems='center' style={{ position: 'relative' }} >
                    <div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}