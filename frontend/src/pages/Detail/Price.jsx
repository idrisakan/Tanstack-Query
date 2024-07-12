import React from 'react'

const Price = ({data}) => {
  return (
    <div>
        <p className="text-xl font-semibold">${data}
            <span className="text-sm text-gray-600">/gece</span>
          </p>
    </div>
  )
}

export default Price