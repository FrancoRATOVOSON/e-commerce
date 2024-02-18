import * as React from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 9C7 7.89543 7.89543 7 9 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H9C7.89543 22 7 21.1046 7 20V9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M4 18C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)
export default SvgComponent
