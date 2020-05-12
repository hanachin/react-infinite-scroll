import React, { useState, useRef, useCallback } from 'react'

type InfiniteScrollProps = { onBottom: () => void }

export const createInfiniteScroll = (threshold: number): React.FC<InfiniteScrollProps> => {
  const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ children, onBottom }) => {
    const container = useRef<HTMLDivElement | null>(null)
    const clientHeight = container.current?.clientHeight ?? 0
    const [lastScrollHeight, setLastScrollHeight] = useState(0)
    const onScroll = useCallback(
      ({ currentTarget: { scrollTop, scrollHeight } }: React.WheelEvent | React.UIEvent) => {
        if (lastScrollHeight !== scrollHeight && scrollTop + clientHeight + threshold >= scrollHeight) {
          setLastScrollHeight(scrollHeight)
          onBottom()
        }
      },
      [clientHeight, lastScrollHeight, onBottom]
    )
    return (
      <div style={{ overflow: 'auto' }} onWheel={onScroll} onScroll={onScroll} ref={container}>
        {children}
      </div>
    )
  }
  return InfiniteScroll
}
