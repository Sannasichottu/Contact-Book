import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already Exists");
    }

    if (checkNumber) {
      return toast.error("This number already Exists");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully!!!");
    history.push("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5  text-center">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="from-group">
              <input
                type="text"
                placeholder="Name"
                className=" m-2 form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="email"
                placeholder="Email"
                className="m-2 form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="number"
                placeholder="Phone number"
                className="m-2 form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="submit"
                value="Add Contact"
                className="col-md-12 m-2 btn btn-black btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
