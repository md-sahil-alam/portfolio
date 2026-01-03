import Link from "next/link";
import Image from "next/image";
import FallingText from "@/components/FallingText";

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

        <section className="rightsec">
          <div className="imgdiv">
            <img src="/sahilphoto.jpg" alt="my img" />
            <div className="falling-layer">
              <FallingText
                text="sdfgdf • gsdfgsdf  • gsdfgsd "
                fontSize="2.4rem"
                mouseConstraintStiffness={1}
                trigger="auto"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
