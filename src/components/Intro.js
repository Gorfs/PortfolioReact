import TypedPhrase from "./Typed"
import SplineRender from "./SplineRender"

const Intro = () => {
  return (
    <div className="introSection">
      <div className="typedPhraseContainer">
        Hey there!
        <TypedPhrase />
        <p>And welcome to my portfolio!</p>
      </div>

      <div className="spline">
        <SplineRender />
      </div>
    </div>
  )
}

export default Intro
