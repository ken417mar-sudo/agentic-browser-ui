import BackSvg from '../assets/figma/toolbar-back@1x.svg?react'
import ForwardSvg from '../assets/figma/toolbar-forward@1x.svg?react'
import RefreshSvg from '../assets/figma/toolbar-refresh@1x.svg?react'
import ProxySvg from '../assets/figma/toolbar-proxy@1x.svg?react'
import MoreSvg from '../assets/figma/toolbar-more@1x.svg?react'
import ExpandSvg from '../assets/figma/toolbar-expand@1x.svg?react'
import bookmarkIcon from '../assets/figma/toolbar-bookmark-icon@1x.svg'

function NavDivider() {
  return (
    <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[var(--color-text-disabled)]">
      <path d="M7 8V16" stroke="currentColor" strokeLinecap="square"/>
    </svg>
  )
}

function RightDivider() {
  return (
    <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[var(--color-text-disabled)]">
      <path d="M1 8V16" stroke="currentColor" strokeLinecap="square"/>
    </svg>
  )
}

interface ToolbarProps {
  canGoBack?: boolean
  canGoForward?: boolean
  urlText?: string
  bookmarked?: boolean
  urlFocused?: boolean
  onBack?: () => void
  onForward?: () => void
  onRefresh?: () => void
  onBookmark?: () => void
  onMore?: () => void
  onChat?: () => void
}

export function Toolbar({
  canGoBack = true,
  canGoForward = false,
  urlText = '我一直都在',
  bookmarked = false,
  urlFocused = false,
  onBack,
  onForward,
  onRefresh,
  onBookmark,
  onMore,
  onChat,
}: ToolbarProps) {
  return (
    <div className="flex h-[40px] items-center justify-between px-[8px] relative w-full">
      {/* NavArea */}
      <div className="flex items-center px-[8px]">
        <div className="flex gap-[12px] items-center">
          <button
            onClick={onBack}
            disabled={!canGoBack}
            className={`flex items-center justify-center rounded-[8px] size-[24px] ${!canGoBack ? 'opacity-30' : ''}`}
            aria-label="后退"
          >
            <BackSvg className="size-[16px] text-[var(--color-text-secondary)]" />
          </button>
          <button
            onClick={onForward}
            disabled={!canGoForward}
            className={`flex items-center justify-center size-[24px] ${!canGoForward ? 'opacity-30' : ''}`}
            aria-label="前进"
          >
            <ForwardSvg className="size-[16px] text-[var(--color-text-secondary)]" />
          </button>
          <button
            onClick={onRefresh}
            className="flex items-center justify-center size-[24px]"
            aria-label="刷新"
          >
            <RefreshSvg className="size-[16px] text-[var(--color-text-secondary)]" />
          </button>
          <NavDivider />
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 h-[0.5px] w-full bg-[rgba(0,0,0,0.08)]" />

      {/* Center — URLBar */}
      <div
        className={`flex flex-1 gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-[8px] ${
          urlFocused
            ? 'bg-[rgba(0,0,0,0.04)] border border-[0.5px] border-[rgba(31,99,237,0.25)]'
            : ''
        }`}
      >
        <ProxySvg className="size-[16px] shrink-0 text-[var(--color-text-tertiary)]" />
        <p
          className={`text-[12px] leading-[14px] whitespace-nowrap ${
            urlFocused ? 'text-[#333]' : 'text-[var(--color-text-tertiary)]'
          }`}
          style={{ fontFamily: "'HYQiHei:55S', sans-serif" }}
        >
          {urlText}
        </p>
      </div>

      {/* RightActions */}
      <div className="flex gap-[12px] items-center">
        <RightDivider />
        <button
          onClick={onBookmark}
          className={`flex gap-[4px] h-[24px] items-center px-[4px] ${
            bookmarked ? 'bg-[rgba(255,202,40,0.12)] rounded-[6px]' : ''
          }`}
          aria-label="收藏"
        >
          <img src={bookmarkIcon} alt="" className="size-[16px]" />
          <span
            className="text-[12px] leading-normal text-[var(--color-text-secondary)] whitespace-nowrap"
            style={{ fontFamily: "'SF Pro', sans-serif" }}
          >
            Collection
          </span>
        </button>
        <button
          onClick={onMore}
          className="bg-[rgba(255,255,255,0.12)] border-[0.5px] border-[rgba(0,0,0,0.08)] flex items-center justify-center rounded-[99px] size-[24px]"
          aria-label="更多"
        >
          <MoreSvg className="size-[16px] text-[var(--color-text-secondary)]" />
        </button>
        <button
          onClick={onChat}
          className="bg-gradient-to-r from-[rgba(65,231,154,0.3)] to-[rgba(106,181,255,0.3)] flex gap-[2px] h-[24px] items-center justify-center overflow-hidden pl-[4px] pr-[12px] rounded-[99px]"
          aria-label="Chat"
        >
          <ExpandSvg className="size-[16px] shrink-0 text-[var(--color-text-secondary)]" />
          <span
            className="text-[12px] leading-normal text-[var(--color-text-secondary)] whitespace-nowrap"
            style={{ fontFamily: "'SF Pro', sans-serif" }}
          >
            Chat
          </span>
        </button>
      </div>
    </div>
  )
}
