import { getTagsList } from 'utils/faker'

import { Toggle, ToggleGroup } from '../components'

const ToggleGroupContainer = ({ data }: { data: string[] }) => (
  <div className="w-64">
    <ToggleGroup
      data={data.map(tag => ({ display: tag, value: tag }))}
      type="multiple"
      variant={'outline'}
    />
  </div>
)

export default {
  Colored: <Toggle variant={'colored'}>Toggle</Toggle>,
  'Default Large': <Toggle size={'lg'}>Toggle</Toggle>,
  'Default Normal': <Toggle size={'default'}>Toggle</Toggle>,
  'Default Small': <Toggle size={'sm'}>Toggle</Toggle>,
  'List Empty': <ToggleGroupContainer data={[]} />,
  'List Full': <ToggleGroupContainer data={getTagsList()} />,
  Outline: <Toggle variant={'outline'}>Toggle</Toggle>
}
