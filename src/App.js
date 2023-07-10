import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "ReactB"
  let [a,bFunc] = useState(['라디오','강남','파이썬']);
  let [goodcnt, changecnt] = useState(a.map(function(){
    return 0;
  }));
  
  let [modal, setModal] = useState(a.map(function(){
    return 0;
  })); 

  let [inputV, setInputValue] = useState('');

  return (
    <div className="App"> 
      <div className="black_nav">
        <h4 id={post}>테스트 1</h4>
      </div>
     <button onClick={()=>{
        let cp1 = [...a];
        cp1.sort();

        bFunc(cp1);

     }}>가나다 정렬</button>
      {/* <div className='list'>
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
      </div> */}
      {
        a.map(function(aT, i){
          return (
           <div className='list'>
           <h4 style={{color:'red', fontSize:'16px'}} onClick={(e)=>{
              e.stopPropagation();
              {
                let m_flag= [...modal];
                m_flag[i] === 0
                ?  m_flag[i] = 1
                :   m_flag[i] = 0
                setModal(m_flag); 
              }
             }}
          >
            {a[i]}
            <span onClick={()=>{
              let cp_cnt = [...goodcnt];
              cp_cnt[i] ++; 
              changecnt( cp_cnt )}}>👍</span>{goodcnt[i]}
            </h4>
              <DeleteList index={i} a={a} bFunc={bFunc} goodcnt={goodcnt} changecnt={changecnt} modal={modal} setModal={setModal}/>
              <p>2023-07-10</p>

            {
              modal[i] === 0 ? 
              null: <Modal index={i} a={a} bFunc={bFunc}/>
            }
            </div>
            
          )
        
        })

      }
     
      
     <input type="text" onChange={(e)=>{
      setInputValue(e.target.value);
      console.log(inputV);
     

     }}/>
      <button onClick={()=>{
        let input_val = inputV;
        let copy = [...a];
        copy.unshift(input_val);
        bFunc(copy);

        let copy2 = [...modal];
        copy2.unshift(0);
        setModal(copy2);

        let copy3 = [...goodcnt];
        copy3.unshift(0);
        changecnt(copy3)
      }}>
        입력
      </button>
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
        <h4 >{props.a[props.index]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={()=>{
          let idx = props.index;
          let copy = [...props.a];
          copy[idx] = "A99";
          props.bFunc(copy)

        }}>글수정</button>
     </div>
  )
}

function DeleteList(props){
  console.log(props.a);
  console.log("props.index: "+ props.index);
 
 return(
  <button onClick={()=>{
    let acopy = [...props.a]
    acopy.splice(props.index, 1);
    props.bFunc(acopy)
  
    let goodcntcopy = [...props.goodcnt]
    goodcntcopy.splice(props.index, 1);
    props. changecnt(goodcntcopy)
  
    let modalcopy = [...props.modal]
    modalcopy.splice(props.index, 1);
    props.setModal(modalcopy)
  }}>삭제</button>
 )
}
export default App;
