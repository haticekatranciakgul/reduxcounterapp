import {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux';

import {increment, decrement ,incrementByAmount} from '../redux/counter/counterSlice';


function Counter() {
    const [amount , setAmount]= useState(3);
    const countValue = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

    console.log(countValue);
  return (
    <div>
      <h1 className='num'>{countValue}</h1>


      <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='btn'  onClick={() => dispatch(increment())}>Increment</button>

      <br></br>
      <br></br>
      <input className='input' type='number' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      <button className='btn' onClick={() => dispatch(incrementByAmount(amount))}>Increment by amount</button>


    </div>
  )
}

export default Counter
