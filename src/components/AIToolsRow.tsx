import { useState } from 'react'
import VideoSvg from '../assets/figma/aitoolsrow-video@1x.svg?react'
import ScheduleSvg from '../assets/figma/aitoolsrow-schedule@1x.svg?react'
import SkillSvg from '../assets/figma/aitoolsrow-skill@1x.svg?react'
import KnowledgeSvg from '../assets/figma/aitoolsrow-knowledge@1x.svg?react'
import MoreSvg from '../assets/figma/aitoolsrow-more@1x.svg?react'

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
  { icon: <VideoSvg className="size-[16px]" />,     label: '视频编辑' },
  { icon: <ScheduleSvg className="size-[16px]" />,  label: '定时任务' },
  { icon: <SkillSvg className="size-[16px]" />,     label: '技能和工作流' },
  { icon: <KnowledgeSvg className="size-[16px]" />, label: '个人知识库' },
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
        icon={<MoreSvg className="size-[20px]" />}
        onClick={onMoreClick}
      />
    </div>
  )
}
