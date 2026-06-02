import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Statement } from "./components/Statement";
import { Stats } from "./components/Stats";
import { HatRack } from "./components/HatRack";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { Cta } from "./components/Cta";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Statement />
      <Stats />
      <HatRack />
      <Services />
      <About />
      <Faq />
      <Cta />

      <footer className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 border-t border-line pt-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-[22px] text-ink">Heads Up Leading</span>
            <p className="mt-3 max-w-xs text-[13.5px] leading-[1.55] text-muted">
              Helping new and struggling leaders lead well, at home, in the
              community, and in business.
            </p>
          </div>
          <div>
            <p className="text-[13px] text-muted">Explore</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink/80">
              <li><a href="#model" className="hover:text-ink">The Model</a></li>
              <li><a href="#services" className="hover:text-ink">Services</a></li>
              <li><a href="#about" className="hover:text-ink">About Gary</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] text-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink/80">
              <li><a href="#connect" className="hover:text-ink">Book Gary</a></li>
              <li><a href="mailto:gary@headsupleading.com" className="hover:text-ink">Email</a></li>
              <li>Opelika, Alabama</li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] text-muted">Credentials</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink/80">
              <li>John Maxwell Certified</li>
              <li>ICF Certified Coach</li>
              <li>West Point (USMA)</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-[12.5px] text-muted sm:flex-row">
          <span>© Heads Up Leading, LLC, 2026</span>
          <span className="tracking-[0.04em]">Caring · Competent · Character</span>
        </div>
      </footer>
    </main>
  );
}
