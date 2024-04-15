import Button from './Button'
import styles from "./App.module.css"

function App() {

  return (
    <>
      <h1 style={{color : "white", backgroundColor : "teal"}}>Hello World</h1>
      <h2 className={styles.title} >Le style React <span>!!!</span> </h2>
      <Button color="green" text="Submit"/>
      <Button color="red" text="Cancel"/>
    </>
  )
}

export default App
