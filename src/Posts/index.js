import { connect } from 'react-redux';
import { expandModel } from 'sans-schema';

const mapStateToProps = (state, { post }) => ({
    post: expandModel('posts', post, state),
});

export default connect(mapStateToProps, { likePost, unlikePost })(post => (
    <section className="post">
        <h2>{ post.user.name }</h2>
        <h2>{ post.title }</h2>
        <pre>{ post.message }</pre>
    </section>
));
