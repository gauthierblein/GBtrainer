import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PersonalTraining from "./components/PersonalTraining/personalTraining";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Programmes from "./components/Programmes/Programmes";
import SmallGroupTraining from "./components/SmallGroupTraining/smallGroupTraining";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Programmes />
      <PersonalTraining />
      <SmallGroupTraining />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
