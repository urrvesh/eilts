import React from 'react'

const VocabularyCard2 = ({name,data}) => {
  return (
    <div className='p-5 bg-f5f5f5 space-y-3 rounded-xl'>
      <span className='font-medium text-base leading-5'>{name}:</span>
      <div className="space-y-2.5">
        {data?.map((item, index)=>(
          <div key={index} className={`h-8 w-fit flex items-center justify-center px-3 text-sm font-normal leading-5 rounded ${item?.background}`}>{item?.label}</div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(VocabularyCard2)