import React from 'react'

const Stroyka = (props) => {
  return (
    <div className='w-auto md:w-[30%]'>
        <div>
            <img className='m-auto' src={props.img} alt="stroyka" />
        </div>
        <div className='text-center'>
            <h1 className='text-[18px] text-[#212B31] dark:text-white'>{props.text1}</h1>
            <p className='text-[16px] text-[#72787D]'>{props.text2}</p>
        </div>
    </div>
  )
}

export default Stroyka