//import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlockContext } from './BlockContext'

const TopPosts = () => {
    const [data] = useContext(BlockContext)
    const content = []
    const new1 = []
    const [data1, setData1] = useState([])
    let store=useNavigate()

    data.forEach((event) => {



        content.push({
            id: event.id,
            categoryName: event.categoryName,
            title: event.title,
            imageSet: event.imageSet,
            blockContent: event.blockContent,
            publishDate: event.publishDate,
            likes: event.likes
        });


    });
    const [sort, setSort] = useState('albums')
    useEffect(() => {
        const sortArr = type => {
            const types = {
                publishDate: 'publishDate',
                likes: 'likes',
            }
            const sortProperty = types[type];
            const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty])
            setData1(sorted)
        }
        sortArr(sort)
    }, [sort,data]);

    data1.forEach((sortedKey, index) => {
        if (index < 4) {
            new1.push({
                id: sortedKey.id,
                categoryName: sortedKey.categoryName,
                title: sortedKey.title,
                imageSet: sortedKey.imageSet,
                blockContent: sortedKey.blockContent,
                publishDate: sortedKey.publishDate,
                likes: sortedKey.likes

            })
        }


    })


    const topPosts = new1.map(event =>
        <div className="container  " style={{ maxWidth: "700px" }} key={event.id}onClick={() => store(`/detailsPage/${event.id}`)}>
            <div className="row flex no-gutters">
                <div className="col-md-4">
                    <img src={event.imageSet} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        
                        <p className="card-text"><small className="text-muted">Realese Date:<br /> {event.publishDate}<br />{event.likes}</small></p>
                    </div>
                </div>
                <div></div>
                
            </div>
            <hr />
            
        </div>
        
    )

    return (
        <div>
            <select style={{  }} onChange={(e) => setSort(e.target.value)}>
                
                <option value='publishDate'>Letest</option>
                <option value='likes'>Most likes</option>
            </select><br /><br />
            {topPosts}
            

        </div>
    )
}

export default TopPosts
