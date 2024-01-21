import { FunctionOf, NonEmptyArrayOf } from "./types"

export function getRandomElementOf<T>(array: Array<T>):T {
  return  array[Math.floor(Math.random() * array.length)]
}

export function generateRandom(min=0, max=10) {
  const diff = max - min
  const rand = Math.random()

  return Math.floor(rand * diff) + min
}

export function getAnArrayOf<T>(
  pattern: NonEmptyArrayOf<FunctionOf<T>> | FunctionOf<T>, length: number
): T[] {
  const list:Array<T> = []
  for (let index = 0; index < length; index+=1)
    list.push(Array.isArray(pattern) ? getRandomElementOf(pattern)() : pattern())
  return list
}