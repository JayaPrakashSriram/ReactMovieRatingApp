import { useState } from 'react';
import "./Day13App.css";

export function AddColorD5E1() {
  const [color, setColor] = useState('orange');
  const styles = {
    background: color,
    margin: '0px 10px',
    height: '55px',
    borderRadius: '8px',
    fontSize: '2em',
    fontWeight: '750',
    textAlign: 'center'
  };
  const ButStl = {
    height: '55px',
    background: '#747bff',
  };
  const [clrArr, setclrArr] = useState(['pink', 'green', 'yellow']);
  return (
    <div className='entStr'>
      <input style={styles} type='text' onChange={(event) => setColor(event.target.value)} value={color} />
      <button style={ButStl} onClick={() => setclrArr([...clrArr, color])}>Add Color</button>
      {clrArr.map((clr, index) => (<ColorBox color={clr} key={index}/>))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    height: '55px',
    width: '525px',
    margin: '10px 25px',
    borderRadius: '8px',
    background: color
  };
  return (
    <div style={styles}> </div>
  );
}