import React from 'react'

const Title = (props) => {
  return (
    <div className='flex gap-[28px] items-start pb-[30px]'>
        
            <img src={props.Imgteg} alt="" />
        
        <div>
            <h1 className='text-[17px] text-[#212B31] dark:text-white'>{props.teg1}</h1>
            <p className='text-[16px] text-[#72787D]'>{props.teg2}</p>
        </div>
    </div>
  )
}

export default Title