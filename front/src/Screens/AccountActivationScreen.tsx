import React, { useState, useEffect } from "react";
import { Progress } from "../components/ReusableUIComponents/Spinner";
import { RouteComponentProps } from "react-router-dom";

import axios from "../axios";

const AccountActivationScreen: React.FunctionComponent<
  RouteComponentProps<any>
> = ({ location }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleActivateAccount:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    setLoading(true);
    const token = new URLSearchParams(location.search).get("token") as string;
    console.log(token);
    axios
      .post("/users/activate-account", {
        token,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setMessage(response.data)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="Center">
      <form className="Auth">
        <div className="Auth__Box">
          <div className="Auth__Box__Container">
            <div className="Auth__Box__InputBox">
              <div className="Auth__Box__InputBox__Header">
                Activate Account
              </div>
            </div>

            {loading ? (
              <button disabled className="Auth__Box__Buttons__Button">
                <Progress size={25} />
              </button>
            ) : (
              <button
                onClick={handleActivateAccount}
                className="Auth__Box__Buttons__Button"
              >
                Activate
              </button>
            )}

            {message && <div>{message}</div>}
          </div>
        </div>
        {message}Hello
      </form>
    </div>
  );
};

export default AccountActivationScreen;
