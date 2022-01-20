import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BlockContext } from './BlockContext'
import { HomePage } from './Food'
import TopPosts from './TopPosts'
const Fitness = () => {
    const content = []
  const [data] = React.useContext(BlockContext)
let store=useNavigate()

  data.forEach((event) => {
    if (event.categoryName === "Fitness") {
  
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

  const fitnessPage = content.map((event) =>
  <div className="container flex card mb-3" style={{ maxWidth: "700px" }} key={event.id}onClick={() => store(`/detailsPage/${event.id}`)}>
 <div className="row no-gutters">
   <div className="col-md-4">
     <video src={event.imageSet} className="card-img" alt="..." controls loop autoPlay/>
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
    return (
      <div>
      <div className=' row feature'  ><div style={{
        gridColumn: '1',
        gridRow: '3/1'
      }}>
        {fitnessPage}<br /><br />
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

export default Fitness
