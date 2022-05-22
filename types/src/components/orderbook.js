import * as React from 'react';
import { Grid, Button } from '@mui/material';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import Carousel from "react-multi-carousel";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


import Orders from "../assets/json/order_list.json";
import Cexs from "../assets/json/dex_list.json";

import "react-multi-carousel/lib/styles.css";

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 300px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 10px 20px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
);

const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 300px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
);

const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px 15px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
);

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
    const components = {
        Root: StyledButton,
        Listbox: StyledListbox,
        Popper: StyledPopper,
        ...props.components,
    };

    return <SelectUnstyled {...props} ref={ref} components={components} />;
});


export default function Orderbook() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 11,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div id='orderbook' className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Order book</div>
            </div>
            <div className='x-order-body'>
                <Carousel responsive={responsive} autoPlaySpeed={1000000}>
                    {
                        Orders.list.map((d, ind) => (
                            <div className='x-order-patten' key={ind}>
                                <div className='x-order-count'>
                                    {d.count}
                                </div>
                                <div className='x-order-1'>
                                    <img src={'/crypto_circle_icons/' + d.token_1 + '.svg'} alt='' />
                                    <span>{d.token_1}</span>
                                </div>
                                <div><svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M9.91667 3.40091L11.4275 4.90591L12.25 4.08341L9.33333 1.16675L6.41667 4.08341L7.23917 4.90591L8.75 3.40091L8.75 12.8334H9.91667L9.91667 3.40091Z"></path>
                                    <path d="M5.25065 10.5991L6.76148 9.09409L7.58398 9.91659L4.66732 12.8333L1.75065 9.91659L2.57315 9.09409L4.08398 10.5991L4.08398 1.16658H5.25065L5.25065 10.5991Z"></path>
                                </svg></div>
                                <div className='x-order-1'>
                                    <img src={'/crypto_circle_icons/' + d.token_2 + '.svg'} alt='' />
                                    <span>{d.token_2}</span>
                                </div>
                                <div><svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M9.91667 3.40091L11.4275 4.90591L12.25 4.08341L9.33333 1.16675L6.41667 4.08341L7.23917 4.90591L8.75 3.40091L8.75 12.8334H9.91667L9.91667 3.40091Z"></path>
                                    <path d="M5.25065 10.5991L6.76148 9.09409L7.58398 9.91659L4.66732 12.8333L1.75065 9.91659L2.57315 9.09409L4.08398 10.5991L4.08398 1.16658H5.25065L5.25065 10.5991Z"></path>
                                </svg></div>
                                <div className='x-order-1'>
                                    <img src={'/crypto_circle_icons/' + d.token_1 + '.svg'} alt='' />
                                    <span>{d.token_1}</span>
                                </div>
                                <div className='x-selector'></div>
                            </div>
                        ))
                    }
                </Carousel>
                <div className='x-order-dex'>
                    <Grid container p={2} justifyContent='space-between' alignItems='stretch' >
                        <Grid item xs={12} sm={4} md={4} lg={4} container justifyContent='flex-start' alignItems='center' flexDirection='row'>
                            <Grid></Grid>
                            <CustomSelect defaultValue={0}>
                                {
                                    Cexs.list.map((d, ind) => (
                                        <StyledOption key={ind} value={ind}><img className='x-dex-icon' src={"/cex_icons/" + d.icon} alt={d.icon} /> {d.name}</StyledOption>
                                    ))
                                }
                            </CustomSelect>
                            <CustomSelect defaultValue={1}>
                                {
                                    Cexs.list.map((d, ind) => (
                                        <StyledOption key={ind} value={ind}><img className='x-dex-icon' src={"/cex_icons/" + d.icon} alt={d.icon} /> {d.name}</StyledOption>
                                    ))
                                }
                            </CustomSelect>
                            <div className='x-order-amount'>
                                <p>Amount</p>
                                <TextField
                                    id="input-with-icon-textfield"
                                    className='x-order-input'
                                    variant="standard"
                                    placeholder='0.0000'
                                    focused
                                    sx={{ width: '280px' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <div>
                                                    <span className='x-order-amount-unit'>BTC</span>
                                                    <img className='x-order-amount-img' src='/crypto_rec_icons/bitcoin.svg' alt='binance' />
                                                </div>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className='x-order-amount'>
                                <p>Unrealized Profit:</p>
                                <TextField
                                    id="input-with-icon-textfield"
                                    variant="standard"
                                    className='x-order-input'
                                    placeholder='0.00000'
                                    focused
                                    sx={{ width: '280px' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <div>
                                                    <span className='x-order-amount-unit'>BTC</span>
                                                    <img className='x-order-amount-img' src='/crypto_rec_icons/bitcoin.svg' alt='binance' />
                                                </div>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} lg={8} container justifyContent='flex-start' alignItems='flex-start'>
                            <div className='x-w100'>
                                <p>Select a network</p>
                                {

                                }
                                <div className='x-networks'>
                                    <div className='x-sel-net active'>
                                        <p className='m-0 x-bd-b'>MAINNET</p>
                                        <div className='x-center'>
                                            BALANCE: <br /> <span>0.0000</span> BTC
                                        </div>
                                    </div>
                                </div>
                                <div className='x-networks'>
                                    <div className='x-sel-net1 active'>
                                        <p className='m-0 x-bd-b'>ERC20</p>
                                        <div className='x-center'>
                                            BALANCE: <br /> <span>0.0000</span> USDT
                                        </div>
                                    </div>
                                    <div className='x-sel-net1 active'>
                                        <p className='m-0 x-bd-b'>TRC20</p>
                                        <div className='x-center'>
                                            BALANCE: <br /> <span>0.0000</span> USDT
                                        </div>
                                    </div>
                                    <div className='x-sel-net1 active'>
                                        <p className='m-0 x-bd-b'>BEP20</p>
                                        <div className='x-center'>
                                            BALANCE: <br /> <span>0.0000</span> USDT
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='x-w100'>
                                <Button className='x-order-btn'>CREATE ORDER</Button>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </div >
        </div>
    )
}

