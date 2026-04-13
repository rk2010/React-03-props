import React from 'react'

const Card = (props) => {
  //console.log(props);
  console.log(props.name);
  console.log(props.age);
  return (
<div className='card'>
  <div className='card'><h1>{props.user},{props.age}</h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum nostrum laudantium a incidunt sunt voluptatibus dolorum distinctio eum commodi fugiat nulla, maxime vel obcaecati quisquam ex aliquid? Maiores, voluptas?</p>
</div></div>
  )
}

export default Card
