import React from 'react'
import Helpers from '../utils/helpers';

class Button extends React.Component {

    render() {
        return (
            <button className={this.props.className}
                    onMouseDown={(event) => {
                        if (!Helpers.is_touch_device() && this.props.onDown) {
                            this.props.onDown(event)
                        }
                    }}
                    onMouseUp={(event) => {
                        if (!Helpers.is_touch_device() && this.props.onUp) {
                            this.props.onUp(event)
                        }
                    }}
                    onTouchStart={(event) => {
                        if (Helpers.is_touch_device() && this.props.onDown) {
                            this.props.onDown(event)
                        }
                    }}
                    onTouchEnd={(event) => {
                        if (Helpers.is_touch_device() && this.props.onUp) {
                            this.props.onUp(event)
                        }
                    }}
            >
                {this.props.label}
                {this.props.icon &&
                <img className={this.props.iconClassName || "generic-button-icon"} src={this.props.icon} />
                }
            </button>
        )
    }
}

export default Button