import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Sorter from './Sorter'

const bem = bemClassName.bind(null, 'sorter')

const Sorters = ({ warnSorterChange, sorterChangeData }) => [
  <Sorter key={0} id={0} warnSorterChange={warnSorterChange} sorterChangeData={sorterChangeData} />,
  <Sorter key={1} id={1} warnSorterChange={warnSorterChange} sorterChangeData={sorterChangeData} />
]

Sorters.propTypes = {
  warnSorterChange: PropTypes.func.isRequired,
  sorterChangeData: PropTypes.object.isRequired
}

export default Sorters
