
import { useState } from "react";

const HomeExamples = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log("Hello Nijas", e.target);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " , name, e.target);
    }

    const handleClickName = () => {
        setName('Luigi');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2> Homepage for {name} is {age} </h2> 
            <button onClick={ handleClick }>Click Me</button>
            <button onClick={(e) => { handleClickAgain('Mario', e) }}>Click Me Again</button>
            <button onClick={ handleClickName }>Click to change name</button>
        </div>
     );
}
 
export default HomeExamples;