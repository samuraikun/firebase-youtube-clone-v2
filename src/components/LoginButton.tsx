import * as React from 'react';
import { Button } from 'semantic-ui-react';

interface Props {
  socialLogin: () => void;
}

const LoginButton: React.StatelessComponent<Props> = props => {
  return (
    <Button
      content='login'
      onClick={props.socialLogin}
    />
  );
}

export default LoginButton;
