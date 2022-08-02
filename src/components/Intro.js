import TypedPhrase from "./Typed"
import SplineRender from "./SplineRender"
import image from "../images/3d.png"

const Intro = () => {
  return (
    <div className="introSection">
      <div className="typedPhraseContainer">
        <i>Hey there!</i>
        <br />
        <TypedPhrase />
        <i>And welcome to my portfolio!</i>
      </div>

      <div className="splineContainer">
        <SplineRender />
      </div>
      <div>
        <img
          className="backupImg"
          src={image}
          alt="3drender of terminal with key information"
        />
      </div>
    </div>
  )
}

export default Intro
