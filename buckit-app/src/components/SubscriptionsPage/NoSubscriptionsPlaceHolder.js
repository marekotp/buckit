import { Container, Paper, Typography } from "@mui/material"

function NoSubscriptionsPlaceHolder() {
  return (
    <Container component={Paper} sx={{p:15, backgroundColor: '#f5f5f5'}}>
        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'text.secondary', letterSpacing: 1, '@media (max-width: 700px)': {flexDirection: "column"}}}>
        Get started by clicking <strong>&nbsp;"Add Subscription"&nbsp;</strong> button!
        </Typography>
    </Container>
    
  )
}

export default NoSubscriptionsPlaceHolder
