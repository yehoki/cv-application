import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";
function App() {


  const [personalInfo, setPersonalInfo] = useState({});

  const [educationInfo, setEducationInfo] = useState([]);

  const [practicalInfo, setPracticalInfo] = useState([]);

  return (
    <>
      <Header />
      <Main
        personal={personalInfo}
        setPersonal={setPersonalInfo}
        education={educationInfo}
        setEducation={setEducationInfo}
        practical={practicalInfo}
        setPractical={setPracticalInfo}
      />
      <Footer />
    </>
  );
}

export default App;

//
