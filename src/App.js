import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "ReactB"
  let [a,b] = useState(['라디오','강남','파이썬']);
  let [goodcnt, changecnt] = useState(0);

 
  return (
    <div className="App"> 
      <div className="black_nav">
        <h4 id={post}>테스트 1</h4>
      </div>
     <button onClick={()=>{
        let cp1 = [...a];
        cp1.sort((a, b) => a.toLowerCase() < b.name.toLowerCase() ? -1 : 1);

        b(cp1);

     }}>가나다 정렬</button>
      <div className='list'>
        <h4 style={{color:'red', fontSize:'16px'}}><span onClick={()=>{
          let copy = [...a];
          copy[0] = 'A3';
          b(copy);
        }}>
          {a[0]}</span><span onClick={()=>{changecnt(goodcnt +1)}}>👍</span>{goodcnt}</h4>
        <p>2023-07-10</p>
      </div>
      <div className='list'>
        <h4 style={{color:'red', fontSize:'16px'}}>{a[1]}</h4>
        <p>2023-07-10</p>
      </div>
      <div className='list'>
        <h4 style={{color:'red', fontSize:'16px'}}>{a[2]}</h4>
        <p>2023-07-10</p>
      </div>
    
    </div>
  );
}

export default App;
