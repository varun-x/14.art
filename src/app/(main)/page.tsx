export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Banner */}
      <header className="w-full border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">Demo Blog</p>
          <h1 className="text-8xl md:text-8xl font-bold mt-4">
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A long form demo article page made using only HTML structure and Tailwind utilities. No components, no libraries — just structure and readable typography.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="w-full h-[420px] rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
          Banner Image Placeholder
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-16 leading-8">
        <h2 className="text-3xl font-semibold mt-10">Introduction</h2>
        <p className="mt-4 text-muted-foreground">
          Every developer eventually reaches a point where tutorials stop helping and real problems begin. The gap between learning and building is not syntax — it is decision making. This page intentionally mimics a real long‑form technical blog so layout, spacing and readability can be tested properly.
        </p>

        <h2 className="text-3xl font-semibold mt-16">Why Most Projects Fail</h2>
        <p className="mt-4 text-muted-foreground">
          People do not fail because they cannot code. They fail because they build things nobody actually needs. A good product starts with a painful problem, not a cool tech stack. When the motivation is only technology, the project dies the moment motivation drops.
        </p>
        <p className="mt-4 text-muted-foreground">
          Real products survive boredom. If you can continue building when excitement disappears, the idea has potential. Otherwise it was entertainment, not creation.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 italic text-lg mt-10">
          The market rewards usefulness, not effort.
        </blockquote>

        <h2 className="text-3xl font-semibold mt-16">Design Before Code</h2>
        <p className="mt-4 text-muted-foreground">
          Writing code too early locks you into bad decisions. Instead write flows, states and edge cases first. Good engineers simulate the product in their head before the first line of code exists.
        </p>

        <ul className="list-disc ml-6 mt-6 text-muted-foreground space-y-2">
          <li>Define the user journey</li>
          <li>Define failure states</li>
          <li>Define permissions</li>
          <li>Define data ownership</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16">Scaling Mindset</h2>
        <p className="mt-4 text-muted-foreground">
          Beginners scale infrastructure. Professionals scale simplicity. The simplest solution that works today is almost always better than a perfect solution that never ships.
        </p>

        <div className="rounded-xl border border-border p-6 mt-8 bg-card">
          <p className="font-medium">Rule of Thumb</p>
          <p className="text-muted-foreground mt-2">
            If you are designing for 1 million users without having 10 users, you are procrastinating with architecture.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mt-16">Consistency Over Motivation</h2>
        <p className="mt-4 text-muted-foreground">
          Large projects are not built in intense weekends. They are built in boring daily sessions. Even one hour every day beats random 12 hour bursts followed by weeks of nothing.
        </p>

        <h2 className="text-3xl font-semibold mt-16">Shipping</h2>
        <p className="mt-4 text-muted-foreground">
          Shipping teaches more than planning. The first version will be ugly, inefficient and incomplete — and that is exactly why it must exist. Feedback requires reality.
        </p>

        <h2 className="text-3xl font-semibold mt-16">Conclusion</h2>
        <p className="mt-4 text-muted-foreground">
          Good developers learn code. Great developers learn judgment. Build small, ship often, listen carefully, and iterate without ego. The goal is not perfect software. The goal is useful software.
        </p>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-10 mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-muted-foreground">
          © Demo Blog Page — Tailwind + HTML only layout test
        </div>
      </footer>
    </div>
  );
}
