import { useState } from "react";
import Member from "../components/Member";
import Partner from "../components/Partner";
import Sidebar from "../components/Sidebar";
import Admin from "../components/Admin";

const Members = () => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [name, setName] = useState(localStorage.getItem("username"));
  const token = localStorage.getItem("token");

  return (
    <div className="flex">
      <Sidebar
        name={name}
        role={role}
      />
      {role === "USER" && <Member />}
      {role === "PARTNER" && <Partner />}
    </div>
  );
};

export default Members;
