import * as dateFns from 'date-fns'

const today = () => new Date()

const yearFromNow = (amount = 1) => {
  const action = amount > 0 ? dateFns.addYears : dateFns.subYears

  return amount === 0 ? today() : action(today(), Math.abs(amount))
}

export * from 'date-fns'
export { today, yearFromNow }
