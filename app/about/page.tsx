import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love God",
    description:
      "We desire to help young people develop a genuine relationship with God and grow in their faith.",
  },
  {
    icon: Lightbulb,
    title: "Live Wisely",
    description:
      "We equip young people with biblical wisdom and practical knowledge to make wise decisions.",
  },
  {
    icon: Target,
    title: "Discover Purpose",
    description:
      "We help young people recognize their potential, discover their God-given purpose, and pursue it with confidence.",
  },
  {
    icon: Users,
    title: "Impact Others",
    description:
      "We encourage young people to become positive influences in their families, schools, churches, workplaces, and communities.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 pt-20">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              <Sparkles size={14} />
              About WiseGen
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Raising a Generation for{" "}
              <span className="text-amber-400">God and Purpose.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A Christian-based fellowship and mentoring community created to
              help teenagers and young adults know God, gain wisdom, discover
              purpose, and impact their generation.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                A community built to help young people grow.
              </h2>

              <div className="mt-7 inline-flex items-center rounded-full bg-amber-100 px-5 py-3 text-sm font-bold text-amber-800">
                Established May 2024
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                WiseGen is a Christian-based fellowship and mentoring community
                created for teenagers and young adults. We believe that the
                teenage and young-adult years are important seasons of life
                when values are formed, identity is developed, and major
                decisions about faith, relationships, education, career, and
                the future begin to take shape.
              </p>

              <p>
                WiseGen started in <strong className="text-slate-900">May 2024</strong>{" "}
                with a desire to provide a safe, supportive, and faith-filled
                environment where young people can grow spiritually while
                gaining practical knowledge for everyday life.
              </p>

              <p>
                Through our weekly faith-based mentoring meetings, we bring
                young people together to learn about God, ask questions, share
                experiences, build healthy relationships, and receive guidance
                from mentors who genuinely care about their growth.
              </p>

              <p>
                Our goal is not simply to raise young people who know about
                God, but a generation that{" "}
                <strong className="text-slate-900">
                  loves God, fears God, makes wise choices, discovers their
                  God-given purpose, and has the courage and knowledge to
                  fulfill it.
                </strong>
              </p>

              <p>
                At WiseGen, we believe every young person has potential,
                purpose, and a unique assignment from God. Our responsibility
                is to help them discover it, develop it, and confidently walk
                in it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:px-10">
          {/* MISSION */}
          <div className="rounded-4xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
              <Target size={25} />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Mentor. Inspire. Equip.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              To mentor, inspire, and equip teenagers and young adults to
              develop a genuine relationship with God, build strong character,
              make wise life choices, and pursue their God-given purpose.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              We accomplish this through biblical teaching, mentoring,
              meaningful conversations, practical life education, fellowship,
              prayer, and positive relationships.
            </p>
          </div>

          {/* VISION */}
          <div className="rounded-4xl bg-amber-400 p-8 text-slate-950 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
              <Sparkles size={25} />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
              Our Vision
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              A Generation With Purpose.
            </h2>

            <p className="mt-6 leading-8 text-slate-800">
              To raise a generation of spiritually grounded, purpose-driven,
              wise, confident, and responsible young people who love God,
              positively influence their communities, and fulfill their
              God-given potential.
            </p>

            <p className="mt-5 leading-8 text-slate-800">
              We envision young people who are not afraid to stand for their
              faith and values while becoming positive examples in their
              families, schools, workplaces, churches, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Growing Together, Every Week
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              WiseGen meets weekly for faith-based mentoring and fellowship.
              Our meetings create opportunities for teenagers and young adults
              to explore both spiritual and practical issues that affect their
              everyday lives.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-4xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">{value.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY WISEGEN */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Why WiseGen?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Young people deserve a place to grow.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Growing up in today&apos;s world comes with many opportunities, but
              also many pressures. Young people are constantly exposed to
              different messages about identity, success, relationships,
              sexuality, money, popularity, and what it means to live a
              meaningful life.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              WiseGen provides a place where young people can talk openly about
              these issues while receiving guidance grounded in Christian
              faith, biblical principles, wisdom, and practical life
              experience.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-8 sm:p-12">
            <p className="text-lg font-bold text-amber-400">
              At WiseGen, we want every young person to know:
            </p>

            <div className="mt-8 space-y-5">
              {[
                "You are loved.",
                "You have value.",
                "You have a purpose.",
                "Your choices matter.",
                "You can live for God and make a meaningful difference in your generation.",
              ].map((statement) => (
                <div
                  key={statement}
                  className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />

                  <p className="font-semibold leading-7 text-white">
                    {statement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <Heart size={28} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            Our Commitment
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Walking Alongside Young People
          </h2>

          <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
            At WiseGen, we are committed to creating a welcoming, respectful,
            encouraging, and Christ-centered environment where teenagers and
            young adults feel heard, valued, supported, and challenged to
            grow.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We believe mentoring is more than giving advice. It is about{" "}
            <strong className="text-slate-900">
              walking alongside young people
            </strong>
            , helping them navigate life&apos;s questions, celebrating their
            progress, learning through challenges, and encouraging them to
            become everything God has called them to be.
          </p>
        </div>
      </section>

      {/* SLOGAN */}
      <section className="bg-amber-400 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
            Our Slogan
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            Know God.
            <br className="sm:hidden" /> Gain Wisdom.
            <br className="sm:hidden" /> Discover Purpose.
            <br className="sm:hidden" /> Impact Your Generation.
          </h2>

          <Link
            href="/join"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            Join the WiseGen Community
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black sm:text-5xl">
            There is a place for you at WiseGen.
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Come learn. Come grow. Come ask questions. Come discover your
            purpose.
          </p>

          <Link
            href="/join"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Join WiseGen
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}