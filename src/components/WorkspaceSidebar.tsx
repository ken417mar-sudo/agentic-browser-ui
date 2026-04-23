import type { ComponentType, SVGProps } from 'react'
import NewTaskSvg from '../assets/figma/sidebar-new-task@1x.svg?react'
import AutoRunSvg from '../assets/figma/sidebar-auto-run@1x.svg?react'
import SkillsSvg from '../assets/figma/sidebar-skills@1x.svg?react'
import ProjectSvg from '../assets/figma/sidebar-project@1x.svg?react'
import AvatarSvg from '../assets/figma/sidebar-avatar@1x.svg?react'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

function NavItem({ icon: Icon }: { icon: IconComponent }) {
  return (
    <div className="flex h-[40px] w-[40px] items-center justify-center overflow-clip rounded-[12px] px-[4px] py-[5px] shrink-0">
      <div className="flex items-center justify-center p-[4px]">
        <Icon className="size-[16px] shrink-0" />
      </div>
    </div>
  )
}

export default function WorkspaceSidebar() {
  return (
    <aside
      className="flex flex-col items-center justify-between border-r-[0.5px] border-r-[rgba(0,0,0,0.08)] bg-transparent shrink-0"
      style={{ width: 48, height: 852, paddingTop: 8, paddingBottom: 24, paddingLeft: 4, paddingRight: 4 }}
    >
      <div className="flex flex-col gap-[4px]">
        <NavItem icon={NewTaskSvg} />
        <NavItem icon={AutoRunSvg} />
        <NavItem icon={SkillsSvg} />
        <NavItem icon={ProjectSvg} />
      </div>

      <div className="flex items-center justify-center p-[8px]">
        <button
          type="button"
          aria-label="设置"
          className="flex items-center rounded-[99px] border-[0.5px] border-[rgba(0,0,0,0.08)]"
        >
          <span className="flex size-[24px] items-center justify-center overflow-hidden p-[2px]">
            <AvatarSvg className="size-[16px] shrink-0" />
          </span>
        </button>
      </div>
    </aside>
  )
}
