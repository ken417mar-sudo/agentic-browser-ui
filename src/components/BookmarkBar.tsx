import DividerSvg from '../assets/figma/bookmark-bar-divider@1x.svg?react'
import moreIconSrc from '../assets/figma/bookmark-bar-more-icon@1x.png'
import { BookmarkItem } from './BookmarkItem'

// Source: 1708:30228 (书签, Agentic Browser page)
// 135×24, flex gap-[12px] items-center
// Children: divider (2×24) | BookmarkItem (85×24) | More button (24×24)

interface BookmarkBarProps {
  items?: Array<{
    label: string
    appIconSrc?: string
    appIconBg?: string
    appIconRadius?: string
    onClick?: () => void
  }>
  onMore?: () => void
}

export function BookmarkBar({ items, onMore }: BookmarkBarProps) {
  const defaultItems = items ?? [{ label: 'Collection' }]

  return (
    <div className="flex gap-[12px] items-center h-[24px]">
      {/* left divider — source: 1708:30229 */}
      <div className="shrink-0" style={{ width: 2, height: 24 }}>
        <DividerSvg className="w-full h-full" />
      </div>

      {/* bookmark items */}
      {defaultItems.map((item, i) => (
        <BookmarkItem
          key={i}
          label={item.label}
          appIconSrc={item.appIconSrc}
          appIconBg={item.appIconBg}
          appIconRadius={item.appIconRadius}
          onClick={item.onClick}
        />
      ))}

      {/* More button — source: 1708:30241, 24×24, rounded-[99px] */}
      <button
        type="button"
        onClick={onMore}
        className="flex items-center justify-center shrink-0 size-[24px] rounded-[99px]"
        style={{
          background: 'rgba(255,255,255,0.12)',
          border: '0.5px solid rgba(0,0,0,0.08)',
        }}
        aria-label="更多书签"
      >
        <img src={moreIconSrc} alt="" className="size-[16px]" />
      </button>
    </div>
  )
}
