import React, { useState } from 'react';
import Button from './Button';


const Buttonbox = ({ input, setInput }) => {
  
    const [hasClickedIsEqualTo,setHasClickedIsEqualTo] = useState(false)

    const handleButtonClick = (value) => {
        setInput((prevInput) => hasClickedIsEqualTo ? value : prevInput + value);
         console.log(`${value} clicked!`);
         setHasClickedIsEqualTo(false)
      };
    
      const handleClear = () => {
        setInput('');
      };
    
      const handleEquals = () => {
        try {
            // eslint-disable-next-line
          const result = eval(input);
          setInput(result.toString());
          setHasClickedIsEqualTo(true)
        } catch (error) {
          setInput('Error');
        }
      };

      const handleDelete = () => {
        setInput(input.slice(0,-1))
      }
      const handlePercentage = () =>{
        setInput(input/100)
      }

      const buttonLabels = [
        '/','7','8','9',
        '*','4','5','6',
        '-','1','2','3',
        '+','.'
      ];
      const symbolStyles = {
        backgroundColor: 'red',
      };

      return (
        <div className="button-box">
             <Button label="C" onClick={() => handleClear()} style={{backgroundColor :'white',color:'black'}} />
             <Button label="DEL" onClick={() => handleDelete()} style={{backgroundColor : 'white',color:'black',display:'flex',justifyContent:'center'}}/>
             <Button label="%" onClick={() => handlePercentage()} style={{backgroundColor : 'white',color:'black'}} />
          {buttonLabels.slice(0,-1).map((label) => (
            <Button key={label} label={label} onClick={() => handleButtonClick(label)} style={label.match(/[/*+-]/) ? symbolStyles : null} />
          ))}
           <Button key="0" label="0" onClick={() => handleButtonClick("0")} style={{ gridColumn: 'span 2' }} /> 
           {buttonLabels.slice(-1).map((label) => (
            <Button key={label} label={label} onClick={() => handleButtonClick(label)} />
          ))}
           <Button label="=" onClick={() => handleEquals('')} style={symbolStyles} />
        </div>
      )
};
    

export default Buttonbox;
