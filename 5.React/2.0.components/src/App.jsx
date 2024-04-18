import './App.css'
import Hello from './Hello'
import { Message, MessageAdd } from './Message';

function App() {
  function greetings(){
    console.log("How are U ?");
  }
  return (
    <>
    <Hello name="John" age={43} />
    <Hello name="Jane" age={26} />
    <Message func={greetings} />
    <MessageAdd />
    </>
  )
}

export default App;