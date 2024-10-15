import { useContext, useEffect } from 'react'
import gsap from 'gsap'
import './Nav.css';
import 'remixicon/fonts/remixicon.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Context from '../../contexts/context';
import { Reload } from '../../Functions/Reload';

function logout() {
  let conform = confirm("DO you want logout");

  if (conform) {
    localStorage.clear();
    console.log("User logged out, localStorage cleared.");
    const data = { data: 0 };
    fetch("http://localhost:8080/logout", {
      method: 'POST',
      headers: {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    })
    Reload("logoutReload");
  }

}

function Nav() {
  const { UserName } = useContext(Context)

  useEffect(() => {
    localStorage.removeItem("LoginReload");
    localStorage.removeItem("LogoutReload");

    setInterval(() => {
      Reload("NavReload");
    }, 100)

  }, []);

  setTimeout(() => {

    document.getElementById('modebtn')?.addEventListener('click', () => {
      let a = document.body.style.backgroundColor;
      let cards = document.getElementsByClassName('card');
      let n = document.getElementById('nav');
      let list = document.getElementById('list');

      if (a === 'white' || a === '' || a === 'rgb(255, 255, 255)') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        n.style.backgroundColor = 'black';

        list.style.backgroundColor = 'rgba(0, 0, 0, 0.274)';
        list.style.backdropFilter = 'blur(10px)';

        for (let i = 0; i < cards.length; i++) {
          cards[i].style.backgroundColor = "black";
        }
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        n.style.backgroundColor = 'white';

        list.style.backgroundColor = 'rgba(165, 42, 42, 0.045)';
        list.style.backdropFilter = 'blur(10px)';

        for (let i = 0; i < cards.length; i++) {
          cards[i].style.backgroundColor = "white";
        }
      }
    });


  }, 100)

  return (
    <div className='fixed'>
      <nav id="nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fa fa-bars float-left" id="btn"></i>
          <i className="fa fa-times float-left" id="cancle"></i>

        </label>
        <NavLink to='/'><p id="lname">AlgoAnims</p></NavLink>
        <i id="modebtn" className="ri-moon-clear-line"></i>

        {!localStorage.getItem("UserName")
          ?
          
          <NavLink to="login">
            <button id="login">Login</button>
          </NavLink> :

          <div>
            <NavLink to="/profile">
              <img id='profile' src="/profile-icon.jpg" alt="pro" />
            </NavLink>
            <button
              onClick={logout}
              className='float-right relative top-5'>
              Logout
            </button>
          </div>

        }

        <ul id="list">
          <li id="topic">Graph</li>
          <li>BFS traversal</li>
          <li>DFS traversal</li>
          <li>Prim's Algorithm</li>
          <li >Kruskal's Algorithm</li>
          <li >Dijkstra's Algorithm</li>

          <li id="topic">Tree</li>
          <Link to='/tree/inorder'><li >Inorder traversal</li></Link>
          <Link to='/tree/preorder'><li >Preorder traversal</li></Link>
          <Link to='/tree/postorder'><li >Postorder traversal</li></Link>
          <li >Level-order traversal</li>
          <li>BST-insertion</li>
          <li >BST-deletion</li>
          <li id="topic">Searching</li>
          <li>Linear</li>
          <li>Binary </li>

          <li id="topic">Sorting</li>
          <li >Insertion</li>
          <li >Bubble</li>
          <li >Selection</li>
          <li >Merge</li>

          <li >Quick</li>
          <li >Quick</li>
          <li>Quick</li>


        </ul>
      </nav>
    </div>
  )
}

export default Nav
