import React from "react";
import { Link } from "react-router-dom";
import avi from "./images/avi.png";
import "./Index.css";
import avinash from "./images/avinash.jpg";
import a1 from "./images/a1.png";
import a2 from "./images/a2.png";
import a3 from "./images/a3.png";
import a4 from "./images/a4.png";
import Typed from "react-typed";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Collapsible from "react-collapsible";
import { FaUserAstronaut, FaHome, FaRegEnvelope } from "react-icons/fa";
import a from "../component/images/a.png";
import b from "../component/images/b.png";
import c from "../component/images/c.jpg";
import d from "../component/images/d.png";
import e from "../component/images/e.png";
import f from "../component/images/f.jpg";
import g from "../component/images/g.png";
import h from "../component/images/h.png";
import i from "../component/images/i.png";
import ProgressBar from "@ramonak/react-progress-bar";
import avi1 from "./images/avi1.jpeg";
import avi2 from "./images/avi2.jpeg";
import avi6 from "./images/avi6.png";

function Index() {
  return (
    <React.Fragment>

    <div className="flex justify-between items-center w-full p-20 max-w-full py-4 mx-auto bg-white position: fixed">
      <Link to="/">
        <img src={avi} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>
    <div>
      <nav>
        <ul className="text-richblack-100 flex gap-x-8">
          <li>
          <a href="#avi-1"> Home</a>
          </li>
          <li>
          <a href="#avi-2"> About </a>
          </li>
          <li>
          <a href="#avi-3"> Skill </a>
          </li>
          <li>
          <a href="#avi-4"> Project </a>
          </li>
          <li>
          <a href="#avi-5"> Contact </a>
          </li>
        </ul>
      </nav>
    </div>
    </div>


    <div id="avi-1" >
      <div id="wrapper">
        <div class="container">
          <div class="hero-section">
            <div class="hero-section-left">
              <div  class="hero-section-heading">Hi! Avinash</div>

              <div class="hero-section-heading hero-section-sub-heading">
                I am a{" "}
                <span class="role">
                  <Typed
                    strings={["Frontend developer"]}
                    typeSpeed={60}
                    loop={true}
                    backSpeed={50}
                  />
                </span>
              </div>

              <div class="hero-section-description">
                I’m a Frontend developer developer and here is my portfolio
                website. Here you’lllearn about my journey as a software
                developer.
              </div>

              <div class="btn-pink" id="btn">
                Hire me
              </div>
            </div>

            <div class="hero-section-right">
              <br />
              <br />
              <div class="absolute icons icon-dots">
                <br />
                <br />
                <img src={a1} alt="" width="100px" height="100px" />
              </div>
              <div class="absolute icons icon-cube">
                <img src={a2} alt="" width="100px" height="100px" />
              </div>
              <div class="absolute icons icon-circle">
                <img src={a3} alt="" width="100px" height="100px" />
              </div>
              <div class="absolute icons icon-zigzag">
                <img src={a4} alt="" width="100px" height="100px" />
              </div>
              <div class="user-image">
                <img src={avinash} alt="" width="300px" height="300px" />
              </div>
            </div>
          </div>
        </div>
   </div>

{/* -----------------------------about----------------------------------- */}

<div id="avi-2">
        <div className="w-full bg-yellow-100 py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img  className="w-[250px] mx-auto my-4" src={avinash} alt="/" />
          <div className="flex flex-col">
            <h1   className="text-[#00df9a] font-bold text-[30px]">About us</h1>
            <br />
            <p>
              {" "}
              My name is avinash. I have done 1 years IT diploma course in Web
              developer from (NSQF Level 4) WCSC world Class skill center Vivek
              Vihar Delhi. i also have total experience 3 years and 6 months in 
              Frontend developer. React Js( Redux, Component Api ,
Hook, Fetch Api, Props ), ES6,
JavaScript, CSS 3 Tailwind-CSS,
Bootstrap4, Git, HTML5, Canva,
Figma.{" "}</p><br/>
<p>My strengths are my learning
attitude, punctuality, and
interpersonal skills. My field and
expertise lie in Web Development
I am looking for an opportunity to
work in an organization where
my academic knowledge will be
utilized for the betterment of that
organization and my personal
growth</p>

            
            {/* <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get Started
            </button> */}
          </div>
        </div>
        {/* <h1 className='text-[#df001e] font-bold text-center text-[30px]'>Graduation</h1> */}
        <div>
          <Collapsible
            className="text-font text-center"
            trigger="Graduation"
            triggerStyle={{
              color: "red",
              fontSize: 25,
              fontWeight: "bold",
              text: "center",
              textTransform: "capitalize",
            }}
            open={false}
            transitionTime={1000}
          >
            <br />
            <div>
              <h1>10thFrom U.P Board. (2011)</h1>
              <br />

              <h1>12th From U.P Board. (2013)</h1>
              <br />

              <h1>B.Sc. from Ambedkar University (U.P) (2017)</h1>
              <br />

              <h1>
                Software Testing Assistant Course (NSQF Level 4) from world
                class skill center Vivek Vihar Delhi. (2018)
              </h1>
              <br />
            </div>
          </Collapsible>
          <br />

          <Collapsible
            className="text-font text-center"
            trigger="Front And Web Developer Experience"
            triggerStyle={{
              color: "red",
              fontSize: 25,
              fontWeight: "bold",
              text: "center",
              textTransform: "capitalize",
            }}
            open={false}
            transitionTime={1000}
          >
            <br />
            <div>
            <p>AppWars Technologies pvt ltd (Mar 2021 -
Oct 2023)</p>
<p>I have worked as a front-end developer (React JS, ES6,
Javascript, Tailwind CSS, CSS3 , Bootstrap4, HTML5,
Canva, Github, Figma). I Worked On this.
Website1 : https://appwarstechnologies.com/,
website 2 : https://www.booksby.online/</p><br/>
<p>Gail India Ltd (Sep 2019 - Oct 2020)</p>
<p>I have worked as a front-end developer of HTML, CSS, and
JavaScript. On this website: https://www.gailonline.com/</p><br/>

<p>I have worked as a freelancer for 1 year (Jun
2018 -Aug 2019)</p>
<p>I have worked as a front-end developer of HTML, CSS,
and JavaScript. Canva On the website: reviewforhealth.com</p><br/>
            </div>
          </Collapsible>
        </div>
      </div>

    </div>

{/* ----------------------skill------------------ */}

<div id="avi-3" >
<div className="w-full bg-white ">
        <br />
        <br />
        <br />
        <p className="text-center text-red-600">
          My creative skills & experience
        </p>
        <p className="text-center text-red-600">
          My strengths are my learning attitude,punctuality and interpersonal
          skills.My field and expertise lie in We🅱 Development and i also have a
          experience Front End Developer as an intern in UX-prodX company for 4
          months.I am looking for an apportunity to work in an organization
          where my academic knowledge will 🅱e utilized foe 🅱etterment of that
          organiztion as well as my personal growth.
        </p>
        <br />
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="h-[450px] bg-[white] shadow-xl flex flex-col  rounded-lg hover:scale-105 duration-300">
            <img
              className="w-15px  mx-auto mt-[3rem] bg-white"
              src={a}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Frontend Developer
            </h2>
            <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-0 mx-auto px-3 py-1">
              Hyper text markup language
            </button>
            <br />
            <ProgressBar completed={80} customLabel="80%" />
          </div>

          <div className="h -[450px] shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-15px h-[200px] mx-auto mt-[3rem] bg-white"
              src={b}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Frontend Developer
            </h2>
            <button className="bg-black text-[#00df9a] w-[330px] rounded-md font-medium my-3 mx-auto px-3 py-1">
              CSS stands for Cascading Style
            </button>
            <ProgressBar completed={75} customLabel="75%" />
          </div>
          <div className="h-[450px] bg-[white] shadow-xl flex flex-col  rounded-lg hover:scale-105 duration-300">
            <img
              className="w-15px  mx-auto mt-[3rem] bg-white"
              src={c}
              alt="/"
            />
            <br />
            <h2 className="text-2xl font-bold text-center py-3">
              Frontend Developer
            </h2>
            <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-0 mx-auto px-3 py-1">
              Bootstrap_4
            </button>
            <br />
            <ProgressBar completed={70} customLabel="70%" />
          </div>
        </div>

        <div className="w-full py-[4rem] px-4 bg-white">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="h-[450px] bg-[white] shadow-xl flex flex-col  rounded-lg hover:scale-105 duration-300">
              <img
                className="w-15px  mx-auto mt-[3rem] bg-white"
                src={d}
                alt="/"
              />
              <br />
              <br />
              <br />
              <h2 className="text-2xl font-bold text-center py-3">
                Frontend Developer
              </h2>
              <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-0 mx-auto px-3 py-1">
                Tailwind_SCC
              </button>
              <br />
              <ProgressBar completed={65} customLabel="65%" />
            </div>
            <div className="h-[450px] shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-15px h-[200px] mx-auto mt-[3rem] bg-white"
                src={e}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-3">
                Frontend Developer
              </h2>
              <button className="bg-black text-[#00df9a] w-[330px] rounded-md font-medium my-3 mx-auto px-3 py-1">
                JavaScript
              </button>
              <br />
              <ProgressBar completed={72} customLabel="72%" />
            </div>
            <div className="h-[450px] bg-[white] shadow-xl flex flex-col  rounded-lg hover:scale-105 duration-300">
              <img
                className="w-15px  mx-auto mt-[3rem] bg-white"
                src={f}
                alt="/"
              />
              <br />
              <br />
              <br />
              <br />
              <h2 className="text-2xl font-bold text-center py-3">
                Frontend Developer
              </h2>
              <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-0 mx-auto px-3 py-1">
                React_Js
              </button>
              <br />
              <ProgressBar completed={65} customLabel="65%" />
            </div>
          </div>

          <div className="w-full py-[2rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="h-[400px] bg-[white] shadow-xl flex flex-col  rounded-lg hover:scale-105 duration-300">
                <img
                  className="w-15px  mx-auto mt-[3rem] bg-white"
                  src={g}
                  alt="/"
                />
                <br />
                <h2 className="text-2xl font-bold text-center py-3">
                  Frontend Developer
                </h2>
                <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-0 mx-auto px-3 py-1">
                  Github
                </button>
                <br />
                <ProgressBar completed={50} customLabel="50%" />
              </div>
              <div className="h-[400px] shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                <img
                  className="w-15px h-[200px] mx-auto mt-[3rem] bg-white"
                  src={h}
                  alt="/"
                />
                <h2 className="text-2xl font-bold text-center py-3">
                  Frontend Developer
                </h2>
                <button className="bg-black text-[#00df9a] w-[330px] rounded-md font-medium my-3 mx-auto px-3 py-1">
                  CSS stands for Cascading Style Sheets
                </button>
                <ProgressBar completed={63} customLabel="63%" />
              </div>
              <div className="h-[400px] bg-[white] shadow-xl flex flex-col  rounded-lg hover:scale-105 duration-300">
                <img
                  className="w-15px  mx-auto mt-[3rem] bg-white"
                  src={i}
                  alt="/"
                />
                <br />
                <h2 className="text-2xl font-bold text-center py-3">
                  Frontend Developer
                </h2>
                <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-0 mx-auto px-3 py-1">
                  Canva
                </button>
                <br />
                <ProgressBar completed={68} customLabel="68%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   {/* -----------------------------------project---------------------- */}

<div id="avi-4">
   <div className="w-full bg-yellow-100 h-[100%] py-4 px-4 border ">
        <h1   className="text-[#00df9a] font-bold text-center text-[30px]">
          My <span className="text-red-400">Project</span>
        </h1>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
          <div className="flex flex-col px-2 text-center ">
            <div className="bg-green-200 h-[66%] flex my-2 gap-2 py-0">
              <img className="w-[40%] mx-auto my-4" src={avi1} alt="/" />
              <img className="w-[40%] mx-auto my-4" src={avi2} alt="/" />
            </div>
            <br />

            <div className="bg-red-200">
              <p className="justify-center py-2 my-2 text-center">
                The National Council of Educational Research and Training
                (NCERT) revises the syllabus for classes 6 to 12 for all
                subjects. The NCERT syllabus is developed under the national
                curriculum framework (NCF). All the NCERT books are printed on
                the basis of this prescribed NCERT syllabus 2023. Most CBSE
                schools follow the syllabus and textbooks of NCERT as
                recommended by the authorities.
              </p>
              {/* <button
                className="bg-green-400 text-white w-[200px] rounded-md 
          font-medium my-6 mx-auto md:mx-0 py-3"
              >
                Get Started
              </button> */}
            </div>
          </div>
          <div className="flex flex-col px-2 text-center ">
            <div className="bg-green-200 h-[66%] flex my-2 gap-2 py-0">
              <img className="w-[80%] mx-auto my-4" src={avi6} alt="/" />
            </div>
            <br />

            <div className="bg-red-200">
              <p className="justify-center py-2 my-2 text-center">
                Ecommerce is a method of buying and selling goods and services
                online. The definition of ecommerce business can also include
                tactics like affiliate marketing. You can use ecommerce channels
                such as your own website, an established selling website like
                social media to drive online sales. E-commerce typically uses
                the web for at least a part of a transaction's life cycle
                although it may also use other technologies such as e-mail.
              </p>
              {/* <button
                className="bg-green-400 text-white w-[200px] rounded-md 
          font-medium my-6 mx-auto md:mx-0 py-3"
              >
                Get Started
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 bg-black text-white px-4">
          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-3 my-4">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Frontend Developer
              </h1>
              <br />
              <p>
                My strengths are my learning attitude,punctuality and
                interpersonal skills.My field and expertise lie in Web
                Development and i also have a experience Front End Developer as
                an intern in AppWars Technologies company for 2 years and 6
                months.I am looking for an apportunity to work in an
                organization where my academic knowledge will be utilized foe
                betterment of that organiztion as well as my personal growth.
              </p>
            </div>
          </div>
        </div>
    </div>
{/* ----------------------------------contact------------------------ */}

<div id="avi-5">
<div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div>
            <div  className="font-bold text-[30px] my-8">know me more</div>
            <p>For any query and knowing me more you can freely contact me .</p>
            <br />
            <div>
              <div className="flex gap-10 py-4">
                <FaUserAstronaut className="text-red-400" />
                <div>
                  <div className="font-bold ">Name</div>
                  <div>Avinash</div>
                </div>
              </div>
              <div className="flex gap-10 py-4">
                <FaHome className="text-red-400" />
                <div>
                  <div className="font-bold ">Address</div>
                  <div>Noida, Utter Pradesh</div>
                </div>
              </div>
              <div className="flex gap-10 py-4">
                <FaRegEnvelope className="text-red-400" />
                <div>
                  <div className="font-bold ">Email</div>
                  <div>avinashindian@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <br />
            <br />
            <form className="flex flex-col w-full gap-4 mr-6 bg-red-300">
              <label className="w-full">
                <p className="text-black text-bold text-[0.875rem] mb-1 leading-[1.375rem]">
                  ...Name
                  <sup className="text-red-600">*</sup>
                </p>
                <input
                  required
                  type="text"
                  placeholder="Enter text"
                  name="text"
                  className="bg-black-800 rounded-[0.5rem] text-black  border border-line-blue w-full p-[12px]"
                />
              </label>
              <br />
              <label className="w-full">
                <p className="text-black text-[0.875rem] mb-1 leading-[1.375rem] text-bold">
                  ...Email Address
                  <sup className="text-red-600">*</sup>
                </p>
                <input
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  className="bg-black-800 rounded-[0.5rem] text-black  border border-line-blue w-full p-[12px]"
                />
              </label>

              <label className="w-full">
                <p className="text-black text-[0.875rem] mb-1 leading-[1.375rem] text-bold">
                  ...Message
                  <sup className="text-red-600">*</sup>
                </p>
                <textarea
                  type="message"
                  placeholder="Enter message"
                  name="message"
                  className="bg-black-800 rounded-[0.5rem] text-black  border border-line-blue w-full p-[12px]"
                />
              </label>

              <button className="bg-black text-white w-[200px]  rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>

        <div className=" max-w-[full] mx-auto py-9 bg-blue-300 px-4 grid lg:grid-cols-3 gap-8 text-black">
          <div>
            <h1  className="w-full text-3xl font-bold text-red-500">
              Contact</h1>
            <p className="py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
              ullam iste repellat consequatur libero reiciendis, blanditiis
              accusantium.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
              <h6 className="font-medium text-red-500">Solutions</h6>
              <ul>
                <li className="py-2 text-sm">Html</li>
                <li className="py-2 text-sm">Css</li>
                <li className="py-2 text-sm">JavaScript</li>
                <li className="py-2 text-sm">React_js</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-red-500">Support</h6>
              <ul>
                <li className="py-2 text-sm">Github</li>
                <li className="py-2 text-sm">Figma</li>
                <li className="py-2 text-sm">Canav</li>
                <li className="py-2 text-sm">Tailwind</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-red-500">About_us</h6>
              <ul>
                <li className="py-2 text-sm">Home</li>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Skills</li>
                <li className="py-2 text-sm">Project</li>
                <li className="py-2 text-sm">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="text-center bg-white">
         <a className="text-center text-red-400">Avinash</a>
          
        </h1>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
