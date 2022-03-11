import MeetupList from '../components/Meetups/MeetupList';
import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
    // const DUMMY_MEETUPS = [
    //     {
    //         id: 'm1',
    //         image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
    //         title: 'First meeting',
    //         address: 'Petra Gacica 7, Zarkovo',
    //         description: 'Lorem ipsum amet tis.'
    //     },
    //     {
    //         id: 'm2',
    //         image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
    //         title: 'Second meeting',
    //         address: 'Radovana Rankovica 32b, Nis',
    //         description: 'Lorem ipsum amet tis.'
    //     },
    //     {
    //         id: 'm3',
    //         image: 'https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Njk5NzM5MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    //         title: 'Third meeting',
    //         address: 'Milosa Savica bb, Pozarevac',
    //         description: 'Lorem ipsum amet tis.'
    //     },
    //     {
    //         id: 'm4',
    //         image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjkzNjg4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    //         title: 'Fourth meeting',
    //         address: 'Milovana Bacica, Kursumlija',
    //         description: 'Lorem ipsum amet tis.'
    //     },
    // ]
    
    return (
        <Fragment>
            <Head>
                <title>React Meetups | KossMeetup</title>
                <meta name='description' content='Browse a huge list of highly active React meetups!' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
        )
}

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://kosserin:FAdPMdxgYsLU5OJu@cluster0.kmorm.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }

export default HomePage;