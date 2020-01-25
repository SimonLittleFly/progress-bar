import React, { Component } from 'react';

class ProgressComp extends Component {

    percentBar() {
        let percentOfLimit = Math.round(this.props.info.val * 100 / this.props.limit) + '%';
        return percentOfLimit;
    }

    render() {

        let { barActive, info, action } = this.props;

        let className = (barActive === info.index) ? "progressBar selected" : "progressBar";

        return (
            <div className={className} onClick={() => action(info.index)} >
                <div className="percent">{this.percentBar()}</div>
                <div className="back" style={{ width: this.percentBar() }}></div>
            </div>
        );
    }
}

class Button extends Component {

    changeValue() {

        const btnValue = this.props.value;
        const limit = this.props.limit;
        const barInfo = this.props.bar;

        const progressActive = document.getElementsByClassName("progressBar")[barInfo.index];
        let number = progressActive.querySelector(".percent");
        let back = progressActive.querySelector(".back");

        if (btnValue >= 0) {

            //console.log('Positive!');

            let initPercent = Math.round(barInfo.val * 100 / limit);
            let valPercent = Math.round(btnValue * 100 / limit);
            let calcPercent = initPercent + valPercent;
            let calc = parseInt(barInfo.val) + parseInt(btnValue);

            back.classList.remove("error");

            if (calcPercent > 100) {
                back.style.width = "100%";
                back.classList.add("error");
            } else {
                back.style.width = calcPercent + "%";
            }

            number.innerHTML = calcPercent + "%";
            this.props.action(calc);

        } else {

            //console.log('Negative!');

            let valPos = btnValue * -1; //- Transform to positive to do calc

            let initPercent = Math.round(barInfo.val * 100 / limit);
            let valPercent = Math.round(valPos * 100 / limit);
            let calcPercent = initPercent - valPercent;
            let calc = parseInt(barInfo.val) - parseInt(valPos);

            if (calcPercent < 0) {
                back.style.width = "0%";
                number.innerHTML = "0%";
                this.props.action(0);
            } else {
                back.style.width = calcPercent + "%";
                number.innerHTML = calcPercent + "%";
                this.props.action(calc);

                if (calcPercent < 100) {
                    back.classList.remove("error");
                }
            }
        }

    }

    render() {

        const valueBar = this.props.value;

        return (
            <button onClick={() => this.changeValue()}>
                {(valueBar < 0) ? valueBar + " $" : "+" + valueBar + " $"}
            </button>
        );
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.changeBar = this.changeBar.bind(this);
        this.changeVal = this.changeVal.bind(this);
        this.state = {
            loading: true,
            bars: [],
            buttons: [],
            limit: 0,
            selectedBar: 0 // First one on init
        };
    }

    componentDidMount() {

        //- API call data get
        //- Setting first bar selected

        fetch('https://pb-api.herokuapp.com/bars')
            .then(response => { return response.json(); })
            .then((data) => {

                // Manage data bars
                let arrayBar = data.bars.map(function (x, i) {
                    return {
                        index: i,
                        val: x
                    };
                });

                this.setState({
                    loading: false,
                    bars: arrayBar,
                    buttons: data.buttons,
                    limit: data.limit
                })
            })
            .catch((error) => { this.setState({ error }) });

    }

    changeBar(val) {
        this.setState({
            selectedBar: val
        })
    }

    changeVal(val) {
        let newBars = this.state.bars;
        newBars[this.state.selectedBar].val = val;

        this.setState({
            bars: newBars
        })
    }

    render() {

        const { bars, buttons, limit, selectedBar, loading, error } = this.state;

        if (error) {
            return <main><span>Something went wrong...</span></main>;
        } else if (loading) {
            return <main><h2>Please wait...</h2></main>;
        } else {

            console.clear();

            // Log correctly
            console.log(
                "Progress bars: " + JSON.stringify(bars)
            );

            console.log(
                "Buttons: " + buttons,
                "Limit: " + limit,
                "Bar Selected: " + selectedBar
            );

            return (
                <main>
                    <section id="progressBox">
                        <span>Choose your progress bar:</span>
                        <div className="choose">
                            {bars && (
                                bars.map((barInfo, index) =>
                                    <ProgressComp
                                        key={index}
                                        info={barInfo}
                                        barActive={selectedBar}
                                        limit={limit}
                                        action={this.changeBar}
                                    />
                                )
                            )}
                        </div>
                    </section>

                    <section id="controls">
                        <div className="change">
                            <span>Add or remove money:</span>
                            {buttons && (
                                buttons.map((value, index) =>
                                    <Button
                                        key={index}
                                        value={value}
                                        limit={limit}
                                        bar={bars[selectedBar]}
                                        action={this.changeVal}
                                    />
                                )
                            )}
                        </div>
                    </section>

                    <section id="limit">
                        <span>Budget limit: {limit}$ <i>(limit = 100%)</i></span>
                    </section>
                </main>
            );
        }
    }
}

export default Main;