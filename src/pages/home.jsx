import Search from "../components/search/Search";
import Advantages from "../components/advantages/Advantages";
import FlashDeals from "../components/flash-deals/FlashDeals";


const Home = () => {
    sessionStorage.removeItem('Passengers');
    sessionStorage.removeItem('selectedFlight');
    return (
        <main>   
            <Search/>
            <Advantages/>
            <FlashDeals />
        </main>
    )
}

export default Home