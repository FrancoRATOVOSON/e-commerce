import Card from "./Card"
import { getProductCardInfos } from 'utils/faker'

export default {
  Normal: <Card product={getProductCardInfos()}/>,
  Small: <Card product={getProductCardInfos()} size="Small"/>
}