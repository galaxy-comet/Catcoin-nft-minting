import * as React from 'react';
import { Container } from '@mui/material';

import AccountStatics from '../components/account_static';
import Balance from '../components/balance';
import RecentTransaction from '../components/recent_transaction';

import { useBlockchainContext } from "../context";
import TokenPrice from '../components/token_price';

export default function Dashboard() {

    const [,
        { setCurrentPage, setCurrentMode }] = useBlockchainContext();

    React.useEffect(() => {
        setCurrentPage(1);
        setCurrentMode(0);
    }, [])

    return (
        <div id="dashboard">
            <Container>
                <Balance />
                <TokenPrice />
                <RecentTransaction />
                <AccountStatics />
            </Container>
        </div>
    )
}