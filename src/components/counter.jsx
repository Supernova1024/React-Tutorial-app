import React, { PureComponent } from 'react';

class Counter extends React.Component {
   
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };
    // render tags according to the logical condition
    renderTags() {
        if (this.state.tags.length === 0) 
            return (
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm">Increment</button>
                    <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                    <span style={{ fontSize: 30} } className="badge badge-primary m-2">{this.formatCount()}</span>
                </div>
            );

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    // render component to index.html
    render() {
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }
    // define base class and add sub class according to the logical condition
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    // Change format of value to be shown in tag
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value;
    }
}
 
export default Counter;