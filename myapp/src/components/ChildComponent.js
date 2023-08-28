import React from 'react'

const ChildComponent = ({onDataFromChild}) => {

    const SendDataToParent=()=>{
        const data="Logged in";
        onDataFromChild(data);
    }
  return (
    <div>
      <div>ChildComponent</div>
      <button onClick={SendDataToParent}/>
    </div>
  )
}

export default ChildComponent
