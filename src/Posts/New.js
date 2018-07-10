import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandModel } from 'sans-schema';

import Button from '../Button';
import UserProfile from '../Users/Profile';
import { addPost } from './actions';

class NewPost extends Component {
    state = {
        userId: null,
        message: '',
    };

    render = () => (
        <section className="new-post">
            <form>
                { this.props.users.map(user => (
                    <Button selected={ user.id === this.state.userId }>user.name</Button>
                )) }
                <select value={ this.state.userId } onChange={ e => this.setState({ userId: e.target.value }) }>
                    { this.props.users.map(user => (
                        <option value={ user.id }>user.name</option>
                    )) }
                </select>
                <input type="text" value={ this.state.title } onChange={ e => this.setState({ title: e.target.value }) } />
                <textarea value={ this.state.message } onChange={ e => this.setState({ message: e.target.value }) } />
            </form>
            <UserProfile user={ this.state.user } />
        </section>
    );
}

const mapStateToProps = state => ({
    // Note: expandModel, to get the comment post links
    users: state.users.map(user => expandModel('users', user, state))
});

export default connect(mapStateToProps, { addPost })(NewPost);
