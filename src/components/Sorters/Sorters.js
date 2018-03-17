import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Sorter from './Sorter'
import Information from './Information'

const bem = bemClassName.bind(null, 'sorter')

const Sorters = ({ warnSorterChange, sorterChangeData }) =>
  <div>
    <Sorter key={0} id={0} warnSorterChange={warnSorterChange} sorterChangeData={sorterChangeData} />
    <Information sorterChangeData={sorterChangeData} />
    {
        (1 == 2)
        ? <Sorter key={1} id={1} warnSorterChange={warnSorterChange} sorterChangeData={sorterChangeData} />
        : null
    }
  </div>

Sorters.propTypes = {
  warnSorterChange: PropTypes.func.isRequired,
  sorterChangeData: PropTypes.object.isRequired
}

export default Sorters
