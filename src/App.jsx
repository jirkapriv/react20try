import Content from "./components/Content"
import Clicker from "./pages/Clicker"
function App() {

  return (
    <>

      <Content contentName = "jirka" contentAge={11}></Content>
      <Content contentName = "vojta" contentAge={18}></Content>
      <Clicker></Clicker>
      <Clicker></Clicker>
      <Clicker></Clicker>
      <Clicker></Clicker>
    </>
  )
}

export default App
