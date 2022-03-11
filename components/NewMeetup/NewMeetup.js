import styles from './NewMeetup.module.css';
import { useRef, useState } from 'react';

const NewMeetup = (props) => {
  const [error, setError] = useState(false);

  const titleValueRef = useRef();
  const imageUrlValueRef = useRef();
  const addressValueRef = useRef();
  const descriptionValueRef = useRef();

  const formSubmitHandler = e => {
    e.preventDefault();

    const enteredTitle = titleValueRef.current.value;
    const enteredImageUrl = imageUrlValueRef.current.value;
    const enteredAddress = addressValueRef.current.value;
    const enteredDescription = descriptionValueRef.current.value;

    console.log(enteredTitle.trim().length)

    if(enteredTitle.trim().length === 0 || enteredImageUrl.trim().length === 0 || enteredAddress.trim().length === 0 || enteredDescription.trim().length === 0) {
      setError(true);
    } else {
      props.onAddMeetup({
        title: enteredTitle,
        image: enteredImageUrl,
        address: enteredAddress,
        description: enteredDescription
      })
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles['new-meetup__form']}>
      <div className={styles['form-group']}>
        <label htmlFor='titleInput'>Title of Meetup</label>
        <input id="titleInput" ref={titleValueRef} type="text" />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='imageUrlInput'>Image URL of Meetup</label>
        <input id="imageUrlInput" ref={imageUrlValueRef} type="text" />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='addressInput'>Address of Meetup</label>
        <input id="addressInput" ref={addressValueRef} type="text" />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='descriptionInput'>Description of Meetup</label>
        <textarea id="descriptionInput" ref={descriptionValueRef} rows="5" />
      </div>
      <span>{error && "You need to enter all fields with proper values."}</span>
      <button type="submit">Add Meetup</button>
    </form>
  )
}

export default NewMeetup