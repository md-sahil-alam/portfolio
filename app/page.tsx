import FallingText from "@/components/FallingText";
import Magnet from "@/components/Magnet";
import StarBorder from "@/components/StarBorder";
import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";
import ScrollFloat from "@/components/ScrollFloat";
import TiltedCard from "@/components/TiltedCard";
import LogoLoop from "@/components/LogoLoop";
import Form from "next/form";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub, FaFileDownload } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-100">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "#Projects" },
            { label: "Contact", href: "#contact" },
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
                as="a"
                href="/demoresume.pdf"
                download="MdSahilAlam_Resume.pdf"
                title="Download resume"
                className="custom-class"
                color="cyan"
                speed="5s">
                Download resume
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
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Sills"
      />
      {/* Projects */}
      <section className="projects-wrapper">
        <section className="prj flex justify-center">
          <div className="prjtxt">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.01}>
              Projects
            </ScrollFloat>
          </div>
        </section>

        <div className="stprg">
          <div className="leftprg">
            <div className="contentprg w-1/2">
              <h1>Project one</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cum earum soluta tenetur, quisquam, facere iste
                deleniti harum quis animi doloribus quasi maiores tempore
                temporibus aut tempora odio ipsam minus.
              </p>
              <StarBorder
                as="button"
                title="github repo"
                className="custom-class"
                color="cyan"
                speed="5s">
                <FaGithub />
              </StarBorder>
            </div>
          </div>
          <div className="rightprg">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Wonderlust project img"
              captionText="wonderlust.com"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<h6 className="tilted-card-demo-text">Click</h6>}
            />
          </div>
        </div>

        <div className="stprg">
          <div className="ndrightprg">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Wonderlust project img"
              captionText="wonderlust.com"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <h6 className="tilted-card-demo-text shadow-2xl">Click</h6>
              }
            />
          </div>

          <div className="ndleftprg">
            <div className="contentprg w-[75%]">
              <h1>Project one</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cum earum soluta tenetur, quisquam, facere iste
                deleniti harum quis animi doloribus quasi maiores tempore
                temporibus aut tempora odio ipsam minus.
              </p>
              <StarBorder
                as="button"
                title="github repo"
                className="custom-class"
                color="cyan"
                speed="5s">
                <FaGithub />
              </StarBorder>
            </div>
          </div>
        </div>
      </section>

      <div className="stprg">
        <div className="leftprg">
          <div className="contentprg w-1/2">
            <h1>Project three </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cum earum soluta tenetur, quisquam, facere iste deleniti harum
              quis animi doloribus quasi maiores tempore temporibus aut tempora
              odio ipsam minus.
            </p>
            <StarBorder
              as="button"
              className="custom-class"
              title="github repo"
              color="cyan"
              speed="5s">
              <FaGithub />
            </StarBorder>
          </div>
        </div>
        <div className="rightprg">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Wonderlust project img"
            captionText="wonderlust.com"
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<h6 className="tilted-card-demo-text">Click</h6>}
          />
        </div>
      </div>

      <section className="contact min-h-screen w-full flex justify-center ">
        <div className="contactcard rounded-2xl h-[70vh] w-[80%] flex justify-center shadow-2xl  ">
          <div className="h-full w-1/2 rounded-2xl ml-2 con">
            <h1>lets connect</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              aliquam. Quibusdam consectetur perspiciatis necessitatibus placeat
              fuga provident adipisci eligendi, id earum tempore quaerat
              possimus debitis corrupti alias minus at laboriosam!
            </p>
          </div>

          <div className=" con h-full w-1/2 rounded-2xl ">
            <form action="submit">
              <label htmlFor="Name">Name</label>
              <br />
              <input type="text" className="borde p-2 w-1/2" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
