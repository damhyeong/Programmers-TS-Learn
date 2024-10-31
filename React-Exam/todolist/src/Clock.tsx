import React, {useState} from "react";

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() =>{
            setTime(new Date())
        }, 1000
    );

    return (
        <div style={{
            margin : "2rem"
        }}>
            <span>Current Time is : </span> {time.toLocaleTimeString()}
        </div>
    )
}

export default Clock;