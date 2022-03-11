import { Router, useRouter } from 'next/router';
import styles from './MeetupItem.module.css';

const MeetupItem = (props) => {

  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/' + props.id)
  }

  return (
    <li className={styles['meetup-item']}>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <button onClick={showDetailsHandler}>Read more</button>
    </li>
  )
}

export default MeetupItem