import React from "react";

export class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    onChange = e => {
        let title = this.state.title;
        title = e.target.value;
        this.setState({ title });
    };

    onClick = () => {
        const { onAddItem } = this.props;
        if (this.state.title !== "") {
            onAddItem(this.state.title);
        }
        this.setState({
            title: ""
        });
    };

    render() {
        return (
            <div>
                <span style={{ marginRight: "1vh" }}>
                    Add new item to the list:
                </span>
                <input
                    style={{ marginRight: "1vh" }}
                    placeholder="title"
                    value={this.state.title}
                    onChange={e => this.onChange(e)}
                />
                <button
                    onClick={this.onClick}
                    disabled={this.state.title === ""}
                >
                    Add item
                </button>
            </div>
        );
    }
}
