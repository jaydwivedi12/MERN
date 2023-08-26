import React, { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Tooltip from '@mui/material/Tooltip';

const CenterBox = () => {
  const [Val, setVal] = useState(1);

  const AddBtn = () => {
    setVal(Val + 1)
  }
  const SubBtn = () => {
    if (Val > 0) {
      setVal(Val - 1)
    }
    else {
      alert("Value cannot be less than 0")
    }
  }

  return (
    <div className='center-box'>
      {Val}
      <div className="btn">
        <Tooltip title="Add" arrow>
          <Button color='success' onClick={AddBtn} variant="contained">Add</Button>
        </Tooltip>
        <Tooltip title="Delete" arrow>
        <Button color="error" onClick={SubBtn} variant="outlined">  <DeleteRoundedIcon/> </Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default CenterBox
