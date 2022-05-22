import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Axios from 'axios';

import "react-multi-carousel/lib/styles.css";

import Coins from "../assets/json/coin_list3.json";
import Dexs from "../assets/json/dex_list.json";

// import { useBlockchainContext } from "../context";

export default function TokenPrice() {
    // const [,
    //     { }] = useBlockchainContext();

    const [rows, setRows] = React.useState([
        createData('binance.svg', 'Binance', 0, 0, 0, 0),
        // createData('coinbase.svg', 'Coinbase', 0, 0, 0,0),
        createData('kraken.svg', 'Kraken', 0, 0, 0, 0),
        // createData('bitfinex.svg', 'Bitfinex', 0, 0, 0),
        createData('kucoin.svg', 'Kucoin', 0, 0, 0, 0),
    ]);

    function createData(url, name, btc, eth, ltc, erc, bch, bep) {
        return { url, name, btc, eth, ltc, erc, bch, bep };
    }

    // React.useEffect(() => {
    //     get_price();
    //     setInterval(() => {
    //         get_price();
    //     }, 1000)
    // }, [])

    const get_price = () => {
        Axios.post("/main/getprice", {})
            .then((res) => {
                console.log(res.data);
                let row = [];
                if (res.data.length !== 0) {
                    for (var i = 0; i < res.data.length; i++) {
                        var url = Dexs.list[i].icon;
                        var name = Dexs.list[i].name;
                        var btc = res.data[i]["BTC"];
                        var eth = res.data[i]["ETH"];
                        var bch = res.data[i]["BCH"];
                        var ltc = res.data[i]["LTC"];
                        var usdt = res.data[i]["USDT"];
                        row.push(
                            createData(url, name, btc, eth, ltc, bch)
                        );
                    }
                    setRows(row);
                }

                if (res.data.length === 0) {
                    setRows([]);
                }
            })
    }
    return (
        <div id="balance" className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Token price</div>
            </div>
            <div className='x-balance-body'>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ minWidth: 150, fontSize: 18, background: 'rgb(230,230,230)' }} align="left"><img className='x-cex_icon' src="/cex_icons/cexio.svg" alt='' />CEX List</TableCell>
                                    {
                                        Coins.list.map((d, ind) => (
                                            <TableCell key={ind} sx={{ minWidth: 150, borderRight: '1px solid rgba(100,100,100,0.1)' }} align="center">
                                                <div className='x-title'>
                                                    <img src={'/crypto_rec_icons/' + d.url} alt={d.name} />
                                                    <span>
                                                        {d.name}<br />{d.symbol_tyle}
                                                    </span>
                                                </div>
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((row, ind) => (
                                        <TableRow key={ind} value={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ minWidth: 150, fontSize: 18 }} >
                                                <div>
                                                    <img className='x-cex-icon' src={"/cex_icons/" + row.url} alt='' />
                                                    {row.name}
                                                </div>
                                            </TableCell>
                                            <TableCell align="right" className="x-cex-price" sx={{ fontSize: 16 }}>{row.btc}</TableCell>
                                            <TableCell align="right" className="x-cex-price" sx={{ fontSize: 16 }}>{row.eth}</TableCell>
                                            <TableCell align="right" className="x-cex-price" sx={{ fontSize: 16 }}>{row.ltc}</TableCell>
                                            <TableCell align="right" className="x-cex-price" sx={{ fontSize: 16 }}>{row.erc}</TableCell>
                                            <TableCell align="right" className="x-cex-price" sx={{ fontSize: 16 }}>{row.bch}</TableCell>
                                            <TableCell align="right" className="x-cex-price" sx={{ fontSize: 16 }}>{row.bep}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div >
        </div >
    )
}