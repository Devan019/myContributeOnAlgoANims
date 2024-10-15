// import Nav from "../navigation/Nav";
import "./profile.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/context";
import isLogin from "../../Functions/checkLogin";

function Profile() {

    const navigate = useNavigate();
    useEffect(() => {

        if (!localStorage.getItem("UserName")) {
            navigate("/login");
        }
    }, [navigate]);

    

// 

  const {UserName} = useContext(Context)
  function CreateUserDetails({ svg, text, data = "N/A" }) {
    return (
      <div className="accounts break-words flex gap-2 items-center m-2">
        <img src={svg} className="mx-1 darksvg " /> <a href={data}>{text}</a>
      </div>
    );
  }
  function CreatePlatForms({ svg, text, data = "N/A" }) {
    return (
      <div
        className="platformAccounts bg-slate-500 flex justify-center p-1 my-2 rounded-md "
        onClick={() => {
          const rightSection = document.querySelector(".right");
          if (rightSection) {
            rightSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <img
          src={svg}
          alt={text}
          className="w-11 h-11 m-2 bg-white rounded-md"
        />

        <div className="textplatform flex-col">
          <div className="text-xl">{text}</div>
          <div>{data}</div>
        </div>

        <button className="p-1">
          <img src="/linkopen.svg" className="darksvg w-9 h-9" alt={text} />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="profilecss ">
        <div className="left flex-col">
          <div className="personaldetails">
            <div className="profilepic rounded-full">{localStorage.getItem("UserName").charAt(0)}</div>
            {/* <img
              className="profilepic"
              src="https://media.licdn.com/dms/image/v2/D4D03AQHMKhaYEalknA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705511571724?e=1732147200&v=beta&t=UMWylJghozMP14R5X9VJ4XrHHzuNm2nOqf-yz5X1Udo"
              alt="N"
            /> */}

            <div className="username">{localStorage.getItem("UserName")}</div>
          </div>

          <Link to="/editprofile">
            <button className="editprofilebtn">Edit Profile</button>
          </Link>
          <div>
            <CreateUserDetails
              svg="/email.svg"
              text={localStorage.getItem("email")}
              data={localStorage.getItem("email")}
            />
            <CreateUserDetails
              svg="/linkedin.svg"
              text="Linkedin Profile"
              data={localStorage.getItem(`linkedlin`)}
            />
            <CreateUserDetails
              svg="/github.svg"
              text="Github Profile"
              data={localStorage.getItem(`github`)}
            />
          </div>
          <h1 className="text-2xl"> Competitive Platforms</h1>

          <div className="platforms mt-6">
            <CreatePlatForms
              svg="/leetcode.svg"
              text="LeetCode"
              data={localStorage.getItem(`leetcode`)}
            />

            <CreatePlatForms
              svg="/codechef.svg"
              text="CodeChef"
              data={localStorage.getItem(`codechef`)}
            />
            <CreatePlatForms
              svg="/gfg.svg"
              text="GeeksforGeeks"
              data={localStorage.getItem(`gfg`)}
            />
            
           
          </div>
        </div>
        <div className="right">
          <div className="rightShow"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
