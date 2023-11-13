import { IDoubts } from '../types/doubts'

const orderRelevantDoubts = (array: IDoubts[]) => {
  array.sort((a, b) => (b.Answers?.length || 0) - (a.Answers?.length || 0))
  return array
}

export default orderRelevantDoubts
