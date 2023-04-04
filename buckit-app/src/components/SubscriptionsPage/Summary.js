import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


export default function Summary(props){
    return (
        <Container>
            <Paper elevation={0} sx={{height: 'auto', p: 0, background: 'linear-gradient(0deg, rgba(83,213,155,1) 33%, rgba(152,227,160,1) 77%)', borderRadius: "25px"}}>
                <div className="p-3">
                    <div className="p-3">
                        <h2 className="text-left" style={{color: '#fff'}}>Welcome {props.name},</h2>
                        <h4 className="text-left" style={{color: '#fff'}}>Your Total Monthly Spend: <strong> ${props.totalSpend}</strong></h4>
                        <p className="text-left" style={{color: '#F5F5F5', fontStyle: 'italic'}}>*Your Yearly, Weekly, & Bi-Weekly subscriptions will be adjusted accordingly</p>
                    </div>
                </div>
            </Paper>
        </Container>
    )
  }
  