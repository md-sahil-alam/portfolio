import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
export default function About() {
  return (
    <main>
      <nav className="sticky top-0 z-100 w-auto ">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#project" },
            { label: "Contact", href: "#contact" },
            { label: "⬆️", href: "#home" },
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

      <section className="min-h-screen w-screen bg-amber-400 flex flex-wrap ">
        <div className="card h-auto"></div>|
        <BlogCard />
      </section>
    </main>
  );
}
