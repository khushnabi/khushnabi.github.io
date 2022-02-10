import classes from "../styles/Home.module.scss"
import { useState,useEffect } from 'react'



export default function AutoType({ text }) {
    const [typingText ,setTypingText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false)
    const typing = isDeleting ? text.slice(0, typingText.length -1) : text.slice(0, typingText.length +1);
    const time = 100;

    useEffect(()=> {
        if(!isDeleting && typing === text) {
            setIsDeleting(true)
            const timeout = setTimeout(() => {
                setTypingText(typing)
            },time)
        } else if(isDeleting && typing === ''){
            setIsDeleting(false)
            const timeout = setTimeout(() => {
                setTypingText(typing)
            },time)
        } else {
            const timeout = setTimeout(() => {
                setTypingText(typing)
            },time)
        }
    }, [typingText])

    return (
        <div>
             <span id="Typing_text">{typingText}</span> <span className={classes.pipe}>|</span>
        </div>
    )
}