import React, { useState } from 'react'

const FormData = () => {
    const [Data, setData] = useState({
        "Name": "",
        "Email": "",
        "Mobile": "",
    });
    const HandleChange = (events) => {
        const { name, value } = events.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }
    const HandleSubmit = (events) => {
        events.preventDefault();
        console.log("Submitted Data:", Data);
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="Name" id="" onChange={HandleChange} value={Data.Name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name='Email' onChange={HandleChange} value={Data.Email} />
                </div>
                <div>
                    <label htmlFor="">Mobile</label>
                    <input type="text" name='Mobile' onChange={HandleChange} value={Data.Mobile} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormData
