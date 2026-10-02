'use client';

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

type EventStatus = "upcoming" | "past";

export default function EventsPage() {

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

  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 pt-20">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-112 w-md rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              <CalendarDays size={14} />
              WiseGen Events
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Learn. Connect.{" "}
              <span className="text-amber-400">Grow.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Discover upcoming mentoring meetings, workshops, gatherings, and
              special events designed to help teenagers and young adults grow
              in faith, wisdom, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2.5rem] bg-amber-400">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* IMAGE / VISUAL */}
              <div className="relative min-h-80 bg-slate-950 p-8 sm:p-12">
                <div className="absolute inset-0 bg-linear-to from-slate-950 via-slate-900 to-amber-950" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950">
                      Featured Event
                    </span>

                    <Sparkles className="text-amber-400" size={25} />
                  </div>

                  <div className="mt-16">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                      Coming Up
                    </p>

                    <h2 className="mt-3 max-w-md text-4xl font-black text-white sm:text-5xl">
                      Growing in Faith & Purpose
                    </h2>
                  </div>
                </div>
              </div>

              {/* EVENT INFO */}
              <div className="p-8 sm:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-900">
                  Featured
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                  WiseGen Youth Gathering
                </h2>

                <p className="mt-5 leading-8 text-slate-800">
                  Join other young people for a meaningful time of fellowship,
                  biblical teaching, conversations, and encouragement as we
                  learn to know God, live wisely, and discover purpose.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={19} />
                    <span className="font-semibold">
                      Date to be announced
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock3 size={19} />
                    <span className="font-semibold">
                      Time to be announced
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={19} />
                    <span className="font-semibold">
                      Venue to be announced
                    </span>
                  </div>
                </div>

                <Link
                  href="/events/wisegen-youth-gathering"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  View Event
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Upcoming Events
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              What&apos;s happening at WiseGen?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Stay connected with our upcoming mentoring meetings, sessions,
              and special gatherings.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {upcomingEvents.map((event) => (
              <Link
                key={event.title}
                href={`/events/upcoming/${event.slug}`}
                className="group block overflow-hidden rounded-4xl bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-[150px_1fr_auto] md:items-center">
                  {/* DATE */}
                  <div className="flex h-full min-h-37.5 flex-col items-center justify-center bg-slate-950 p-6 text-white">
                    <span className="text-sm font-bold tracking-widest text-amber-400">
                      {event.month}
                    </span>

                    <span className="mt-1 text-5xl font-black leading-none">
                      {event.date}
                    </span>

                    <span className="mt-2 text-xs font-semibold text-slate-400">
                      {event.day}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-amber-600">
                      {event.category}
                    </span>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      {event.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:gap-6">
                      <span className="flex items-center gap-2">
                        <Clock3 size={16} />
                        {event.time}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* ARROW */}
                  <div className="px-7 pb-7 md:px-8 md:pb-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT EXPERIENCE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              More Than an Event
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A place to learn, ask questions, and grow.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              WiseGen events are designed to create meaningful opportunities
              for teenagers and young adults to explore both spiritual and
              practical issues that affect their everyday lives.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              From biblical teaching and prayer to mentoring, practical life
              education, and meaningful conversations, every gathering is an
              opportunity to grow together.
            </p>

            <Link
              href="/join"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
            >
              Join the Community
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* VISUAL */}
          <div className="relative">
            <div className="rounded-[2.5rem] bg-amber-400 p-6 sm:p-8">
              <div className="rounded-4xl bg-slate-950 p-8 sm:p-12">
                <Sparkles className="text-amber-400" size={30} />

                <h3 className="mt-8 text-3xl font-black text-white sm:text-4xl">
                  Know God.
                  <br />
                  Gain Wisdom.
                  <br />
                  Discover Purpose.
                </h3>

                <div className="mt-8 h-px bg-white/10" />

                <p className="mt-7 leading-7 text-slate-400">
                  Every gathering is an opportunity to learn, connect, and
                  become better equipped for the journey ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Memories & Stories
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Moments That Matter
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            As the WiseGen community grows, this space can become a collection
            of memories, photos, stories, and highlights from past gatherings.
          </p>

          <div className="mt-10">
            <Link
              href="/events/past"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:border-amber-400 hover:text-amber-400"
            >
              Explore Past Events
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-amber-400 px-6 py-14 text-center sm:px-12 sm:py-20">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Come learn. Come grow. Come discover your purpose.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-800">
            There is a place for you at WiseGen. Join a community of young
            people growing in faith, wisdom, and purpose.
          </p>

          <Link
            href="/join"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            Join WiseGen
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}