import React from "react";
import Data from '../data.json'

const Card = () => {
    return (
        <div>
            {Data.map((item, index) => (
                <div key={index} className='card-view'>

                    <p>Title:
                        <span className='bold-text'>
                            {item.title}
                        </span>
                    </p>

                    <p>Description:
                        <span className='bold-text'>
                            {item.description}
                        </span>
                    </p>

                    <p>image:
                        <img
                            src={item.image}
                            alt="Image"
                            height={100}
                            width={100}
                        />
                    </p>

                    <p>Category:
                        <span className='bold-text'>
                            {item.category}
                        </span>
                    </p>

                    <p>Rating:
                        <span className='bold-text'>
                            {item.rating}
                        </span>
                    </p>

                </div>
            ))}
        </div>
    )
}

export default Card;