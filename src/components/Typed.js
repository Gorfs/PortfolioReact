//this is the section for the typed bit of the intro section

import Typed from "typed.js"
import { useRef, useEffect } from "react"

const TypedPhrase = () => {
  const ref = useRef()

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        "Archie Beales",
        "british 🇬🇧",
        "dedicated",
        "curious",
        "open-minded",
        "a student",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      loop: true,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 100,
      smartBackspace: true,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      I am <p className="typedPhraseElement" ref={ref}></p>
    </div>
  )
}

export default TypedPhrase
