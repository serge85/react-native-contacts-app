import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Pokeball from '../1.png'
import { connect } from 'react-redux'

class Home extends Component {

    /*
    state = {
        posts:[]
    }
    */
    render() {
        const  posts = this.props.data;
        const postLists = posts.length ? (
            posts.map( post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A Pokeball"/>
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                )
            })
        ): (
            <div className="center">No post yet!!</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                { postLists }
            </div>
        );
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.posts
    }
}

/*
const callApi = (dispatch) => {
    return {
        loadPosts : () => {
            console.log(api.getAll())
            return api.getAll().then(p => {
                dispatch(loadPosts(p))
            });
        }
    }
    
}
*/
export default connect(mapStateToProps)(Home);
