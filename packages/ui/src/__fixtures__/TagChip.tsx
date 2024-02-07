import { TagChip, TagChipSkeleton } from '../components'

const TAG_LABEL = 'Badge'

export default {
  'Base - No Action': <TagChip label={TAG_LABEL} size="Normal" />,
  'Base - Removable': (
    <TagChip action="Removable" label={TAG_LABEL} size="Normal" />
  ),
  'Base - Toggle': <TagChip action="Toggle" label={TAG_LABEL} size="Normal" />,
  Skeleton: <TagChipSkeleton />,
  Success: <TagChip label={TAG_LABEL} size="Normal" theme="Success" />
}
