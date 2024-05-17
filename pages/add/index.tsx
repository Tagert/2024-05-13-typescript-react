import styles from "./styles/Add.module.css";
import cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { PageTemplate } from "../../components/spec/PageTemplate/PageTemplate";
import { Button } from "../../components/common/Button/Button";
import { Modal } from "../../components/spec/Modal/Modal";

const Add = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const addCard = async () => {
    try {
      const newCard = {
        title: title,
        from_location: fromLocation,
        to_location: toLocation,
        to_location_photo_url: imageUrl,
        ticket_price: price,
      };

      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/tickets`,
        newCard,
        {
          headers,
        }
      );

      console.log(response);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isAllFieldsInserted =
    title && fromLocation && toLocation && imageUrl && price;

  return (
    <PageTemplate>
      <main className={styles.container}>
        <div className={styles.inputBox}>
          <h4>
            You can create a new <span>Card</span> here:
          </h4>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="Your title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            From:
            <input
              type="text"
              name="from"
              placeholder="Location from..."
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            />
          </label>

          <label>
            To:
            <input
              type="text"
              name="to"
              placeholder="Location to..."
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
            />
          </label>

          <label>
            Image:
            <input
              type="text"
              name="to"
              placeholder="Your image url..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="to"
              placeholder="Your price €..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.ticketDescription}>
            <h3>
              Remember that happiness is a way of travel - not a destination.
            </h3>
            <p>
              Add a travel card typically involves several steps to ensure that
              the adding is intentional and all important data is correct:
            </p>

            <p>Please fill all fields and press the Add button.</p>
            <div className={styles.buttonHolder}>
              <Button
                className={`${
                  isAllFieldsInserted ? styles.validBtn : styles.invalidBtn
                }`}
                isLoading={false}
                onClick={addCard}
                title="Add Button"
              />

              <Button
                className={styles.validBtn}
                isLoading={false}
                onClick={() => router.push("/")}
                title="Go Back"
              />
            </div>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
};

export default Add;
