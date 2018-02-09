import React from 'react'
import ReactDOM from 'react-dom'

import SortElement  from './components/SortElement'


const appDomElement = document.getElementById('app')

ReactDOM.render(<SortElement number={3} />, appDomElement)
