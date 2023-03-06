import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Login;
