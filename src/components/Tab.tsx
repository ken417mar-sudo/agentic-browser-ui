import { ReactNode } from 'react'

type TabType = '页签' | '新页签'
type TabState = '选中' | '未选中'
type TabInteraction = '默认' | '悬停'

interface TabProps {
  type?: TabType
  selected?: boolean
  hovered?: boolean
  label?: string
  icon?: ReactNode
  onClose?: () => void
}

export function Tab({
  type = '页签',
  selected = false,
  hovered = false,
  label = 'Prime Video',
  icon,
  onClose,
}: TabProps) {
  return (
    <div className="flex h-[40px] items-center w-[192px] p-[4px] relative">
      {/* hover overlay */}
      {hovered && !selected && (
        <div className="absolute inset-[4px] rounded-[8px] bg-[var(--color-state-hover-overlay)] pointer-events-none" />
      )}

      <div
        className={[
          'flex flex-1 h-full items-center gap-[8px] pl-[8px] pr-[4px] rounded-[8px] relative',
          selected
            ? 'bg-[var(--color-surface-base)] border-[0.5px] border-[rgba(31,98,238,0.2)] border-solid'
            : '',
        ].join(' ')}
      >
        {/* tab info */}
        <div className="flex flex-1 gap-[8px] items-center min-w-0">
          {/* app icon */}
          <div className="bg-[#009bff] overflow-clip rounded-[8px] shrink-0 size-[16px]">
            {icon ?? <span className="block size-full" />}
          </div>

          {/* label */}
          <p
            className="flex-1 min-w-0 truncate text-[12px] leading-normal text-[var(--color-text-primary)]"
            style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
          >
            {label}
          </p>
        </div>

        {/* divider (unselected only) or close button (selected) */}
        {selected ? (
          onClose && (
            <button
              onClick={onClose}
              className="shrink-0 size-[16px] flex items-center justify-center rounded-[4px] hover:bg-[var(--color-state-hover-overlay)]"
              aria-label="关闭标签"
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 1l6 6M7 1L1 7" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )
        ) : (
          <div className="bg-[var(--color-text-disabled)] h-[10px] w-px shrink-0" />
        )}
      </div>
    </div>
  )
}
