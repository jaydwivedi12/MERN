import React from 'react'
const Footer = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-4 h-[70vh] bg-black text-white content-center p-10'>
            <div> <p>Questions? Call 000-800-919-1694</p> </div>
            <div></div>
            <div></div>
            <div>
                <p className='flex flex-col text-left text-sm m-10 '>
                    <a className='m-2 underline underline-offset-1' href="#">FAQ</a>
                    <a className='m-2 underline underline-offset-1' href="#">Media Center</a>
                    <a className='m-2 underline underline-offset-1' href="#">Ways to Watch</a>
                    <a className='m-2 underline underline-offset-1' href="#">Cookie Preferences</a>
                    <a className='m-2 underline underline-offset-1' href="#">Speed Test</a>
                </p>
            </div>
            <div>
                <p className='flex flex-col text-left text-sm m-10 '>
                    <a className='m-2 underline underline-offset-1' href="#">Help Center</a>
                    <a className='m-2 underline underline-offset-1' href="#">Investor Relation</a>
                    <a className='m-2 underline underline-offset-1' href="#">Terms of Use</a>
                    <a className='m-2 underline underline-offset-1' href="#">Corporate Information</a>
                    <a className='m-2 underline underline-offset-1' href="#">Legal Notices</a>
                </p>
            </div>
            <div>
                <p className='flex flex-col text-left text-sm m-10'>
                    <a className='m-2 underline underline-offset-1' href="#">Account</a>
                    <a className='m-2 underline underline-offset-1' href="#">Jobs</a>
                    <a className='m-2 underline underline-offset-1' href="#">Privacy</a>
                    <a className='m-2 underline underline-offset-1' href="#">Contact Us</a>
                    <a className='m-2 underline underline-offset-1' href="#">Only on Netflix</a>
                </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div> 
             <div className="options ml-10 flex flex-col items-start">
                <select className='w-1/4' name="" id="">
                    <option value=""> English</option>
                    <option value="">हिंदी</option>
                </select>
                <div>  <p className='text-sm text-white '> Movieflix India</p></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
