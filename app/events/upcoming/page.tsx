import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
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

type Speaker = {
  name: string;
  role: string;
};

type EventData = {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  theme: string;
  description: string;
  audience: string;
  sessions: EventSession[];
  speakers: Speaker[];
  expectations: string[];
};

const events: Record<string, EventData> = {
  "wisegen-youth-conference": {
    title: "WiseGen Youth Conference",
    category: "Youth Conference",
    date: "October 24, 2026",
    time: "10:00 AM",
    location: "Venue to be announced",
    theme: "Know God. Gain Wisdom. Discover Purpose.",
    description:
      "The WiseGen Youth Conference is a special gathering designed to bring teenagers and young adults together for biblical teaching, meaningful conversations, mentoring, fellowship, prayer, and practical guidance for life.",
    audience:
      "Teenagers and young adults",
    sessions: [
      {
        time: "10:00 AM",
        title: "Registration & Welcome",
        description:
          "Participants arrive, register, connect with others, and prepare for the day's activities.",
      },
      {
        time: "11:00 AM",
        title: "Opening Session",
        description:
          "An engaging opening session introducing the theme of the conference and setting the direction for the day.",
      },
      {
        time: "12:00 PM",
        title: "Main Teaching Session",
        description:
          "A practical and Bible-based teaching session addressing faith, identity, wisdom, and purpose.",
      },
      {
        time: "1:30 PM",
        title: "Interactive Conversation",
        description:
          "An opportunity for young people to ask questions and engage in meaningful conversations about real-life issues.",
      },
      {
        time: "3:00 PM",
        title: "Mentoring & Prayer",
        description:
          "A time of mentoring, personal reflection, prayer, and encouragement.",
      },
    ],
    speakers: [
      {
        name: "Speaker to be announced",
        role: "Guest Speaker",
      },
      {
        name: "Mentor to be announced",
        role: "WiseGen Mentor",
      },
    ],
    expectations: [
      "Biblical teaching and practical wisdom",
      "Meaningful conversations about real-life issues",
      "Mentoring and personal guidance",
      "Opportunities to build positive friendships",
      "Prayer and spiritual growth",
      "Encouragement to discover and pursue purpose",
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            WiseGen Events
          </p>

          <h1 className="mt-4 text-4xl font-black text-slate-950">
            Event Not Found
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            We couldn&apos;t find the event you&apos;re looking for.
          </p>

          <Link
            href="/events"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
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
        <div className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-112 w-md rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-amber-400"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-slate-950">
                {event.category}
              </span>

              <span className="rounded-full bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-green-400">
                Upcoming Event
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {event.title}
            </h1>

            <p className="mt-6 text-lg font-bold text-amber-400 sm:text-xl">
              {event.theme}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {event.description}
            </p>

            {/* EVENT INFORMATION */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <CalendarDays
                  size={22}
                  className="text-amber-400"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Date
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  {event.date}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <Clock3
                  size={22}
                  className="text-amber-400"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Time
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  {event.time}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <MapPin
                  size={22}
                  className="text-amber-400"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  {event.location}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <Users
                  size={22}
                  className="text-amber-400"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Who Can Attend?
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  {event.audience}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT EVENT */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              About The Event
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A gathering for faith, wisdom, and purpose.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {event.description}
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              WiseGen believes that the teenage and young-adult years are
              important seasons when values are formed, identity is developed,
              and major decisions about faith, relationships, education,
              career, and the future begin to take shape.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              This event provides an environment where young people can learn,
              ask questions, build healthy relationships, receive guidance,
              and grow together.
            </p>
          </div>

          {/* EVENT HIGHLIGHTS */}
          <div className="rounded-4xl bg-slate-950 p-8 sm:p-10">
            <h3 className="text-2xl font-black text-white">
              What to Expect
            </h3>

            <div className="mt-7 space-y-4">
              {event.expectations.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-400"
                  />

                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Event Schedule
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              What will happen
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Here&apos;s a look at the planned sessions for this gathering.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-6.75 top-5 hidden h-[calc(100%-40px)] w-px bg-slate-300 sm:block" />

            <div className="space-y-6">
              {event.sessions.map((session, index) => (
                <div
                  key={`${session.time}-${session.title}`}
                  className="relative grid gap-5 sm:grid-cols-[80px_1fr]"
                >
                  <div className="relative z-10 hidden sm:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-sm font-black text-slate-950">
                      {index + 1}
                    </div>
                  </div>

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

      {/* SPEAKERS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Meet The Team
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Speakers & Mentors
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Meet the people who will be sharing, teaching, and guiding
              participants during the event.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {event.speakers.map((speaker) => (
              <div
                key={`${speaker.name}-${speaker.role}`}
                className="rounded-4xl border border-slate-200 bg-white p-8 text-center"
              >
                {/* Speaker image can be added later */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Users size={32} />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {speaker.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-amber-600">
                  {speaker.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-amber-400 px-6 py-14 text-center sm:px-12 sm:py-20">
          <CalendarDays
            className="mx-auto text-slate-950"
            size={40}
          />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Be part of this event.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-800">
            Come learn. Come grow. Come ask questions. Come discover your
            purpose and connect with other young people on the same journey.
          </p>

          <Link
            href="/join"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            Register / Join WiseGen
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}