# Mockup Receipt — Heads Up Leading (Gary Wilson)

**Spawned:** 2026-06-02
**Type:** Speculative lead mockup (Axamo-style workflow, non-restaurant)
**Live URL:** https://heads-up-leading.vercel.app
**Repo:** https://github.com/eldardiz/heads-up-leading

---

## The brief (decoded from partner's Slack message)

The lead is **Gary Wilson**, who recently left **Iron Forums** (https://www.ironforums.org/,
a Christian peer-leadership-forum org) and started his own LLC doing the same work,
**Heads Up Leading, LLC** (Opelika, Alabama).

Partner's ask: *"mock up something for this site (his old job) and use his info instead"* —
i.e. build a site for his NEW company, using Iron Forums as the conceptual blueprint,
populated with Gary's own info so he can adopt it as his new site. Meeting door-opener:
*"here's your old job's concept, already rebuilt as yours."*

Note: Gary still does Iron Forums as a **contract facilitator** (Aug 2025–present), so he
hasn't fully cut ties. Worth knowing before the meeting.

## Three sources, three jobs

- **Design + motion** → https://harmonise.framer.website/ (the look the partner loves):
  light/calm, premium-minimal, subtle scroll reveals, count-up stats.
- **Concept DNA** → Iron Forums (Christian leadership world, Connect/Sharpen/Grow tone).
- **All content** → Gary's LinkedIn profile.

## Build decisions (confirmed with partner)

- **Accent:** warm gold/amber (`#A87A2C`) on a light/warm canvas — keeps a quiet thread to
  Iron Forums' gold without going dark.
- **Scope:** tight one-pager — Hero → Credentials → Stats → Hat Rack Model → Services → About → Connect.
- **Type:** Fraunces (display serif, warm/premium) + Inter (body).

## Tech

- Base: cloned `vibe-coding/projects/mockups/getfurnace-mockup` motion engine.
- Stack: Next.js 16.2.6, React 19, Tailwind v4, Lenis (smooth scroll), Framer Motion, GSAP (available).
- `robots: noindex, nofollow` set in layout metadata (mockup should not be indexed).
- `npm run build` passes clean (static export, no type errors).

## Sections (all copy is real, sourced from his LinkedIn; no em dashes)

1. **Nav** — "Heads Up Leading" wordmark, links, "Book Gary" CTA
2. **Hero** — "Helping the new leader lead well." + Hat Rack Model kicker
3. **TrustRow** — credentials marquee (John Maxwell, ICF, Kolbe, West Point, EdD, Army)
4. **Stats** — 50+ yrs · 3,000+ led · $11M turnaround · 27 yrs ministry (count-up on scroll)
5. **Hat Rack Leadership Model** — his 3 questions: Caring / Competent / Character
6. **Services** — Speaking · Coaching · Team Development · Non-profit Consulting
7. **About Gary** — West Point → Army → Salvation Army $11M turnaround → EdD → certifications
8. **Connect** — "Everyone deserves to be led well." closing CTA + footer

---

## ⚠️ PLACEHOLDERS — fix before/after the meeting

| Item | Current state | Action needed |
|------|--------------|---------------|
| **Portrait of Gary** | "GW" monogram placeholder block in About | Need a real hi-res photo of Gary (LinkedIn shots are too low-res to pull) |
| **Contact email** | `mailto:gary@headsupleading.com` (invented) | Confirm his real email + whether headsupleading.com domain exists |
| **Phone** | Not present | Add if he wants one |
| **Booking** | CTA is a mailto, no scheduler | Add Calendly/booking link if he uses one |
| **Testimonials** | Not included (one-pager scope) | His Iron Forums network has 5 named members; could seed real quotes in a v2 |
| **Logo** | Text wordmark only | Design a real logo/mark if he wants one |

## Suggested v2 additions (if he bites)

- Testimonials section (borrow/adapt from his network)
- FAQ accordion ("What is the Hat Rack Model?", "Do you work with non-profits?", "Faith-based?")
- A speaking/topics page or one-sheet
- Real photography throughout (Harmonise stays typography-led, so 2–3 strong shots is enough)

## How to iterate

```
cd vibe-coding/mockups/heads-up-leading
npm run dev        # localhost
# edit components in app/components/, push to main → auto-deploys
```
