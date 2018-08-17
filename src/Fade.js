import React, {Component} from "react";
import {Transition} from "react-transition-group";
import TweenMax from "gsap";

const duration = 3;

const defaultStyle = {
    //transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
    padding: 20,
    display: 'inline-block',
    backgroundColor: '#8787d8'
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 }
};


class Fade extends Component {

    onEnter = (cb) =>  {
        const el = this.container;
        TweenMax.fromTo( el, duration,{ opacity: 0, rotationY: 180 }, { opacity: 1, rotationY: 0, onComplete:cb })
    };

    onExit = (cb) => {
        const el = this.container;
        TweenMax.fromTo( el, duration,{ opacity: 1, rotationY: 0 }, { opacity: 0, rotationY: 180, onComplete:cb })
    };

    render(){
        const {in: inProp} = this.props;

        return(
            <Transition in={inProp} onEnter={this.onEnter} onExit={this.onExit}>
                { (state) => (
                    <div style={{...defaultStyle}} ref={c => this.container=c }>
                        I'm a Fade Transition
                    </div>
                )}
            </Transition>
        );
    }
}

export default Fade;