import React, { useEffect, useState } from "react";
import { Button, Grid, Container } from "@mui/material";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';


import { useBlockchainContext } from "../context";

import logo from '../assets/img/logo.svg';


export default function Header() {
    const buttonstyle = {
        backgroundColor: 'rgb(255,255,255)',
        padding: '5px 15px',
        borderRadius: '5px',
        color: '#91C230',
        fontSize: '1em',
        fontWeight: '600',
        border: "1px solid rgb(255,255,255)"
    }

    const [listStyle, setListStyle] = useState(['', '', '', '', '']);

    const [state,
        { setCurrentPage, setMetaState }] = useBlockchainContext();

    useEffect(() => {
        let newArr = [...listStyle];
        for (let i = 0; i < 5; i++) {
            if (state.currentpage === i) {
                newArr[i] = 'x-selected-list';
            }
            else {
                newArr[i] = '';
            }
        }
        setListStyle(newArr);
    }, [state.currentpage])

    const wallet = useWallet();

    React.useEffect(() => {
        checkConnection();
    }, []);

    const handleChainChanged = (chainId) => {
        let { ethereum } = window;
        if (ethereum && ethereum.isConnected() && Number(chainId) === 137) {
            onConnect();
        }
        else {
            if (Number(chainId) !== 137 && Number(chainId))
                NotificationManager.error('Incorrect Chain');
        }
    };

    const checkConnection = async () => {
        let { ethereum } = window;
        if (ethereum !== undefined) {
            const chainId = await ethereum.request({ method: "eth_chainId" });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();
            if (accounts.length !== 0 && Number(chainId) === 137) {
                onConnect();
            }
            else {
                if (accounts.length === 0)
                    NotificationManager.warning('Please connect wallet');
            }
            ethereum.on("chainChanged", handleChainChanged);
        }
    };

    const onConnect = async () => {
        let { ethereum } = window;
        const chainId = await ethereum.request({ method: "eth_chainId" });
        if (Number(chainId) !== 137) {
            NotificationManager.error('Incorrect Chain');
            return;
        }
        if (wallet.status !== "connected") {
            wallet.connect().catch((err) => {
                NotificationManager.error("please check metamask!");
                return;
            });
        }
        setMetaState(true);
    };

    const disconnect = () => {
        if (wallet.status === "connected") {
            wallet.reset()
        }
        setMetaState(false);
    };
    return (
        <div id="header">
            <div className="background-color"></div>
            <Grid container justifyContent='space-between' alignItems='center' p={2}>
                {/* <Grid item xs={3} sm={3} md={3} lg={3} container alignItems='center' >
                    <Link to='/' className="x-logo">
                        <img className="logo-img" alt="Cindy Baker" src={logo} />
                        Logo
                    </Link>
                </Grid> */}
                <Grid item xs={12} sm={12} md={12} lg={12} container alignItems="center" justifyContent="flex-end" >
                    <div className={"x-h-list " + listStyle[1]}><Link to="/">Home</Link></div>
                    <div className={"x-h-list " + listStyle[2]}><Link to="/buyland">Buy&nbsp;Land</Link></div>
                    <div className={"x-h-list " + listStyle[3]}><Link to="/marketplace">Marketplace</Link></div>
                    <div className={"x-h-list " + listStyle[4]}><Link to="/game">Game</Link></div>
                    <Button className='x-sign' onClick={wallet.status !== "connected" ? onConnect : disconnect}>
                        {wallet.status === "connected" ?
                            (
                                <div style={{ textTransform: "none", }}>
                                    View&nbsp;Account
                                </div>
                            ) :
                            (
                                <div style={{ textTransform: "none" }}>
                                    {wallet.status === "connecting" ? (
                                        <div>
                                            <span className="spinner-border" role="status" style={{ width: "1.5em", height: "1.5em", marginRight: 10, }}></span>
                                            <span className="sr-only ">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : (
                                        <div>
                                            Connect&nbsp;Wallet
                                        </div>
                                    )}
                                </div>
                            )}
                    </Button>
                </Grid>
            </Grid>
        </div >
    )
}