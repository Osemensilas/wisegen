'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import {ArrowRight} from "lucide-react";

type EventStatus = "upcoming" | "past";

const Events = () => {

    interface Event {
        id: number;
        event_id: number;
        title: string;
        slug: string;
        category: string;
        date: string;
        time: string;
        location: string;
        description: string;
        status: EventStatus;
        attendees: number;
        photos: number;
        image: string;
        month: string;
        day: string;
    }

    const [events, setEvents] = useState<Event[]>([]);
    
    useEffect(() => {
    async function fetchEvents() {
        try{
        const url = "http://localhost:8000/api/public-events";
        const response = await axios.get(url, {withCredentials: true});

        console.log(response.data);

        if (response.data.status === "success"){
            setEvents(response.data.events);
        }
        }catch (error) {
        if (axios.isAxiosError(error)){
            console.log(error.response?.data);
        }
        }
    }
    fetchEvents();
    },[])

    const truncateWords = (text: string, wordLimit: number) => {
    const words = text.trim().split(/\s+/);

    if (words.length <= wordLimit) {
        return text;
    }

    return words.slice(0, wordLimit).join(" ") + "...";
    };

    return ( 
        <>
        <section className="bg-[#f5f1e8] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                    Upcoming
                    </p>
    
                    <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                    What&apos;s Happening at WiseGen?
                    </h2>
    
                    <p className="mt-5 leading-7 text-slate-600">
                    Join us for mentoring meetings, workshops, gatherings, and
                    special events designed to help you grow in faith, wisdom, and
                    purpose.
                    </p>
                </div>
    
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 font-bold text-slate-950"
                >
                    View All Events
                    <ArrowRight size={17} />
                </Link>
                </div>
    
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {events.map((event) => (
                    <Link
                    href={`/events/${event.slug}`}
                    key={event.title}
                    className="group overflow-hidden rounded-4xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                    <div className="flex h-52 items-end bg-slate-900 p-6">
                        <div className="flex w-full items-end justify-between">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-amber-400">
                            {event.category}
                            </p>
    
                            <p className="mt-2 text-3xl font-black text-white">
                            {event.title}
                            </p>
                        </div>
    
                        <div className="rounded-2xl bg-white p-3 text-center">
                            <p className="text-xl font-black leading-none">
                            {event.date}
                            </p>
                            <p className="mt-1 text-[10px] font-bold text-slate-500">
                            {event.month}
                            </p>
                        </div>
                        </div>
                    </div>
    
                    <div className="p-6">
                        <p className="leading-7 text-slate-600">
                        {truncateWords(event.description, 30)}
                        </p>
    
                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-950">
                        View Event
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            </section>
        </>
     );
}
 
export default Events;