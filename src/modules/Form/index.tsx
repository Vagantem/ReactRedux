import React from 'react';
import "./form.less";
import {restApi} from "../../api/restApi";

export const Form: React.FC = () => {
  /*const submitForm = (values) => {
    restApi.postUser(values);
  };*/

  return (
    <form action="#">
      <input type="text" className="form-control mb-2" placeholder="Username"/>
      <button type="submit" className="btn btn-outline-primary">Send</button>
    </form>
  );
};
