import NavBar from "../components/NavBar"
import SubscriptionsList from "../components/SubscriptionsPage/SubscriptionList"
import Footer from "../components/Footer";



export default function SubscriptionsPage(){
    return(
        <div className="App">
            <NavBar />
           
            <SubscriptionsList />      
           
            <Footer />
        </div>
    )
}