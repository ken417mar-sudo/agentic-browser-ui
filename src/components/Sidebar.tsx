import type { ComponentType, SVGProps } from 'react'
import CollapseSvg from '../assets/figma/sidebar-collapse@1x.svg?react'
import NewTaskSvg from '../assets/figma/sidebar-new-task@1x.svg?react'
import AutoRunSvg from '../assets/figma/sidebar-auto-run@1x.svg?react'
import SkillsSvg from '../assets/figma/sidebar-skills@1x.svg?react'
import ProjectSvg from '../assets/figma/sidebar-project@1x.svg?react'
import AddSvg from '../assets/figma/sidebar-add@1x.svg?react'
import AvatarSvg from '../assets/figma/sidebar-avatar@1x.svg?react'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const QUICK_ACTIONS: Array<{ label: string; icon: IconComponent }> = [
  { label: '新建任务', icon: NewTaskSvg },
  { label: '自动执行', icon: AutoRunSvg },
  { label: '技能', icon: SkillsSvg },
]

const HISTORY_ITEMS = [
  '扫描系统清理一下没用的文件...',
  '把 Mars 的文件夹整理一下',
  '重新配置网络 VPN',
  '打开B站',
]

function SidebarActionItem({
  icon: Icon,
  label,
  ariaLabel,
}: {
  icon: IconComponent
  label: string
  ariaLabel: string
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex h-[40px] w-[216px] items-center overflow-hidden rounded-[12px] px-[8px] py-[5px] text-left"
    >
      <span className="mr-[8px] flex size-[24px] items-center justify-center p-[4px]">
        <Icon className="size-[16px] shrink-0" />
      </span>
      <span
        className="text-[14px] leading-[20px] text-[var(--color-text-primary)]"
        style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
      >
        {label}
      </span>
    </button>
  )
}

function SidebarSectionHeader({
  label,
  action,
}: {
  label: string
  action?: { icon: IconComponent; ariaLabel: string }
}) {
  return (
    <div className={`flex h-[28px] items-center justify-between py-[2px] ${action ? 'pl-[12px] pr-[4px]' : 'px-[12px]'}`}>
      <span
        className="text-[14px] leading-normal text-[var(--color-text-tertiary)]"
        style={{ fontFamily: "'HYQiHei:55S', 'PingFang SC', sans-serif" }}
      >
        {label}
      </span>
      {action ? (
        <button
          type="button"
          aria-label={action.ariaLabel}
          className="flex size-[24px] items-center justify-center"
        >
          <action.icon className="size-[16px] shrink-0" />
        </button>
      ) : null}
    </div>
  )
}

function SidebarHistoryItem({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-[40px] w-[216px] items-center justify-between overflow-hidden rounded-[12px] px-[12px] py-[8px] text-left"
    >
      <span
        className="min-w-0 flex-1 truncate text-[14px] leading-normal text-[var(--color-text-primary)]"
        style={{
          fontFamily: "'PICO Sans', 'PingFang SC', sans-serif",
          fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
        }}
      >
        {label}
      </span>
    </button>
  )
}

export default function Sidebar({
  collapsed = false,
  onToggle,
}: {
  collapsed?: boolean
  onToggle?: () => void
}) {
  if (collapsed) {
    return (
      <aside className="flex h-[816px] shrink-0 items-start p-[16px]">
        <div className="flex gap-[12px] items-center">
          <button
            type="button"
            aria-label="展开侧边栏"
            className="flex size-[24px] items-center justify-center"
            onClick={onToggle}
          >
            <CollapseSvg className="size-[16px] shrink-0" />
          </button>
          <button
            type="button"
            aria-label="新建任务"
            className="flex size-[24px] items-center justify-center"
          >
            <NewTaskSvg className="size-[16px] shrink-0" />
          </button>
        </div>
      </aside>
    )
  }

  return (
    <aside className="flex h-[816px] w-[240px] shrink-0 flex-col items-start justify-between border-r-[0.5px] border-r-[var(--color-border-subtle)] bg-[rgba(0,0,0,0.02)] px-[8px]">
      <div className="w-full">
        <div className="flex h-[56px] items-center justify-between pl-[12px] pr-[4px] py-[4px]">
          <h2
            className="m-0 text-[16px] leading-normal font-[700] text-[var(--color-text-primary)]"
            style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
          >
            联想浏览器
          </h2>
          <button
            type="button"
            aria-label="折叠侧边栏"
            className="flex size-[24px] items-center justify-center"
            onClick={onToggle}
          >
            <CollapseSvg className="size-[16px] shrink-0" />
          </button>
        </div>

        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            {QUICK_ACTIONS.map(item => (
              <SidebarActionItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                ariaLabel={item.label}
              />
            ))}
          </div>

          <div className="flex w-full flex-col gap-[4px]">
            <SidebarSectionHeader
              label="项目"
              action={{ icon: AddSvg, ariaLabel: '新增项目' }}
            />
            <SidebarActionItem
              icon={ProjectSvg}
              label="Agentic Browser"
              ariaLabel="Agentic Browser"
            />
          </div>

          <div className="flex w-full flex-col gap-[4px]">
            <SidebarSectionHeader label="历史记录" />
            <div className="flex flex-col gap-[4px]">
              {HISTORY_ITEMS.map(item => (
                <SidebarHistoryItem key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[56px] w-[216px] items-center px-[8px] py-[16px]">
        <button
          type="button"
          aria-label="设置"
          className="flex items-center rounded-[99px] border-[0.5px] border-[var(--color-border-subtle)]"
        >
          <span className="flex size-[24px] items-center justify-center overflow-hidden p-[2px]">
            <AvatarSvg className="size-[16px] shrink-0" />
          </span>
        </button>
      </div>
    </aside>
  )
}
