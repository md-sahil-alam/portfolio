import FallingText from "@/components/FallingText";
import Magnet from "@/components/Magnet";
import StarBorder from "@/components/StarBorder";
import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";

export default function Home() {
  return (
    <main>
      <nav className="sticky z-100 flex justify-center max-w-full">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </nav>
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

            <Magnet>
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s">
                Resume
              </StarBorder>
            </Magnet>
          </div>
        </section>
        <section className="rightsec">
          <div className="imgdiv">
            <img src="/sahilphoto.jpg" alt="my img" />
            <div className="falling-layer">
              <FallingText
                text=" Humeres Creative Problem-solver Team-Player Understanding"
                highlightWords={["Creative", "Team-Player", "Problem-solver"]}
                highlightClass="bg-white/10 px-2 py-1 rounded-md backdrop-blur text-white"
                fontSize="2.1rem"
              />
            </div>
          </div>
        </section>
      </section>

      {/* Projects */}
      <section className="prj">dfdsa</section>
    </main>
  );
}
