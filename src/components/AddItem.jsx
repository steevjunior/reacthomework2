import React from "react";

export class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            description: ""
        };
    }

    onChange = (e) => {
        let description = this.state.description;
        description = e.target.value;
        this.setState({ description });
    };

    onClick = () => {
        const { onAddItem } = this.props;
        onAddItem(this.state.description);
        this.setState({
            description: ""
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
                    placeholder="description"
                    value={this.state.description}
                    onChange={e => this.onChange(e)}
                />
                <button onClick={this.onClick}>Add item</button>
            </div>
        );
    }
}
