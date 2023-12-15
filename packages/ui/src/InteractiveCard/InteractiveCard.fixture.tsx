import { getProductCardInfos } from "utils/faker";
import InteractiveCard, { InteractiveCardSkeleton } from "./InteractiveCard";

export default {
  Component: <InteractiveCard product={getProductCardInfos()} actionLabel="Action"/>,
  Skeleton: <InteractiveCardSkeleton/>
}