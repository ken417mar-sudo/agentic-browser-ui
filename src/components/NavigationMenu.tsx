import MoreIconSvg from '../assets/figma/nav-more-icon@1x.svg?react'

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

export interface NavigationMenuProps {
  items: string[]
  selectedIndex?: number
  showMore?: boolean
  onSelect?: (index: number) => void
  onMore?: () => void
  className?: string
}

export function NavigationMenu({
  items,
  selectedIndex = 0,
  showMore = false,
  onSelect,
  onMore,
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
    </div>
  )
}
