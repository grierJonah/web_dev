import React from 'react'
import Counter from './Counter'
import './css/square.css'
import Square from './Square'

export default class SquareGrid extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            id_values: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            top_left: {
                color: 'white'
            },
            top_right: {
                color: 'white'
            },
            bottom_left: {
                color: 'white'
            },
            bottom_right: {
                color: 'white'
            }
        }
    }

    // Haha this is terrible (insert emoji) ... but I got it to finally work. Please please
    // let me know how to do this better. This is like the worst function I've ever written lmao
    toggleColor(id) {
        if (id === this.state.id_values[0]) {
            if (this.state.top_left.color === 'white') {
                this.setState({
                    top_left: { color: 'black' },
                    count: this.state.count + 1
                });
            } else {
                this.setState({
                    top_left: { color: 'white' },
                    count: this.state.count - 1
                })
            }
        } else if (id === this.state.id_values[1]) {
            if (this.state.top_right.color === 'white' && this.state.id_values[1]) {
                this.setState({
                    top_right: { color: 'black' },
                    count: this.state.count + 1
                });
            } else {
                this.setState({
                    top_right: { color: 'white' },
                    count: this.state.count - 1
                })
            }
        } else if (id === this.state.id_values[2]) {
            if (this.state.bottom_left.color === 'white' && this.state.id_values[2]) {
                this.setState({
                    bottom_left: { color: 'black' },
                    count: this.state.count + 1
                });
            } else {
                this.setState({
                    bottom_left: { color: 'white' },
                    count: this.state.count - 1
                })
            }
        } else {
            if (this.state.bottom_right.color === 'white') {
                this.setState({
                    bottom_right: { color: 'black' },
                    count: this.state.count + 1
                });
            } else {
                this.setState({
                    bottom_right: { color: 'white' },
                    count: this.state.count - 1
                })
            }
        }
    }


    /* To make this more understandable, I am passing the ID to each Square component which gives it a unique className. From there, I am
        able to use CSS to specifically target the individual Square. These ids are also listed in state, which allows me to set black/white coloring
        and pass them as props (the color) to be set in the child as a background. Lastly, I am using a list so that I can index specific square id's
        and check against the current square I am clicking. Ex) Clicking the bottom-right square returns the className of 'bottom-right' which is checked
        agaisnt this.state.idVals[3]. 
    */
    render() {
        return (
            <div className="outer-container">
                <Counter count={this.state.count} />
                <div className="square-container">
                    <Square id={'top-left'} colorToggleFunc={() => this.toggleColor(this.state.id_values[0])} color={this.state.top_left.color} />
                    <Square id={'top-right'} colorToggleFunc={() => this.toggleColor(this.state.id_values[1])} color={this.state.top_right.color} />
                </div>
                <div className="square-container">
                    <Square id={'bottom-left'} colorToggleFunc={() => this.toggleColor(this.state.id_values[2])} color={this.state.bottom_left.color} />
                    <Square id={'bottom-right'} colorToggleFunc={() => this.toggleColor(this.state.id_values[3])} color={this.state.bottom_right.color} />
                </div>
            </div>
        );
    }



}