import InsertionSorter from './InsertionSorter'
import BubbleSorter from './BubbleSorter'
import MergeSorter from './MergeSorter'
import SelectionSorter from './SelectionSorter'
import QuickSorter from './QuickSorter'

export default [
  {
    id: 'INSERTION',
    sorter: InsertionSorter
  },
  {
    id: 'BUBBLE',
    sorter: BubbleSorter
  },
  {
    id: 'MERGE',
    sorter: MergeSorter
  },
  {
    id: 'SELECTION',
    sorter: SelectionSorter
  },
  {
    id: 'QUICK',
    sorter: QuickSorter
  }
]
