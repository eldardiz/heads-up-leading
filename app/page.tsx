import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustRow } from "./components/TrustRow";
import { Stats } from "./components/Stats";
import { HatRackModel } from "./components/HatRackModel";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Connect } from "./components/Connect";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustRow />
      <Stats />
      <HatRackModel />
      <Services />
      <About />
      <Connect />

      <footer className="relative z-10 border-t border-border bg-surface-2/50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-[13px] text-text-faint sm:flex-row">
          <span className="font-display text-[15px] text-foreground">
            Heads Up Leading, LLC
          </span>
          <span>Opelika, Alabama</span>
          <span className="tracking-[0.04em]">Caring · Competent · Character</span>
        </div>
      </footer>
    </main>
  );
}
