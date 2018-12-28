import * as React from 'react';
import {
  Menu,
  Container,
} from 'semantic-ui-react';

class Header extends React.Component {
  public render() {
    return (
      <Menu fixed='top'>
        <Container>
          <Menu.Item>
            FireVideos
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;
