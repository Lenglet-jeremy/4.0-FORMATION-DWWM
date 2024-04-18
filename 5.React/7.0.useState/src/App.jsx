import { useState } from "react"
import Button from "./assets/Button"
import Count from "./assets/count";


function App() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [text, setText] = useState(`show`)
  
  function handleClick() {
    setCount(count + 1)
  };

  function handleShowCount(){
    setShowCount(!showCount)
    if(!showCount){
      setText("hide")
    } else {
      setText("show")
    }
  }

  return (
    <>
    <div className={`d-flex flex-column 
    justify-content-center 
    align-items-center mh-100`}>
      <Button handleClick={handleClick} />
      <button className="btn btn-primary" 
              onClick={handleShowCount} >
              {/* {showCount ? "Hide" : "Show"} */}
              {text}
      </button>
      {showCount && <h2><Count count={count} /></h2>}
    </div>
    </>
  )
}

export default App
