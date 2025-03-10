import React from 'react'
import './cards.css'
import Card from './Card';


const CardView = ({ data, title }) => {
    return (
        <div className='padding-view '>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}


export default CardView;