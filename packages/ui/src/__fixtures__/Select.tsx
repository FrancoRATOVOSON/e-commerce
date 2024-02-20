import { getAnArrayOf } from 'utils'
import { faker } from 'utils/faker'

import {
  Select,
  SelectController,
  SelectElementType,
  SelectGroupType
} from '../components'

function getElementType(): SelectElementType {
  const value = faker.word.noun()

  return { label: value.charAt(0).toUpperCase() + value.slice(1), value }
}

function getElementGroup(): SelectGroupType {
  const groups = getAnArrayOf(faker.word.noun, 3)

  return groups.reduce((obj, element) => {
    // eslint-disable-next-line no-param-reassign
    obj[element] = {
      label: element.charAt(0).toUpperCase() + element.slice(1),
      options: getAnArrayOf(getElementType, 5)
    }
    return obj
  }, {} as SelectGroupType)
}

const list: SelectElementType[] = getAnArrayOf(getElementType, 5)
const groupList: SelectGroupType = getElementGroup()

export default {
  Custom: (
    <Select options={list}>
      <SelectController className="w-56" placeholder="Custom Controller" />
    </Select>
  ),
  Group: <Select options={groupList} placeholder="Grouped Select" />,
  Simple: <Select options={list} />
}
