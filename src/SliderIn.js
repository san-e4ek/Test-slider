import React, {useState} from "react";

export default () => {
    const [range, setRange] = useState(0)
    const [position, setPosition] = useState(0)

    const rangeHandler = e => {
        setRange(e.target.value)

        if (range > 0 && range < 25) {
            setPosition(0)
        } else if (range > 25 && range < 75) {
            setPosition(100)
        } else if (range > 75 && range < 100) {
            setPosition(200)
        }
    }

    const upHandler = e => {
        e.stopPropagation()

        if (e.target.value > 0 && e.target.value < 25) {
            setRange(0)
            setPosition(0)
        } else if (e.target.value > 25 && e.target.value < 75) {
            setRange(50)
            setPosition(100)
        } else if (e.target.value > 75 && e.target.value < 100) {
            setRange(100)
            setPosition(200)
        }
    }

    return (
        <>
            <div className="slider_in" style={{right: `${position}%`}}>
                <div className="slider_in-item"/>
                <div className="slider_in-item"/>
                <div className="slider_in-item"/>
            </div>

            <div className="slider_in-nav">
                <input type="range"
                       style={{
                           background:
                               `linear-gradient(to right,
                                rgb(209, 234, 255) 0%,
                                rgb(209, 234, 255) ${range}%,
                                rgba(255, 255, 255, 0.25) ${range}%,
                                rgba(255, 255, 255, 0.25) 100%)`
                       }}
                       min={0}
                       max={100}
                       value={range}
                       onChange={e => rangeHandler(e)}
                       onPointerUp={e => upHandler(e)}
                />

                <div className="years-group">
                    <div className="years-item">1998</div>
                    <div className="years-item">2009</div>
                    <div className="years-item">2016</div>
                </div>
            </div>
        </>
    )
}