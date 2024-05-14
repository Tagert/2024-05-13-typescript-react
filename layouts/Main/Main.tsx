import styles from "./styles/Main.module.css";
import { TicketType } from "../../types/ticket.type";
import { CardWrapper } from "../../components/spec/CardWrapper/CardWrapper";
import { UserType } from "@/types/user.type";

type MainProps = {
  tickets: TicketType[];
  users: UserType[];
};

const Main = ({ tickets, users }: MainProps) => {
  return (
    <main className={styles.container}>
      <div>
        <h1>
          Welcome to Travel Planner, aimed for new backpackers, working holiday
          makers, students and gap year travelers for the first step in their
          traveling journey.
        </h1>
      </div>
      <CardWrapper tickets={tickets} users={users} />
    </main>
  );
};

export { Main };