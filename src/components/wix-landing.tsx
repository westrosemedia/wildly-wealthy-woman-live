/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { WixHeader } from "@/components/wix-header";
import { ticketPaymentLinks } from "@/lib/stripe";

const gold = "text-[#A27D50]";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.6]">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M14.2 3.2c.5 2.4 1.9 4.1 4.2 4.5v2.4c-1.5 0-2.9-.5-4.2-1.4v6.6c0 3.4-2.6 6.1-6.2 6.1S1.8 18.7 1.8 15.3c0-3.3 2.5-5.9 5.8-6.1v2.6c-1.6.2-2.8 1.6-2.8 3.4 0 1.9 1.5 3.4 3.4 3.4s3.3-1.5 3.3-3.5V3.2h2.7Z" />
    </svg>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer" className="inline-flex">
      {children}
    </a>
  );
}

const pillars = [
  {
    title: "Money & Wealth",
    body: [
      "Have bigger conversations about money, financial freedom, receiving, generosity, and creating wealth that supports the life you want to live.",
    ],
  },
  {
    title: "Content, Business & Visibility",
    body: [
      "Learn how to use your voice, tell your story, create compelling content, build a personal brand, and turn your ideas into opportunities.",
      "Whether you're an entrepreneur, a creator, a woman with a big dream, or someone ready to become more visible, you'll leave with practical tools you can use.",
    ],
  },
  {
    title: "Motherhood & Generational Impact",
    body: [
      "Explore what we're teaching the next generation through the way we live, lead, love, and believe in ourselves.",
      "We'll talk about motherhood, raising confident daughters, intergenerational relationships, and the power of women supporting women.",
    ],
  },
  {
    title: "Healing, Grief & Personal Growth",
    body: [
      "Experience the power of EFT tapping, meaningful conversations about grief, and opportunities to honor the people and experiences that have shaped your life.",
      "Because celebrating life also means making room for love, loss, and everything in between.",
    ],
  },
  {
    title: "Confidence, Courage & Becoming",
    body: [
      "What would you do if you truly believed you could?",
      "We'll explore identity, courage, self-belief, and the decisions that allow women to create extraordinary lives.",
    ],
  },
] as const;

const days = [
  {
    when: "Thursday, March 4",
    name: "Release",
    lead: "An exclusive VIP evening.",
    body: "An intimate opening experience to connect, reflect, and release what you're ready to leave behind. Think meaningful conversations, beautiful surroundings, powerful tapping, and an unforgettable beginning to your weekend.",
  },
  {
    when: "Friday, March 5",
    name: "Receive",
    lead: "The Main Wildly Wealthy Woman LIVE Experience",
    body: "A full day of inspiring speakers, meaningful panels, interactive workshops, EFT tapping, new friendships, and conversations that open your mind to what's possible. Expect moments that move you, practical tools you'll actually use, and plenty of opportunities to laugh, celebrate, and connect.",
  },
  {
    when: "Saturday, March 6",
    name: "Become",
    lead: "Our Closing Celebration",
    body: "We bring everything together with a powerful morning focused on the woman you're becoming and the legacy you're creating. You'll leave with new connections, beautiful memories, practical tools, and a bigger vision for what's next.",
  },
] as const;

const tickets = [
  {
    name: "General Admission",
    price: "$697 USD",
    note: "Early bird",
    intro: "Your invitation to the Wildly Wealthy Woman LIVE experience.",
    items: [
      "Full access to Friday's main event",
      "Saturday morning programming",
      "Keynote speakers and panel conversations",
      "Interactive workshops and EFT tapping experiences",
      "Opportunities to connect with extraordinary women",
    ],
    cta: "Get general admission",
    href: ticketPaymentLinks["General admission"],
  },
  {
    name: "Mother-Daughter Duo",
    price: "$777 USD",
    note: "Early bird for two",
    intro: "Two women. One unforgettable experience.",
    detail:
      "Designed for mothers and daughters who want to share the experience together, but equally beautiful for other meaningful pairs.",
    items: [
      "Two general admission tickets",
      "Friday and Saturday general admission experiences",
      "An opportunity to create memories together",
      "All general admission programming for both guests",
    ],
    cta: "Get your duo passes",
    href: ticketPaymentLinks["Mother & Daughter"],
  },
  {
    name: "VIP Experience",
    price: "$1497 USD",
    note: "Early bird",
    intro: "For the woman who wants to experience it all.",
    detail: "Everything included with General Admission, plus:",
    items: [
      "Exclusive access to Thursday evening's VIP experience",
      "An intimate opening ceremony and tapping experience",
      "Additional opportunities to connect with speakers and fellow VIP guests",
      "An elevated start to your Wildly Wealthy Woman LIVE weekend",
    ],
    cta: "Become a VIP",
    href: ticketPaymentLinks.VIP,
  },
  {
    name: "Mother-Daughter Duo VIP",
    price: "$1997 USD",
    note: "Early bird for two",
    intro: "Two women. One extraordinary weekend. Memories that last a lifetime.",
    detail:
      "An unforgettable VIP experience designed to celebrate the bond between mothers and daughters, but equally beautiful for any two women who want to share something extraordinary together.",
    plus: "Everything included with General Admission, plus:",
    items: [
      "Two VIP admission tickets",
      "Exclusive access to Thursday evening's VIP experience",
      "An intimate opening ceremony and tapping experience",
      "Additional opportunities to connect with speakers and fellow VIP guests",
      "A beautiful opportunity to dream bigger, grow together, and create memories that last a lifetime",
    ],
    cta: "Get duo VIP passes",
    href: ticketPaymentLinks["Mother & Daughter VIP"],
  },
] as const;

const faqs = [
  {
    q: "Is this event only for mothers and daughters?",
    a: "Not at all! Although honoring the mother-daughter relationship is at the heart of this experience, Wildly Wealthy Woman LIVE is for women of all generations. Come with your sister, best friend, aunt, mentor, or someone special. You're also welcome to come on your own.",
  },
  {
    q: "What if my mother has passed away or we don't have a relationship?",
    a: "You absolutely belong here. We recognize that motherhood and family relationships can be beautiful, complicated, or marked by grief. Our event includes meaningful conversations about loss, grief, and the women who have shaped us. You don't need to have a mother or daughter attending to experience the heart of this event.",
  },
  {
    q: "What if I don't have children?",
    a: "You're welcome here! This event celebrates women, connection, possibility, and the influence we have on the generations around us. Motherhood is one of the conversations, not a requirement for belonging.",
  },
  {
    q: "Do I need to own a business?",
    a: "No. While there will be valuable education around business, money, marketing, and content creation, the experience is designed for women who want to grow personally, professionally, and in their relationships.",
  },
  {
    q: "Where is the event being held?",
    a: "At the iconic Fairmont Banff Springs in Banff, Alberta, Canada.",
  },
  {
    q: "What are the event dates?",
    a: "March 4–6, 2027. VIP guests attend Thursday evening, March 4. General Admission guests attend Friday, March 5, and Saturday morning, March 6.",
  },
  {
    q: "Are hotel accommodations included?",
    a: "No. Accommodation and travel are separate from event tickets. Information about hotel booking options will be shared with attendees.",
  },
  {
    q: "What should I wear?",
    a: "Think winter elegance, old-world glamour, and your own version of Wildly Wealthy Woman style. Beautiful outfits, faux fur, cozy luxury, and whatever makes you feel incredible. More style inspiration will be shared before the event.",
  },
  {
    q: "Can I come alone?",
    a: "Absolutely. Some of the most meaningful friendships begin when you decide to walk into a room where you don't know anyone. We'll create plenty of opportunities to connect.",
  },
] as const;

const letter = [
  "I'm Jackie McDonald, founder of Tapping School and host of the Wildly Wealthy Woman Podcast.",
  "And this event is deeply personal to me.",
  "Years ago, I was a single mother with a dream of creating a different life for myself and my daughter.",
  "I didn't have everything figured out.",
  "But I had a mother who believed in me.",
  "Her belief gave me the courage to believe in myself, build a business, become a teacher, and create a movement that's helped hundreds of women change their lives through EFT tapping.",
  "And all along, my own daughter has been watching.",
  "She's watched me build businesses, take risks, start over, make mistakes, and keep going.",
  "She's heard me say, \"I love and accept myself anyway.\"",
  "She's watched me turn some of the hardest seasons of my life into something meaningful.",
  "And today, I see a young woman who believes in herself and knows that she can create an extraordinary life of her own.",
  "When my mom became ill, I started thinking even more about the women who have shaped my life and how much I wanted to celebrate them while we still have the opportunity.",
  "I wanted my mom to meet the women whose lives have been impacted because she believed in me.",
  "And I wanted my daughter to experience what happens when women of different generations come together to celebrate, support, and learn from one another.",
  "That's where the vision for Wildly Wealthy Woman LIVE was born.",
  "Not just another event.",
] as const;

function Pillar({ title, body }: { title: string; body: readonly string[] }) {
  return (
    <div className="border-t border-[#A27D50]/70 pt-5">
      <h3 className="text-[15px] tracking-[0.12em] uppercase">{title}</h3>
      {body.map((paragraph) => (
        <p key={paragraph} className="mt-3 text-[16px] leading-relaxed text-black/75">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function WixLanding() {
  return (
    <div className="wix">
      <WixHeader />

      <section className="relative min-h-[78vh] overflow-hidden bg-[#1c1c1c] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/wix/hero-poster.jpg"
        >
          <source src="/wix/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative flex min-h-[78vh] flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-[13px] tracking-[0.22em] uppercase md:text-[15px]">
            Honour the past. Celebrate the present. Inspire the future.
          </p>
          <img
            src="/wix/logo.png"
            alt="Wildly Wealthy Woman Live"
            className="mt-10 w-[min(640px,88vw)]"
          />
          <p className="mt-6 text-[13px] tracking-[0.16em] uppercase md:text-[15px]">
            March 4–6, 2027 &nbsp;|&nbsp; Fairmont Banff Springs &nbsp;|&nbsp; Banff, Canada
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-20 text-center md:py-28">
        <h2 className="wix-display text-[28px] leading-[1.25] md:text-[34px]">
          What if the greatest thing we leave
          <br />
          the next generation isn&apos;t what we&apos;ve built,
          <br />
          <span className={gold}>but the belief that they can build anything?</span>
        </h2>
        <div className="mt-14 grid items-start gap-10 text-left md:grid-cols-[0.85fr_auto_1.15fr] md:gap-12">
          <p className="wix-display text-center text-[16px] leading-relaxed tracking-[0.08em] md:text-left md:text-[18px]">
            One extraordinary destination.
            <br />
            Three unforgettable days.
            <br />
            A room filled with women who believe in what&apos;s possible.
          </p>
          <span className="hidden h-full w-px bg-[#A27D50] md:block" />
          <div className="space-y-5 text-[17px] leading-relaxed text-black/80">
            <p>
              Welcome to <strong>Wildly Wealthy Woman LIVE</strong>, a luxury, multi-generational
              experience bringing women together to celebrate life, wealth, motherhood, ambition,
              friendship, and the extraordinary things that become possible when women believe in
              one another.
            </p>
            <p>
              Bring your mother. Bring your daughter. Bring your sister, your best friend, or the
              woman who has always believed in you.
            </p>
            <p>Or come on your own and meet women who just might change your life.</p>
          </div>
        </div>
        <p className={`wix-display mt-16 text-[18px] tracking-[0.14em] uppercase md:text-[22px] ${gold}`}>
          This is your invitation to be part of something extraordinary
        </p>
        <Link href="#tickets" className="wix-btn mt-8">
          Get your tickets
        </Link>
      </section>

      <section className="bg-[#242323] px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-[1fr_280px_1fr]">
          <div className="text-center">
            <span className="wix-rule mx-auto" />
            <h2 className="wix-display mt-6 text-[34px] leading-tight md:text-[40px]">
              Honour.
              <br />
              Celebrate.
              <br />
              Inspire.
            </h2>
            <span className="wix-rule mx-auto mt-6" />
          </div>
          <video
            className="mx-auto aspect-[9/16] w-full max-w-[280px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/wix/intro-poster.jpg"
          >
            <source src="/wix/intro.mp4" type="video/mp4" />
          </video>
          <div className="text-center">
            <span className="wix-rule mx-auto" />
            <p className="mx-auto mt-6 max-w-xs text-[18px] leading-relaxed font-light">
              An invitation to experience the heart behind Wildly Wealthy Woman LIVE.
            </p>
            <span className="wix-rule mx-auto mt-6" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] space-y-20 px-6 py-20 md:space-y-28 md:py-28">
        <article className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:px-10">
            <h3 className="wix-display text-[22px] tracking-[0.12em]">Honour the past</h3>
            <span className="wix-rule mx-auto mt-3" />
            <p className="mt-4 text-[16px] leading-relaxed text-black/70">
              The mothers, grandmothers, mentors, and women whose courage, sacrifices, and belief
              helped make our lives possible.
            </p>
          </div>
          <img
            src="/wix/family.jpg"
            alt="Jackie with her mother, daughter, and grandmother"
            className="w-full rotate-1 border-[10px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
          />
        </article>
        <article className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="/wix/banff-jackie.jpg"
            alt="Jackie in Banff"
            className="order-2 w-full -rotate-1 border-[10px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] md:order-1"
          />
          <div className="order-1 text-center md:order-2 md:px-10">
            <h3 className="wix-display text-[22px] tracking-[0.12em]">Celebrate the present</h3>
            <span className="wix-rule mx-auto mt-3" />
            <p className="mt-4 text-[16px] leading-relaxed text-black/70">
              The women we are today. The lives we&apos;ve built, the obstacles we&apos;ve
              overcome, the dreams we&apos;re pursuing, and the extraordinary moments we get to
              experience together.
            </p>
          </div>
        </article>
        <article className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:px-10">
            <h3 className="wix-display text-[22px] tracking-[0.12em]">Inspire the future</h3>
            <span className="wix-rule mx-auto mt-3" />
            <p className="mt-4 text-[16px] leading-relaxed text-black/70">
              The daughters, young women, and future generations watching us. Because when one
              woman believes in another, the possibilities are endless.
            </p>
          </div>
          <img
            src="/wix/girls.jpg"
            alt="Young women together"
            className="w-full rotate-1 border-[10px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
          />
        </article>
      </section>

      <section className="bg-[#A27D50] px-6 py-16 text-center text-white md:py-24">
        <p className="wix-script text-[42px] md:text-[68px]">
          One woman believing in another can change the world.
        </p>
      </section>

      <section className="relative bg-[#8ea4b8]">
        <img
          src="/wix/mountains.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-[1180px] px-4 py-10 md:px-8 md:py-16">
          <div className="max-w-[560px] bg-white px-7 py-10 md:px-12 md:py-14">
            <h2 className="text-[16px] leading-snug tracking-[0.04em] uppercase">
              Imagine spending a weekend in one of the most beautiful places in the world.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-black/80">
              <p>
                You&apos;re walking through the iconic Fairmont Banff Springs, surrounded by
                snow-covered mountains, wearing your favorite winter outfit, ready for an
                experience unlike anything you&apos;ve attended before.
              </p>
              <p>
                Your mom is beside you. Or your daughter. Maybe it&apos;s your best friend, your
                sister, or a woman who has become family.
              </p>
              <p>
                You&apos;re taking beautiful photos, laughing until your stomach hurts, having
                conversations you&apos;ve never had before, and creating memories you&apos;ll talk
                about for years.
              </p>
              <p>But you&apos;re also learning.</p>
              <p>
                You&apos;re hearing from extraordinary women who are building businesses, creating
                wealth, raising families, overcoming adversity, and changing the world in their own
                ways.
              </p>
              <p>
                You&apos;re learning how to use your voice, share your story, create content, build
                confidence, improve your relationship with money, and pursue the things you&apos;ve
                always wanted.
              </p>
              <p>
                You&apos;re experiencing the power of EFT tapping to release what has been holding
                you back and make room for what&apos;s next.
              </p>
              <p>
                And somewhere between the laughter, the learning, the conversations, and the
                incredible women you meet, you realize something.
              </p>
              <p className="font-bold tracking-[0.02em] uppercase">
                The women in this room aren&apos;t just talking about what&apos;s possible.
                They&apos;re living it.
              </p>
              <p className={`font-bold tracking-[0.04em] uppercase ${gold}`}>
                And now you get to be a part of it.
              </p>
            </div>
            <Link href="#tickets" className="wix-btn mt-8">
              I want to be there
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <img
          src="/wix/portrait.png"
          alt="A woman in a white fur coat in the snow"
          className="h-full max-h-[820px] w-full object-cover"
        />
        <div>
          <h2 className="wix-display text-[36px] leading-[1.05] md:text-[46px]">
            What does it mean to be a Wildly Wealthy Woman?
          </h2>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-black/75">
            <p>We believe wealth is about so much more than money.</p>
            <p>
              Although let&apos;s be clear.{" "}
              <strong>We believe women should have money. A lot of it, if that&apos;s what they desire.</strong>
            </p>
            <p>
              We believe in women who are financially empowered, generous with their gifts,
              confident in their voices, healthy in their bodies, surrounded by meaningful
              relationships, and free to build lives they genuinely love.
            </p>
            <p>Women who know how to receive.</p>
            <p>Women who aren&apos;t afraid to dream bigger.</p>
            <p>Women who celebrate other women&apos;s success.</p>
            <p>
              Women who understand that the greatest legacy isn&apos;t simply what we accumulate,
              but what we make possible for the people around us.
            </p>
            <p>Because being a Wildly Wealthy Woman isn&apos;t about having a perfect life.</p>
            <p className="font-bold tracking-[0.03em] uppercase">
              It&apos;s about living a fully expressed one.
            </p>
            <p>
              And knowing that when women have the resources, relationships, and belief to pursue
              their dreams, entire families and communities benefit.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-12 px-6 pb-8 md:grid-cols-2 md:pb-0">
        <div>
          <p className="text-[15px] tracking-[0.08em] uppercase">
            Come for the experience.
            <br />
            Leave with so much more.
          </p>
          <div className="mt-8 space-y-8">
            {pillars.slice(0, 3).map((pillar) => (
              <Pillar key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
        <img
          src="/wix/pillars.jpg"
          alt="Two women in fur coats with the Fairmont Banff Springs behind them"
          className="h-full max-h-[860px] w-full object-cover"
        />
      </section>
      <section className="mx-auto grid max-w-[1180px] px-6 py-12 md:grid-cols-2">
        <div className="hidden md:block" />
        <div className="space-y-8">
          {pillars.slice(3).map((pillar) => (
            <Pillar key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      <section className="bg-[#242323] px-6 py-14 text-center text-white">
        <p className="mx-auto max-w-[820px] text-[18px] leading-relaxed tracking-[0.08em] uppercase md:text-[22px]">
          This is personal development, business education, meaningful connection, and a
          once-in-a-lifetime girls&apos; trip, all in one.
        </p>
      </section>

      <section id="experience" className="relative scroll-mt-20 overflow-hidden text-white">
        <img src="/wix/experience.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative px-6 pt-16 pb-10 text-center">
          <h2 className="wix-display text-[36px] tracking-[0.18em] md:text-[44px]">The Experience</h2>
          <p className="mt-3 text-[14px] tracking-[0.16em] uppercase md:text-[16px]">
            Three days. One iconic destination. Memories that last a lifetime.
          </p>
        </div>
        <div className="relative mx-auto grid max-w-[1100px] gap-5 px-6 pb-16 md:grid-cols-3">
          {days.map((day) => (
            <article key={day.name} className="bg-white/82 px-6 py-8 text-center text-[#242323] backdrop-blur-sm">
              <p className="text-[13px] tracking-[0.14em] uppercase">{day.when}</p>
              <h3 className={`wix-display mt-2 text-[30px] tracking-[0.08em] ${gold}`}>{day.name}</h3>
              <p className="mt-3 text-[16px] font-bold">{day.lead}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-black/75">{day.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#242323] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-[1080px] items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="wix-display text-center text-[34px] tracking-[0.16em] md:text-left md:text-[40px]">
              The women you&apos;ll meet
            </h2>
            <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-white/85">
              <p>
                We&apos;re bringing together extraordinary women from the worlds of business,
                wealth, motherhood, healing, content creation, and personal development.
              </p>
              <p>Women who aren&apos;t just teaching about extraordinary lives.</p>
              <p>They&apos;re building them.</p>
              <p>
                Expect powerful keynote conversations, honest discussions, interactive learning, and
                opportunities to connect with women who are making meaningful moves in their own
                lives.
              </p>
            </div>
          </div>
          <p className={`wix-display text-center text-[22px] leading-snug tracking-[0.06em] uppercase md:text-[26px] ${gold}`}>
            Full speaker lineup and special guests will be announced soon!
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-start gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/wix/weekend-wide.jpg" alt="Women together at the event" className="col-span-2 w-full object-cover" />
            <img src="/wix/weekend-tall.jpg" alt="A portrait from the weekend" className="col-span-2 max-h-[420px] w-full object-cover md:col-span-1" />
            <img src="/wix/window-group.jpg" alt="Women gathered by a window" className="col-span-2 max-h-[420px] w-full object-cover md:col-span-1" />
          </div>
          <h2 className="wix-display mt-8 text-[40px] leading-[0.95] md:text-[52px]">
            A weekend you&apos;ll want to remember
          </h2>
          <p className="wix-script -mt-2 text-[72px] text-[#242323]">Forever</p>
        </div>
        <div className="space-y-4 pt-4 text-[16px] leading-relaxed text-black/75 md:pt-16">
          <p>There&apos;s something magical about Banff in the winter.</p>
          <p>And there&apos;s a reason the Fairmont Banff Springs is one of Canada&apos;s most iconic destinations.</p>
          <p>We&apos;ve chosen a setting as extraordinary as the women gathering inside it.</p>
          <p>
            Picture beautiful winter fashion, luxurious surroundings, mountain views, memorable
            photographs, and a room filled with women celebrating one another.
          </p>
          <p>But beyond the beautiful setting, we want you to leave with something even more meaningful.</p>
          <p>Conversations with your mother you&apos;ve never had before.</p>
          <p>Videos with your daughter that you&apos;ll treasure years from now.</p>
          <p>A photograph with the woman who helped you become who you are.</p>
          <p>New friendships.</p>
          <p>New ideas.</p>
          <p>And memories that become part of your family&apos;s story.</p>
          <p className="font-bold tracking-[0.03em] uppercase">
            Because one day, the photographs and conversations may become some of the most valuable
            things you own.
          </p>
        </div>
      </section>

      <section className="relative px-4 py-16 md:py-24">
        <img src="/wix/letter-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/25" />
        <article className="relative mx-auto max-w-[720px] bg-[#f7f7f7] px-7 py-12 md:px-14 md:py-16">
          <img
            src="/wix/generations.jpg"
            alt="Jackie with her mother and daughter"
            className="mx-auto mb-10 w-full max-w-[420px] object-cover"
          />
          <h2 className="wix-display text-center text-[30px] leading-tight tracking-[0.08em] md:text-[36px]">
            A personal invitation from Jackie
          </h2>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-black/80">
            {letter.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-bold tracking-[0.03em] uppercase">
              A celebration of the women who made us, the women we are, and the women we are raising.
            </p>
            <p>I would love for you to be part of it.</p>
            <p>Love,</p>
            <p className="wix-script text-[64px]">Jackie</p>
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="wix-display text-[28px] tracking-[0.08em]">Meet Stephanie</h2>
          <p className="mt-2 text-[13px] tracking-[0.14em] uppercase">
            The woman behind the content &amp; creativity
          </p>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-black/75">
            <p>
              Meet Stephanie Rose, our creative and content partner for Wildly Wealthy Woman LIVE.
            </p>
            <p>
              Stephanie believes in the power of women using their voices, sharing their stories,
              and creating content that opens doors to extraordinary opportunities.
            </p>
            <p>
              She&apos;s bringing her expertise in content creation, storytelling, and marketing to
              help make this event an experience you&apos;ll want to remember, share, and talk about
              long after you leave Banff.
            </p>
            <p>
              Stephanie will also be leading an interactive content experience, helping you turn
              your ideas, experiences, and personal story into content that connects.
            </p>
            <p>Because your story matters. And you never know who needs to hear it.</p>
          </div>
          <span className="mt-6 block h-px w-full bg-black/20" />
          <div className="mt-5 flex gap-4">
            <SocialLink href="https://www.instagram.com/stephanie.the.rose/" label="Stephanie on Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@westrosemedia" label="Stephanie on TikTok">
              <TikTokIcon />
            </SocialLink>
          </div>
        </div>
        <img src="/wix/stephanie.jpg" alt="Stephanie Rose" className="w-full object-cover" />
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 pb-20 md:grid-cols-2">
        <img src="/wix/melissa.jpg" alt="Melissa" className="w-full object-cover" />
        <div>
          <h2 className="wix-display text-[28px] tracking-[0.08em]">Meet Melissa</h2>
          <p className="mt-2 text-[13px] tracking-[0.14em] uppercase">
            The woman helping bring the vision to life
          </p>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-black/75">
            <p>
              Meet Melissa, the woman helping bring all the moving pieces of Wildly Wealthy Woman
              LIVE together.
            </p>
            <p>
              From coordinating the beautiful details to helping create an extraordinary experience
              at the Fairmont Banff Springs, Melissa is an important part of the team bringing this
              vision to life.
            </p>
            <p>Together, we&apos;re creating something that goes far beyond a traditional women&apos;s event.</p>
            <p>
              An experience where every detail has been thoughtfully considered, every woman feels
              welcomed, and the memories last long after the weekend is over.
            </p>
            <p>Because the magic isn&apos;t just in what happens on stage.</p>
            <p>It&apos;s in how you feel while you&apos;re here.</p>
          </div>
          <span className="mt-6 block h-px w-full bg-black/20" />
          <div className="mt-5">
            <SocialLink href="https://www.instagram.com/theretreatalchemist/" label="Melissa on Instagram">
              <InstagramIcon />
            </SocialLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#242323] px-4 py-16 text-white md:py-20">
        <img
          src="/wix/give-left.jpg"
          alt=""
          className="pointer-events-none absolute top-16 left-0 hidden w-[180px] object-cover opacity-90 lg:block"
        />
        <img
          src="/wix/give-right.jpg"
          alt=""
          className="pointer-events-none absolute top-24 right-0 hidden w-[190px] object-cover opacity-90 lg:block"
        />
        <div className="relative mx-auto max-w-[760px] text-center">
          <h2 className="wix-display text-[30px] leading-tight tracking-[0.08em] md:text-[40px]">
            Every woman deserves someone who believes in her
          </h2>
          <p className="mt-4 text-[14px] tracking-[0.18em] uppercase">Our give-back mission</p>
          <div className="mt-8 bg-white px-6 py-10 text-left text-[16px] leading-relaxed text-[#242323] md:px-12">
            <p>One of the most meaningful parts of this event is creating opportunities for single mothers and their daughters to attend.</p>
            <p className="mt-4">Years ago, I won an opportunity to speak on a stage that helped change the direction of my life.</p>
            <p className="mt-4">At the time, I was a single mother who couldn&apos;t afford to attend on my own.</p>
            <p className="mt-4">That opportunity opened doors I never could have imagined.</p>
            <p className="mt-4">And now I want to help open those doors for other women.</p>
            <p className="mt-4">
              Through our event sponsorships, we&apos;re inviting businesses and individuals to help
              sponsor mother-daughter duos who otherwise may not be able to experience this weekend.
            </p>
            <p className="mt-4">
              Because sometimes all it takes is one opportunity, one connection, or one woman
              believing in another to change the trajectory of a life.
            </p>
            <p className="mt-4">
              Interested in becoming an event sponsor or supporting our mother-daughter initiative?
            </p>
            <div className="mt-8 text-center">
              <Link href="/sponsors" className="wix-btn wix-btn-gold">
                Explore sponsorship opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tickets" className="relative scroll-mt-20 overflow-hidden">
        <img src="/wix/tickets-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#cbb89a]/55" />
        <div className="relative px-4 py-16 md:px-6 md:py-20">
          <h2 className="wix-display text-center text-[32px] tracking-[0.16em] text-white md:text-[42px]">
            Choose your experience
          </h2>
          <div className="mx-auto mt-10 grid max-w-[1200px] gap-4 md:grid-cols-2 xl:grid-cols-4">
            {tickets.map((ticket) => (
              <article key={ticket.name} className="flex flex-col bg-[#1c1c1c] px-5 py-7 text-center text-white">
                <h3 className="text-[14px] tracking-[0.12em] uppercase">{ticket.name}</h3>
                <span className="mx-auto mt-3 h-px w-full bg-[#A27D50]" />
                <p className="wix-serif mt-4 text-[42px]">{ticket.price}</p>
                <p className="text-[13px] tracking-[0.14em] text-white/80 uppercase">{ticket.note}</p>
                <p className="mt-4 text-[15px] leading-snug font-bold">{ticket.intro}</p>
                {"detail" in ticket && ticket.detail ? (
                  <p className="mt-3 text-[14px] leading-relaxed text-white/85">{ticket.detail}</p>
                ) : null}
                {"plus" in ticket && ticket.plus ? (
                  <p className="mt-3 text-[14px] font-bold">{ticket.plus}</p>
                ) : null}
                <ul className="mt-4 space-y-2 text-left text-[14px] leading-snug text-white/90">
                  {ticket.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 text-center">
                  <a href={ticket.href} className="wix-btn wix-btn-gold">
                    {ticket.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-[1100px] items-start gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="wix-display text-[40px] leading-[0.95] md:text-[52px]">
              Frequently
              <br />
              asked
              <br />
              questions
            </h2>
            <div className="mt-10 space-y-8">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="text-[20px]">{item.q}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-black/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/wix/watching.jpg"
            alt="Women at Wildly Wealthy Woman"
            className="sticky top-24 hidden w-full object-cover md:block"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-center">
        <h2 className="flex flex-wrap items-end justify-center gap-x-3">
          <span className="wix-display text-[28px] tracking-[0.12em] md:text-[36px]">
            The next generation is
          </span>
          <span className="wix-script text-[64px] md:text-[88px]">watching</span>
        </h2>
        <div className="mx-auto mt-8 max-w-[640px] space-y-3 text-[16px] leading-relaxed">
          <p>They&apos;re watching what we believe about ourselves.</p>
          <p>They&apos;re watching the risks we&apos;re willing to take.</p>
          <p>They&apos;re watching how we treat other women.</p>
          <p>They&apos;re watching what we celebrate, what we create, and what we believe is possible.</p>
          <p>And maybe the most powerful thing we can give them isn&apos;t a perfect example.</p>
          <p className="pt-3 font-bold tracking-[0.04em] uppercase">
            Maybe it&apos;s the courage to live a life that shows them they can build anything
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[280px] grid-cols-2 gap-3">
          <img src="/wix/close-left.jpg" alt="" className="h-40 w-full object-cover" />
          <img src="/wix/close-right.jpg" alt="" className="h-40 w-full object-cover" />
        </div>
      </section>

      <footer className="bg-[#242323] px-6 py-16 text-center text-white">
        <img src="/wix/logo.png" alt="" className="mx-auto w-[280px]" />
        <p className="mt-6 text-[13px] tracking-[0.16em] uppercase">
          March 4–6, 2027 &nbsp;|&nbsp; Fairmont Banff Springs &nbsp;|&nbsp; Banff, Canada
        </p>
        <p className="wix-display mt-4 text-[18px] tracking-[0.16em]">Honour. Celebrate. Inspire.</p>
        <Link href="#tickets" className="wix-btn wix-btn-gold mt-8">
          Save your seat
        </Link>
        <p className="mt-10 text-[12px] tracking-[0.14em] uppercase">
          <Link href="/tickets" className="underline-offset-4 hover:underline">
            Rooms &amp; travel
          </Link>
          <span className="px-3">·</span>
          <Link href="/sponsors" className="underline-offset-4 hover:underline">
            Sponsors
          </Link>
        </p>
      </footer>
    </div>
  );
}
