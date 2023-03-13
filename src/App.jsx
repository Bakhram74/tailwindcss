
import styles from './App.module.scss'
import {useState} from "react";


function App() {

const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={styles.parent}>
        <h4 className={styles.heading}>Allahu akbar</h4>
        <div>
            <input type="text" placeholder={'email'}/>
            <input type="password" placeholder={'password'}/>
        </div>
<button className={styles.button}
        onClick={()=>setIsOpen(!isOpen)}
>Send</button>
        {isOpen&& <button className={'animate-fade'}>test</button>}
    </div>
  )
}

export default App
