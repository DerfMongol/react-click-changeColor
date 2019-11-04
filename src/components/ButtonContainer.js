import React from 'react'
import Button from './Button'

export default class ButtonContainer extends React.Component {
    state = {
        colors: ['red', 'blue', 'green']
    }
    toggleClass = (color, id) => {
        let colors = [...this.state.colors]
        const newColors = colors.map((newColor, index) => {
            if (id === index) {
                const copyMap = { 0: 'red', 1: 'blue', 2: 'green' }
                const copy = color === 'not' ? copyMap[index] : 'not'
                return copy
            } else {
                return newColor
            }
        })
        this.setState({ colors: newColors })
    }
    render() {
        return (
            <div className='button-container'>
                {this.state.colors.map((color, index) =>
                    <Button
                        toggleClass={this.toggleClass}
                        key={index}
                        id={index}
                        name={color}
                    />
                )}
            </div>
        )
    }
}