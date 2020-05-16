import React, {useState} from 'react';
import SliderIn from "./SliderIn";

export default function App() {
    const [state, setState] = useState({
        position: 0,
        cursor: '',
        screenY: null
    })

    const downHandler = e => {
        setState({
            ...state,
            cursor: 'grab',
            screenY: e.screenY,
        })
    }

    const upHandler = e => {
        if (e.screenY < state.screenY && state.position > -200) {
            setState({
                ...state,
                cursor: '',
                position: state.position - 100
            })
        }

        if (e.screenY > state.screenY && state.position < 0) {
            setState({
                ...state,
                cursor: '',
                position: state.position + 100
            })
        }
    }

    return (
        <div className="container"
             onPointerDown={e => downHandler(e)}
             onPointerUp={e => upHandler(e)}
             onTouchEnd={e => upHandler(e.nativeEvent.changedTouches[0])}
             style={{cursor: state.cursor}}
        >
            <div className="slider" style={{top: `${state.position}vh`}}>
                <div className="slider-item">
                    <div className="ellipses-group">
                        <div className="ellipse-out"/>
                        <div className="ellipse-in"/>
                        <div className="ellipse-in"/>
                    </div>

                    <div className="ellipses-group">
                        <div className="ellipse-out"/>
                        <div className="ellipse-in"/>
                        <div className="ellipse-in"/>
                    </div>

                    <div className="ellipses-group">
                        <div className="ellipse-out"/>
                        <div className="ellipse-in"/>
                        <div className="ellipse-in"/>
                    </div>


                    <div className="footer" style={state.position === 0 ? {opacity: 1} : {opacity: 0}}/>
                </div>

                <div className="slider-item">
                    <div className="footer" style={state.position === -100 ? {opacity: 1} : {opacity: 0}}/>
                </div>

                <div className="slider-item">
                    <SliderIn/>
                </div>
            </div>

            <div className="slider-nav">
                <div className="pin"
                     onClick={() => setState({...state, position: 0})}
                     style={state.position === 0 ? {background: '#f78b1f'} : null}
                />

                <div className="pin"
                     onClick={() => setState({...state, position: -100})}
                     style={state.position === -100 ? {background: '#f78b1f'} : null}
                />

                <div className="pin"
                     onClick={() => setState({...state, position: -200})}
                     style={state.position === -200 ? {background: '#f78b1f'} : null}
                />
            </div>
        </div>
    )
}