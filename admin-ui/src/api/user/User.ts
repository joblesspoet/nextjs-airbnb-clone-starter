import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Listing | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
