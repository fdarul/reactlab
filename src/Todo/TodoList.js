import React,{ Component} from 'react'

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            item:[] 
        };
    }

    onChange(event){
        this.setState({userInput: event.target.value});
    }
 
    addTodo(event) {
        event.preventDefault();
        this.setState({item:[...this.state.item, this.state.userInput]}, ()=>console.log(this.state));
    }

    renderTodos(){
        return this.state.item.map((item)=>{
            return (
            <div key={item}>
                {item} | <button>x</button>
            </div>)
        })
    }

    render() {
        return (
        <div>
            <h1>Ma todo list</h1>
            <form>
                <input 
                    value={this.state.userInput} 
                    type="text" placeholder="Renseigner un item"
                    onChange={this.onChange.bind(this)}
                ></input>
                <button onClick={this.addTodo.bind(this)}>Ajouter</button>
            </form>
            <div>
                {this.renderTodos()}
            </div>
        </div>);
        
    }
}   

export default TodoList;