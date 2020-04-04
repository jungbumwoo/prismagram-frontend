import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const [requestSecret] = useMutation(LOG_IN, { 
    update:(_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("You dont have an account yet, create one");
        setTimeout(() => setAction("signUp"), 3000);
      }
    },
    variables:{ email: email.value }
  });

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    variables:{ username: username.value, firstName: firstName.value, lastName: lastName.value}
  });

  const onLogin = (e) => {
    e.preventDefault();
    if (email !== "") {
      requestSecret();
    }
  };

  return <AuthPresenter 
    setAction={setAction}
    action={action}
    username={username}
    firstName={firstName}
    lastName={lastName}
    email={email}
    onLogin={onLogin}/>
};