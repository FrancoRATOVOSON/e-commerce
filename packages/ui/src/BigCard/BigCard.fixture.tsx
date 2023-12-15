import { getProductPageInfos } from "utils/faker";
import BigCard, { BigCardSkeleton } from "./BigCard";

export default {
  Component: <BigCard product={getProductPageInfos()}/>,
  Skeleton: <BigCardSkeleton/>
}