import Button from "./assets/Button";


function App() {

  function handleFocus(){
    console.log("Focus");
  }

  function handleInput(e){
    console.log(e.target.value);
  }

  function handleClick(value){
    // console.log("click");
    console.log(value);
  }

  function handleButton(value){
    console.log(`handle ${value}`);
    // console.log("handle button");
  }

  return (
    <>
    <div className={`d-flex flex-column justify-content-center align-items-center mh-100`}>
      <input onFocus={handleFocus} 
             onInput={handleInput}
             type="text"
             className="mb-20" />
             <Button propsButton={handleButton} />
      <button onClick={(e) => handleClick(e, "Hello")} 
      className="btn btn-primary mb-20">Submit</button>
    </div>
      
    </>
  )
}

export default App
