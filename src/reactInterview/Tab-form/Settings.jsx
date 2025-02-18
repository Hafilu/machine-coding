import React from 'react'

const Settings = ({data,setData}) => {
  return (
    <div>
       <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={data.theme=== "dark"}
            onChange={(e) => setData((prev)=>( {...prev, theme:"dark"}))}
          />
          Dark
        </label> </div>
        <div>
             <label>
          <input
            type="radio"
            name="light"
            checked={data.theme=== "light"}
            onChange={(e) => setData((prev)=>( {...prev, theme:"light"}))}
          />
          Light
        </label>
        </div>
       
     
    </div>
  )
}

export default Settings
