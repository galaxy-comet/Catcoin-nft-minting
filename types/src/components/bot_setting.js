import * as React from 'react';
import { Button, Grid, Checkbox, FormControlLabel, Switch } from '@mui/material';

import { styled } from '@mui/material/styles';

import "react-multi-carousel/lib/styles.css";

import Coins from "../assets/json/coin_list3.json";
import Cexs from "../assets/json/dex_list.json";

import { useBlockchainContext } from "../context";

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default function BotSetting() {
    const [state,
        { }] = useBlockchainContext();
    const [cexbtn, setCexbtn] = React.useState(false);
    const [tokenbtn, setTokenbtn] = React.useState(false);
    const [cexstate, setCexstate] = React.useState(false);
    const [tokenstate, setTokenstate] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const checkedChange = () => {
        if (checked) {
            if (!window.confirm("Stop running bot?")) return;
        }
        else {
            if (!window.confirm("Start bot?")) return;
        }
        setChecked(!checked);
    }

    const tokenChange = () => {
        if (!tokenbtn) {
            if (!window.confirm("Change CEX list?")) return;
            setTokenbtn(true);
            setTokenstate(true);
        }
        else {

        }
    }

    const cexChange = () => {
        if (!cexbtn) {
            if (!window.confirm("Change CEX list?")) return;
            setCexbtn(true);
            setCexstate(true);
        }
        else {

        }
    }

    return (
        <div id="balance" className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Bot setting</div>
                <FormControlLabel
                    label="BOT"
                    control={<IOSSwitch sx={{ m: 1 }} onChange={checkedChange} checked={checked} />}
                />
            </div>
            <div className='x-balance-body'>
                <Grid container >
                    <Grid item xs={12} sm={6} md={6} lg={6} p={3} container justifyContent='space-between' alignItems='flex-start' flexDirection='column'>
                        <div>
                            {
                                Cexs.list.map((d, ind) => (
                                    <div key={ind} className='x-setting-dexs'><Checkbox disabled={!cexstate} {...label} /> <img className='x-setting-img' src={'/cex_icons/' + d.icon} alt='' />{d.name}</div>
                                ))
                            }
                        </div>
                        <Button className='x-change-btn' onClick={cexChange} >{!cexbtn ? "Change" : "Save"}</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} p={3} container justifyContent='space-between' alignItems='flex-start' flexDirection='column'>
                        <div>
                            {
                                Coins.list.map((d, ind) => (
                                    <div key={ind} className='x-setting-dexs'><Checkbox disabled={!tokenstate} {...label} /> <img className='x-setting-img' src={'/crypto_rec_icons/' + d.url} alt='' />{d.name}</div>
                                ))
                            }
                        </div>
                        <Button className='x-change-btn' onClick={tokenChange} >{!tokenbtn ? "Change" : "Save"}</Button>
                    </Grid>
                </Grid>
            </div >
        </div >
    )
}