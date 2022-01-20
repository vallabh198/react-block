import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlockContext } from './BlockContext'
import { HomePage } from './Food'





export function BlogPost() {
    const [data] = useContext(BlockContext)
    let { id } = useParams();

    const show = data.filter((event) => event.id === Number(id)).map((event) => {
        if (event.categoryName === "Fitness") {
            return (<div key={event.id} className='container card mb-3' style={{ maxWidth: '800px' }}>
                <br /> <h1  >{event.id}.{event.title}</h1> <br /><hr />
                <p className="card-text"><h6>Discreption about Post:</h6>{event.blockContent}</p>
                <div className="col-md-4">
                    <video src={event.imageSet} className="card-img align-items-center" alt="..." controls loop autoPlay />
                </div>
                <p className="d-flex justify-content-around card-text">
                        <small className="text-muted">Realese Date:<br /> {event.publishDate}<br /></small><br />
                        <small className='text-muted'>{event.likes}</small>
                    </p><br />
            </div>)
        } else {
            return (

                <div key={event.id} className='container card mb-3' style={{ maxWidth: '800px' }}>
                    <br /> <h1  >{event.title}</h1> <br /><hr />
                    <div className="card-text"><h6>Discreption about Post:</h6>{event.blockContent}</div>
                    <img src={event.imageSet} alt='' /><br />
                    <p className="d-flex justify-content-around card-text">
                        <small className="text-muted">Realese Date:<br /> {event.publishDate}<br /></small><br />
                        <small className='text-muted'>{event.likes}</small>
                    </p><br />
                </div>


            )
        }



    })

    return <div className='container' >

        {show}
        
        <HomePage />
    </div>;
}