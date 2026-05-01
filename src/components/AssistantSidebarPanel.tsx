import { InputBox } from './InputBox'
import NewTaskSvg from '../assets/figma/assistant-title-new-task@1x.svg?react'
import HistorySvg from '../assets/figma/assistant-title-history@1x.svg?react'
import AssistantLogoSvg from '../assets/figma/assistant-sidebar-chip-logo@1x.svg?react'
import PromptArrowSvg from '../assets/figma/assistant-prompt-arrow@1x.svg?react'

const DEFAULT_SUGGESTIONS = [
  '提供一些BBC上的时事新闻报道',
  '如何快速有效的浏览BBC的重要新闻？',
  '推荐BBC上的深度分析文章',
]

interface AssistantSidebarChipProps {
  onClick?: () => void
  className?: string
}

export function AssistantSidebarChip({
  onClick,
  className = '',
}: AssistantSidebarChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex h-[24px] items-center justify-center gap-[2px] overflow-hidden rounded-[99px] outline outline-[0.5px] outline-[rgba(31,98,238,0.2)] bg-[rgba(0,0,0,0.04)] pl-[4px] pr-[10px]',
        className,
      ].join(' ')}
      aria-label="助手"
    >
      <AssistantLogoSvg className="size-[16px] shrink-0" />
      <span
        className="whitespace-nowrap text-[12px] leading-normal text-[rgba(31,98,238,0.8)]"
        style={{ fontFamily: "'PICO_Sans_VFE_SC:Light', 'PingFang SC', sans-serif" }}
      >
        助手
      </span>
    </button>
  )
}

interface AssistantPromptChipProps {
  label: string
  onClick?: () => void
}

function AssistantPromptChip({
  label,
  onClick,
}: AssistantPromptChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-end gap-[4px] rounded-[12px] border-[0.5px] border-[rgba(0,0,0,0.12)] bg-[rgba(0,0,0,0.02)] px-[12px] py-[10px]"
    >
      <span
        className="whitespace-nowrap text-[14px] leading-[20px] text-[var(--color-text-primary)]"
        style={{
          fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif",
          fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
        }}
      >
        {label}
      </span>
      <PromptArrowSvg className="size-[18px] shrink-0" />
    </button>
  )
}

interface AssistantSidebarPanelProps {
  suggestions?: string[]
  onNewTask?: () => void
  onHistory?: () => void
  onAssistantClick?: () => void
  onSuggestionSelect?: (text: string) => void
}

export function AssistantSidebarPanel({
  suggestions = DEFAULT_SUGGESTIONS,
  onNewTask,
  onHistory,
  onAssistantClick,
  onSuggestionSelect,
}: AssistantSidebarPanelProps) {
  return (
    <aside className="flex h-[856px] w-[400px] shrink-0 flex-col justify-between border-l-[0.5px] border-l-[#d7d7d7] bg-[rgba(0,0,0,0.02)]">
      <div className="flex h-[40px] items-center justify-between pl-[16px] pr-[8px]">
        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            onClick={onNewTask}
            className="flex size-[24px] items-center justify-center text-[var(--color-text-primary)]"
            aria-label="新建任务"
          >
            <NewTaskSvg className="size-[16px] shrink-0" />
          </button>
          <button
            type="button"
            onClick={onHistory}
            className="flex size-[24px] items-center justify-center rounded-[8px] text-[var(--color-text-primary)]"
            aria-label="历史记录"
          >
            <HistorySvg className="size-[16px] shrink-0" />
          </button>
        </div>
        <AssistantSidebarChip onClick={onAssistantClick} />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-end gap-[28px] px-[16px]">
        <div className="flex w-[368px] flex-wrap items-center gap-[12px]">
          {suggestions.map(suggestion => (
            <AssistantPromptChip
              key={suggestion}
              label={suggestion}
              onClick={() => onSuggestionSelect?.(suggestion)}
            />
          ))}
        </div>
      </div>

      <div className="p-[16px]">
        <InputBox size="compact" />
      </div>
    </aside>
  )
}
