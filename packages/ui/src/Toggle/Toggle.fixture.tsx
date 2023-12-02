import { AdjustmentsHorizontalIcon } from "../Icons";
import Toggle from "./Toggle";

export default (
  <Toggle
  onToggle={() => {}}
  className={(state) =>
    `flex flex-row gap-1 text-light-text-high dark:text-dark-text-high
    border border-black dark:border-white rounded-md p-2
    ${state ? 'bg-light-bg-low dark:bg-dark-text-low'
    : ''}`
  }>
    <AdjustmentsHorizontalIcon/>
    <span>Filter</span>
  </Toggle>
)