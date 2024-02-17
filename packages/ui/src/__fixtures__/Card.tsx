import { Users } from '../Icons'
import { Button, Card } from '../components'

const description = `Here's some description for the card`
const title = 'Card Title'

const Content = () => (
  <>
    <p className="text-4xl font-semibold">Some big text</p>
    <p className="text-sm font-light">Some litle description</p>
  </>
)

export default {
  ContentFull: (
    <Card description={description} title={title}>
      <Content />
    </Card>
  ),
  Described: <Card description={description} size={'small'} title={title} />,
  Empty: <Card title={title} />,
  Icon: (
    <Card Icon={Users} description={description} size={'small'} title={title} />
  ),
  'With Footer': (
    <Card
      description={description}
      footer={<Button fullWidth>Action</Button>}
      size={'large'}
      title={title}
    >
      <Content />
    </Card>
  )
}
