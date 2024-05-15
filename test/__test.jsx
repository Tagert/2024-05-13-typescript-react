import styles from "./styles/CardWrapper.module.css";
import { TicketType } from "../../../types/ticket.type";
import { UserType } from "../../../types/user.type";
import { Card } from "../Card/Card";

type CardWrapperProps = {
  tickets: TicketType[] | TicketType,
  users: UserType[] | UserType,
};

const CardWrapper = ({ tickets, users }: CardWrapperProps) => {
  const ticketsArray = Array.isArray(tickets) ? tickets : [tickets];
  const usersArray = Array.isArray(users) ? users : [users];

  return (
    <div className={styles.container}>
      {ticketsArray.map((ticket) => {
        const filteredUsers = usersArray.filter(
          (user: UserType) => user.user_id === ticket.userId
        );

        const userNames = filteredUsers.map((user) => user.name);

        const isAllUsers = usersArray.length > 1;

        return (
          <>
            {isAllUsers ? (
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
            ) : (
              <>
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
                <div>Testing</div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export { CardWrapper };
