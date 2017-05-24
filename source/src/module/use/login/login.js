import {
    Component
} from 'react';
import {
    IndexLink,
    Link,
    browserHistory
} from 'react-router';
class login extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() { //挂载后
        // console.log(this.props);
    }

    handleClick(event) {

        this.props.setLoginAction(5 + this.props.loginState);
        browserHistory.push('/index');

    }

    render() {
        return (
            <div>
                login--actiion:{this.props.loginState}
                {' '}
                <div onClick={this.handleClick.bind(this)}>能点点爸爸吗，让你看到store的改变</div>
                {' '}
                <Link to='/index'>workindex</Link>
                {' '}
                <Link to='/index/workDemo'>workDemo</Link>
                {' '}
                <Link to='/index/workDemo2'>workDemo2</Link>
                {' '}
                <Link to='/login'>login</Link>
                {' '}
                <IndexLink to='/'>index</IndexLink>
                {' '}
            </div>
        );
    }
}

import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import {
    createSelector,
    createStructuredSelector
} from 'reselect'
import * as actiontor from 'rActions/login';

const loginState = (state) => state.login;

// const countGetBannerScroll = createSelector(
//     getBannerScroll,
//     (bannerScroll) => {
//         console.log(bannerScroll);
//     }
// );

const mapStateToProps = createStructuredSelector({
    loginState
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(actiontor, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(login);