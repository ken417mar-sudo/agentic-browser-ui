import { useState } from 'react'
import { Tab } from './components/Tab'
import { InputBox } from './components/InputBox'
import './index.css'

const TABS = [
  { id: 1, label: 'Prime Video' },
  { id: 2, label: 'GitHub' },
  { id: 3, label: 'Figma' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(1)
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
    </div>
  )
}
