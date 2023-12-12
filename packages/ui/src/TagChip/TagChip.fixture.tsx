import TagChip from "./TagChip";

const TAG_LABEL = 'Label'

export default {
  'Base - No Action': <TagChip label={TAG_LABEL} size="Normal"/>,
  'Base - Toggle': <TagChip label={TAG_LABEL} action="Toggle" size="Normal"/>,
  'Base - Removable': <TagChip label={TAG_LABEL} action="Removable" size="Normal"/>,
  'Success': <TagChip label={TAG_LABEL} size="Normal" theme="Success"/>,
  'Warning': <TagChip label={TAG_LABEL} size="Normal" theme="Warning"/>,
  'Error': <TagChip label={TAG_LABEL} size="Normal" theme="Error"/>,
  'Infos': <TagChip label={TAG_LABEL} size="Normal" theme="Infos"/>,
}