
import Navbar from './components/navbar/Navbar'
// import NavbarDaisy from './components/navbarDaisy/NavbarDaisy'
import './App.css'
import PriceOptions from './components/priceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'



function App() {
 

  return (
    <>
    

    <Navbar></Navbar>
    {/* <NavbarDaisy></NavbarDaisy> */}
    


      

     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phones></Phones>
    </>
  )
}

export default App
