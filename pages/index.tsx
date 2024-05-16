import styles from "../styles/App.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { TicketType } from "../types/ticket.type";
import { UserType } from "../types/user.type";
import { Spinner } from "../components/common/Spinner/Spinner";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";

type AppProps = {
  tickets: TicketType[];
  users: UserType[];
  status: any;
};

const App = ({ tickets, users, status }: AppProps) => {
  const router = useRouter();

  // const [tickets, setTickets] = useState<TicketType[] | null>(null);
  // const [users, setUsers] = useState<UserType[] | null>(null);

  // const fetchGames = async () => {
  //   try {
  //     const headers = {
  //       authorization: cookies.get("jwt_token"),
  //     };

  //     const res = await axios.get(`${process.env.SERVER_URL}/tickets`, {
  //       headers,
  //     });

  //     setTickets(res.data.ticketList);

  //     console.log("response:", res);
  //   } catch (err) {
  //     console.log("err:", err);
  //     // @ts-expect-error this is correct way to catch error
  //     if (err.response.status === 401) {
  //       router.push("/login");
  //     }
  //   }
  // };

  // const fetchUsers = async () => {
  //   try {
  //     const headers = {
  //       authorization: cookies.get("jwt_token"),
  //     };

  //     const res = await axios.get(`${process.env.SERVER_URL}/users`, {
  //       headers,
  //     });

  //     setUsers(res.data.usersList);

  //     console.log("response:", res);
  //   } catch (err) {
  //     console.log("err:", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchGames();
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    if (status === 401) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {tickets ? (
        <Main tickets={tickets} users={users || []} handleDelete={() => {}} />
      ) : (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;

export async function getServerSideProps(ctx: any) {
  try {
    const headers = {
      authorization: getCookie("jwt_token", ctx),
    };

    const ticketsRes = await axios.get(`${process.env.SERVER_URL}/tickets`, {
      headers,
    });

    const usersRes = await axios.get(`${process.env.SERVER_URL}/users`, {
      headers,
    });

    return {
      props: {
        tickets: ticketsRes.data.ticketList,
        users: usersRes.data.usersList,
        status: ticketsRes.status,
      },
    };
  } catch (err) {
    return {
      props: {
        // @ts-expect-error
        status: err.response.status,
      },
    };
  }
}
