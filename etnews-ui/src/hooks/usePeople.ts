import { useState } from 'react';

export default function usePeople() {
    const [people, setPeople] = useState(['Emanuel', 'Jr'])

    function addPerson(name: string) {
        setPeople([...people, name])
    }

    return {
        people,
        addPerson
    }
}