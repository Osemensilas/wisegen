"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfACyvwUcQBgGDJsYNRO5c9pL1rIRucE58PlQ4e8JqDfTZm-Q/viewform?usp=header";

const reasons = [
  "Grow in your relationship with God",
  "Receive guidance and mentoring",
  "Build meaningful and positive friendships",
  "Discuss real-life issues in a safe environment",
  "Develop wisdom, character, and confidence",
  "Discover and pursue your God-given purpose",
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              <Sparkles size={16} />
              Join the WiseGen Community
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Come. Grow.{" "}
              <span className="text-amber-400">Discover Your Purpose.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              WiseGen is a Christian fellowship and mentoring community for
              teenagers and young adults who want to grow in faith, gain
              wisdom, build meaningful relationships, and discover their
              God-given purpose.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Join WiseGen
                <ArrowRight size={18} />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Why Join WiseGen?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A place to grow in faith and in life.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Growing up comes with questions about faith, identity,
              relationships, education, career, purpose, and the future.
              WiseGen provides a welcoming environment where young people can
              ask questions, learn, connect, and receive guidance grounded in
              Christian faith and practical wisdom.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <CheckCircle2 size={20} />
                </div>

                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
              <Users size={26} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Who Can Join?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              There is a place for you at WiseGen.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              WiseGen is created for teenagers and young adults who want to
              grow spiritually, develop strong character, make wise choices,
              build positive relationships, and pursue their God-given
              potential.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-[#f8f6f0] p-7">
              <HeartHandshake className="text-amber-600" size={28} />

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Grow in Faith
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learn about God, strengthen your faith, pray, and explore
                questions about Christian living.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8f6f0] p-7">
              <Users className="text-amber-600" size={28} />

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Find Community
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Connect with other young people, build healthy friendships,
                and become part of a supportive community.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8f6f0] p-7">
              <Sparkles className="text-amber-600" size={28} />

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Discover Purpose
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Gain wisdom and practical guidance as you discover your
                potential and learn to pursue your purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl bg-slate-950 px-6 py-14 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Ready to Join?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Your journey can start here.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Take the first step and become part of the WiseGen community.
              Complete the registration form and the WiseGen team will have
              your details.
            </p>

            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Complete Registration
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <Link
              href="/"
              className="text-xl font-black tracking-tight text-slate-950"
            >
              Wise<span className="text-amber-500">Gen</span>
            </Link>

            <p className="mt-2 text-sm text-slate-500">
              Raising a generation that loves God, lives wisely, and fulfills
              purpose.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            <Link href="/about" className="transition hover:text-amber-600">
              About
            </Link>
            <Link href="/events" className="transition hover:text-amber-600">
              Events
            </Link>
            <Link href="/news" className="transition hover:text-amber-600">
              News
            </Link>
            <Link href="/contact" className="transition hover:text-amber-600">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-100 px-6 py-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} WiseGen. All rights reserved.
        </div>
      </footer>
    </>
  );
}