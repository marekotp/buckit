import NavBar from "../components/NavBar"
import AddSubscription from "../components/SubscriptionsPage/AddSubscription"
import SubscriptionsList from "../components/SubscriptionsPage/SubscriptionList"

export default function SubscriptionsPage(){
    return(
        <div>
            <NavBar />
            <AddSubscription />
            <SubscriptionsList />
        </div>
    )
}