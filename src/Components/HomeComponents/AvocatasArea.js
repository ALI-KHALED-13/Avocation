import React from "react";
import Avocata from './Avocata';
import AvocataForm from "../SubComponents/AvocataForm";


class AvocatasArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {avocatas: [], };

        this.updataAvocatas = this.updataAvocatas.bind(this);
    }

    componentDidMount(){
        fetch('/all-avocatas')
        .then(resp=> resp.json())
        .then(avocatas=> {
            this.updataAvocatas(avocatas);      
        })
        .catch(console.log);
    }
    ///component will unmount with session storage to imrpove rendering time 
    updataAvocatas(arr){ this.setState({avocatas: arr}) }

    render(){
        
        return (
            <section id="feed">
                {this.props.user && <AvocataForm 
                                        user={this.props.user} avocatas={this.state.avocatas} 
                                        updataAvocatas={this.updataAvocatas}
                                    />}

                {this.state.avocatas.length === 0? <article>Loading fresh avocatas...</article> : 
                                                    this.state.avocatas
                                                    .map(avocata=>{
                                                        if (this.props.chosenCategs.some(categ=> avocata.tags.indexOf(categ) === -1)){ //catcha point: [''].some() runs, while [].some() returns false, always
                                                            return null; //'blahblah'.indexOf('') === -1 returns false cause '' exists XD
                                                        }
                                                        return <Avocata key={avocata.createdAt} data={avocata} 
                                                                user={this.props.user} users={this.props.users}
                                                                avocatas={this.state.avocatas} updataAvocatas={this.updataAvocatas}
                                                                />
                                                    })
                }

            </section>
        );
    }
}

export default AvocatasArea; //react.memo the who;e area???

