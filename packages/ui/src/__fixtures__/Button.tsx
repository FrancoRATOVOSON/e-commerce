/* eslint-disable perfectionist/sort-objects */
import { Trash2 } from '../Icons'
import { Button } from '../components'

const text = 'Action Button'

export default {
  Action: <Button variant="action">{text}</Button>,
  Primary: <Button>{text}</Button>,
  Outline: <Button variant="outline">{text}</Button>,
  Icon: (
    <Button className="text-destructive" size="icon" variant="ghost">
      <div>
        <Trash2 size={24} />
      </div>
    </Button>
  )
}
