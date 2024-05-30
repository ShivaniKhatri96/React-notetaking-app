import LoadingGif from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className="image-wrapper">
        <img src={LoadingGif} width={50} height={50}/>
    </div>
  )
}

export default Loading