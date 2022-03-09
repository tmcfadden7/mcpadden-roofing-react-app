import Header from './components/Header';
import './App.css';
import CallToAction from './components/CallToAction';
import AboutUsSection from './components/AboutUsSection';
import Services from './components/Services';
import Footer from './components/Footer';
import { Jumbotron } from './components/Jumbotron';
import bgImg1 from './images/roofs.jpg';
import bgImg2 from './images/roofs4.jpg';

function App() {
	return (
		<>
			<Header />
			<Jumbotron bgImg={bgImg1} />
			<CallToAction />
			<Jumbotron bgImg={bgImg2} bgImgId2={'parallax-jumbo'} />
			<AboutUsSection />
			<Services />
			<Footer />
		</>
	);
}

export default App;
