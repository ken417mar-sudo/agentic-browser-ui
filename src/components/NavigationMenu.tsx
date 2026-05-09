import MoreIconSvg from '../assets/figma/nav-more-icon@1x.svg?react'
import ManageIconSvg from '../assets/figma/nav-manage-icon@1x.svg?react'
import { SearchBar } from './SearchBar'

interface NavOptionItemProps {
  label: string
  selected?: boolean
  onClick?: () => void
}

function NavOptionItem({ label, selected = false, onClick }: NavOptionItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex items-center px-[16px] py-[5px] rounded-[var(--radius-12)] whitespace-nowrap shrink-0 outline outline-[0.5px]',
        selected
          ? 'bg-[#18181b] text-white outline-transparent'
          : 'bg-[var(--color-surface-base)] outline-[rgba(0,0,0,0.1)] text-[#18181b]',
      ].join(' ')}
    >
      <span
        className="text-[14px] leading-[22px]"
        style={{
          fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif",
          fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
        }}
      >
        {label}
      </span>
    </button>
  )
}

function MoreButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[32px] items-center justify-center bg-[var(--color-surface-base)] outline outline-[0.5px] outline-[rgba(0,0,0,0.1)] px-[16px] py-[5px] rounded-[var(--radius-12)] shrink-0"
      aria-label="更多"
    >
      <span className="flex flex-col items-center justify-center size-[18px] px-[1.5px]">
        <MoreIconSvg className="w-[15px] h-[3px] text-[#18181b]" />
      </span>
    </button>
  )
}

function ManageButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[32px] items-center justify-center gap-[4px] bg-[var(--color-surface-base)] outline outline-[0.5px] outline-[rgba(0,0,0,0.1)] px-[16px] py-[5px] rounded-[var(--radius-12)] shrink-0 text-[#18181b]"
      aria-label="管理"
    >
      <ManageIconSvg className="size-[18px] shrink-0" />
      <span
        className="text-[14px] leading-[22px] whitespace-nowrap"
        style={{
          fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif",
          fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
        }}
      >
        管理
      </span>
    </button>
  )
}

export interface NavigationMenuProps {
  items: string[]
  selectedIndex?: number
  showMore?: boolean
  showManage?: boolean
  showSearch?: boolean
  onSelect?: (index: number) => void
  onMore?: () => void
  onManage?: () => void
  onSearch?: (value: string) => void
  className?: string
}

export function NavigationMenu({
  items,
  selectedIndex = 0,
  showMore = false,
  showManage = false,
  showSearch = false,
  onSelect,
  onMore,
  onManage,
  onSearch,
  className = '',
}: NavigationMenuProps) {
  return (
    <div className={['flex items-center justify-between', className].join(' ')}>
      <div className="flex gap-[12px] items-center">
        {items.map((label, i) => (
          <NavOptionItem
            key={label}
            label={label}
            selected={i === selectedIndex}
            onClick={() => onSelect?.(i)}
          />
        ))}
        {showMore && <MoreButton onClick={onMore} />}
      </div>
      <div className="flex items-center gap-[12px]">
        {showSearch && (
          <SearchBar className="w-[240px]" onChange={onSearch} />
        )}
        {showManage && <ManageButton onClick={onManage} />}
      </div>
    </div>
  )
}
