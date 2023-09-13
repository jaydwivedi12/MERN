import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import '../styles/front.css'
const Front = () => {
    return (
        <div className='top'>
            <div className='front-section'>
                <div className="nav">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="options">
                        <select className="slt" name="" id="">
                            <option value=""> English</option>
                            <option value="">हिंदी</option>
                        </select>
                        <button className='btn'> <Link to='/login'>Sign up</Link></button>
                    </div>
                </div>
                <div className="form">
                    <span className='heading'>The biggest Indian hits.The best Indian stories.<br />All streaming here.</span>
                    <p className='par'>Watch anywhere. Cancel anytime.</p>
                    <p className='par'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="started">
                        <input className="ip" type="text" name="" id="" placeholder='Email Address' />
                        <button className='btn'><Link to='/login'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front
