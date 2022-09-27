import { useState } from 'react'
import verbList from '../verblist'
import Verb from '../components/Verb'

export default function Verbe() {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const handleClick = () => {
        if (currentIndex + 1 === verbList.length) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }
    }
    
    return (
        <Verb 
            handleClick={handleClick} 
            index={currentIndex} />
    )
}