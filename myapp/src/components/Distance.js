import React from 'react'

const Distance = () => {
    return (
        <div>
            <div className="first">
                <select name="conv" id="conv-select">
                    <option value="">--Please choose an option--</option>
                    <option value="km">KM</option>
                    <option value="mtr">Meter</option>
                    <option value="cm">CentiMeter</option>
                    <option value="mm">Milimeter</option>
                </select>
                <input type="text" />
            </div>
            <div className="second">
            <select name="conv" id="conv-select">
                    <option value="">--Please choose an option--</option>
                    <option value="km">KM</option>
                    <option value="mtr">Meter</option>
                    <option value="cm">CentiMeter</option>
                    <option value="mm">Milimeter</option>
                </select>
                <input type="text" />
            </div>
        </div>
    )
}

export default Distance
