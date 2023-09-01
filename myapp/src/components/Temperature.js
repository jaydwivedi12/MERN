import React, { useState } from 'react'

const Temperature = () => {
    const [Celsius, setCelsius] = useState(0);
    const [Faren, setFaren] = useState(32);

    const HandleCelsius=(e)=>{
    const value=e.target.value;
       setCelsius(value)
       setFaren(ctof(value))
    };

    const HandleFaren=(e)=>{
        const value=e.target.value;
        setFaren(value)
        setCelsius(ftoc(value))
    };

    const ctof=(c)=>{
   return (c*9)/5+32;
    }

    const ftoc=(f)=>{
        return ((f-32)*5)/9;
    }
    return (
        <div>
            <div>
                <label> Celsius</label>
                <input type="text" onChange={HandleCelsius} value={Celsius}/>
            </div>
            <div>
                <label>Farenheight</label>
                <input type="text" onChange={HandleFaren} value={Faren} />
            </div>
        </div>
    )
}


export default Temperature
