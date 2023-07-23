import "./home-style.css";
import { useState, useRef } from "react";

function Home() {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState<number>(0);
  const [index1, setIndex1] = useState<number>(0);
  const [content /*setContent*/] = useState<string[][]>([
    [
      "../patennalog.jpg",
      "../patennalog1.jpg",
      "../patennalog2.jpg",
      "../patennalog3.jpg",
      "../patennalog5.jpg",
      "../patennalog6.jpg",
    ],
    ["../musclevol1.png", "../musclevol2.png", "../musclevol3.png"],
    ["../passgen.png", "../passgen2.png"],
    ["../calcimg.png"],
  ]);
  const img = useRef<any>(null);
  const Pdescription = useRef<any>(null);
  const maxIndex: number = 2;
  const minIndex: number = 0;
  // const [maxIndex1, setMaxIndex1] = useState<number>(1);

  const description = [
    "A C# app with MySql database built to satisfy the need of digitalising travel warrants and tracking expenses for businesses.",
    "Website made for gym newbies and advanced lifters to get on another level.(avaliable for use soon)",
    "Password Generator Extension, to generate and safely store your passwords.(avaliable for use soon)",
    "Just a regular calculator with history function made in React.",
  ];
  // const [content, setContent] = useState("");
  // const [properties, setProperties] = useState("");
  // const [description, setDescription] = useState("");

  const btnTop = () => {
    let i: number = index;
    ++i;
    setIndex(i);

    if (index > maxIndex) {
      setIndex(minIndex);
    }

    setIndex1(0);
    let updateContent = content;
    img.current.src = updateContent[index][0];
    Pdescription.current.textContent = description[index];
    // setContent(updateContent);
    // img.current.src = content.toString;
  };

  const btnBottom = () => {
    let i: number = index;
    --i;
    setIndex(i);

    if (index < minIndex) {
      setIndex(maxIndex);
    }

    setIndex1(0);
    let updateContent = content;
    img.current.src = updateContent[index][0];
    Pdescription.current.textContent = description[index];
  };

  const btnLeft = () => {
    let i: number = index1;
    --i;
    setIndex1(i);

    if (index1 == 0) {
      setIndex1(content[index].length - 1);
    }

    let updateContent = content;
    img.current.src = updateContent[index][index1];
  };

  const btnRight = () => {
    // let i: number = index1;
    // ++i;
    // setIndex1(i);

    // if (index1 > content[index].length) {
    //   setIndex1(minIndex);
    //   console.log(index1);
    // }

    // let updateContent = content;
    // img.current.src = updateContent[index][index1];
    let i: number = index1;
    ++i;
    setIndex1(i);

    if (index1 == content[index].length) {
      setIndex1(0);
    }

    let updateContent = content;
    img.current.src = updateContent[index][index1];
  };

  const emailClick = () => {
    setValue("matej.stojceski4043@gmail.com");
  };

  const phoneClick = () => {
    setValue("+389 72 219 115");
  };

  return (
    <>
      <div className="navbar">
        <p className="navheading">&lt;c0ce&gt;</p>

        <a className="homenav" href="#home">
          &lt;/home&gt;
        </a>
        <a className="worknav" href="#work">
          &lt;/work&gt;
        </a>
        <a className="aboutnav" href="#about">
          &lt;/about&gt;
        </a>
        <a className="contactnav" href="#contact">
          &lt;/contact&gt;
        </a>

        <p className="navheading1">&lt;/c0ce&gt;</p>
      </div>
      <div className="container">
        <div id="home" className="home">
          {/* <img className="logo" src="../logo.png"></img> */}
          <div className="homeheading">
            <p className="hometitle">Hi, my name is </p>
            <p className="hometitlebg">Matej Stojcheski</p>.<br></br>
          </div>
          <p className="homep">
            A High School student with<br></br>
            enthusiasm and passion towards <br></br>
            many things, technology being <br></br>
            one of them.
          </p>
        </div>

        <div id="work" className="work">
          <p className="worktitle">&lt;/work&gt;</p>

          <div className="workdiv">
            <p className="description" ref={Pdescription}>
              {description[index]}
            </p>
            <button className="top" onClick={btnTop}></button>
            <br></br>
            <img src={content[index][0]} className="workimg" ref={img}></img>
            <button className="left" onClick={btnLeft}></button>
            <button className="right" onClick={btnRight}></button>
            <br></br>
            <button className="bottom" onClick={btnBottom}></button>
          </div>
        </div>

        <div id="about" className="about">
          <p className="abouttitle">&lt;/about&gt;</p>
          <br></br>
          <p className="educationtitle">&lt;/education&gt;</p>
          <p className="educationp">
            Computer Technology and Automation, ELectrotechnical High School
            “Mihajlo Pupin”, Skopje<br></br>
            2020 - 2024<br></br>
            Every year passed with a GPA above of 4.67(out of 5.00).{" "}
          </p>

          <p className="internshipstitle">&lt;/internships&gt;</p>
          <p className="internshipsp">
            Computer Technician at Setec, Skopje<br></br>
            2021<br></br>
            #hardware<br></br>
            Software Development education at Aspekt, Skopje<br></br>
            2022<br></br>
            #HTMl, #CSS, #SQL<br></br>
            Software Developer at Marek Engineering ,Skopje<br></br>
            10/2022 - 06/2023<br></br>
            #C#, #MySql, #SQL, #.NET<br></br>
            Created a .NET Windows Form application, in a team of two. The app
            was made to be used by<br></br>
            companies to digitalise travel warrants, keep track of them and the
            expenses they made,<br></br>
            as well as their vehicles.
          </p>

          <p className="employmenttitle">&lt;/employment&gt;</p>
          <p className="employmentp">
            Front - End Developer at Marek Engineering, Skopje<br></br>
            07/2023 - 2023<br></br>
            Working on a WebApp in React.
          </p>
        </div>

        <div id="contact" className="contact">
          <p className="contacttitle">&lt;/contact&gt;</p>
          <br></br>
          <img
            className="emailimg"
            src="../email.png"
            onClick={emailClick}
          ></img>
          <a href="https://instagram.com/matej_4043?igshid=NTc4MTIwNjQ2YQ==">
            <img className="instaimg" src="../instagram.png"></img>
          </a>
          <img
            className="phoneimg"
            onClick={phoneClick}
            src="./phone.png"
          ></img>
          <p className="info">{value}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
