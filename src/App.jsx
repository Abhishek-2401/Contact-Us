import Navbar from "./components/Navbar.jsx" 
import ContactForm from "./components/ContactForm.jsx"
import Help from "./components/help.jsx"
import Branch from "./components/branch.jsx"
import Footer from "./components/footer.jsx"
import 'typeface-poppins';

function App() {
  return (
    <>
      <Navbar/>
      <ContactForm/>
       <Help />
       <Branch/>
       <Footer/>
    </>
  );
}

export default App;
