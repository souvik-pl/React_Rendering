import ChildOne from "./child-one/ChildOne"
import ChildTwo from "./child-two/ChildTwo"

function App() {

  console.log("App rendered");
  
  return (
    <>
      <ChildOne />
      <ChildTwo />
    </>
  )
}

export default App