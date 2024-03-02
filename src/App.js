import { useState } from "react";
import './index.css';

const messages = [
  "Learn React ⭐", // (window+.) for emoji in react
  "Apply for jobs 👜",
  "Invest your new income 👽"

]

function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  // const [test, setTest] = useState({name:""});

  function handlePrevious() {
    // alert("Hello Murari");
    if(step>1)
      setStep((s)=> s - 1);
  }

  function handleNext(){
    // alert("What do you want to do next.");
    if(step < 3)
    setStep((s)=> s + 1);
    // setStep((s)=> s + 1);
    // setTest({name:"Murari"});
  }

  return (
    <>
      <button className="close" onClick={()=> setIsOpen(!isOpen)}>&times;</button>

      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step >=1 ? "active" : ""}>1</div>
          <div className={step >=2 ? "active" : ""}>2</div>
          <div className={step >=3 ? "active" : ""}>3</div>
        </div>
  
        <p className="message">
          Step {step}: {messages[step-1]}
          {/* {test.name} */}
        </p>
  
        <div className="buttons">
          <button style={{backgroundColor:"#7950f2", color:"#fff", width: "70px"}} onClick={handlePrevious}>Previous</button>
          <button style={{backgroundColor:"#7950f2", color:"#fff", width: "50px"}} onClick={handleNext}>Next</button>
        </div>
      </div>
      )
      }
    </>
  );
}

export default App;
