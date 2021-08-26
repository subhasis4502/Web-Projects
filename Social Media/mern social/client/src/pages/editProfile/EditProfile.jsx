import "./editProfile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function EditProfile() {
  const name = useRef();
  const bio = useRef();
  const city = useRef();
  const country = useRef();
  const relationship = useRef();
  const { user } = useContext(AuthContext);

  const handleClick = async () => {
      const user = {
        userid: user._id,
        password: "123456",
        name: name.current.value,
        desc: bio.current.value,
        city: city.current.value,
        from: country.current.value,
        relationship: relationship.current.value,
      };
      try {
        await axios.put(`/${user._id}`);
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <div>
      <div>
        <Topbar />
      </div>
      <h3>Personal Information</h3>
      <hr />
      <form className="userinfo" onSubmit={handleClick}>
        <input type="text" placeholder="Enter your name" ref={name} className="userInput"/>
        <input type="text" placeholder="Give a bio" ref={bio} className="userInput"/>
        <input type="text" placeholder="Enter your city" ref={city} className="userInput"/>
        <input type="text" placeholder="Enter your country" ref={country} className="userInput"/>
        <select name="relationship" id="relationship" ref={relationship} className="userInput">
          <option value="1">Single</option>
          <option value="2">In Relationship</option>
          <option value="3">Married</option>
        </select>
        <button className="submit" type="submit">
          Update
        </button>
        <button className="cancel" type="reset">
          Cancel
        </button>
      </form>
    </div>
  );
}
