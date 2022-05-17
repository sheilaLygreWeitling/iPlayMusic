
const secToMin = (time) => {
    let min = Math.floor(time / 60);
    let seconds = time - min * 60;
    return `${min.toString()}:${seconds.toString().length <= 1 ? `0${seconds}` : seconds.toString()
        }`;
};

const ProgressBar = (props) => {
    return (
        <div>
            <input type="range" name="track" id="track" />
            <p>{secToMin(Math.floor(props.duration))}</p>
        </div>
    )
}
//state der skal kontrollere hvad der skal være i progressbar, hvorhenne i tracket den er. manipulere hvor end man er
export default ProgressBar