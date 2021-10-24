import React from "react";
import Avocata from './Avocata';
import AvocataForm from "../SubComponents/AvocataForm";


class AvocatasArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {avocatas: [], };
        this.user = this.props.user
    }

    componentDidMount(){
        console.log('posts area mounted');
    }



    render(){
        return (
            <section id="feed">
                {this.user && <AvocataForm user={this.user}/>}

                {this.state.avocatas.map(console.log)}

                <Avocata />
                <Avocata />
            </section>
        );
    }
}

export default AvocatasArea;

