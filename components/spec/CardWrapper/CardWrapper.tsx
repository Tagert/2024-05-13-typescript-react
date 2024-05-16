import styles from "./styles/CardWrapper.module.css";
import React from "react";
import { useRouter } from "next/router";
import { TicketType } from "../../../types/ticket.type";
import { UserType } from "../../../types/user.type";
import { Card } from "../Card/Card";
import { Button } from "../../common/Button/Button";

type CardWrapperProps = {
  tickets: TicketType[] | TicketType;
  users: UserType[] | UserType;
  handleDelete: () => void;
};

const CardWrapper = ({ tickets, users, handleDelete }: CardWrapperProps) => {
  const router = useRouter();

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
          <React.Fragment key={`ticket-${ticket.ticket_id}`}>
            {isAllUsers ? (
              <Card
                key={`card-${ticket.ticket_id}`}
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
                  key={`card-${ticket.ticket_id}`}
                  ticket_id={ticket.ticket_id}
                  title={ticket.title}
                  from_location={ticket.from_location}
                  to_location={ticket.to_location}
                  to_location_photo_url={ticket.to_location_photo_url}
                  ticket_price={ticket.ticket_price}
                  userId={ticket.userId}
                  filteredUsers={userNames}
                />
                <div className={styles.detailsContainer}>
                  <div className={styles.ticketDescription}>
                    <h3>
                      Remember that happiness is a way of travel - not a
                      destination.
                    </h3>
                    <p>
                      Deleting a travel card typically involves several steps to
                      ensure that the deletion is intentional and that no
                      important data is lost:
                    </p>

                    <p>If you are sure, please press the delete button.</p>
                    <div className={styles.buttonHolder}>
                      <Button
                        isLoading={false}
                        onClick={handleDelete}
                        title="Delete Button"
                      />

                      <Button
                        isLoading={false}
                        onClick={() => router.push("/")}
                        title="Go Back"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { CardWrapper };
