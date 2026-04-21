import expandIcon from '../assets/figma/taskchatpanel-expand@1x.svg'
import CheckSvg from '../assets/figma/analysischip-check@1x.svg?react'
import LoadingSvg from '../assets/figma/analysisstatusrow-loading@1x.svg?react'
import { InputBox } from './InputBox'

function AnalysisStatusRow({ label = '正在分析' }: { label?: string }) {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <div className="flex items-center gap-[6px]">
        <span
          className="text-[14px] leading-[21px] whitespace-nowrap"
          style={{
            fontFamily: "'Microsoft YaHei', sans-serif",
            backgroundImage:
              'linear-gradient(270deg, rgb(144,142,168) 0%, rgb(231,231,231) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {label}
        </span>
        <LoadingSvg className="w-[30px] h-[6px]" />
      </div>
    </div>
  )
}

function AnalysisChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[10px] h-[32px] pl-[8px] pr-[12px] rounded-[69px] bg-[rgba(0,0,0,0.02)] border-[0.5px] border-solid border-[rgba(0,0,0,0.08)] shrink-0">
      <div className="flex items-center gap-[4px]">
        <CheckSvg className="size-[14px]" />
        <span
          className="text-[12px] leading-[normal] text-[#999999] whitespace-nowrap"
          style={{ fontFamily: "'PICO_Sans_VFE_SC', sans-serif" }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export default function TaskChatPanel() {
  return (
    <div
      className="flex flex-col bg-white border-r-[0.5px] border-solid border-[rgba(0,0,0,0.08)]"
      style={{ width: 400, height: 852 }}
    >
      {/* Header */}
      <div className="flex items-center pl-[16px] h-[56px] shrink-0 border-b-[0.5px] border-solid border-[rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-[4px]">
          <span
            className="text-[14px] leading-[20px] text-[#333333] whitespace-nowrap"
            style={{ fontFamily: "'PICO_Sans_VFE_SC', sans-serif" }}
          >
            安装会话技能
          </span>
          <div className="flex items-center justify-center p-[4px]">
            <img src={expandIcon} alt="" className="size-[12px]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-h-0 p-[16px] gap-[2px]">
        {/* Message list */}
        <div className="flex flex-col flex-1 min-h-0 gap-[32px] overflow-hidden min-w-[356px]">
          {/* User bubble row */}
          <div className="flex flex-col gap-[18px] items-end w-full shrink-0">
            <div className="flex gap-[10px] items-start justify-end w-full">
              <div
                className="bg-[#f1f2f3] px-[20px] py-[10px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[2px] max-w-[450px] shrink-0"
              >
                <p
                  className="text-[16px] leading-[26px] text-[#333333]"
                  style={{
                    fontFamily: "'PICO_Sans_VFE_SC', sans-serif",
                    fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
                  }}
                >
                  清理电脑空间
                </p>
              </div>
            </div>
          </div>

          {/* AI response block */}
          <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
            <AnalysisStatusRow />
            <div className="flex flex-col gap-[16px] items-start w-full">
              <p
                className="text-[16px] leading-[26px] text-[#333333] w-full"
                style={{ fontFamily: "'PICO_Sans_VFE_SC', sans-serif" }}
              >
                根据扫描结果，分析具体的空间占用情况
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-start w-full">
              <p
                className="text-[16px] leading-[26px] text-[#333333] w-full"
                style={{ fontFamily: "'PICO_Sans_VFE_SC', sans-serif" }}
              >
                好的，我将为您进行空间清理分析，请稍候。我会按照标准步骤流程检查并优化您的电脑。分析大文件占用情况，清理特定类型的文件
              </p>
              <AnalysisChip label="大文件筛查中" />
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="shrink-0 w-full">
          <InputBox />
        </div>
      </div>
    </div>
  )
}
