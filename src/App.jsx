import React from 'react';
import './styles/App.css';
import './main'

function Card(props)
{
  let tick="✔  "
  const list = [
    
    {
      content: `${props.users} Users`,
      id: 1
          
    },
    {
      content: "50GB Storage",
      id: 2
    },
    {
      content: "Unlimited Public Projects",
      id: 3
          
    },
    {
      content: "Community Access",
      id: 4
    },
    {
      content: "Unlimited Private Projects",
      id: 6
          
    },
    {
      content: "Dedicated phone support",
      id: 7
    },
    {
      content: "Free Subdomain",
      id: 8
          
    },
    {
      content: "Monthly Status Reports",
      id: 9
    }
  ]
  if (props.month == '9' || props.month == '0')
  {
    
    return (
      <div id="cardback">
        <div id="head">

          <p id="text">{props.type}</p>
          <h1> ${props.month}/Month</h1>
        </div>
        <ul>
          {
            list.map(val =>
              
            
              <li key={val.id}>{tick}{val.content}</li>
            )
          }
        </ul>

        
      

        <button type='button' id="disablebut" disabled>BUTTON</button>
      </div>
    )
    }
  
    return (
      <div id="cardback">
        <div id="head">

          <p id="text">{props.type}</p>
          <h1> ${props.month}/Month</h1>
        </div>
        <ul>
          {
            list.map(val =>
              
              <li key={val.id}>{tick}{val.content}</li>
              )
          }
        </ul>

        
      

        <button type='button'  href='https://www.google.com'>BUTTON</button>
      </div>
    )
  }
function App()
{
  
 
  // console.log(list1[0].content)

    return (
      <div id="back">
        <Card type="free" month="0" users="single" />
        <Card type="plus" month="9" users="5" />
        <Card type="pro" month="49" users="Unlimited" />
        
        
  
        
        
      </div>
     )


}
export default App;