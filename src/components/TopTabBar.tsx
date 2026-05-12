import NavArrowSvg from '../assets/figma/topbar-nav-arrow@1x.svg?react'
import HomeIconSvg from '../assets/figma/topbar-home@1x.svg?react'
import SettingsIconSvg from '../assets/figma/topbar-settings@1x.svg?react'
import appsLogoPng from '../assets/figma/topbar-apps-logo@1x.png'

export interface TopTab {
  id: string
  label: string
  icon?: React.ReactNode
}

interface NavButtonProps {
  direction: 'back' | 'forward'
  disabled?: boolean
  onClick?: () => void
}

function NavButton({ direction, disabled = false, onClick }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'relative flex items-center justify-center size-[32px] rounded-[8px] shrink-0',
        'hover:bg-[rgba(0,0,0,0.08)] transition-colors',
        disabled ? 'opacity-30 cursor-not-allowed' : '',
      ].join(' ')}
      aria-label={direction === 'back' ? '后退' : '前进'}
    >
      <NavArrowSvg
        className="size-[11.5px]"
        style={direction === 'back' ? { transform: 'rotate(180deg)' } : undefined}
      />
    </button>
  )
}

interface TabButtonProps {
  tab: TopTab
  selected?: boolean
  onClick?: () => void
}

function TabButton({ tab, selected = false, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'relative flex items-center justify-center gap-[6px] h-[32px] px-[10px]',
        'flex-1 min-w-[38px] max-w-[200px] rounded-[8px] shrink-0',
        selected
          ? 'bg-[var(--color-surface-base)] drop-shadow-[0px_0.5px_0px_rgba(0,0,0,0.05)]'
          : 'hover:bg-[rgba(0,0,0,0.04)]',
      ].join(' ')}
    >
      <span className="flex items-center gap-[6px] min-w-0 overflow-hidden">
        {tab.icon}
        <span
          className="text-[12px] leading-[18px] text-[#18181b] truncate whitespace-nowrap"
          style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
        >
          {tab.label}
        </span>
      </span>
      {/* inactive divider — absolute positioned, does not affect layout */}
      {!selected && (
        <span className="absolute right-0 top-[7.5px] w-px h-[17px] rounded-[4px] bg-[rgba(0,0,0,0.16)]" />
      )}
    </button>
  )
}

interface TopTabBarProps {
  tabs?: TopTab[]
  selectedTabId?: string
  canGoBack?: boolean
  canGoForward?: boolean
  onBack?: () => void
  onForward?: () => void
  onTabSelect?: (id: string) => void
}

export default function TopTabBar({
  tabs,
  selectedTabId,
  canGoBack = false,
  canGoForward = false,
  onBack,
  onForward,
  onTabSelect,
}: TopTabBarProps) {
  const defaultTabs: TopTab[] = [
    { id: 'home', label: '主页', icon: <HomeIconSvg className="size-[18px] shrink-0 text-[#3f4046]" /> },
    { id: 'settings', label: '设置', icon: <SettingsIconSvg className="size-[18px] shrink-0 text-[#18181b]" /> },
    { id: 'app', label: '小程序名称', icon: <img src={appsLogoPng} alt="" className="size-[18px] shrink-0 object-contain" /> },
  ]
  const resolvedTabs = tabs ?? defaultTabs
  const resolvedSelected = selectedTabId ?? resolvedTabs[0]?.id

  return (
    <div
      className="flex items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full"
      style={{ height: 52 }}
    >
      {/* 操作区 + 标签区 */}
      <div className="flex flex-1 gap-[16px] items-center min-w-0">
        {/* 操作区 */}
        <div className="flex gap-[4px] items-center shrink-0">
          <NavButton direction="back" disabled={!canGoBack} onClick={onBack} />
          <NavButton direction="forward" disabled={!canGoForward} onClick={onForward} />
        </div>

        {/* 标签区 */}
        <div className="flex flex-1 items-center min-w-0 overflow-hidden">
          {resolvedTabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              selected={tab.id === resolvedSelected}
              onClick={() => onTabSelect?.(tab.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
