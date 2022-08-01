//this is the section for the typed bit of the intro section

import Typed from "typed.js"
import { useRef, useEffect } from "react"

const TypedPhrase = () => {
  const ref = useRef()

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      loop: true,
      startDelay: 10,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <p className="typedPhraseElement" ref={ref}></p>
    </div>
  )
}

export default TypedPhrase
