import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [number , setNumber] = useState(10)

  const data = "Rohit"


  console.log("count",number)




  return (
    <div>

      <div>
        <h1>{number}</h1>
        <div onClick={() => setNumber(number + 2)}>Increment</div>
        <div onClick={() => setNumber(number - 2)}>Decrement</div>
      </div>
      <Navbar jadu={data} />
      <Body/>
      <Footer/>
    </div>
  )
}

export default App