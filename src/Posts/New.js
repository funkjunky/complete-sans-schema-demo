import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandModel } from '../configured-sans-schema';

import { addPost } from './actions';

class NewPost extends Component {
    state = {
        title: '',
        message: '',
    };

    render = () => {
        const { message, title } = this.state;
        const { currentUser: user } = this.props;
        return (
            <section className="new-post">
                <form onSubmit={ e => { this.props.addPost({ user, message, title }); e.preventDefault() } }>
                    <input type="text" value={ title } onChange={ e => this.setState({ title: e.target.value }) } />
                    <textarea value={ message } onChange={ e => this.setState({ message: e.target.value }) } />
                    <button>Add Post</button>
                </form>
            </section>
        );
    };
}

const mapStateToProps = state => ({
    // Note: expandModel, to get the comment post links
    users: Object.values(state.users).map(user => expandModel('users', user, state)),
    currentUser: state.currentUser,
});

export default connect(mapStateToProps, { addPost })(NewPost);
