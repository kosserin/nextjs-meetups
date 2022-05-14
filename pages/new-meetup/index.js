import NewMeetup from "../../components/NewMeetup/NewMeetup";
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";

const NewMeetupPage = () => {

  const router = useRouter();

  const addMeetupHandler = async newMeetupObject => {
    const response = await fetch('/api/new-meetup', {
      method: "POST",
      body: JSON.stringify(newMeetupObject),
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    const data = await response.json();
    router.push('/');
}

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup | KossMeetups</title>
        <meta name='description' content='Add your meetup to connect all developers!' />
      </Head>
      <NewMeetup onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetupPage