import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from '../components/Trip';
import Footer from "../components/Footer";
function Home(){
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/12.jpg?raw=true"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination" 
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        
        </>
    )
}
export default Home;