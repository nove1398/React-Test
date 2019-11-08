import React, { Component } from 'react';
import Post from './Post';

export class Blog extends Component {


    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };
    }

    render() {
        return (
            <div>
                <h1>Blog</h1>
                <div>
                    <form className="">
                        <textarea className="form-control mb-2" ref="textbox"></textarea>
                        <button className="btn btn-primary" onClick={this.onAdd}>Submit</button>
                    </form>
                </div>
                <div className="container-fluid" ref="blog-wrapper">
                    <div className="row mx-auto md-5">
                        {
                            this.state.itemList.map((item, index) => {
                                return <Post data={item} key={item.id}/>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        );
    }

    //Local Fetch
    fetchBg = async (e) => {
        e.stopPropagation();;
        await fetch('weatherforecast/Sampler')
        .then(res => res.json())
        .then((data) => {
            this.setState({ itemList: data });
            console.log(data);

        })
        .catch(console.log)
    }

    onAdd = (e) => {
        e.preventDefault();
        let item = {
            id: Math.floor(Math.random() * (+1000 - +1)) + +1,
            name: "test",
            date: Date.now,
            title: " Test title",
            body: this.refs.textbox.value.trim()
        };
        let arr = [...this.state.itemList];
        arr.push(item);
        this.setState({ itemList: arr });
    }

    
}