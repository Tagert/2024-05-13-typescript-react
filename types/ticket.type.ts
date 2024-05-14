export type TicketType = {
  ticket_id: string;
  title: string;
  from_location: string;
  to_location: string;
  to_location_photo_url: string;
  ticket_price: number;
  userId?: string;
  filteredUsers?: string[];
};
