import React, { useContext } from 'react'
import PapersCard from './PapersCard'
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Container, Grid } from '@mui/material';
import { TransContext } from '../../context/TransactionContext';

const Papers = () => {
    const { total } = useContext(TransContext);

    const information = [
        {id: 1, Icons: <CurrencyBitcoinIcon sx={{fontSize:'100px'}} />, bgBox: '#714fda', totalPrice: total.total, name:'total mony'},
        {id: 2, Icons: <WalletIcon sx={{fontSize:'100px'}} />, bgBox: '#648696', totalPrice: total.income, name:'total income'},
        {id: 3, Icons: <AccountBalanceWalletIcon sx={{fontSize:'100px'}} />, bgBox: '#e53b89', totalPrice: total.expanse, name:'total expanse'},
    ]
  return (
    <Container>
        <Grid container spacing={2}>
            {
                information.map((ele) => {
                    return (
                        <Grid item lg={4} md={6} xs={12} key={ele.id}>
                            <PapersCard ele={ele} />
                        </Grid>
                    )
                    
                })
            }
        </Grid>
    </Container>
  )
}

export default Papers