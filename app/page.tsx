import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="main">
        <section className="leftsec">
          <div className="leftsec">
            <h1 className="text-4xl font-semibold tracking-tight">
              Md Sahil Alam
            </h1>
            <p className="ml-3 text-alai">
              Bangalore based Software Engineer building real-world full-stack
              products with a strong engineering mindset. Experienced with
              Next.js, React, Node.js, and MongoDB.
            </p>
          </div>
        </section>

        <section className="rightsec">left side </section>
      </section>
    </main>
  );
}
