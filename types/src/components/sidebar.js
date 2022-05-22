import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gameLogo from '../assets/img/game.png';
import landLogo from '../assets/img/land.png';
import locationLogo from '../assets/img/location.png';
import nftLogo from '../assets/img/Nft.png';


export default function Sidebar() {

    return (
        <div id="sidebar">
            <div className="x-sidebar">
                <div><Link to="/myNFT"><img src={locationLogo} /></Link></div><br /><br />
                <div><Link to="/marketplace"><img src={nftLogo} /></Link></div><br /><br />
                <div><Link to="/mintedNFT"><img src={landLogo} /></Link></div><br /><br />
                <div><Link to="/game"><img src={gameLogo} /></Link></div>
            </div>
        </div >
    )
}