import React from "react";
import Avocata from './Avocata';
import AvocataForm from "../SubComponents/AvocataForm";


class AvocatasArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avocatas: [],
            users: [],
        };
        this.controller = new AbortController();
        this.updataAvocatas = this.updataAvocatas.bind(this);
        this.handleObserver = this.handleObserver.bind(this);
    }

    componentDidMount(){
        fetch('/users', {signal: this.controller.signal})
        .then(resp=> resp.json())
        .then(fetchedUsers=> {
            this.setState({users: fetchedUsers});

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

        })
        .catch(err=>{
            if (err.name === "AbortError") return;
            console.log(err)
        });

        
    }
    
    
    componentDidUpdate(prevProps, prevState){
        if (prevState.users.length === 0) return ; // it the first update for users, avocatas are yet fetching

        const observer = new IntersectionObserver(this.handleObserver, {threeshold: 0.1});

        let feedSection = document.getElementById('feed');
        let lastAvoca = feedSection.children[feedSection.children.length - 2]; //-1 is the loading..
        observer.observe(lastAvoca);

        /////////////////////update users status ////////
        fetch('/users', {signal: this.controller.signal})
        .then(resp=> resp.json())
        .then(fetchedUsers=>{

            let condition = fetchedUsers.length > this.state.users.length || 
                            fetchedUsers.some((user, ind)=> user.logged !== this.state.users[ind].logged);

            if (condition) this.setState({users: fetchedUsers})
        })
        .catch(console.log)
    }

    componentWillUnmount(){
        this.controller.abort();
    }

    updataAvocatas(arr){ 
        this.setState({avocatas: arr});
        document.getElementById('feed').lastElementChild.style.visibility = "hidden";
    }

    handleObserver(entries, observer){
        let feedSection = document.getElementById('feed');
        if (entries[0].target.querySelector("#mother") !== null) return; // it's my mother avoca (not logged IN)... wait till the last avoca gets inserted

        if (entries[0].target.nodeName === "FORM") return; // it's the AvocataForm (logged IN)... wait till the last avoca gets inserted
        
        if (entries[0].isIntersecting){
            feedSection.lastElementChild.style.visibility = "visible"; //loading text

            fetch('/all-avocatas', {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    createdBefore: this.state.avocatas[this.state.avocatas.length - 1].createdAt
                }),
                signal: this.controller.signal,
            })
            .then(resp=> resp.json())
            .then(avocatas=> {
                if (avocatas.length > 0 && // if something was returned
                    avocatas[0]._id !== this.state.avocatas[this.state.avocatas.length - 1]._id){ //avoid repetition

                    this.updataAvocatas(this.state.avocatas.concat(avocatas));
                }
                feedSection.lastElementChild.style.visibility = "hidden";
                observer.unobserve(entries[0].target); 
            })
            .catch(err=>{
                if (err.name === "AbortError") return;
                console.log(err)
            });
        }
    }

    render(){
        
        return !this.state.users.length? <section>loading...</section>: 
          (
            <section id="feed">
                
                <Avocata user={false} users={this.state.users}
                    data={{
                        text: "for my beloved Mother, who used to love avocado juice :)",
                        creator: "Azza",
                        tags: "THANKS",
                        filename: "أمي.jpg",
                        contentType: "image/jpeg",
                        createdAt: "Forever",

                    }} 
                />

                {this.props.user && <AvocataForm 
                                    user={this.props.user} avocatas={this.state.avocatas} 
                                    updataAvocatas={this.updataAvocatas}
                                />
                }

                {this.state.avocatas.length > 0 && this.state.avocatas
                                                    .map(avocata=>{
                                                        let chosenTags = this.props.chosenCategs;
                                                        if (chosenTags.includes('mine')){
                                                            if (avocata.creator !== this.props.user.userName) return null
                                                            chosenTags = this.props.chosenCategs.filter(tag=> tag !== 'mine');
                                                        }
                                                       
                                                        if (chosenTags.some(categ=> avocata.tags.indexOf(categ) === -1)){ //catcha point: [''].some() runs, while [].some() returns false, always
                                                            return null; //'blahblah'.indexOf('') === -1 returns false cause '' exists XD
                                                        }
                                                        return <Avocata key={avocata.createdAt} data={avocata} 
                                                                user={this.props.user} users={this.state.users}
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

