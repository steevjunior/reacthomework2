import React from "react";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    description: "buy things",
                    done: false
                }
            ]
        };
    }

    onAddItem = description => {
        let items = this.state.items;
        items.push({
            description, 
            done: false
        });
        this.setState({ items });
    };

    render() {
        return (
            <div>
                <AddItem onAddItem={this.onAddItem} />
                <ul>
                    {this.state.items.map((value, index) => {
                        return (
                            <TodoItem
                                description={value.description}
                                done={value.done}
                                key={index}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
