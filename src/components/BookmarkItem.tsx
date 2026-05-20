import bookmarkStarIcon from '../assets/figma/toolbar-bookmark-icon@1x.svg'

interface BookmarkItemProps {
  label: string
  /** For app-type bookmarks: favicon image src. Omit to use the default star icon. */
  appIconSrc?: string
  /** Background color for app-type icon slot (e.g. '#ff0057'). Only used when appIconSrc is set. */
  appIconBg?: string
  /** Border radius for app-type icon slot (e.g. '8px' or '60px'). Only used when appIconSrc is set. */
  appIconRadius?: string
  onClick?: () => void
}

// BookmarkItem — bookmark bar chip: [icon 16×16] [label 12px]
// Source: Figma 1708:30231~30233 (书签), 24px height, gap-4, px-4
export function BookmarkItem({
  label,
  appIconSrc,
  appIconBg,
  appIconRadius = '8px',
  onClick,
}: BookmarkItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] h-[24px] items-center px-[4px] shrink-0"
    >
      {appIconSrc ? (
        <div
          className="overflow-clip relative shrink-0 size-[16px]"
          style={{ background: appIconBg, borderRadius: appIconRadius }}
        >
          <img
            src={appIconSrc}
            alt=""
            className="absolute inset-0 max-w-none object-cover size-full"
          />
        </div>
      ) : (
        <img src={bookmarkStarIcon} alt="" className="shrink-0 size-[16px]" />
      )}
      <span
        className="text-[12px] leading-normal text-[var(--color-text-secondary)] whitespace-nowrap"
        style={{ fontFamily: "'SF Pro', sans-serif" }}
      >
        {label}
      </span>
    </button>
  )
}
