import Header from "./components/Header"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"

export default function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <Header/>
      <Hero/>
      <CustomCursor/>
    </h1>
  )
}