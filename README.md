@hanachin/react-infinite-scroll
===============================

How to use
----------

```console
$ npm install --save-dev @hanachin/react-infinite-scroll
```

```tsx
import React, { useState } from 'react'
import { createInfiniteScroll } from '@hanachin/react-infinite-scroll'

const InfiniteScroll = createInfiniteScroll(100)

export default function List() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const loadMoreItems = () => {
    setItems([...items, items[items.length - 1] + 1])
  }
  return (
    <InfiniteScroll onBottom={loadMoreItems}>
      <ul style={{ height: 50 }}>
        {items.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </InfiniteScroll>
  )
}
```
