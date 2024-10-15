import { useState } from "react";
import style from "./edit.module.css"; // Importing CSS module
import codes from "country-calling-code";

function EditProfilePage() {
  let code = new Object();

  for (let it of codes) {
    code[it.country] = it.countryCodes[0];
  }

  let [phonecode, setPhoneCode] = useState(code['India']);
  let [phonecountry, setPhoneCountry] = useState('India');

  return (
    <form className={style.edit} method="post">
      <div className={style.area}>
        <label htmlFor="username" className={style.label}>
          Username :
        </label>
        <input
        defaultValue={localStorage.getItem(`UserName`)}
          type="text"
          name="username"
          id="username"
          placeholder="eg. Billy_12"
        />
      </div>
      <div className={style.area}>
        <label htmlFor="emailid" className={style.label}>
          Email id :
        </label>
        <input
        defaultValue={localStorage.getItem('email')}
          readOnly
          type="email"
          name="emailid"
          id="emailid"
          placeholder="eg. billy12@gmail.com"
        />
      </div>
      <div className={style.area}>
        <label htmlFor="country" className={style.label}>
          Country :
        </label>
        <select
        defaultValue={localStorage.getItem('Country')}
          name="country"
          id="country"
          className="text-slate-950" // Tailwind class
          onChange={(e) => {
            setPhoneCode(code[e.target.value]);
            setPhoneCountry(e.target.value);
          }}
          value={phonecountry}
        >
          {Object.entries(code).map(([country, phoneCode]) => {
            return (
              <option key={country} value={country} className="text-black">
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.area}>
        <label htmlFor="contactnum" className={style.label}>
          Contact Number :
        </label>
        <div className={style['contact-input']}>
          <span>{phonecode}</span>
          <input
            type="number"
            max={10}
            min={10}
            name="contactnum"
            id="contactnum"
            placeholder="Enter 10 digit number only"
            className={style['no-spinner']}
          />
        </div>
      </div>
      <input type="submit" value="Save" className={style.save} />
    </form>
  );
}

export default EditProfilePage;
