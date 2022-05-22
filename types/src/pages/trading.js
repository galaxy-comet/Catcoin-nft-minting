import * as React from "react";
import { Container } from "@mui/material";

import { useBlockchainContext } from "../context";
import BotSetting from "../components/bot_setting";

export default function Tradingview() {

    const [,
        { setCurrentPage, setCurrentMode }] = useBlockchainContext();

    React.useEffect(() => {
        setCurrentPage(2);
        setCurrentMode(1);
    }, [])

    // const changeMode = (para) => {
    //     setCurrentMode(para);
    // }

    return (
        <div id="tradingview" className="tradingview-page">
            <Container>
                {/* <Button className="x-mode-btn x-manual" onClick={e => changeMode(1)} >Manual&nbsp;Mode</Button>
                <Button className="x-mode-btn x-auto" onClick={e => changeMode(2)} >Auto&nbsp;Mode</Button> */}
                <BotSetting />
            </Container >
        </div >
    )
}