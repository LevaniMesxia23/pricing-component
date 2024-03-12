import React from 'react'
import data from './data.json'
import './result.css'


export default function Box() {
  
  return (
    <div className="container">
      <div className="left-side">
        <h3>Your Result</h3>
        <div className="circle-box">
          <span>76</span>
          <p>of 100</p>
        </div>
        <p className="great">Great</p>
        <p className="last-text">Your performance exceeds 65% of the people conducting the test here!</p>
      </div>

      <div className="right-side">
        <div className="h3-div">
          <h3>Summary</h3>
        </div>

        {data.map(item => (
          <div key={item.id} className="boxes">
            <div className="box" style={{ background: item.color }}>
              <div className="box-left-side">
                <img src={item.icon} />
                <p>{item.category}</p>
              </div>
              <div className="box-right-side">
                <p>{item.score} <span>/ 100</span></p>
              </div>
            </div>
          </div>
        ))}
        <button>Continue</button>
      </div>
    </div>
  )
}
