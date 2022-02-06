import React from 'react';
import {getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list';
export default function HomePage() {
    const featurdEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={featurdEvents}/>
        </div>
    );
}
