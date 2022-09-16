
import './App.css';
import { useState } from 'react'

function App() {
  const [wei,setWei] = useState(0)
  const [bot,setBot] = useState(0)
  const [tim,setTim] = useState(0)
  const [sex,setSex] = useState('male')
  const [ans,setAns] = useState(0)


  function calc(e){
    e.preventDefault();

    const litres = bot * 0.33
    const grams = litres * 8 * 4.5
    const burning = wei / 10
    const left = grams - (burning * tim)
    const mies = left  / (wei * 0.7)
    const nain = left  / (wei * 0.6)
    

    
      

  
    if (sex ==='male') {
      setAns(mies)
      
    }
    else {
      setAns(nain)
      

    }
    if (ans < 0) {
    setAns(0)
    }

   
      


  }
 
  return (
    
    <form onSubmit={calc}>
      <h1>Calculate your blood here</h1>
      <div>
      <label>Weight </label>
      <input type = 'number' value = {wei} onChange={e => setWei(e.target.value)}></input>
      </div>

      <div>
      <label>Bottles </label>
      <input type = 'number' value = {bot} onChange={e => setBot(e.target.value)}></input>
      </div>

      <div>
      <label>TIME </label>
      <input type = 'number' value = {tim} onChange={e => setTim(e.target.value)}></input>
      </div>

      <div>
        <label>Gender: </label>
      <label>Male</label>
      <input type = 'radio' name = 'sex' value ='male' onChange={e => setSex(e.target.value)} defaultChecked></input>
      <label>Female</label>
      <input type = 'radio' name = 'sex' value ='female' onChange={e => setSex(e.target.value)}></input>
      </div>
      <div>
        <output>Your Blood alchohol level is: {ans.toFixed(2)}</output>
        <p>(if negative press Calculate again)</p>
      </div>
      
      <div>
        <button>Calculate</button>
      </div>


    </form>
  )
    


  


}

export default App;
