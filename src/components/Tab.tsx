import { ReactNode } from 'react'
import appIcon from '../assets/app-icon.png'
import newTabIcon from '../assets/new-tab-icon.svg'

type TabType = '页签' | '新页签'

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
  label,
  icon,
  onClose,
}: TabProps) {
  const defaultLabel = type === '新页签' ? 'Home' : 'Prime Video'

  return (
    <div className="flex h-[40px] items-center w-[192px] p-[4px] relative">
      {/* hover overlay — applies to both selected and unselected */}
      {hovered && (
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
        <div className="flex flex-1 gap-[8px] items-center min-w-0">
          {/* icon: 新页签 uses plain icon, 页签 uses app icon with colored bg */}
          {type === '新页签' ? (
            <div className="shrink-0 size-[16px] relative">
              {icon ?? <img src={newTabIcon} alt="" className="size-full" />}
            </div>
          ) : (
            <div className="bg-[#009bff] overflow-clip rounded-[8px] shrink-0 size-[16px] relative">
              {icon ?? <img src={appIcon} alt="" className="absolute inset-0 size-full object-cover pointer-events-none" />}
            </div>
          )}

          {/* label */}
          <p
            className="flex-1 min-w-0 truncate text-[12px] leading-normal text-[var(--color-text-primary)]"
            style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
          >
            {label ?? defaultLabel}
          </p>
        </div>

        {/* right side: close button (selected) or divider (unselected) */}
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
