import { useState } from 'react'
import { Tab } from './components/Tab'
import { InputBox } from './components/InputBox'
import { Toolbar } from './components/Toolbar'
import { Dialog, DialogButton } from './components/Dialog'
import AIToolsRow from './components/AIToolsRow'
import Sidebar from './components/Sidebar'
import { BrowserResultPage } from './components/BrowserResultPage'
import WorkspacePage from './components/WorkspacePage'
import { TaskResultPage } from './components/TaskResultPage'
import dialogImagePlaceholder from './assets/figma/dialog-image-placeholder@1x.png'
import './index.css'

const TABS = [
  { id: 1, label: 'Prime Video' },
  { id: 2, label: 'GitHub' },
  { id: 3, label: 'Figma' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(1)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[var(--color-surface-app-bg)] p-8">
      <p className="text-[var(--color-text-tertiary)] text-[12px] mb-6">
        页签 — implement → verify
      </p>

      {/* interactive tab bar */}
      <div className="flex bg-[var(--color-surface-window)] rounded-[12px] p-[4px] w-fit mb-10">
        {TABS.map(tab => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className="cursor-pointer"
          >
            <Tab
              selected={activeTab === tab.id}
              hovered={hoveredTab === tab.id}
              label={tab.label}
              onClose={() => {}}
            />
          </div>
        ))}
      </div>

      {/* variant grid — all 8: 类型 × 选中 × 交互 */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=页签 选中=选中 交互=默认</p>
          <Tab type="页签" selected={true} label="Prime Video" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=页签 选中=未选中 交互=默认</p>
          <Tab type="页签" selected={false} label="Prime Video" />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=页签 选中=选中 交互=悬停</p>
          <Tab type="页签" selected={true} hovered={true} label="Prime Video" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=页签 选中=未选中 交互=悬停</p>
          <Tab type="页签" selected={false} hovered={true} label="Prime Video" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=新页签 选中=选中 交互=默认</p>
          <Tab type="新页签" selected={true} onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=新页签 选中=未选中 交互=默认</p>
          <Tab type="新页签" selected={false} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=新页签 选中=选中 交互=悬停</p>
          <Tab type="新页签" selected={true} hovered={true} onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">类型=新页签 选中=未选中 交互=悬停</p>
          <Tab type="新页签" selected={false} hovered={true} onClose={() => {}} />
        </div>
      </div>

      {/* Toolbar state grid */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        Toolbar — implement → verify
      </p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">canGoBack=true canGoForward=false (default)</p>
          <div className="bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Toolbar />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">canGoBack=false canGoForward=false (both disabled)</p>
          <div className="bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Toolbar canGoBack={false} canGoForward={false} />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">canGoBack=true canGoForward=true</p>
          <div className="bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Toolbar canGoBack={true} canGoForward={true} urlText="https://github.com" />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">bookmarked=true</p>
          <div className="bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Toolbar bookmarked={true} urlText="https://github.com" />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">urlFocused=true</p>
          <div className="bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Toolbar urlFocused={true} urlText="https://github.com" />
          </div>
        </div>
      </div>

      {/* InputBox state grid */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        InputBox — implement → verify (4 states)
      </p>
      <div className="flex flex-col gap-6">
        {(['default', 'focus', 'disabled', 'error'] as const).map(state => (
          <div key={state}>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">state={state}</p>
            <InputBox state={state} />
          </div>
        ))}
      </div>
      {/* Dialog state grid */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        Dialog — implement → verify
      </p>
      <div className="flex flex-wrap gap-8">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=single content=text close=default</p>
          <Dialog layout="single" contentVariant="text" primaryLabel="去登录" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=vertical content=text close=default</p>
          <Dialog layout="vertical" contentVariant="text" primaryLabel="去登录" secondaryLabel="取消" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=horizontal content=text close=default</p>
          <Dialog layout="horizontal" contentVariant="text" primaryLabel="去登录" secondaryLabel="取消" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=single content=title-left close=default</p>
          <Dialog layout="single" contentVariant="title-left" title="提示文案" description="为了保障您的信息安全，请登录后使用" primaryLabel="去登录" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=single content=text close=hover (forced)</p>
          <Dialog layout="single" contentVariant="text" closeVariant="hover" primaryLabel="去登录" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=single content=text close=none</p>
          <Dialog layout="single" contentVariant="text" closeVariant="none" primaryLabel="去登录" />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=single content=text close=circle</p>
          <Dialog layout="single" contentVariant="text" closeVariant="circle" primaryLabel="去登录" onClose={() => {}} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">layout=horizontal content=image</p>
          <Dialog layout="horizontal" contentVariant="image" imageSrc={dialogImagePlaceholder} description="这里请填充描述文案，如果不需要文案可删除" primaryLabel="去登录" secondaryLabel="取消" onClose={() => {}} />
        </div>
      </div>

      {/* Dialog button type axis
          type × state matrix:
          solid  × default ✓  solid  × hover ✓
          outline × default ✓  outline × hover ✓
          text   × default ✓  text   × hover ✓  (text color #999→#333)
          All 6 combinations implemented. Interactive-only (no static verify card for hover).
      */}
      <p className="text-[var(--color-text-tertiary)] text-[10px] mt-6 mb-3">Dialog button type axis — all 6 type×state combos implemented (hover is interactive)</p>
      <div className="flex gap-4 items-end flex-wrap">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">button=solid (default)</p>
          <div className="w-[256px]"><DialogButton type="solid" label="去登录" /></div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">button=outline (default)</p>
          <div className="w-[256px]"><DialogButton type="outline" label="取消" /></div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">button=text (default)</p>
          <div className="w-[256px]"><DialogButton type="text" label="取消" /></div>
        </div>
      </div>
      {/* AIToolsRow verify cards */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        AIToolsRow — implement → verify
      </p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">default (all pills)</p>
          <div className="w-[704px]">
            <AIToolsRow />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">hover / active — interactive (mouse over each pill)</p>
          <div className="w-[704px]">
            <AIToolsRow />
          </div>
        </div>
      </div>

      {/* Sidebar verify card */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        Sidebar — implement → verify
      </p>
      <div className="flex flex-col gap-[16px]">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">expanded (click collapse button to toggle)</p>
          <div className="flex bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(v => !v)} />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">collapsed (static)</p>
          <div className="flex bg-[var(--color-surface-window)] rounded-[12px] overflow-hidden">
            <Sidebar collapsed={true} />
          </div>
        </div>
      </div>

      {/* BrowserResultPage verify card */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        BrowserResultPage / AssistantSidebar — implement
      </p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">click 助手按钮 to toggle the right sidebar</p>
          <div className="overflow-auto rounded-[16px]">
            <BrowserResultPage />
          </div>
        </div>
      </div>

      {/* WorkspacePage verify card */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        WorkspacePage — implement → verify
      </p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">default layout</p>
          <div className="overflow-auto rounded-[16px]">
            <WorkspacePage />
          </div>
        </div>
      </div>

      {/* TaskResultPage verify card */}
      <p className="text-[var(--color-text-tertiary)] text-[12px] mt-10 mb-6">
        TaskResultPage — implement → verify
      </p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">执行中状态（正在分析 + 执行卡片 + 分析类目）</p>
          <div className="overflow-auto rounded-[16px]">
            <TaskResultPage />
          </div>
        </div>
      </div>

    </div>
  )
}
