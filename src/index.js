import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'

import Sorters  from './components/Sorters'

const appDomElement = document.getElementById('app')

const warnSorterChange = () => {
  const startSortDate = new Date()
}

ReactDOM.render(<Sorters />, appDomElement)
