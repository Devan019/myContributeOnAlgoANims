import { useState, useContext } from 'react';
import style from './edit.module.css';
import Context from '../../../contexts/context';

function EditPlatformPage() {
  const { allData, setAllData } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leetcodeUname = e.target.leetcodeUname.value;
    const codechefUname = e.target.codechefUname.value;
    const gfgUname = e.target.gfgUname.value;

    // Send the updated usernames to the server
    const response = await fetch("http://localhost:8080/editprofile/editPlatformPage", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ leetcodeUname, codechefUname, gfgUname })
    });

    // Update the local state with the response data
    const data = await response.json();
    setAllData(data);
    localStorage.setItem("leetcode" , leetcodeUname);
    localStorage.setItem("codechef" , codechefUname);
    localStorage.setItem("gfg" , gfgUname);
  }; 

  console.log(allData); // Consider removing this in production or use it conditionally

  return (
    <form className={style.edit} onSubmit={handleSubmit}>
      <div className={style.area}>
        <label htmlFor="leetcode" className={style.label}>LeetCode:</label>
        <input type="text"
        defaultValue={localStorage.getItem("leetcode")}
        name='leetcodeUname' id='leetcode' placeholder='username (e.g., user_12)' />
      </div>
      <div className={style.area}>
        <label htmlFor="codechef" className={style.label}>CodeChef:</label>
        <input type="text" 
        defaultValue={localStorage.getItem("codechef")}
        name='codechefUname' id='codechef' placeholder='username (e.g., user_12)' />
      </div>
      <div className={style.area}>
        <label htmlFor="geeksforgeeks" className={style.label}>GeeksForGeeks:</label>
        <input type="text"
        defaultValue={localStorage.getItem("gfg")}
        name='gfgUname' id='geeksforgeeks' placeholder='username (e.g., user_12)' />
      </div>
      <button className={style.save} type="submit">Save</button>
    </form>
  );
}

export default EditPlatformPage;
