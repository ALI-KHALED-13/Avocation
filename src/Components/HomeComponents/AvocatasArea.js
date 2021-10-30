import React from "react";
import Avocata from './Avocata';
import AvocataForm from "../SubComponents/AvocataForm";


class AvocatasArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avocatas: [],
        };
        this.controller = new AbortController();
        this.updataAvocatas = this.updataAvocatas.bind(this);
    }

    componentDidMount(){
        fetch('/all-avocatas', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({createdBefore: Date.now()}),
            signal: this.controller.signal,
        })
        .then(resp=> resp.json())
        .then(avocatas=> {
            if (avocatas[0]._id === this.state.avocatas[0]?._id){// no new stuff
                return;
            }
            this.updataAvocatas(avocatas);   
        })
        .catch(err=>{
            if (err.name === "AbortError") return;
            console.log(err)
        });
    }
    
    
    componentDidUpdate(){

        const observer = new IntersectionObserver((entries, observer)=>{

            if (entries[0].target.querySelector("#mother") !== null) return // it's my mother avoca... wait till the last avoca gets updated
            if (entries[0].isIntersecting){
                feedSection.lastElementChild.style.visibility = "visible"; //loading text

                fetch('/all-avocatas', {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        createdBefore: this.state.avocatas[this.state.avocatas.length - 1].createdAt
                    }),
                    signal: this.controller.signall,
                })
                .then(resp=> resp.json())
                .then(avocatas=> {
                    if (avocatas.length > 0 && // if something was returned
                        avocatas[0]._id !== this.state.avocatas[this.state.avocatas.length - 1]._id){ //avoid repetition
                        this.updataAvocatas(this.state.avocatas.concat(avocatas));
                    }
                    feedSection.lastElementChild.style.visibility = "hidden";
                    observer.unobserve(lastAvoca); 
                })
                .catch(err=>{
                    if (err.name === "AbortError") return;
                    console.log(err)
                });
            }
        }, {threeshold: 0.1});

        let feedSection = document.getElementById('feed');
        let lastAvoca = feedSection.children[feedSection.children.length - 2]; //-1 is the loading
        observer.observe(lastAvoca);
    }

    componentWillUnmount(){
        this.controller.abort();
    }

    updataAvocatas(arr){ 
        this.setState({avocatas: arr});
        document.getElementById('feed').lastElementChild.style.visibility = "hidden";
    }

    render(){
        
        return (
            <section id="feed">
                {this.props.user && <AvocataForm 
                                        user={this.props.user} avocatas={this.state.avocatas} 
                                        updataAvocatas={this.updataAvocatas}
                                    />}

                <Avocata user={false} users={this.props.users} data={{
                    text: "for my beloved Mother, who used to love drinking avocado :)",
                    creator: "Azza",
                    tags: "THANKS",
                    filename: "أمي.jpg",
                    contentType: "image/jpeg",
                    createdAt: "Forever",

                }} />

                {this.state.avocatas.length > 0 && this.state.avocatas
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
                 <article style={{margin: "20px"}}>Loading fresh avocatas...</article> 

            </section>
        );
    }
}

export default AvocatasArea; //react.memo the who;e area???

