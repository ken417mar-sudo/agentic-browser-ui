import { useState } from 'react'
import browserResultContent from '../assets/figma/browser-result-content@1x.png'
import { Toolbar } from './Toolbar'
import { AssistantSidebarChip, AssistantSidebarPanel } from './AssistantSidebarPanel'

function TrafficLights() {
  return (
    <div className="flex items-center gap-[8px]">
      <span className="size-[12px] rounded-full border-[0.5px] border-[rgba(0,0,0,0.12)] bg-[#fe5f57]" />
      <span className="size-[12px] rounded-full border-[0.5px] border-[rgba(0,0,0,0.12)] bg-[#febc2e]" />
      <span className="size-[12px] rounded-full border-[0.5px] border-[rgba(0,0,0,0.12)] bg-[#2bc841]" />
    </div>
  )
}

function BrowserTab({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <div className="flex h-[40px] w-[192px] items-center p-[4px]">
      <div
        className={[
          'flex h-full flex-1 items-center gap-[8px] rounded-[8px] pl-[8px] pr-[4px]',
          active ? 'border-[0.5px] border-[rgba(31,98,238,0.2)] bg-white' : '',
        ].join(' ')}
      >
        <div
          className={[
            'flex size-[16px] items-center justify-center rounded-full text-[10px]',
            active ? 'bg-black text-white' : 'bg-[#1f62ee] text-white',
          ].join(' ')}
        >
          {active ? 'S' : 'H'}
        </div>
        <span
          className={active ? 'text-[#333333]' : 'text-black'}
          style={{ fontFamily: active ? "'SF Pro', sans-serif" : "'HYQiHei:60S', 'PingFang SC', sans-serif", fontSize: 12 }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

interface BrowserResultPageProps {
  defaultAssistantSidebarOpen?: boolean
}

export function BrowserResultPage({
  defaultAssistantSidebarOpen = true,
}: BrowserResultPageProps) {
  const [assistantSidebarOpen, setAssistantSidebarOpen] = useState(defaultAssistantSidebarOpen)

  return (
    <div className="overflow-hidden rounded-[16px] bg-[var(--color-surface-app-bg)]">
      <div className="relative h-[40px] w-[1600px]">
        <div className="absolute left-[18px] top-[14px]">
          <TrafficLights />
        </div>
        <div className="absolute left-[86px] top-0 flex items-center gap-[4px]">
          <BrowserTab label="Home" />
          <BrowserTab label="Medium" active />
          <button
            type="button"
            className="flex size-[16px] items-center justify-center text-[var(--color-text-primary)]"
            aria-label="新增页签"
          >
            +
          </button>
        </div>
      </div>

      <div className="mx-[4px] flex h-[856px] w-[1592px] overflow-hidden rounded-[12px] border-[0.5px] border-[rgba(0,0,0,0.12)] bg-[var(--color-surface-window)]">
        <div className={assistantSidebarOpen ? 'w-[1192px]' : 'w-full'}>
          <Toolbar
            urlText="medium.com"
            bookmarked
            assistantButton={
              assistantSidebarOpen ? null : (
                <AssistantSidebarChip onClick={() => setAssistantSidebarOpen(true)} />
              )
            }
          />
          <div className="relative flex h-[816px] items-start justify-center overflow-hidden">
            <div className="pointer-events-none relative h-[816px] w-[762px] overflow-hidden mix-blend-darken">
              <img
                src={browserResultContent}
                alt=""
                className="absolute max-w-none"
                style={{
                  width: '232.66%',
                  height: '125.55%',
                  left: '-42.23%',
                  top: '-21.63%',
                }}
              />
            </div>
          </div>
        </div>

        {assistantSidebarOpen ? (
          <AssistantSidebarPanel
            onAssistantClick={() => setAssistantSidebarOpen(false)}
          />
        ) : null}
      </div>
    </div>
  )
}
