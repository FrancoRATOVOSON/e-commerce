/* eslint-disable perfectionist/sort-objects */
import { TrashIcon } from '../Icons'
import { Button } from '../components'

const text = 'Action Button'

export default {
  Action: <Button variant="action">{text}</Button>,
  Primary: <Button variant="primary">{text}</Button>,
  Secondary: <Button variant="secondary">{text}</Button>,
  Icon: (
    <Button className="text-destructive" size="icon" variant="ghost">
      <TrashIcon size={24} />
    </Button>
  )
}
