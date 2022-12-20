import React from 'react'
import * as tabs from '@zag-js/tabs'
import { useMachine, normalizeProps } from '@zag-js/react'

function Tabs({ data }) {
  const [state, send] = useMachine(tabs.machine({ id: '1', value: 'item-1' }))

  const api = tabs.connect(state, send, normalizeProps)

  return (
    <div {...api.rootProps}>
      <div {...api.triggerGroupProps}>
        {data.map((item) => (
          <button
            {...api.getTriggerProps({ value: item.value })}
            key={item.value}
          >
            {item.label}
          </button>
        ))}
        <div {...api.indicatorProps} />
      </div>
      {data.map((item) => (
        <div {...api.getContentProps({ value: item.value })} key={item.value}>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Tabs
