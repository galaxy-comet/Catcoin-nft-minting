import * as React from 'react';
import { Button, TextField } from '@mui/material';

import { useBlockchainContext } from "../context";

export default function Sign() {
    const [state,
        { setCurrentPage }] = useBlockchainContext();

    React.useEffect(() => {
        setCurrentPage(0)
    }, [])

    return (
        <div id='sign'>
            <div className='x-sign-page'>
                <div className='x-sign-panel'>
                    <div className='x-sign-header'>
                        SIGN IN
                    </div>
                    <div className='x-sign-body'>
                        <div className='x-input-title'>Username</div>
                        <TextField className='x-input' sx={{ width: '100%' }} label="" variant="standard" />
                        <div className='x-input-title mt-30'>password</div>
                        <TextField sx={{ width: '100%' }} type={'password'} label="" variant="standard" />
                        <Button className='x-signin'>Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}