import styles from "./styles/CardWrapper.module.css";
import { TicketType } from "../../../types/ticket.type";
import { UserType } from "../../../types/user.type";
import { Card } from "../Card/Card";

type CardWrapperProps = {
  tickets: TicketType[];
  users: UserType[];
};

const CardWrapper = ({ tickets, users }: CardWrapperProps) => {
  return (
    <div className={styles.container}>
      {tickets.map((ticket) => {
        const filteredUsers = users.filter(
          (user) => user.user_id === ticket.userId
        );

        const userNames = filteredUsers.map((user) => user.name);

        return (
          <Card
            key={ticket.ticket_id}
            ticket_id={ticket.ticket_id}
            title={ticket.title}
            from_location={ticket.from_location}
            to_location={ticket.to_location}
            to_location_photo_url={ticket.to_location_photo_url}
            ticket_price={ticket.ticket_price}
            userId={ticket.userId}
            filteredUsers={userNames}
          />
        );
      })}
    </div>
  );
};

export { CardWrapper };
