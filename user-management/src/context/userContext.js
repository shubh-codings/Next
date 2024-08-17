"use client";
import { createContext, useContext, useState } from "react";

const userInitialFormData = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  address: "",
  // isAdmin: false,
};

const userFormControls = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter Your First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter Your Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter Your Password",
    type: "password",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter Your Address",
    type: "text",
  },
];

const AddUserContext = createContext({});

export const AddUserContextProvider = ({ children }) => {
  const [openAddUserForm, setOpenAddUserForm] = useState(false);
  const [userFormData, setUserFormData] = useState(userInitialFormData);
  const [currentUserId, setCurrentUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const value = {
    openAddUserForm,
    setOpenAddUserForm,
    userFormData,
    setUserFormData,
    userFormControls,
    userInitialFormData,
    currentUserId,
    setCurrentUserId,
    loading,
    setLoading,
  };
  return (
    <AddUserContext.Provider value={value}>{children}</AddUserContext.Provider>
  );
};

// export
export default AddUserContext;

// export default AddUserContextProvider;
