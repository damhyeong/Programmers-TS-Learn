import React, {useState} from "react";

const Timer : React.FC = () => {
    const [second, setSecond] = useState<number>(0);

    return (
        <div
            style={{
                display : "flex",
                flexDirection : "column",
                justifyContent : "center"
            }}
        >
            <h2>Timer Example : {second} second.</h2>
            <button
                style={{
                    width : "10rem",
                    height : "2rem",
                }}
                onClick={
                    function () {
                        setInterval(() => {
                            setSecond((prevSecond) => prevSecond + 1);
                        }, 1000)
                    }
                }
            >Timer Start</button>
        </div>
    )
}

export default Timer;