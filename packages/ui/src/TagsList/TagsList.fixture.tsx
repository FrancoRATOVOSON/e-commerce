import { faker } from "@faker-js/faker";
import TagsList from "./TagsList";

function getTagsList (count:number):Array<string> {
  let list:Array<string> = []
  for (let index = 0; index < count; index++)
    list.push(faker.commerce.product())
  
    return list
}

const TagsListContainer = ({count}:{count:number}) => (
  <div className="w-64">
    <TagsList tags={getTagsList(count)}/>
  </div>
)

export default <TagsListContainer count={5}/>
