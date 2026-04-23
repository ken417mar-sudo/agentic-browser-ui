import { useState, type ReactNode } from 'react'
import appIcon from '../assets/app-icon.png'
import newTabIcon from '../assets/new-tab-icon.svg'
import closeOffIcon from '../assets/figma/close-off@1x.svg'
import closeOnIcon from '../assets/figma/close-on@1x.svg'

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
  const [closeHovered, setCloseHovered] = useState(false)

  const closeButton = (
    <button
      onClick={onClose}
      onMouseEnter={() => setCloseHovered(true)}
      onMouseLeave={() => setCloseHovered(false)}
      className="shrink-0 size-[16px] flex items-center justify-center"
      aria-label="关闭标签"
    >
      <img src={closeHovered ? closeOnIcon : closeOffIcon} alt="" className="size-[16px]" />
    </button>
  )

  return (
    <div className="flex h-[40px] items-center w-[192px] p-[4px] relative">
      {/* hover overlay */}
      {hovered && (
        <div className="absolute inset-[4px] rounded-[8px] bg-[var(--color-state-hover-overlay)] pointer-events-none" />
      )}

      <div
        className={[
          'flex flex-1 h-full items-center gap-[8px] pl-[8px] pr-[4px] rounded-[8px] relative',
          selected
            ? 'bg-[var(--color-surface-base)] border-[0.5px] border-[rgba(31,98,238,0.2)] border-solid'
            : 'border-[0.5px] border-transparent border-solid',
        ].join(' ')}
      >
        <div className="flex flex-1 gap-[8px] items-center min-w-0">
          {type === '新页签' ? (
            <div className="shrink-0 size-[16px] relative">
              {icon ?? <img src={newTabIcon} alt="" className="size-full" />}
            </div>
          ) : (
            <div className="bg-[#009bff] overflow-clip rounded-[8px] shrink-0 size-[16px] relative">
              {icon ?? <img src={appIcon} alt="" className="absolute inset-0 size-full object-cover pointer-events-none" />}
            </div>
          )}

          <p
            className="flex-1 min-w-0 truncate text-[12px] leading-normal text-[var(--color-text-primary)]"
            style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
          >
            {label ?? defaultLabel}
          </p>
        </div>

        {selected ? (
          selected && hovered && onClose ? (
            closeButton
          ) : (
            <div className="shrink-0 size-[16px]" />
          )
        ) : hovered && onClose ? (
          closeButton
        ) : (
          <div className="bg-[var(--color-text-disabled)] h-[10px] w-px shrink-0" />
        )}
      </div>
    </div>
  )
}
