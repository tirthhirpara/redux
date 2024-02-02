import './App.css';
import { increment,decrement,demo } from './counter/counterSlice';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';

function App() {
  const count = useSelector((state)=> state.counter.value);
  const name = useSelector((state)=> state.counter.name);
  const email = useSelector((state)=> state.counter.email);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>VALUE : {count}</h1>
      <h1>NAME : {name}</h1>
      <h1>EMAIL : {email}</h1>

      <button onClick={()=> dispatch(increment())}> INCREMENT</button>
      <button onClick={()=> dispatch(decrement())}> DECREMENT</button>
      <button onClick={()=> dispatch(demo())}> INCREMENT BY 5</button>
    </div>
  );
}

export default App;
