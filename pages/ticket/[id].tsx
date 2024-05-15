import styles from "./styles/Ticket.module.css";
import cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TicketType } from "../../types/ticket.type";
import { UserType } from "../../types/user.type";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";

const Ticket = () => {
  const router = useRouter();

  const [ticket, setTicket] = useState<TicketType | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          authorization: cookies.get("jwt_token"),
        };

        const ticketRes = await axios.get(
          `${process.env.SERVER_URL}/tickets/${router.query.id}`,
          { headers }
        );

        setTicket(ticketRes.data);

        const userRes = await axios.get(
          `${process.env.SERVER_URL}/users/${ticketRes.data.userId}`,
          { headers }
        );

        setUser(userRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  const handleDelete = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      await axios.delete(
        `${process.env.SERVER_URL}/tickets/${router.query.id}`,
        { headers }
      );

      router.push("/");
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      {ticket && user && (
        <Main tickets={ticket} users={user} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Ticket;
