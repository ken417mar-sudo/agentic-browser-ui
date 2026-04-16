import { useState } from 'react'
import videoIcon from '../assets/figma/aitoolsrow-video@1x.svg'
import scheduleIcon from '../assets/figma/aitoolsrow-schedule@1x.svg'
import skillIcon from '../assets/figma/aitoolsrow-skill@1x.svg'
import knowledgeIcon from '../assets/figma/aitoolsrow-knowledge@1x.svg'
import moreIcon from '../assets/figma/aitoolsrow-more@1x.svg'

// --- ToolPill (text variant) ---

interface ToolPillProps {
  icon: string
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
      className="flex flex-1 min-w-0 gap-[8px] h-[40px] items-center px-[12px] rounded-[99px] transition-colors"
      style={{
        border: `0.5px solid ${active ? 'rgba(0,0,0,0.28)' : hovered ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.12)'}`,
        background: active ? 'rgba(0,0,0,0.08)' : hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        boxShadow: '0px 0px 24px 0px rgba(10,88,245,0.02)',
      }}
    >
      <span className="flex items-center justify-center shrink-0 overflow-clip">
        <img src={icon} alt="" className="size-[16px]" style={{ color: 'var(--color-text-primary)' }} />
      </span>
      <span
        className="shrink-0 text-[12px] text-[var(--color-text-primary)] text-center whitespace-nowrap"
        style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
      >
        {label}
      </span>
    </button>
  )
}

// --- ToolPill (icon-only variant = more btn) ---

interface ToolPillIconOnlyProps {
  icon: string
  iconSize?: number
  label?: string
  onClick?: () => void
}

function ToolPillIconOnly({ icon, iconSize = 20, label = '更多', onClick }: ToolPillIconOnlyProps) {
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
      className="flex items-center justify-center shrink-0 w-[64px] h-[40px] rounded-[99px] transition-colors"
      style={{
        border: `0.5px solid ${active ? 'rgba(0,0,0,0.28)' : hovered ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.12)'}`,
        background: active ? 'rgba(0,0,0,0.08)' : hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        boxShadow: '0px 0px 24px 0px rgba(10,88,245,0.02)',
      }}
    >
      <span className="overflow-clip size-[24px] flex items-center justify-center">
        <img src={icon} alt="" style={{ width: iconSize, height: iconSize, color: 'var(--color-text-primary)' }} />
      </span>
    </button>
  )
}

// --- AIToolsRow ---

const TOOLS = [
  { icon: videoIcon,     label: '视频编辑' },
  { icon: scheduleIcon,  label: '定时任务' },
  { icon: skillIcon,     label: '技能和工作流' },
  { icon: knowledgeIcon, label: '个人知识库' },
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
        icon={moreIcon}
        onClick={onMoreClick}
      />
    </div>
  )
}
