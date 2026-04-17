import { useState } from 'react'

// --- Inline SVG icons (currentColor works correctly) ---

function VideoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.34311 1.3421C11.8656 1.52068 14.6664 4.43348 14.6664 8.00031L14.6576 8.34308C14.479 11.8654 11.567 14.6662 8.00034 14.6663L7.65659 14.6575C4.24794 14.4846 1.51494 11.7518 1.34213 8.34308L1.33334 8.00031C1.33334 4.31841 4.31844 1.33331 8.00034 1.33331L8.34311 1.3421ZM8.00034 2.33331C4.87072 2.33331 2.33334 4.87069 2.33334 8.00031C2.33352 11.1298 4.87083 13.6663 8.00034 13.6663C11.1297 13.6661 13.6662 11.1297 13.6664 8.00031C13.6664 4.8708 11.1298 2.33349 8.00034 2.33331ZM6.66635 6.57941C6.66635 6.04694 7.26042 5.72936 7.70346 6.02472L9.83432 7.44562C10.2301 7.7095 10.2301 8.29111 9.83432 8.55499L7.70346 9.97589C7.26049 10.2712 6.66653 9.95353 6.66635 9.4212V6.57941Z" fill="currentColor"/>
    </svg>
  )
}

function ScheduleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.34308 1.3421C11.8655 1.52068 14.6663 4.43348 14.6663 8.00031L14.6575 8.34308C14.479 11.8654 11.567 14.6662 8.00031 14.6663L7.65656 14.6575C4.24791 14.4846 1.51491 11.7518 1.3421 8.34308L1.33331 8.00031C1.33331 4.31841 4.31841 1.33331 8.00031 1.33331L8.34308 1.3421ZM8.00031 2.33331C4.87069 2.33331 2.33331 4.87069 2.33331 8.00031C2.33349 11.1298 4.8708 13.6663 8.00031 13.6663C11.1297 13.6661 13.6661 11.1297 13.6663 8.00031C13.6663 4.8708 11.1298 2.33349 8.00031 2.33331ZM8.00031 3.55597C8.16883 3.55613 8.31077 3.6824 8.32941 3.84991L8.79034 8.00519C8.8427 8.47636 8.47433 8.88879 8.00031 8.88898C7.52612 8.88898 7.15692 8.47647 7.20929 8.00519L7.6712 3.84991C7.68989 3.68233 7.83167 3.55597 8.00031 3.55597Z" fill="currentColor"/>
    </svg>
  )
}

function SkillIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.99969 1.33331C10.2883 1.33331 11.3335 2.37781 11.3337 3.66632V4.00031H12.6667C13.4031 4.00031 13.9997 4.59693 13.9997 5.33331V13.0003C13.9995 13.7365 13.403 14.3333 12.6667 14.3333H3.99969C3.26357 14.3331 2.66686 13.7364 2.66669 13.0003V10.6663H3.83368C4.56991 10.6661 5.16669 10.0696 5.16669 9.33331C5.16669 8.59704 4.56991 8.00048 3.83368 8.00031H2.66669V5.33331C2.66669 4.59704 3.26346 4.00048 3.99969 4.00031H6.66669V3.66632C6.66686 2.37791 7.71129 1.33349 8.99969 1.33331Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

function KnowledgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.66632 2.66669C6.55981 2.66669 7.34932 3.10729 7.83331 3.78192C8.3173 3.10729 9.10681 2.66669 10.0003 2.66669H12.3333C13.4379 2.66669 14.3333 3.56212 14.3333 4.66669V11.6667L14.3265 11.8024C14.2583 12.4748 13.6906 12.9995 13.0003 12.9997H9.33331C8.95126 12.9997 8.60733 13.1609 8.36456 13.4186C8.23322 13.5581 8.06203 13.6667 7.87042 13.6667C7.85789 13.6667 7.84563 13.6636 7.83331 13.6628C7.82099 13.6636 7.80874 13.6667 7.7962 13.6667C7.6046 13.6667 7.4334 13.5582 7.30206 13.4186C7.0593 13.1609 6.71537 12.9997 6.33331 12.9997H2.66632C1.97602 12.9995 1.4083 12.4748 1.34015 11.8024L1.33331 11.6667V4.66669C1.33331 3.56212 2.22874 2.66669 3.33331 2.66669H5.66632ZM3.33331 3.66669C2.78103 3.66669 2.33331 4.1144 2.33331 4.66669V11.6667C2.33349 11.8505 2.48248 11.9995 2.66632 11.9997H6.33331C6.69182 11.9997 7.03041 12.0828 7.33331 12.2272V5.33368C7.33331 4.4132 6.5868 3.66669 5.66632 3.66669H3.33331ZM10.0003 3.66669C9.07983 3.66669 8.33331 4.4132 8.33331 5.33368V12.2272C8.63621 12.0828 8.9748 11.9997 9.33331 11.9997H13.0003C13.1841 11.9995 13.3331 11.8505 13.3333 11.6667V4.66669C13.3333 4.1144 12.8856 3.66669 12.3333 3.66669H10.0003Z" fill="currentColor"/>
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.58337" cy="12.9167" r="1.25" fill="currentColor"/>
      <circle cx="12" cy="12.9167" r="1.25" fill="currentColor"/>
      <circle cx="17.4166" cy="12.9167" r="1.25" fill="currentColor"/>
    </svg>
  )
}

// --- ToolPill (text variant) ---

interface ToolPillProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

function ToolPill({ icon, label, onClick }: ToolPillProps) {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false) }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      className="flex flex-1 min-w-0 gap-[8px] h-[40px] items-center px-[12px] rounded-[99px] transition-colors text-[var(--color-text-primary)]"
      style={{
        border: `0.5px solid ${active ? 'rgba(0,0,0,0.28)' : hovered ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.12)'}`,
        background: active ? 'rgba(0,0,0,0.08)' : hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        boxShadow: '0px 0px 24px 0px rgba(10,88,245,0.02)',
      }}
    >
      <span className="flex items-center justify-center shrink-0 overflow-clip size-[16px]">
        {icon}
      </span>
      <span
        className="shrink-0 text-[12px] text-center whitespace-nowrap"
        style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
      >
        {label}
      </span>
    </button>
  )
}

// --- ToolPill (icon-only variant = more btn) ---

interface ToolPillIconOnlyProps {
  icon: React.ReactNode
  label?: string
  onClick?: () => void
}

function ToolPillIconOnly({ icon, label = '更多', onClick }: ToolPillIconOnlyProps) {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false) }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      aria-label={label}
      className="flex items-center justify-center shrink-0 w-[64px] h-[40px] rounded-[99px] transition-colors text-[var(--color-text-primary)]"
      style={{
        border: `0.5px solid ${active ? 'rgba(0,0,0,0.28)' : hovered ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.12)'}`,
        background: active ? 'rgba(0,0,0,0.08)' : hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        boxShadow: '0px 0px 24px 0px rgba(10,88,245,0.02)',
      }}
    >
      <span className="overflow-clip size-[24px] flex items-center justify-center">
        {icon}
      </span>
    </button>
  )
}

// --- AIToolsRow ---

const TOOLS = [
  { icon: <VideoIcon />,     label: '视频编辑' },
  { icon: <ScheduleIcon />,  label: '定时任务' },
  { icon: <SkillIcon />,     label: '技能和工作流' },
  { icon: <KnowledgeIcon />, label: '个人知识库' },
]

interface AIToolsRowProps {
  onToolClick?: (label: string) => void
  onMoreClick?: () => void
}

export default function AIToolsRow({ onToolClick, onMoreClick }: AIToolsRowProps) {
  return (
    <div className="flex gap-[8px] items-center w-full rounded-[99px]">
      {TOOLS.map((tool) => (
        <ToolPill
          key={tool.label}
          icon={tool.icon}
          label={tool.label}
          onClick={() => onToolClick?.(tool.label)}
        />
      ))}
      <ToolPillIconOnly
        icon={<MoreIcon />}
        onClick={onMoreClick}
      />
    </div>
  )
}
