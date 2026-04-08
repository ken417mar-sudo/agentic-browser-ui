import { useState } from 'react'
import { Tab } from './components/Tab'
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
              onClose={activeTab === tab.id ? () => {} : undefined}
            />
          </div>
        ))}
      </div>

      {/* variant grid for verification against Figma */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">选中=选中 交互=默认</p>
          <Tab selected={true} label="Prime Video" />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">选中=未选中 交互=默认</p>
          <Tab selected={false} label="Prime Video" />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">选中=选中 交互=悬停</p>
          <Tab selected={true} hovered={true} label="Prime Video" />
        </div>
        <div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mb-1">选中=未选中 交互=悬停</p>
          <Tab selected={false} hovered={true} label="Prime Video" />
        </div>
      </div>
    </div>
  )
}
