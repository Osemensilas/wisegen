import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Newspaper,
  Sparkles,
} from "lucide-react";

const newsItems = [
  {
    category: "WiseGen Updates",
    title: "Welcome to WiseGen",
    excerpt:
      "Discover the heart behind WiseGen and why we are committed to raising a generation that loves God, lives wisely, and fulfills purpose.",
    date: "May 2024",
    readTime: "4 min read",
    featured: true,
  },
  {
    category: "Faith & Growth",
    title: "Growing in Your Relationship With God",
    excerpt:
      "Our faith grows when we intentionally make time to know God, ask questions, learn His Word, and build a genuine relationship with Him.",
    date: "WiseGen",
    readTime: "5 min read",
  },
  {
    category: "Purpose",
    title: "Discovering Your God-Given Purpose",
    excerpt:
      "Every young person has potential and purpose. Learn how to begin exploring your gifts, passions, values, and the assignment God has placed before you.",
    date: "WiseGen",
    readTime: "6 min read",
  },
  {
    category: "Life & Wisdom",
    title: "Making Wise Choices as a Young Person",
    excerpt:
      "The decisions you make today can shape your tomorrow. Here are practical principles that can help you navigate important choices.",
    date: "WiseGen",
    readTime: "5 min read",
  },
  {
    category: "Community",
    title: "Why Positive Friendships Matter",
    excerpt:
      "The people around us can influence our decisions, confidence, values, and growth. Discover the importance of building healthy relationships.",
    date: "WiseGen",
    readTime: "4 min read",
  },
  {
    category: "Mentoring",
    title: "Why Mentorship Matters",
    excerpt:
      "Nobody has to navigate every season of life alone. Mentorship provides guidance, encouragement, wisdom, and support along the journey.",
    date: "WiseGen",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "WiseGen Updates",
  "Faith & Growth",
  "Purpose",
  "Life & Wisdom",
  "Community",
  "Mentoring",
];

export default function NewsPage() {
  const featuredPost = newsItems.find((item) => item.featured);
  const regularPosts = newsItems.filter((item) => !item.featured);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fbfaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-lg font-black text-slate-950">
                W
              </div>

              <div>
                <p className="text-lg font-extrabold tracking-tight">
                  Wise<span className="text-amber-500">Gen</span>
                </p>
                <p className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
                  Know God. Gain Wisdom.
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              About
            </Link>

            <Link
              href="/events"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Events
            </Link>

            <Link
              href="/news"
              className="text-sm font-semibold text-slate-950"
            >
              News
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Contact
            </Link>

            <Link
              href="/join"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Join WiseGen
            </Link>
          </nav>

          <Link
            href="/join"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Join
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-slate-200/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
              <Newspaper className="h-4 w-4" />
              WiseGen News & Insights
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Stories, insights and updates to help you{" "}
              <span className="text-amber-500">grow wisely.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Stay connected with what is happening at WiseGen and discover
              practical faith and life insights designed to encourage you on
              your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="overflow-hidden rounded-4xl bg-slate-950 shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="flex min-h-90 items-center justify-center bg-linear-to from-amber-300 via-amber-400 to-orange-300 p-10">
                <div className="max-w-sm">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                    <Sparkles className="h-8 w-8" />
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
                    Featured Story
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="w-fit rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                  {featuredPost.category}
                </span>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  href="/news/welcome-to-wisegen"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Read story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                index === 0
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:text-slate-950"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
            From WiseGen
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Latest news & insights
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Encouragement, practical wisdom, community updates and stories
            from the WiseGen journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >
              {/* Image placeholder */}
              <div className="flex h-52 items-center justify-center bg-linear-to from-slate-100 via-slate-50 to-amber-50">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Newspaper className="h-7 w-7 text-amber-500" />
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {post.category}
                  </span>

                  <span className="text-xs text-slate-400">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-950">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-medium text-slate-400">
                    {post.date}
                  </span>

                  <Link
                    href={`/news/${post.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 transition group-hover:text-amber-600"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-amber-400 px-8 py-14 text-center sm:px-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-orange-300/30 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
              Be Part of the Journey
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Don&apos;t just read about WiseGen. Join the community.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-800">
              Come learn, grow, ask questions, build meaningful relationships,
              and discover your purpose with other young people.
            </p>

            <Link
              href="/join"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Join WiseGen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}