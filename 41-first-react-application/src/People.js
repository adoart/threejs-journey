import {useEffect, useState} from "react";

export default function People({}) {

    const [people, setPeople] = useState([])

    const getPeople = () => {
        console.log('getting people...')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPeople(data))
    }

    useEffect(() => {
        getPeople()
    }, [])

    return <div>
        <h2>People</h2>
        <ul>
            {people.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
    </div>
}