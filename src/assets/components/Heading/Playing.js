
const Playing = () => {

    const url = window.location.pathname

    return (
        <div>
          <p>{url === '/NowPlaying' ? "Playing" : "Music"}</p> 
        </div>
    )
}

export default Playing