import LogoSvg from '../assets/figma/upgrade-logo@1x.svg?react'
import FailCircleSvg from '../assets/figma/upgrade-fail-circle@1x.svg?react'
import FailTriangleSvg from '../assets/figma/upgrade-fail-triangle@1x.svg?react'
import FailExclaimSvg from '../assets/figma/upgrade-fail-exclaim@1x.svg?react'
import VersionLogoSvg from '../assets/figma/upgrade-version-logo@1x.svg?react'

// Source: 2080:40359 (联想规范 page, component set 升级弹窗)
// Variants: 升级前 (320×356) / 升级中 (320×222) / 升级成功 (320×222) / 升级失败 (320×222)

export type UpgradeState = '升级前' | '升级中' | '升级成功' | '升级失败'

interface ProgressBarProps {
  progress: number
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="relative h-[8px] w-full rounded-[24px] overflow-hidden shrink-0"
      style={{ backgroundColor: '#d7d7db' }}
    >
      <div
        className="absolute left-0 top-0 h-full rounded-[24px] shrink-0"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%`, backgroundColor: '#18181b' }}
      />
    </div>
  )
}

interface UpgradeDialogProps {
  state?: UpgradeState
  progress?: number        // 0–100, used in 升级中
  progressLabel?: string
  version?: string         // e.g. "3.0.10 版本"
  showRestartReady?: boolean  // 升级前: "最新版本已准备好，重启后即可使用"
  showDownloadProgress?: boolean  // 升级前: 下载进度条
  downloadProgress?: number
  onRestart?: () => void
  onRetry?: () => void
}

export default function UpgradeDialog({
  state = '升级中',
  progress = 75,
  progressLabel,
  version = '3.0.10 版本',
  showRestartReady = true,
  showDownloadProgress = false,
  downloadProgress = 30,
  onRestart,
  onRetry,
}: UpgradeDialogProps) {
  const resolvedLabel = progressLabel ?? `${Math.round(progress)}%`
  const is升级前 = state === '升级前'
  const is升级中 = state === '升级中'
  const is升级成功 = state === '升级成功'
  const is升级失败 = state === '升级失败'

  const rootH = is升级前 ? 356 : 222
  const rootRadius = is升级前 ? 16 : 12
  const rootPt = is升级前 ? 0 : 6

  return (
    <div
      className="bg-white flex flex-col items-start overflow-hidden pb-[24px] px-[24px]"
      style={{
        width: 320,
        height: rootH,
        borderRadius: rootRadius,
        paddingTop: rootPt,
        border: '0.5px solid rgba(0,0,0,0.08)',
        boxShadow: '0px 4px 30px 0px rgba(0,0,0,0.1)',
        justifyContent: is升级前 ? 'space-between' : undefined,
      }}
    >
      {/* ── 升级前 ─────────────────────────────────────────────────────── */}
      {is升级前 && (
        <>
          <div className="flex flex-col gap-[16px] items-start shrink-0 w-full">
            {/* user_id row */}
            <div
              className="flex gap-[8px] items-center py-[16px] shrink-0 w-full"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
            >
              <div className="relative overflow-hidden shrink-0 size-[40px]">
                <div className="absolute" style={{ inset: '7.5% 7.57%' }}>
                  <LogoSvg className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                <VersionLogoSvg style={{ width: 137.9, height: 14 }} />
                <span
                  className="text-[12px] leading-[12px] text-[#3f4046] whitespace-nowrap"
                  style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
                >
                  {version}
                </span>
              </div>
            </div>

            {/* changelog */}
            <div className="flex flex-col gap-[10px] items-start px-[4px] shrink-0 w-full">
              <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                <p
                  className="text-[16px] leading-[1.5] text-[#18181b] whitespace-nowrap shrink-0"
                  style={{ fontFamily: "'HYQiHei:75W', 'PingFang SC', sans-serif" }}
                >
                  本次更新功能：
                </p>
                <div
                  className="text-[14px] text-[#3f4046] shrink-0 w-full"
                  style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif", lineHeight: 1.5 }}
                >
                  <p>1.全新升级工作台模式，支持多种窗口模式</p>
                  <p>2.接入DeepSeek模型, 快速进行推理</p>
                  <p>3.笔记/文件/网页可在浏览时加入知识库</p>
                </div>
              </div>
              {showRestartReady && (
                <p
                  className="text-[14px] leading-[20px] text-[#18181b] whitespace-nowrap shrink-0"
                  style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
                >
                  最新版本已准备好，重启后即可使用
                </p>
              )}
            </div>
          </div>

          {/* optional download progress */}
          {showDownloadProgress && (
            <div className="flex flex-col gap-[8px] h-[32px] items-start px-[4px] shrink-0 w-full">
              <div
                className="flex items-center justify-between text-[14px] shrink-0 w-full whitespace-nowrap h-[16px]"
                style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
              >
                <span className="text-[#18181b] leading-[16px]">新版本下载中…</span>
                <span className="text-[#6b6f7a]">{downloadProgress}%</span>
              </div>
              <ProgressBar progress={downloadProgress} />
            </div>
          )}

          {/* button group — Figma shows single 重启应用 button */}
          <div className="flex gap-[8px] items-start shrink-0 w-full">
            <button
              type="button"
              onClick={onRestart}
              className="flex flex-1 h-[32px] items-center justify-center rounded-[8px] bg-black"
            >
              <span
                className="text-[13px] leading-[20px] text-white"
                style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
              >
                重启应用
              </span>
            </button>
          </div>
        </>
      )}

      {/* ── 升级中 ─────────────────────────────────────────────────────── */}
      {is升级中 && (
        <div className="flex flex-col gap-[6px] flex-1 items-start w-full min-h-0">
          {/* logo centered — inset 7.5%/7.57% per Figma source */}
          <div className="flex flex-1 items-center justify-center w-full">
            <div className="relative overflow-hidden size-[96px]">
              <div className="absolute" style={{ inset: '7.5% 7.57%' }}>
                <LogoSvg className="w-full h-full" />
              </div>
            </div>
          </div>
          {/* progress */}
          <div className="flex flex-col gap-[8px] h-[32px] items-start shrink-0 w-full">
            <div
              className="flex items-center justify-between text-[14px] shrink-0 w-full whitespace-nowrap h-[16px]"
              style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
            >
              <span className="text-[#18181b] leading-[16px]">正在升级中</span>
              <span className="text-[#6b6f7a]">{resolvedLabel}</span>
            </div>
            <ProgressBar progress={progress} />
          </div>
        </div>
      )}

      {/* ── 升级成功 (inferred from component set structure) ────────────── */}
      {is升级成功 && (
        <>
          {/* content: logo + title, centered in flex-1 */}
          <div className="flex flex-col gap-[12px] flex-1 items-center justify-center w-full min-h-0">
            <div className="relative overflow-hidden size-[96px]">
              <div className="absolute" style={{ inset: '7.5% 7.57%' }}>
                <LogoSvg className="w-full h-full" />
              </div>
            </div>
            <p
              className="text-[16px] leading-[24px] text-[#18181b] text-center"
              style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
            >
              升级成功
            </p>
          </div>
          {/* button group: separate shrink-0 sibling at bottom */}
          <div className="flex items-start shrink-0 w-full">
            <button
              type="button"
              onClick={onRestart}
              className="flex flex-1 h-[32px] items-center justify-center rounded-[8px] bg-black overflow-hidden"
            >
              <span
                className="text-[13px] leading-[20px] text-white"
                style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
              >
                重启应用
              </span>
            </button>
          </div>
        </>
      )}

      {/* ── 升级失败 ─────────────────────────────────────────────────────── */}
      {is升级失败 && (
        <>
          {/* content: warning icon + title, centered in flex-1 */}
          <div className="flex flex-col gap-[12px] flex-1 items-center justify-center w-full min-h-0">
            {/* warning icon composite: 60×60 outer */}
            <div className="relative shrink-0" style={{ width: 60, height: 60 }}>
              <FailCircleSvg className="absolute inset-0 w-full h-full" />
              {/* 53×53 warning slot at left:3 top:4 */}
              <div className="absolute" style={{ left: 3, top: 4, width: 53, height: 53 }}>
                <div className="relative w-full h-full">
                  {/* triangle with Figma inset: 9.43% 3.77% 11.32% 3.77% */}
                  <div className="absolute" style={{ inset: '9.43% 3.77% 11.32% 3.77%' }}>
                    <FailTriangleSvg className="w-full h-full" />
                  </div>
                  <FailExclaimSvg
                    className="absolute"
                    style={{ left: '41.26%', top: '33.94%', width: '15.1%', height: '39.82%' }}
                  />
                </div>
              </div>
            </div>
            <p
              className="text-[16px] leading-[24px] text-[#18181b] text-center"
              style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif", width: 252 }}
            >
              哎呀，升级失败
            </p>
          </div>
          {/* button group: separate shrink-0 sibling at bottom */}
          <div className="flex items-start shrink-0 w-full">
            <button
              type="button"
              onClick={onRetry}
              className="flex w-full h-[32px] items-center justify-center rounded-[8px] bg-black shrink-0"
            >
              <span
                className="text-[13px] leading-[20px] text-white"
                style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
              >
                重试
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
