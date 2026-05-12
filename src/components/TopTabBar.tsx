import NavArrowSvg from '../assets/figma/topbar-nav-arrow@1x.svg?react'
import HomeIconSvg from '../assets/figma/topbar-home@1x.svg?react'
import SettingsIconSvg from '../assets/figma/topbar-settings@1x.svg?react'
import VersionIconSvg from '../assets/figma/topbar-version-icon@1x.svg?react'
import GiftIconSvg from '../assets/figma/topbar-gift-icon@1x.svg?react'
import UserIconSvg from '../assets/figma/topbar-user-icon@1x.svg?react'
import ExpandIconSvg from '../assets/figma/topbar-expand-icon@1x.svg?react'
import PinIconSvg from '../assets/figma/topbar-pin-icon@1x.svg?react'
import MinimizeIconSvg from '../assets/figma/topbar-minimize-icon@1x.svg?react'
import MaximizeIconSvg from '../assets/figma/topbar-maximize-icon@1x.svg?react'
import CloseIconSvg from '../assets/figma/topbar-close-icon@1x.svg?react'
import appsLogoPng from '../assets/figma/topbar-apps-logo@1x.png'

export interface TopTab {
  id: string
  label: string
  icon?: React.ReactNode
}

// ── Nav button (back / forward) ──────────────────────────────────────────────

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

// ── Tab button ───────────────────────────────────────────────────────────────

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

// ── Window control button ────────────────────────────────────────────────────

interface WinBtnProps {
  children: React.ReactNode
  onClick?: () => void
  label: string
}

function WinBtn({ children, onClick, label }: WinBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex items-center justify-center size-[32px] rounded-[8px] shrink-0 hover:bg-[rgba(0,0,0,0.08)] transition-colors"
      aria-label={label}
    >
      {children}
    </button>
  )
}

// ── Global actions ───────────────────────────────────────────────────────────

interface GlobalActionsProps {
  onVersionClick?: () => void
  onCheckinClick?: () => void
  onUserClick?: () => void
  onPinClick?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  onClose?: () => void
}

function GlobalActions({
  onVersionClick,
  onCheckinClick,
  onUserClick,
  onPinClick,
  onMinimize,
  onMaximize,
  onClose,
}: GlobalActionsProps) {
  return (
    <div className="flex gap-[4px] items-center pl-[64px] shrink-0">
      {/* 功能组 */}
      <div className="flex gap-[8px] items-center shrink-0">
        {/* 新版本 pill */}
        <button
          type="button"
          onClick={onVersionClick}
          className="flex gap-[2px] h-[28px] items-center pl-[6px] pr-[10px] py-[4px] rounded-[100px] shrink-0 bg-[rgba(255,255,255,0.72)]"
        >
          <div className="flex items-center justify-center shrink-0">
            <div style={{ transform: 'rotate(180deg)' }}>
              <VersionIconSvg className="size-[16px]" />
            </div>
          </div>
          <span
            className="text-[12px] leading-[12px] text-[#18181b] whitespace-nowrap"
            style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
          >
            新版本
          </span>
        </button>

        {/* 签到 pill */}
        <button
          type="button"
          onClick={onCheckinClick}
          className="flex gap-[2px] h-[28px] w-[58px] items-center pl-[6px] pr-[10px] py-[4px] rounded-[32px] shrink-0"
          style={{ background: 'linear-gradient(to right, #667dff, #e878c6)' }}
        >
          <div className="relative shrink-0 size-[16px] flex items-center justify-center">
            <GiftIconSvg className="absolute" style={{ width: 11.667, height: 10.5 }} />
          </div>
          <span
            className="text-[12px] leading-[12px] text-white whitespace-nowrap"
            style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
          >
            签到
          </span>
        </button>

        {/* 用户 chip */}
        <button
          type="button"
          onClick={onUserClick}
          className="flex gap-[2px] h-[28px] items-center p-[4px] rounded-[100px] shrink-0 bg-[rgba(255,255,255,0.72)]"
        >
          <UserIconSvg className="size-[20px] shrink-0" />
          <ExpandIconSvg className="shrink-0" style={{ width: 6, height: 3.5 }} />
        </button>
      </div>

      {/* 窗口控制 */}
      <WinBtn onClick={onPinClick} label="置顶">
        <PinIconSvg className="size-[16px]" />
      </WinBtn>
      <WinBtn onClick={onMinimize} label="最小化">
        <MinimizeIconSvg style={{ width: 14, height: 1.4 }} />
      </WinBtn>
      <WinBtn onClick={onMaximize} label="最大化">
        <MaximizeIconSvg className="size-[12px]" />
      </WinBtn>
      <WinBtn onClick={onClose} label="关闭">
        <CloseIconSvg className="size-[10.4px]" />
      </WinBtn>
    </div>
  )
}

// ── TopTabBar ────────────────────────────────────────────────────────────────

interface TopTabBarProps {
  tabs?: TopTab[]
  selectedTabId?: string
  canGoBack?: boolean
  canGoForward?: boolean
  showGlobalActions?: boolean
  onBack?: () => void
  onForward?: () => void
  onTabSelect?: (id: string) => void
  onVersionClick?: () => void
  onCheckinClick?: () => void
  onUserClick?: () => void
  onPinClick?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  onClose?: () => void
}

export default function TopTabBar({
  tabs,
  selectedTabId,
  canGoBack = false,
  canGoForward = false,
  showGlobalActions = true,
  onBack,
  onForward,
  onTabSelect,
  onVersionClick,
  onCheckinClick,
  onUserClick,
  onPinClick,
  onMinimize,
  onMaximize,
  onClose,
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
        <div className="flex gap-[4px] items-center shrink-0">
          <NavButton direction="back" disabled={!canGoBack} onClick={onBack} />
          <NavButton direction="forward" disabled={!canGoForward} onClick={onForward} />
        </div>
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

      {/* 全局操作 */}
      {showGlobalActions && (
        <GlobalActions
          onVersionClick={onVersionClick}
          onCheckinClick={onCheckinClick}
          onUserClick={onUserClick}
          onPinClick={onPinClick}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          onClose={onClose}
        />
      )}
    </div>
  )
}
