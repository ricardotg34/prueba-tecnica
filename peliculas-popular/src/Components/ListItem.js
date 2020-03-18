import React, { useRef } from 'react'
import './ListItem.css'
import star from '../star.png'

const ListItem = (props) => {
  const item = useRef()

  const handleClick = () => {
    item.current.focus()
    props.onClick(props.index)
  }

  return (
    <div onClick={handleClick} ref={item} className="card text-white bg-dark mb-3 item-movie" style={{ maxHeight: 137 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} className="card-img" alt="Poster" style={{ width: '100%' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-truncate">{props.title}</h5>
            <p className="card-text overview">{props.overview}</p>
            <p className="card-text row text-muted">
              <span className="col-md-6 text-left">
                <img src={star} alt="star" style={{ maxWidth: 15 }} />
                {` ${props.average}`}
              </span>
              <span className="col-md-6 text-sm-right">{props.date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem
