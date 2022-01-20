import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BlockContext } from './BlockContext'
import TopPosts from './TopPosts'

export const Food = () => {
  const content = []
  
  const [data] = React.useContext(BlockContext)
let store=useNavigate()

  data.forEach((event) => {
    if (event.categoryName === "Food") {

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
 

 const foodPage = content.map((event) =>
 <div className="container flex card mb-3" style={{ maxWidth: "700px" }} key={event.id}onClick={() => store(`/detailsPage/${event.id}`)}>
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
  
  
  return (
    <div>
    <div className=' row feature'  ><div style={{
      gridColumn: '1',
      gridRow: '3/1'
    }}>
      {foodPage}
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



export const HomePage =()=>{
  const content=[]
  const content1 =[]
  const content2 =[]
  const [isVisible, setVisibility] = useState(false)
  const toggle = () => setVisibility(!isVisible)
  const [data] = React.useContext(BlockContext)
let store=useNavigate()

  data.forEach((event) => {
    if (event.categoryName === "Food") {

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
    if (index < 3) {

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
    if (index ) {

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



  const homeFullFoodPage = content2.map((event) =>
  <div className="flex card" key={event.id} style={{maxWidth: "300px"}} onClick={() => store(`/detailsPage/${event.id}`)}>
  <div className="card-body">
    <h5 className="card-title">{event.title}</h5>
    
    <p className="card-text">{event.blockContent}</p>
    
    <p  className="card-link"> Post Date: {event.publishDate}<br />{event.likes}</p>
  </div>
</div>
)
  const homeFoodPage = content1.map((event) =>
  <div className="flex card" key={event.id} style={{maxWidth: "300px"}} onClick={() => store(`/detailsPage/${event.id}`)}>
  <div className="card-body">
    <h5 className="card-title">{event.title}</h5>
    
    <p className="card-text">{event.blockContent}</p>
    
    <p  className="card-link"> Post Date: {event.publishDate}<br />{event.likes}</p>
  </div>

</div>
  )
  const but = (isVisible) ? "Load Less":"Load More";
  return(
    <div ><hr /><div className='container flex1'>
      {homeFoodPage}
            {isVisible && homeFullFoodPage}
    </div>
      <hr />
            <button className='button1' onClick={toggle}>{but}</button>
<hr />
    </div>
  )
}


