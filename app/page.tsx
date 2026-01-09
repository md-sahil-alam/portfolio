import FallingText from "@/components/FallingText";
import Magnet from "@/components/Magnet";
import StarBorder from "@/components/StarBorder";
import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";
import ScrollFloat from "@/components/ScrollFloat";
import TiltedCard from "@/components/TiltedCard";
import LogoLoop from "@/components/LogoLoop";
import SkillsSection from "@/components/Skill";
// import TargetCursor from "@/components/TargetCursor";
import { ArrowUp } from "lucide-react";
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

      {/* Hero Section */}

      <section className="main" id="home">
        <section className="leftsec">
          <div className="leftsec">
            <h1 className="text-4xl font-semibold tracking-tight">
              Md Sahil Alam
            </h1>
            <p className="ml-3 text-alai z-10-">
              Bangalore based Software Engineer building real-world full-stack
              products with a strong engineering mindset. Experienced with
              Next.js, React, Node.js, and MongoDB.
            </p>
            <div className=" herobtn">
              <StarBorder
                as="a"
                href="#contact"
                title="Contact"
                className="custom-class shadow-md z-10 cursor-target"
                color="cyan"
                speed="5s">
                contact
              </StarBorder>

              <Magnet>
                <StarBorder
                  as="a"
                  href="/demoresume.pdf"
                  download="MdSahilAlam_Resume.pdf"
                  title="Download resume"
                  className="custom-class shadow-md z-0 "
                  color="cyan"
                  speed="5s">
                  Resume 📩
                </StarBorder>
              </Magnet>
            </div>
          </div>
        </section>
        <section className="rightsec">
          <div className="imgdiv">
            <img src="/sahilphoto.jpg" alt="my img" />
            <div className="falling-layer ">
              <FallingText
                text=" Humeres Creative ProblemSolver TeamPlayer Understanding Fastlearner"
                highlightWords={["TeamPlayer", "ProblemSolver", "Fastlearner"]}
                highlightClass="bg-amber-400/10 px-2 py-1 rounded-md backdrop-blur text-white"
                fontSize="2.1rem"
              />
            </div>
          </div>
        </section>
      </section>
      {/* skills */}
      <div className="flex justify-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}>
          Skills
        </ScrollFloat>
      </div>

      <section className="skills min-h-screen w-screen flex justify-center relative flex-wrap">
        {/* <TargetCursor
          spinDuration={6.6}
          hideDefaultCursor={false}
          hoverDuration={0.4}
        /> */}
        <SkillsSection />

        <div className="skillseft tlsk h-1/2 w-1/2  " id="skills">
          <h3>Frontend</h3>
          <div className="w-[60%]  min-h-[50%] shadow-md rounded-2xl cardsk cursor-target ">
            <div className="capsule border-2 cursor-target shadow-md ">
              HTML
            </div>
            <div className="capsule cursor-target  shadow-md">CSS</div>
            <div className="capsule cursor-target  shadow-md">JavaScript</div>
            <div className="capsule cursor-target  shadow-md">React</div>
            <div className="capsule cursor-target  shadow-md">Bootstrap</div>
            <div className="capsule cursor-target  shadow-md">tailwindcss</div>
          </div>
        </div>

        <div className="skillseft tlsk h-1/2 w-1/2   ">
          <h3>Backend</h3>
          <div className="min-w-[50%]  min-h-[50%] shadow-md rounded-2xl cursor-target  cardsk">
            <div className="capsule border-2 cursor-target  shadow-md ">
              Node.js
            </div>
            <div className="capsule cursor-target  shadow-md">Nest.js</div>
            <div className="capsule cursor-target  shadow-md">Express.js</div>
            <div className="capsule cursor-target  shadow-md">PHP</div>
          </div>
        </div>

        <div className="skillseft tlsk h-1/2 w-1/2   ">
          <h3>Languages</h3>
          <div className="min-w-[50%]  min-h-[50%] shadow-md rounded-2xl cursor-target  cardsk">
            <div className="capsule border-2 cursor-target  shadow-md ">
              Java
            </div>
            <div className="capsule cursor-target  shadow-md">JavaScript</div>
            <div className="capsule cursor-target  shadow-md">TypeScript</div>
            <div className="capsule cursor-target  shadow-md">C</div>
            <div className="capsule cursor-target  shadow-md">Python</div>
          </div>
        </div>

        <div className="skillseft tlsk h-1/2 w-1/2   ">
          <h3>DataBase&tools</h3>
          <div className="min-w-[50%]  min-h-[50%] shadow-md rounded-2xl cursor-target  cardsk">
            <div className="capsule cursor-target  border-2  shadow-md ">
              Mongodb
            </div>
            <div className="capsule cursor-target  shadow-md">SQL</div>
            <div className="capsule cursor-target  shadow-md">Git</div>
            <div className="capsule cursor-target  shadow-md">Github</div>
            <div className="capsule cursor-target  shadow-md">Postman</div>
            <div className="capsule cursor-target  shadow-md">Docer</div>
          </div>
        </div>
      </section>

      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={38}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Sills"
      />
      {/* Projects */}
      <section className="projects-wrapper " id="project">
        <section className="prj flex justify-center">
          <div className="prjtxt opacity-25">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.02}>
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
                as="div"
                title="github repo"
                className="custom-class shadow-md cursor-target"
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
              <h1>Project two</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cum earum soluta tenetur, quisquam, facere iste
                deleniti harum quis animi doloribus quasi maiores tempore
                temporibus aut tempora odio ipsam minus.
              </p>
              <StarBorder
                as="button"
                title="github repo"
                className="custom-class shadow-md cursor-target"
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
              Lorem, ipsum dolor facere iste deleniti harum quis animi doloribus
              quasi maiores tempore temporibus aut tempora odio ipsam minus.
            </p>
            <StarBorder
              as="button"
              className="custom-class shadow-md cursor-target"
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

      {/* contact */}
      <section className="contact min-h-screen w-full flex flex-wrap justify-center align-middle ">
        <div className="contactcard rounded-2xl h-[70vh] w-[80%] flex justify-center align-middle shadow-2xl  ">
          <div className="h-full w-1/2 rounded-2xl ml-2 conr">
            <h1>lets connect</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              aliquam. Quibusdam consectetur perspiciatis necessitatibus placeat
              fuga provident adipisci eligendi, id earum tempore quaerat
              possimus debitis corrupti alias minus at laboriosam!
            </p>
          </div>

          <div className="con h-full w-1/2 rounded-2xl " id="contact">
            <form action="submit">
              <div className="flex ">
                <div className=" w-1/2">
                  <label htmlFor="Name">Name:</label>
                  <br />
                  <input type="text" className="borde p-2 cursor-target" />
                </div>

                <div className="">
                  <label htmlFor="Name">Phone no.:</label>
                  <br />
                  <input type="number" className="borde p-2 cursor-target" />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name=""
                id=""
                className="w-full mr-2.5 cursor-target"
              />
              <br />

              <label htmlFor="subject">Subject</label>
              <br />
              <input
                type="text"
                name=""
                id=""
                className="w-full mr-2.5 cursor-target"
              />
              <br />

              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name=""
                id=""
                className="w-full mr-2.5 cursor-target"></textarea>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
