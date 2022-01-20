
import React, { useContext} from 'react'
import { BlockContext } from './BlockContext'
import  { BollywoodHome } from './Bollywood'

import { HomePage } from './Food'
import TopPosts from './TopPosts'
import {  useNavigate } from 'react-router-dom'



const Home = () => {
    const content = []
    
    let store=useNavigate()

    const [data] = useContext(BlockContext)
    data.forEach((event,index) => {
        if (index >= data.length - 3) {

            content.push({
                id: event.id,
                categoryName: event.categoryName,
                title: event.title,
                imageSet: event.imageSet,
                blockContent: event.blockContent,
                publishDate: event.publishDate,
                likes: event.likes
            });
        }

    });

    const latestBlock = content.map((event) =>
        <div className="container card mb-3" style={{ maxWidth: "700px" }} key={event.id} onClick={() => store(`/detailsPage/${event.id}`)}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={event.imageSet} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.blockContent}</p>
                        <p className="card-text"><small className="text-muted">Realese Date:<br /> {event.publishDate}<br />{event.likes}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )



    const featuredBlock = data.map((block) => {
        // console.log(block.categoryName);
        if (block.id === 21) {


            return (<div key={block.id} className='row0'>
                <div className="card flex bg-dark text-white" onClick={() => store(`/detailsPage/${block.id}`)}>
                    <img src={block.imageSet} className="card-img" alt="..." style={{ height: '27.5rem' }} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{block.title}</h5>
                        <p className="card-text">{block.blockContent}</p>
                        <p className="card-text">{block.publishDate}</p>
                    </div>
                </div>
            </div>

            )
        }return null;
    })
    const featuredBlock1 = data.map((block) => {
        // console.log(block.categoryName);
        if (block.id === 30) {


            return (<div key={block.id} className='row1'>
                <div className="card flex  bg-dark text-white" onClick={() => store(`/detailsPage/${block.id}`)}>
                    <img src={block.imageSet} className="card-img" alt="..." style={{ height: '13rem' }} />
                    <div className="card-img-overlay">
                        <h5 className="card-title" >{block.title}</h5>
                        <p className="card-text">{block.blockContent}</p>
                        <p className="card-text">{block.publishDate}</p>
                    </div>
                </div>
            </div>

            )
        }return null;
    })
    const featuredBlock2 = data.map((block) => {
        // console.log(block.categoryName);
        if (block.id === 41) {


            return (<div key={block.id} className='row2' onClick={() => store(`/detailsPage/${block.id}`)}>
                <div className="card flex  bg-dark text-white">
                    <img src={block.imageSet} className="card-img" alt="..." style={{ height: '13rem' }} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{block.title}</h5>
                        <p className="card-text">{block.blockContent}</p>
                        <p className="card-text">{block.publishDate}</p>
                    </div>
                </div>
            </div>

            )
        }return null;
    })







    return (
        <div className='container'>
            <div className=' row3'>
                <div className='row0'>
                    {featuredBlock}
                </div>

                <div className='row1'>
                    {featuredBlock1}
                </div>
                <div className='row2'>
                    {featuredBlock2}
                </div>
            </div><br />
            <div>
                <h2>The latest</h2><div className='line' /><br /><div className=' flex1'>
                    {latestBlock}
                </div>

            </div>
            <div className=' row feature'>
                <div style={{
                    gridColumn: '1',
                    gridRow: '3/1'
                }}>
                    <h2>Latest Articles</h2><div className='line' /><br />
                    <BollywoodHome />
                </div>
                
                <div  style={{
                    gridColumn: '2',
                    gridRow: '1'
                }}><br /><br /><br /><div className='line' />
                <div className='Adv'></div></div>
                <div style={{
                    gridColumn: '2',
                    gridRow: '2'
                }}><h2>The Top</h2><div className='line' /><br /><TopPosts /></div>


            </div>
           






            <HomePage />





        </div>
    )
}

export default Home
