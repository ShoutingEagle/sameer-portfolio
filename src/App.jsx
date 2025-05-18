import { createContext, useReducer, } from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from "./components/Projects.jsx"
import './App.css'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

export const ComponentContext = createContext()
function App() {

  const initialState = {
    inView : "hero"
  }

  const reducer = (state,action) => {
    switch (action.type) {
      case "SET_IN_VIEW":
      return {inView: action.payload };
      case "default" : return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='relative'>
      <ComponentContext.Provider value={{state,dispatch}}>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </ComponentContext.Provider>
    </div>
  )
}

export default App
