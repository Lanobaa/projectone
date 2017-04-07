import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './TodoHeader'
import TodoMain from'./TodoMain'

class App extends React.Component { //定义组件，继承父类
    constructor(){
        super()
        this.state = { //设置初始状态
            todos : []
        }
    }
    addTodo(item){ //新增了添加todo事项的方法
        this.state.todos.push(item)
        this.setState({todos : this.state.todos}); //设置状态
    }
    render(){
        return (
            <div className="todo-input">
                {/*// 将原内容写在组件中并引入进行渲染*/}
                {/*// 把addTodo方法传递到TodoHeader组件中，bind（this），是为了把该React实例绑定到this上*/}
                <TodoHeader addTodo={this.addTodo.bind(this)} />
                <TodoMain todos={this.state.todos} />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))