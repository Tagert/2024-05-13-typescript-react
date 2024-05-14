import styles from "../styles/App.module.css";
import cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import { TicketType } from "../types/ticket.type";
import { UserType } from "../types/user.type";
import { Spinner } from "../components/common/Spinner/Spinner";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";

const App = () => {
  const [tickets, setTickets] = useState<TicketType[] | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);

  const fetchGames = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const res = await axios.get("http://localhost:3000/tickets", {
        headers,
      });

      setTickets(res.data.ticketList);

      console.log("response:", res);
    } catch (err) {
      console.log("err:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const res = await axios.get("http://localhost:3000/users", {
        headers,
      });

      setUsers(res.data.usersList);

      console.log("response:", res);
    } catch (err) {
      console.log("err:", err);
    }
  };

  useEffect(() => {
    fetchGames();
    fetchUsers();
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      {tickets ? (
        <Main tickets={tickets} users={users || []} />
      ) : (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default App;
