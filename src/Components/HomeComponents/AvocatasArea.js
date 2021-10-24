import React from "react";
import Avocata from './Avocata';
import AvocataForm from "../SubComponents/AvocataForm";


class AvocatasArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {avocatas: [], };
        this.user = this.props.user
        this.updataAvocatas = this.updataAvocatas.bind(this);
    }

    componentDidMount(){
        console.log('posts area mounted');
        fetch('/all-avocatas')
        .then(resp=> resp.json())
        .then(avocatas=> {
            this.updataAvocatas(avocatas);      
        })
        .catch(console.log);
    }

    updataAvocatas(arr){this.setState({avocatas: arr})}

    render(){
        
        return (
            <section id="feed">
                {this.user && <AvocataForm user={this.user} avocatas={this.state.avocatas} updataAvocatas={this.updataAvocatas}/>}

                {this.state.avocatas.map(avocata=> <Avocata data={avocata} key={avocata.createdAt}/>)}

            </section>
        );
    }
}

export default AvocatasArea;

