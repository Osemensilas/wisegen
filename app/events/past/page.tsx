import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  Clock3,
  MapPin,
} from "lucide-react";

const pastEvents = [
  {
    slug: "wisegen-mentoring-meeting",
    title: "WiseGen Mentoring Meeting",
    category: "Mentoring",
    date: "May 18, 2026",
    time: "4:00 PM",
    location: "Venue to be announced",
    description:
      "A meaningful time of fellowship, biblical teaching, mentoring, conversations, and practical guidance for young people.",
    image: "/events/mentoring-meeting/01.jpg",
    photos: 6,
  },
  {
    slug: "discovering-purpose",
    title: "Discovering Purpose",
    category: "Purpose",
    date: "April 25, 2026",
    time: "4:00 PM",
    location: "Venue to be announced",
    description:
      "A special session focused on helping young people understand identity, purpose, gifts, potential, and their God-given assignment.",
    image: "/events/discovering-purpose/01.jpg",
    photos: 4,
  },
  {
    slug: "faith-and-life-session",
    title: "Faith & Life Session",
    category: "Faith & Growth",
    date: "March 21, 2026",
    time: "4:00 PM",
    location: "Venue to be announced",
    description:
      "An engaging gathering where young people explored faith, life decisions, relationships, and what it means to live wisely.",
    image: "/events/faith-and-life-session/01.jpg",
    photos: 8,
  },
];

const categories = [
  "All Events",
  "Mentoring",
  "Faith & Growth",
  "Purpose",
  "Community",
];

export default function PastEventsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-112 w-112 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-amber-400"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              WiseGen Events
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Past Events
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Take a look back at the gatherings, conversations, teachings,
              friendships, and memorable moments that have shaped the WiseGen
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-10">
          <div className="flex min-w-max gap-2 py-5">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  index === 0
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Event Archive
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Moments from our journey
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              Explore previous WiseGen gatherings and discover what happened
              during each event.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <article
                key={event.slug}
                className="group overflow-hidden rounded-4xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to from-black/70 via-black/10 to-transparent" />

                  {/* CATEGORY */}
                  <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-slate-950">
                    {event.category}
                  </span>

                  {/* PHOTO COUNT */}
                  <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <Camera size={14} />
                    {event.photos} Photos
                  </span>

                  {/* DATE */}
                  <div className="absolute bottom-5 left-5">
                    <p className="text-sm font-bold text-amber-300">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    {event.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {event.description}
                  </p>

                  {/* META */}
                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Clock3
                        size={16}
                        className="shrink-0 text-amber-500"
                      />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <MapPin
                        size={16}
                        className="shrink-0 text-amber-500"
                      />
                      {event.location}
                    </div>
                  </div>

                  {/* LINK */}
                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
                  >
                    View Event
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              More Than Events
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Every gathering creates a memory.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              From meaningful conversations to moments of prayer, teaching,
              laughter, and friendship, every WiseGen gathering is an
              opportunity for young people to learn and grow together.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Explore our past events and see some of the moments that have
              been captured along the way.
            </p>

            <Link
              href="/events"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
            >
              See Upcoming Events
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* MEMORY CARD */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-3">
              <img
                src="/events/mentoring-meeting/01.jpg"
                alt="WiseGen event moment"
                className="h-48 w-full rounded-2xl object-cover sm:h-60"
              />

              <img
                src="/events/mentoring-meeting/02.jpg"
                alt="WiseGen event moment"
                className="mt-8 h-48 w-full rounded-2xl object-cover sm:h-60"
              />

              <img
                src="/events/discovering-purpose/01.jpg"
                alt="WiseGen event moment"
                className="h-40 w-full rounded-2xl object-cover sm:h-48"
              />

              <img
                src="/events/discovering-purpose/02.jpg"
                alt="WiseGen event moment"
                className="h-40 w-full rounded-2xl object-cover sm:h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-amber-400 px-6 py-14 text-center sm:px-12 sm:py-20">
          <CalendarDays
            className="mx-auto text-slate-950"
            size={38}
          />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Be part of the next chapter.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-800">
            The memories continue. Join us at an upcoming WiseGen gathering
            and become part of a community growing in faith, wisdom, and
            purpose.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            View Upcoming Events
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}