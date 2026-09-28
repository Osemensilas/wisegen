import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

type EventSession = {
  time: string;
  title: string;
  description: string;
};

type EventData = {
  title: string;
  category: string;
  status: "past" | "upcoming";
  date: string;
  time: string;
  location: string;
  description: string;
  sessions: EventSession[];
  highlights: string[];
  images: string[];
};

const events: Record<string, EventData> = {
  "wisegen-mentoring-meeting": {
    title: "WiseGen Mentoring Meeting",
    category: "Mentoring",
    status: "past",
    date: "May 18, 2026",
    time: "4:00 PM",
    location: "Venue to be announced",
    description:
      "A meaningful time of fellowship, biblical teaching, mentoring, conversations, and practical guidance designed to help young people grow in faith, wisdom, and purpose.",
    sessions: [
      {
        time: "4:00 PM",
        title: "Welcome & Fellowship",
        description:
          "An opportunity for participants to connect, meet new people, and settle into the gathering.",
      },
      {
        time: "4:30 PM",
        title: "Biblical Teaching",
        description:
          "A practical teaching session focused on growing in faith and making wise decisions.",
      },
      {
        time: "5:15 PM",
        title: "Mentoring Conversation",
        description:
          "An interactive conversation where young people can ask questions and discuss issues affecting their everyday lives.",
      },
      {
        time: "6:00 PM",
        title: "Prayer & Reflection",
        description:
          "A time of prayer, personal reflection, and encouragement.",
      },
    ],
    highlights: [
      "Biblical teaching and practical wisdom",
      "Meaningful conversations",
      "Mentoring and guidance",
      "Fellowship and relationship building",
      "Prayer and personal reflection",
    ],
    images: [
      "/events/mentoring-meeting/01.jpg",
      "/events/mentoring-meeting/02.jpg",
      "/events/mentoring-meeting/03.jpg",
      "/events/mentoring-meeting/04.jpg",
      "/events/mentoring-meeting/05.jpg",
      "/events/mentoring-meeting/06.jpg",
    ],
  },

  "discovering-purpose": {
    title: "Discovering Purpose",
    category: "Purpose",
    status: "past",
    date: "April 25, 2026",
    time: "4:00 PM",
    location: "Venue to be announced",
    description:
      "A special WiseGen session focused on helping young people understand identity, purpose, gifts, potential, and the unique assignment God has given each person.",
    sessions: [
      {
        time: "4:00 PM",
        title: "Opening Session",
        description:
          "An introduction to the theme of purpose and why discovering purpose matters.",
      },
      {
        time: "4:30 PM",
        title: "Identity & Purpose",
        description:
          "Exploring identity, personal values, gifts, and how they connect with purpose.",
      },
      {
        time: "5:15 PM",
        title: "Interactive Discussion",
        description:
          "An open conversation where participants could ask questions and share their experiences.",
      },
      {
        time: "6:00 PM",
        title: "Reflection & Prayer",
        description:
          "A time to reflect on the session and pray about the journey ahead.",
      },
    ],
    highlights: [
      "Understanding identity",
      "Exploring personal gifts",
      "Discovering purpose",
      "Interactive discussions",
      "Prayer and reflection",
    ],
    images: [
      "/events/discovering-purpose/01.jpg",
      "/events/discovering-purpose/02.jpg",
      "/events/discovering-purpose/03.jpg",
      "/events/discovering-purpose/04.jpg",
    ],
  },
};

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events[slug];

  if (!event) {
    return (
      <>
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-black text-slate-950">
            Event Not Found
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            We couldn&apos;t find the event you&apos;re looking for.
          </p>

          <Link
            href="/events"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-112 w-md rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-amber-400"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-slate-950">
                {event.category}
              </span>

              <span
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] ${
                  event.status === "past"
                    ? "bg-white/10 text-slate-300"
                    : "bg-green-400/10 text-green-400"
                }`}
              >
                {event.status === "past" ? "Past Event" : "Upcoming Event"}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {event.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {event.description}
            </p>

            {/* EVENT META */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <CalendarDays className="shrink-0 text-amber-400" size={22} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Date
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {event.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <Clock3 className="shrink-0 text-amber-400" size={22} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Time
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {event.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <MapPin className="shrink-0 text-amber-400" size={22} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT OVERVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              About The Event
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A time to learn, connect, and grow.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {event.description}
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              WiseGen gatherings are designed to provide young people with a
              safe and encouraging environment where they can explore their
              faith, ask questions, build healthy relationships, and gain
              practical wisdom for everyday life.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="rounded-4xl bg-slate-950 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
              <CheckCircle2 size={25} />
            </div>

            <h3 className="mt-7 text-2xl font-black text-white">
              Event Highlights
            </h3>

            <div className="mt-7 space-y-4">
              {event.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-400"
                  />

                  <p className="text-sm leading-6 text-slate-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT SCHEDULE */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Event Schedule
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              What happened
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              A look at the sessions and activities that made this gathering
              meaningful.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Timeline line */}
            <div className="absolute left-6.75 top-5 hidden h-[calc(100%-40px)] w-px bg-slate-300 sm:block" />

            <div className="space-y-6">
              {event.sessions.map((session, index) => (
                <div
                  key={`${session.time}-${session.title}`}
                  className="relative grid gap-5 sm:grid-cols-[80px_1fr]"
                >
                  {/* Timeline point */}
                  <div className="relative z-10 hidden sm:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-950">
                      {index + 1}
                    </div>
                  </div>

                  {/* Session */}
                  <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-black text-slate-950">
                        {session.title}
                      </h3>

                      <span className="flex items-center gap-2 text-sm font-bold text-amber-600">
                        <Clock3 size={15} />
                        {session.time}
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-slate-600">
                      {session.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      {event.status === "past" && (
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Camera size={22} />
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                    Event Gallery
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  Moments from the event
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                  Take a look at some of the moments captured during this
                  WiseGen gathering.
                </p>
              </div>

              <p className="text-sm font-semibold text-slate-400">
                {event.images.length} Photos
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {event.images.map((image, index) => (
                <div
                  key={image}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${
                    index === 0
                      ? "col-span-2 row-span-2 aspect-4/3"
                      : "aspect-square"
                  }`}
                >
                  <img src={image} alt={`${event.title} - photo ${index + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />

                  <div className="absolute inset-0 bg-linear-to from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-950 opacity-0 transition group-hover:opacity-100">
                    <Camera size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* UPCOMING EVENT CTA */}
      {event.status === "upcoming" && (
        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-amber-400 px-6 py-14 text-center sm:px-12 sm:py-20">
            <Users className="mx-auto text-slate-950" size={38} />

            <h2 className="mt-6 text-4xl font-black text-slate-950 sm:text-5xl">
              Be part of this gathering.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-800">
              Come learn, connect, grow, and discover your purpose with the
              WiseGen community.
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
      )}
    </>
  );
}