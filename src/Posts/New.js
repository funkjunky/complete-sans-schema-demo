import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandModel } from '../configured-sans-schema';

import Button from '../Button';
import UserProfile from '../Users/Profile';
import { addPost } from './actions';

class NewPost extends Component {
    state = {
        userId: 0,
        title: '',
        message: '',
    };

    render = () => {
        const { userId: id, message, title } = this.state;
        return (
            <section className="new-post">
                <form onSubmit={ e => { this.props.addPost({ user: { id }, message, title }); e.preventDefault() } }>
                    { this.props.users.map(user => (
                        <Button selected={ user.id === id } onClick={ () => this.setState({ userId: user.id }) } key={ user.id }>{ user.name }</Button>
                    )) }
                    <input type="text" value={ title } onChange={ e => this.setState({ title: e.target.value }) } />
                    <textarea value={ message } onChange={ e => this.setState({ message: e.target.value }) } />
                    <button>Add Post</button>
                </form>
                { id &&
                    <UserProfile user={ { id } } />
                }
            </section>
        );
    };
}

const mapStateToProps = state => ({
    // Note: expandModel, to get the comment post links
    users: Object.values(state.users).map(user => expandModel('users', user, state))
});

export default connect(mapStateToProps, { addPost })(NewPost);
