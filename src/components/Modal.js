import React from 'react'

const Modal = ({selectedImage}) =>{
    return (
    <div className='modal'>
        <img src ={selectedImage} alt='larged img for modal'/>
    </div>
    )
}
export default Modal