import {useEffect, useRef, useState} from "react";

export default function Clicker({increment, keyName, color = 'red'}) {
    const [numberOfClicks, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    const buttonRef = useRef()

    useEffect(() => {
        console.log('initializing clicker...')
        console.log(buttonRef)

        buttonRef.current.style.backgroundColor = 'papayaWhip'
        buttonRef.current.style.color = 'salmon'

        return () => {
            console.log('destroying clicker...')
            localStorage.removeItem(keyName)
        }
    }, []);

    useEffect(() => {
        console.log('updating clicker...')
        localStorage.setItem(keyName, numberOfClicks)
    }, [numberOfClicks]);

    function handleClick() {
        setCount(numberOfClicks + 1)
        increment()
    }

    return (
        <>
            <div style={{color: color}}>Number of clicks: {numberOfClicks}</div>
            <button ref={buttonRef} onClick={handleClick}>Click me!</button>
        </>
    )
}
