import styles from "./styles/Card.module.css";
import { TicketType } from "@/types/ticket.type";

const Card = ({
  ticket_id,
  title,
  from_location,
  to_location,
  to_location_photo_url,
  ticket_price,
  userId,
  filteredUsers,
}: TicketType) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={to_location_photo_url} alt="" />
      </div>

      <div className={styles.descriptionBox}>
        <h3>{title}</h3>
        <h4>
          From: <span>{from_location}</span>
        </h4>
        <h4>
          To: <span>{to_location}</span>
        </h4>
        <h5>
          Price: <span>{ticket_price}€</span>
        </h5>
        <p>
          User created: <span>{filteredUsers}</span>
        </p>
        <h6>
          Ticket Id: <span>{ticket_id}</span>
        </h6>
        <h6>
          User Id: <span>{userId}</span>
        </h6>
      </div>
    </div>
  );
};

export { Card };
