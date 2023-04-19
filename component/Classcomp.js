import {React,Component} from 'react'
class ClassComp extends Component{
    render(){
        return(
            <div>
                <hr/>
                <h2>Sử dụng Class component</h2>
                <h3>Áp dụng props</h3>
                <p>Name: <b>{this.props.name}</b></p>
                <p>Address: <b>{this.props.address}</b></p>
            </div>
        )
    }
}
export default ClassComp
