import { getProductCardInfos } from "utils/faker";
import CartElement, { CartElementSkeleton } from "./CartElement";

export default {
  Component: <CartElement product={getProductCardInfos()} quantity={3} />,
  Skeleton: <CartElementSkeleton/>
}