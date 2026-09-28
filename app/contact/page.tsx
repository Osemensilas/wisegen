import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 pt-20">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              <Sparkles size={14} />
              Get In Touch
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              We&apos;d Love to{" "}
              <span className="text-amber-400">Hear From You.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Have a question about WiseGen, our mentoring community, or our
              upcoming activities? Reach out to us and we&apos;ll be happy to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          {/* CONTACT INFO */}
          <div className="rounded-4xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Contact Us
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Let&apos;s start a conversation.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Whether you&apos;re interested in joining WiseGen, learning more
              about our activities, or simply have a question, we&apos;re here to
              listen.
            </p>

            {/* EMAIL */}
            <div className="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                <Mail size={21} />
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-400">
                Email Us
              </p>

              <a
                href="mailto:wisegen0524@gmail.com"
                className="mt-1 block break-all text-base font-bold text-white transition hover:text-amber-400 sm:text-lg"
              >
                wisegen0524@gmail.com
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm font-semibold text-slate-400">
                WiseGen exists to help young people:
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "Know God",
                  "Gain Wisdom",
                  "Discover Purpose",
                  "Impact Their Generation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-amber-400"
                    />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                Send a Message
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                How can we help?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Fill out the form below and the WiseGen team will get back to
                you.
              </p>
            </div>

            <form className="mt-9 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-[#fffdf8] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#fffdf8] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to talk about?"
                  className="w-full rounded-xl border border-slate-200 bg-[#fffdf8] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#fffdf8] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                Send Message
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-amber-400 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
            <MessageCircle size={24} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-5xl">
            Want to be part of WiseGen?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-800">
            If you&apos;re a teenager or young adult looking for a community where
            you can grow in faith, build meaningful relationships, and discover
            your purpose, we&apos;d love to have you join us.
          </p>

          <Link
            href="/join"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            Join WiseGen
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}