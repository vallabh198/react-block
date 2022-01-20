//import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlockContext } from './BlockContext'
import { HomePage } from './Food'
import TopPosts from './TopPosts'


export const Bollywood = () => {
  const content = []
  const content1 = [];
  const content2 = []
  const [isVisible, setVisibility] = useState(false)
  const toggle = () => setVisibility(!isVisible)
  const [data] = useContext(BlockContext)
  let store = useNavigate();

  data.forEach((event) => {
    if (event.categoryName === "Bollywood") {

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
  content.forEach((event, index) => {
    if (index < 5) {

      content1.push({
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

  content.forEach((event, index) => {
    if (index > 5) {

      content2.push({
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



  const bollywoodPage = content1.map((event) => <div>
    <div className="container flex card mb-3" style={{ maxWidth: "700px" }} key={event.id} onClick={() =>store(`/detailsPage/${event.id}`)}>
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
    <hr />
  </div>

  )
  const fullBollywoodPage = content2.map((event) => <div>
    <div className="container flex card mb-3" style={{ maxWidth: "700px" }} key={event.id} onClick={() => store(`/detailsPage/${event.id}`)}>
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
    <hr />
  </div>
  )

  const but = (isVisible) ? "Load Less" : "Load More"

  return (<div>
    <div className=' row feature'  ><div style={{
      gridColumn: '1',
      gridRow: '3/1'
    }}>
      {bollywoodPage}
      {isVisible && fullBollywoodPage}
      <button className='button1' onClick={toggle}>{but}</button><br /><br />
    </div>


      <div style={{
        gridColumn: '2',
        gridRow: '1'
      }}><h2>The Top</h2><div className='line' /><br /><TopPosts /></div>
      <div style={{
        gridColumn: '2',
        gridRow: '2'
      }}><br /><br /><br />
        <div className='Adv'></div></div>
        
        </div>
        <div>
        <HomePage />
        </div>
    </div>
  )
}



export const BollywoodHome=()=>{
  const content = []
  const content1 = [];
  const content2 = []
  const [isVisible, setVisibility] = useState(false)
  const toggle = () => setVisibility(!isVisible)
  const [data] = useContext(BlockContext)
  let store = useNavigate();

  data.forEach((event) => {
    if (event.categoryName === "Bollywood") {

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
  content.forEach((event, index) => {
    if (index < 5) {

      content1.push({
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

  content.forEach((event, index) => {
    if (index > 5) {

      content2.push({
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



  const bollywoodPage = content1.map((event) => <div key={event.id}>
    <div className="container flex card mb-3" style={{ maxWidth: "700px" }}  onClick={() => store(`/detailsPage/${event.id}`)}>
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
    <hr />
  </div>

  )
  const fullBollywoodPage = content2.map((event) => <div key={event.id} >
    <div className="container flex card mb-3" style={{ maxWidth: "700px" }} onClick={() => store(`/detailsPage/${event.id}`)}>
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
    <hr />
  </div>
  )

  const but = (isVisible) ? "Load Less" : "Load More"

  return (<div>
    {bollywoodPage}
      {isVisible && fullBollywoodPage}
      <button className='button1' onClick={toggle}>{but}</button><br /><br />
  </div>)

}
