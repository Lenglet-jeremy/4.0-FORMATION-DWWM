import { useEffect, useState } from "react";
import { AllUsersContext } from "../../context/AllUsersContext";
import { getUsers } from "../../apis/users";

export default function AllUsersProviders({ children }) {
  const [allUsers, setAllUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const updateAllUsers = async () => {
    const allUsersData = await getUsers();
    setAllUsers(allUsersData);
  };

  useEffect(() => {
    updateAllUsers();
  }, []);

  function selectConversation(conversation) {
    setSelectedUser(conversation);
  }
  return (
    <AllUsersContext.Provider
      value={{ allUsers, updateAllUsers, selectConversation, selectedUser }}
    >
      {children}
    </AllUsersContext.Provider>
  );
}
