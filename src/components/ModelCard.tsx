import deepseekVector from '../assets/figma/modelcard-deepseek-vector@1x.svg'
import deepseekVectorInner from '../assets/figma/modelcard-deepseek-vector-inner@1x.svg'
import loadingProgress from '../assets/figma/modelcard-loading-progress@1x.svg'

export type ModelCardState = 'normal' | 'hover' | 'loading' | 'selected'

interface ModelCardProps {
  state?: ModelCardState
  title?: string
  description?: string
  className?: string
}

const baseTextStyle = {
  fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
}

function DeepSeekIcon() {
  return (
    <span className="flex items-center p-[1.5px] rounded-[6px] shrink-0">
      <span className="relative block size-[13.5px] overflow-hidden">
        <img
          alt=""
          src={deepseekVector}
          className="absolute left-1/2 top-1/2 size-[12px] -translate-x-1/2 -translate-y-1/2"
        />
        <img
          alt=""
          src={deepseekVectorInner}
          className="absolute left-[calc(50%+0.03px)] top-[calc(50%+0.33px)] h-[6.667px] w-[9.063px] -translate-x-1/2 -translate-y-1/2"
        />
      </span>
    </span>
  )
}

function DownloadOverlay({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 h-[132px] overflow-hidden rounded-[16px] bg-[#f4f2f7]">
      <div className="absolute left-[20px] right-[20px] top-1/2 flex h-[64px] -translate-y-1/2 flex-col items-center justify-center gap-[12px]">
        <p
          className="w-full text-center text-[14px] leading-[20px] text-[#3f4046]"
          style={{ fontFamily: "'HYQiHei:85S', 'PingFang SC', sans-serif", ...baseTextStyle }}
        >
          <span style={{ fontFamily: "'HYQiHei:55S', 'PingFang SC', sans-serif" }}>下载 </span>
          {title}
        </p>
        <button
          type="button"
          className="flex h-[32px] items-center justify-center rounded-[12px] bg-white px-[16px] py-[5px] outline outline-[0.5px] outline-[rgba(0,0,0,0.1)]"
        >
          <span
            className="text-[14px] leading-[22px] text-[#18181b] whitespace-nowrap"
            style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif", ...baseTextStyle }}
          >
            立即下载
          </span>
        </button>
      </div>
    </div>
  )
}

function LoadingOverlay({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 h-[132px] overflow-hidden rounded-[16px] bg-[#f4f2f7]">
      <div className="absolute left-[20px] right-[20px] top-1/2 flex -translate-y-1/2 flex-col items-center gap-[16px]">
        <p
          className="w-full text-center text-[14px] leading-[20px] text-[#3f4046]"
          style={{ fontFamily: "'HYQiHei:85S', 'PingFang SC', sans-serif", ...baseTextStyle }}
        >
          {title}
        </p>
        <div className="flex h-[6px] w-full flex-col items-start rounded-[10px] bg-[rgba(0,0,0,0.03)]">
          <img alt="" src={loadingProgress} className="h-[6px] w-[73px] shrink-0" />
        </div>
        <p
          className="w-full text-center text-[12px] leading-[20px] text-[#6b6f7a]"
          style={{ fontFamily: "'HYQiHei:55S', 'PingFang SC', sans-serif", ...baseTextStyle }}
        >
          下载中...
        </p>
      </div>
    </div>
  )
}

export function ModelCard({
  state = 'normal',
  title = 'DeepSeek-R1-7B 本地版',
  description = '我可以帮你搜索、答疑、分析作、提建议，请把你的任务交给我吧~',
  className = '',
}: ModelCardProps) {
  const isSelected = state === 'selected'
  const isOverlayState = state === 'hover' || state === 'loading'

  return (
    <div
      data-model-card-state={state}
      className={[
        'relative flex h-[132px] w-[284px] flex-col items-start gap-[8px] overflow-hidden rounded-[16px] p-[18px]',
        isOverlayState ? 'bg-[#f4f2f7] shadow-[0px_0px_20px_rgba(0,0,0,0.06)]' : 'bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.06)]',
        isSelected ? 'outline outline-[1px] outline-black' : 'outline outline-[0.5px] outline-[rgba(0,0,0,0.1)]',
        className,
      ].join(' ')}
    >
      <div className="flex w-full shrink-0 items-center justify-between">
        <div className="flex shrink-0 items-center">
          <DeepSeekIcon />
        </div>
        <div className="size-[20px] shrink-0" />
      </div>
      <p
        className={['shrink-0 whitespace-nowrap text-[16px] leading-[24px]', isOverlayState ? 'text-[#333]' : 'text-[#3f4046]'].join(' ')}
        style={{ fontFamily: "'HYQiHei:85S', 'PingFang SC', sans-serif", ...baseTextStyle }}
      >
        {title}
      </p>
      <p
        className="max-h-[36px] w-full shrink-0 overflow-hidden text-[12px] leading-[18px] text-[#999]"
        style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif", ...baseTextStyle }}
      >
        {description}
      </p>

      {state === 'hover' && <DownloadOverlay title={title} />}
      {state === 'loading' && <LoadingOverlay title={title} />}
    </div>
  )
}
