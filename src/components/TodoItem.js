/**
 * Created by w10001901 on 2017/4/6.
 */
import React from 'react'

class TodoItem extends React.Component {
    render(){
        let className = this.props.isDone ? 'task-done' : '';
        return (
            <li>
                <label>
                    <input type="checkbox"/>
                    <span className={className}> {this.props.text} </span>
                </label>
            </li>
        )
    }
}
export default TodoItem