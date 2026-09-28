"use client";

import Link from "next/link";
import {ArrowRight, CalendarDays, Check, Heart, Sparkles, Users,} from "lucide-react";
import Image from "next/image";

const events = [
  {
    date: "03",
    month: "OCT",
    title: "Weekly Mentoring Meeting",
    description:
      "A time to learn, connect, ask questions, and grow together in faith and wisdom.",
    category: "Mentoring",
  },
  {
    date: "10",
    month: "OCT",
    title: "Purpose & Identity Session",
    description:
      "A meaningful conversation about identity, purpose, and becoming who God has called you to be.",
    category: "Growth",
  },
  {
    date: "24",
    month: "OCT",
    title: "WiseGen Youth Conference",
    description:
      "A special gathering focused on faith, purpose, relationships, wisdom, and personal growth.",
    category: "Conference",
  },
];

const values = [
  {
    icon: Heart,
    title: "Know God",
    description:
      "Develop a genuine relationship with God through biblical teaching, prayer, fellowship, and meaningful conversations.",
  },
  {
    icon: Sparkles,
    title: "Gain Wisdom",
    description:
      "Learn to make wise decisions and navigate relationships, education, career, identity, and everyday life.",
  },
  {
    icon: Users,
    title: "Discover Purpose",
    description:
      "Understand your potential and begin discovering the unique purpose God has placed within you.",
  },
];

const activities = [
  "Biblical Teaching",
  "Mentoring",
  "Prayer & Fellowship",
  "Practical Life Education",
  "Meaningful Conversations",
  "Positive Relationships",
];

const youths = [
  { image: "/images/google1.jpg", alt: "first youth" },
  { image: "/images/google2.jpg", alt: "second youth" },
  { image: "/images/google3.jpg", alt: "third youth" },
  { image: "/images/google4.jpg", alt: "fourth youth" },
  { image: "/images/google5.jpg", alt: "fifth youth" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Sparkles size={14} />
              A Christian Mentoring Community
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Raising a Generation That{" "}
              <span className="text-amber-500">Loves God</span>, Lives Wisely
              & Fulfills Purpose.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              WiseGen is a faith-based community helping teenagers and young
              adults grow in their relationship with God, build strong
              character, make wise choices, and discover their God-given
              purpose.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className="group flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                Join WiseGen
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/events"
                className="flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-900 transition hover:border-slate-950"
              >
                <CalendarDays size={17} />
                Explore Events
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <div className="h-max w-max flex">
                {
                  youths.map((youth, index) => (
                    <div key={index} className="h-max w-6">
                      <div className="relative h-10 w-10">
                        <Image src={youth.image} alt={youth.alt} fill className="object-cover rounded-full" />
                      </div>
                    </div>
                  ))
                }
              </div>

              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">
                  Growing together.
                </span>{" "}
                Walking in purpose.
              </p>
            </div>
          </div>

          {/* HERO IMAGE AREA */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to from-amber-400 via-orange-400 to-slate-950" />

              {/* Replace this with an actual image */}
              <div className="relative h-full w-full">
                <Image src="/images/hero.jpg" alt="WiseGen Community" fill className="object-cover" />
              </div>
              {/* <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                <div>
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md">
                    <Users size={45} className="text-white" />
                  </div>

                  <p className="text-3xl font-black text-white">
                    Faith.
                    <br />
                    Wisdom.
                    <br />
                    Purpose.
                  </p>
                </div>
              </div> */}

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  WiseGen
                </p>
                <p className="mt-1 text-lg font-black text-slate-950">
                  Raising a generation for God and purpose.
                </p>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
              <Sparkles className="text-amber-500" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                About WiseGen
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                More Than a Fellowship. A Community for Growth.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                Growing up comes with questions, opportunities, and pressures.
                WiseGen provides a safe and supportive environment where
                teenagers and young adults can ask questions, build meaningful
                relationships, grow in faith, and receive practical guidance
                for everyday life.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 font-bold text-amber-400 transition hover:gap-3"
              >
                Discover Our Story
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              What We Believe
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Helping Young People Grow With Purpose
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We want every young person to know God, develop wisdom, discover
              purpose, and become a positive influence in their generation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className={`rounded-4xl p-8 ${
                    index === 1
                      ? "bg-amber-400"
                      : "border border-slate-200 bg-white"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index === 1
                        ? "bg-slate-950 text-white"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black">{value.title}</h3>

                  <p
                    className={`mt-4 leading-7 ${
                      index === 1 ? "text-slate-800" : "text-slate-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENTS */}
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
                href="/events"
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
                    {event.description}
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

      {/* WHY WISEGEN */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] bg-amber-400 p-8 sm:p-12">
              <div className="flex h-full items-end rounded-4xl bg-slate-950 p-8 sm:p-10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                    Why WiseGen?
                  </p>

                  <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                    You don&apos;t have to navigate life alone.
                  </h2>

                  <p className="mt-5 leading-7 text-slate-300">
                    We walk alongside young people as they navigate life&apos;s
                    questions, challenges, relationships, and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Young people today are constantly exposed to different messages
              about identity, success, relationships, sexuality, money,
              popularity, and what it means to live a meaningful life.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              WiseGen provides a place where these issues can be discussed
              openly while receiving guidance grounded in Christian faith,
              biblical principles, wisdom, and practical life experience.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "You are loved.",
                "You have value.",
                "You have a purpose.",
                "Your choices matter.",
                "You can make a meaningful difference.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400">
                    <Check size={15} strokeWidth={3} />
                  </div>

                  <p className="font-bold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-amber-400 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Growing Together, Every Week.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-800">
              Through our weekly faith-based mentoring meetings, WiseGen
              creates opportunities for young people to learn, connect, ask
              questions, share experiences, and receive guidance from mentors
              who genuinely care about their growth.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity}
                className="rounded-2xl bg-white/70 p-5 font-bold text-slate-950 backdrop-blur"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Our Vision
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
            A Generation Grounded in Faith. Driven by Purpose. Ready to Make an
            Impact.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We envision young people who are spiritually grounded,
            purpose-driven, wise, confident, and responsible — positively
            influencing their families, schools, workplaces, churches, and
            communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-amber-400 px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
            Join the Community
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Your Journey Starts Here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-800">
            Whether you want to deepen your faith, find positive friendships,
            discover your purpose, develop important life skills, or simply
            find a community where you belong, there is a place for you at
            WiseGen.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/join"
              className="rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              Join WiseGen
            </Link>

            <Link
              href="/events"
              className="rounded-full border border-slate-950/20 bg-white/40 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-white"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}