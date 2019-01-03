import * as React from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { State } from '../App';
import firebase from '../config/firebase';
import {
  Menu,
  Container
} from 'semantic-ui-react';
import LoginButton from './LoginButton';
import { socialLogin } from '../actions/auth';

interface Props {
  auth: firebase.auth.Auth;
  profile: firebase.UserInfo;
  socialLogin: (selectedProvider: string) => void;
};

const actions = {
  socialLogin
}

const mapStateToProps = (state: State) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class Header extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.onSocialLogin = this.onSocialLogin.bind(this);
  }

  public componentDidMount() {
    const { auth, profile } = this.props;
    console.log(auth);
    console.log(profile);
  }

  public render() {
    return (
      <Menu fixed='top'>
        <Container>
          <Menu.Item>
            FireVideos
          </Menu.Item>
          <Menu.Item position='right'>
            <LoginButton socialLogin={this.onSocialLogin} />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }

  private onSocialLogin() {
    this.props.socialLogin('google');
  }
}

export default withFirebase(connect(mapStateToProps, actions)(Header));
