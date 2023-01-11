import {useEffect,useState} from "react";
import Movie from "./components/Movie";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  /* const [toDo,setToDo]=useState("");
  const [toDos,setToDos]=useState([]);
  const onChange=(event)=>setToDo(event.target.value);
  const onSubmit= (event)=>{
    event.preventDefault();
    if(toDo==="")return;
    setToDo("");
    setToDos(currentArray=>[toDo,...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} 
        type="text" placeholder="Write your to do"/>
      
        <button >Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((item,index) => <li key={index}>{item}</li>)}

      </ul>
    </div>
  ); */

  //coin Tracker 7.2
  /* const [loading, setLoading]=useState(true);
  const[coins, setCoins]=useState([]);
  const[myMoney,setMymoney]=useState([]);
  const onChange=(event)=>setMymoney(event.target.value);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{setCoins(json);
    setLoading(false)});
  },[]);
  return (
    <div>
      <h1>The Coin</h1>
      <input onChange={onChange} value= {myMoney}type="number" placeholder="input"></input>
      {loading ? <strong>Loading...</strong> : <select>
        {coins.map((coin)=>(
        <option>
          {coin.name} ({coin.symbol}) : $({coin.quotes.USD.price})
        </option>
        ))}
        {coins.map((coin)=><option>{coin.name} ({coin.symbol}):{myMoney/coin.quotes.USD.price} {coin.symbol} </option>)}

      </select>}
      
    </div>
  ); */

  //movie
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
    <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
