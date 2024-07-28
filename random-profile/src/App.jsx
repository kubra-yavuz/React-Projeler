import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      console.lod(response);
      setProfileCell(response.data.results[0].cell);
      setProfileEmail(response.data.results[0].email);
      setProfileImage(response.data.results[0].picture.large);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="App">
      <button onClick={profileData}>Click for new profile</button>
    </div>
  );
}

export default App;
