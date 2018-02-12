import React from 'react'
import ReactDOM from 'react-dom'

import SortElements  from './components/SortElements'

import BubbleSorter from './domain/sorters/BubbleSorter'
import MergeSorter from './domain/sorters/MergeSorter'
import InsertionSorter from './domain/sorters/InsertionSorter'

const appDomElement = document.getElementById('app')

ReactDOM.render(<SortElements sorter={InsertionSorter} />, appDomElement)
