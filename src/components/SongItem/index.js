import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {details, onRemove} = props
  const {id, imageUrl, name, genre, duration} = details
  const onClicking= () => {
    onRemove(id)
  }

  return (
    <li>
      <div className="left-part">
        <img src={imageUrl} className="image" alt="track" />
        <div className="text-cont">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>

      <div className="right-part">
        <p className="time">{duration}</p>
        <AiOutlineDelete className="icon" onClick={onClicking} />
      </div>
    </li>
  )
}
export default SongItem
