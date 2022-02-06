import React from 'react';
import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { useRouter } from 'next/router'
export default function AllEvents() {
    const router = useRouter();
    const allEvents = getAllEvents();
    const onSearchEvent = (selectedYear, selectedMonth)=>{
        router.push(`/events/${selectedYear}/${selectedMonth}`)
    }
    return (
        <>
        <EventsSearch  onSearch={onSearchEvent}/>
        <EventList items={allEvents}/>
        </>
    );
}
