import "./result.css"
import Flash from "/images/icon-reaction.svg"

export default function Box(){
  
  return (
    <div className="container">
       <div className="left-side">
        <h3>Your Result</h3>
        <div className="circle-box">
          <span>76</span>
          <p>of 100</p>
        </div>
        <p className="great">Great</p>
        <p className="last-text">Your performance exceed 65% of the people conducting the test here!</p>
      </div>

      <div className="right-side">
        <div className="h3-div">
         <h3>Summary</h3>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="box-left-side">
              <img src={Flash} alt="" />
              <p>Reaction</p>
            </div>
            <div className="box-right-side">
              <p>80 <span>/ 100</span></p>
            </div>
          </div>
          
        </div>
        <button>Continue</button>
      </div>
    </div>
   
  )
}