import { AdjustmentsHorizontalIcon } from "../Icons";
import Toggle from "./Toggle";

export default (
  <Toggle
  onToggle={() => {}}
  className={(state) =>
    `flex flex-row gap-1 text-dark border border-dark rounded-md p-2 ${state ? 'bg-light' : 'bg-white'}`
  }>
    <AdjustmentsHorizontalIcon/>
    <span>Filter</span>
  </Toggle>
)