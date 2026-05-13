interface ProgressBarProps {
  progress: number // 0–100
}

function ProgressBar({ progress }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress))
  return (
    <div
      className="relative h-[8px] w-full rounded-[24px] overflow-hidden"
      style={{ backgroundColor: '#d7d7db' }}
    >
      <div
        className="absolute left-0 top-0 h-full rounded-[24px]"
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: '#18181b',
        }}
      />
    </div>
  )
}

interface UpgradeDialogProps {
  progress?: number // 0–100, downloading state
  progressLabel?: string // e.g. "75%"
  logo?: React.ReactNode
}

export default function UpgradeDialog({
  progress = 75,
  progressLabel,
  logo,
}: UpgradeDialogProps) {
  const resolvedLabel = progressLabel ?? `${Math.round(progress)}%`

  return (
    <div
      className="bg-white outline outline-1 outline-black rounded-[16px] overflow-hidden pb-[24px] px-[24px]"
      style={{ width: 310, height: 216 }}
    >
      {/* content area */}
      <div className="flex flex-col gap-[6px]" style={{ height: 192 }}>
        {/* logo */}
        <div className="flex flex-1 items-center justify-center">
          <div className="size-[96px] flex items-center justify-center">
            {logo ?? <div className="size-[96px] rounded-[16px] bg-[var(--color-surface-app-bg)]" />}
          </div>
        </div>

        {/* 下载进度 */}
        <div className="flex flex-col gap-[8px] shrink-0" style={{ height: 32 }}>
          <div
            className="flex items-center justify-between text-[14px] whitespace-nowrap h-[16px] shrink-0"
            style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
          >
            <span className="text-[#18181b] leading-[16px]">正在升级中</span>
            <span className="text-[#6b6f7a]">{resolvedLabel}</span>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  )
}
