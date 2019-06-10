import React from "react";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

// Homework 3: fetch data from https://jsonplaceholder.typicode.com/todos

export class TodoList extends React.Component {
    constructor() {
        super();
        // Step 1: remove the static data from the state
        this.state = {
            items: [
                {
                    title: "buy things",
                    completed: false
                },
                {
                    title: "learn react",
                    completed: true
                }
            ]
        };
    }
    
    // Step 2: use componentDidMount to fetch the data from the url https://jsonplaceholder.typicode.com/todos
    // Step 3: set the data fetched from the url in the state with the this.setState function
    // Step 4: style the todo list with some css, we will decide which one has the best design!

    onAddItem = title => {
        let items = this.state.items;
        items.push({
            title,
            completed: false
        });
        this.setState({ items });
    };

    handleChecked = index => {
        let item = this.state.items[index];
        item.completed = !item.completed;
        let newItems = this.state.items;
        newItems[index] = item;
        this.setState({
            items: newItems
        });
    };

    handleDelete = index => {
        let items = this.state.items;
        const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
        // const newItems2 = this.state.items.filter((item, indexItem) => {             // other way to delete an item from an array
        //     return indexItem !== index;
        // });
        this.setState({
            items: newItems
        });
    };

    handleEdit = (index, title) => {
        let items = this.state.items;
        let item = items[index];
        item.title = title;
        items[index] = item;
        this.setState({
            items
        });
    };

    render() {
        return (
            <div>
                <AddItem onAddItem={this.onAddItem} />
                <ul>
                    {this.state.items.map((value, index) => {
                        return (
                            <TodoItem
                                handleChecked={this.handleChecked}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}
                                title={value.title}
                                completed={value.completed}
                                id={index}
                                key={index} // you can't use it. Just used by map to optimize the rendering
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
