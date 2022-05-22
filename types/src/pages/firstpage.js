import { Container } from '@mui/material';
import * as React from 'react';
import Sector1 from '../components/sector1';

import { useBlockchainContext } from "../context";


export default function Firstpage() {
    const [state,
        { setCurrentPage }] = useBlockchainContext();

    React.useEffect(() => {
        setCurrentPage(0)
    }, [])


    return (
        <div id='firstpage'>
            <Container>
                <Sector1 />
            </Container>
        </div>
    )
}