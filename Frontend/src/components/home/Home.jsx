import React, { useContext, useEffect ,useRef,useState} from "react";
import "./home.css";
import Animate from "./Animate";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import Context from "../../contexts/context";

import { Reload } from "../../Functions/Reload";


export default function Home() {

  // logout()
  useEffect(()=>{
    localStorage.removeItem("LoginReload");
    Reload("HomeReload");    
  } , []);

  const {UserName} = useContext(Context);

  async function sendData() {

    const data = {
      UserName : localStorage.getItem("UserName")
    }

    fetch("http://localhost:8080/data",{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
    }).then(()=>{
      console.log("recive succesufuuly")
    })

    // const data = await api.json();

  }

   async function getData(){
    const api = await fetch("http://localhost:8080/api/home");
    const data = await api.json();
    return data;
  }

  


  async function main() {
   try{
    const data = await getData();
    // console.log(data)
    if(data.userName){
      console.log(data.userName)
    window.localStorage.setItem("UserName" , data.userName);
    window.localStorage.setItem("email" , data.emailId);
    window.localStorage.setItem("Country" , data.details.country);
    window.localStorage.setItem("Contact" , data.details.contactNo);

    window.localStorage.setItem("leetcode" ,data.userNames.leetcode);
    window.localStorage.setItem("gfg" ,data.userNames.gfg);
    window.localStorage.setItem("codechef" ,data.userNames.codechef);

    window.localStorage.setItem("github" ,data.accounts.github);
    window.localStorage.setItem("linkedlin" ,data.accounts.linkedlin);
    window.localStorage.setItem("discord" ,data.accounts.discord);

    
      
    }
   }catch(err){
    console.log(err,'jaytay')
   }
  }

  useEffect(()=>{
    main();
    if(localStorage.getItem("UserName"))
      sendData();
  } ,[])




  setTimeout(()=>{
    var h2 = document.querySelector("h2");
    var h2T = h2.textContent;
    var splittedtext = h2T.split("");
    var half = Math.floor(splittedtext.length / 2);

        var clutter1 = "";
        splittedtext.forEach(function (e, idx) {
          if (idx < half) {
            clutter1 += `<span class="a">${e}</span>`;
          } else {
            clutter1 += `<span class="b">${e}</span>`;
          }
        });

        h2.innerHTML = clutter1;

        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });
  },100)


  window.addEventListener("wheel", function (dets) {
    
    if(this.document.querySelector(".marque")){
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".marque img", {
          rotate: 0,
        });
      }
    }
  });
  setTimeout(()=>{
    gsap.from("h2 .a", {
        y: 50,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.15,
        opacity: 0,
      });
  
      gsap.from("h2 .b", {
        y: 50,
        duration: 0.8,
        delay: 0.5,
        stagger: -0.15,
        opacity: 0,
      });
    
},200)

  

  return (
    
    <div>
     
      <div className="rightimage">
        <div className="content">
          <h2>Welcome to AlgoAnims!!</h2>
          <br />
          <h1>Unlock the World of Algorithms</h1>
          <br />
          <p>
            Say goodbye to dry textbooks! Our dynamic animations simplify
            complex concepts, making it easier for you to grasp the essentials
            of algorithms.
          </p>
        </div>

        <div className="image">
          <img src="./intro_laptop.avif" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />{" "}
      <div id="page2">
        <div id="move">
          <div className="marque">
            <h3>dive into algorithm</h3>
            <img src="arrow-br.svg" alt="arrow" />
          </div>
          <div className="marque">
            <h3>dive into algorithm</h3>
            <img src="arrow-br.svg" alt="arrow" />
          </div>
          <div className="marque">
            <h3>dive into algorithm</h3>
            <img src="arrow-br.svg" alt="arrow" />
          </div>
          <div className="marque">
            <h3>dive into algorithm</h3>
            <img src="arrow-br.svg" alt="arrow" />
          </div>
          <div className="marque">
            <h3>dive into algorithm</h3>
            <img src="arrow-br.svg" alt="arrow" />
          </div>
          <div className="marque">
            <h3>dive into algorithm</h3>
            <img src="arrow-br.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container1">
        <div className="container">
          <div className="card">
            <div className="cardimage">
              <img src="graph.jpeg" alt="" />
            </div>
            <div className="cardcontent">
              <h2>GRAPH</h2>
              <br />
              <p>
                Graph algorithms are the backbone of many complex systems and
                applications, from social networks to transportation logistics.
                These algorithms help us understand and solve problems involving
                interconnected data, allowing us to traverse, analyze, and
                manipulate graphs efficiently.
              </p>
              <br />
              <h4>
                Jump into our graph algorithms section and unlock a treasure
                trove of knowledge that will enhance your skills and expand your
                horizons.
              </h4>
              <br />
              <NavLink to={"Graph"} >
              <button className="cardbtn"  >Explore</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container1">
        <div className="container">
          <div className="card">
            <div className="cardimage">
              <img src="tree.jpeg" alt="" />
            </div>
            <div className="cardcontent">
              <h2>TREE</h2>
              <br />
              <p>
                Trees are fundamental data structures that model hierarchical
                relationships. They consist of nodes connected by edges, making
                them ideal for representing data with a parent-child
                relationship. From file systems to decision processes, trees are
                everywhere!
              </p>
              <br />
              <h4>
                Ready to branch out into the world of tree data structures?
                Explore our dedicated section and cultivate your knowledge
                today!
              </h4>
              <br />
              <button className="cardbtn" >Explore</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container1">
        <div className="container">
          <div className="card">
            <div className="cardimage">
              <img src="search.jpeg" alt="" />
            </div>
            <div className="cardcontent">
              <h2>SEARCHING</h2>
              <br />
              <p>
                Searching algorithms are the unsung heroes of data retrieval,
                helping you find the information you need quickly and
                efficiently. From simple lists to complex databases, mastering
                these algorithms is essential for any aspiring programmer or
                data enthusiast.
              </p>
              <br />
              <h4>
                Are you ready to enhance your skills and unlock the power of
                searching algorithms? Explore our dedicated section today and
                embark on a journey toward becoming a search master!
              </h4>
              <br />
              <button className="cardbtn" >Explore</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container1">
        <div className="container">
          <div className="card">
            <div className="cardimage">
              <img src="Sorting.jpeg" alt="" />
            </div>
            <div className="cardcontent">
              <h2>SORTING</h2>
              <br />
              <p>
                The Art of Sorting in DSA Sorting is more than just order; it's
                a dance of efficiency! In data structures and algorithms{" "}
                {"(DSA)"}, it transforms chaos into clarity. From Bubble Sort
                bubbling elements to Quick Sort swiftly partitioning data, each
                algorithm tells a unique story. Explore sorting to master
                smarter data handling!
              </p>
              <br />
              <h4>
                Dive deeper into each sorting algorithm through our dynamic
                animations and interactive examples. Experience firsthand how
                they work and see their performance in action!
              </h4>
              <br />
              <button className="cardbtn" >Explore</button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}


