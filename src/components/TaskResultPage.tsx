import Sidebar from './Sidebar'
import { InputBox } from './InputBox'
import { Toolbar } from './Toolbar'
import LoadingSvg from '../assets/figma/taskresult-loading@1x.svg?react'
import StepLoadingSvg from '../assets/figma/taskresult-step-loading@1x.svg?react'
import StepDoneSvg from '../assets/figma/taskresult-step-done@1x.svg?react'
import TaskStatusSvg from '../assets/figma/taskresult-task-status@1x.svg?react'
import TaskDoneSvg from '../assets/figma/taskresult-task-done@1x.svg?react'
import AnalysisCheckSvg from '../assets/figma/taskresult-analysis-check@1x.svg?react'
import CollapseArrowSvg from '../assets/figma/taskresult-collapse-arrow@1x.svg?react'
import StepConnectorSvg from '../assets/figma/taskresult-step-connector@1x.svg?react'

const STEPS = [
  { label: '步骤1：全面磁盘扫描' },
  { label: '步骤2：详细空间分析' },
  { label: '步骤3：图形化报告展示' },
  { label: '步骤4：执行数据查询与分析任务' },
  { label: '步骤5：生成结果' },
]

function StepItem({
  label,
  isLast,
  done,
}: {
  label: string
  isLast: boolean
  done: boolean
}) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-[12px] items-center w-full">
        <div className="flex size-[16px] shrink-0 items-center justify-center relative">
          <StepLoadingSvg className="size-[16px] shrink-0 absolute inset-0" />
          {done && (
            <StepDoneSvg className="w-[7.2px] h-[5.325px] shrink-0 relative z-10" />
          )}
        </div>
        <span
          className="text-[14px] leading-[22px] text-[var(--color-text-secondary)]"
          style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif", fontWeight: 300 }}
        >
          {label}
        </span>
      </div>
      {!isLast && (
        <div className="flex h-[16px] items-start w-full">
          <div className="h-full w-[16px] shrink-0">
            <StepConnectorSvg className="size-full" />
          </div>
        </div>
      )}
    </div>
  )
}

function ExecutionCard({ completed }: { completed: boolean }) {
  return (
    <div className="border-[0.5px] border-[var(--color-border-subtle)] flex flex-col items-start min-w-[356px] overflow-hidden rounded-[16px] w-full">
      <div className="border-b-[0.5px] border-b-[#e0e0e0] flex items-center justify-between pl-[12px] pr-[16px] py-[16px] w-full">
        <div className="flex flex-1 h-[26px] items-center justify-between min-w-0">
          <div className="flex gap-[12px] h-[20px] items-center shrink-0">
            <div className="flex gap-[8px] items-center">
              <div className="flex size-[24px] items-center justify-center p-[4.571px] shrink-0">
                {completed ? (
                  <TaskDoneSvg className="size-[13px] shrink-0" />
                ) : (
                  <TaskStatusSvg className="size-[13px] shrink-0" />
                )}
              </div>
              <span
                className="text-[16px] leading-[26px] text-[var(--color-text-primary)] whitespace-nowrap"
                style={{ fontFamily: "'HYQiHei:65S', 'PingFang SC', sans-serif" }}
              >
                {completed ? '任务已完成' : '正在执行任务清单'}
              </span>
            </div>
            <span
              className="text-[12px] leading-[16px] text-[#908ea8] overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif" }}
            >
              {completed ? '5/5已完成' : '3/7已完成'}
            </span>
          </div>
          <button
            type="button"
            aria-label="展开/收起"
            className="flex size-[24px] items-center justify-center overflow-hidden shrink-0"
          >
            <CollapseArrowSvg className="size-[10px] shrink-0" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center overflow-hidden p-[16px] w-full">
        {STEPS.map((step, i) => (
          <StepItem
            key={step.label}
            label={step.label}
            isLast={i === STEPS.length - 1}
            done={completed}
          />
        ))}
      </div>
    </div>
  )
}

function AnalysisChip() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] border-[0.5px] border-[var(--color-border-subtle)] flex gap-[10px] h-[32px] items-center justify-center overflow-hidden pl-[8px] pr-[12px] py-[10px] rounded-[69px] shrink-0">
      <div className="flex gap-[4px] items-center shrink-0">
        <AnalysisCheckSvg className="size-[14px] shrink-0" />
        <span
          className="text-[12px] leading-normal text-[var(--color-text-tertiary)] whitespace-nowrap"
          style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
        >
          大文件筛查中
        </span>
      </div>
    </div>
  )
}

function AnalyzingIndicator() {
  return (
    <div className="flex gap-[6px] items-center shrink-0">
      <span
        className="text-[14px] leading-[21px] text-[var(--color-text-tertiary)] whitespace-nowrap"
        style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', sans-serif" }}
      >
        正在分析
      </span>
      <LoadingSvg className="w-[30px] h-[6px] shrink-0" />
    </div>
  )
}

export function TaskResultPage({ completed = false }: { completed?: boolean }) {
  return (
    <div className="flex h-[900px] w-[1600px] flex-col overflow-hidden rounded-[16px] bg-[var(--color-surface-app-bg)]">
      {/* TabBar placeholder */}
      <div className="flex h-[40px] w-full shrink-0 items-center bg-[var(--color-surface-app-bg)] px-[18px]">
        <div className="flex gap-[8px] items-center">
          <div className="size-[12px] rounded-full bg-[#fe5f57] border-[0.5px] border-[rgba(0,0,0,0.12)]" />
          <div className="size-[12px] rounded-full bg-[#febc2e] border-[0.5px] border-[rgba(0,0,0,0.12)]" />
          <div className="size-[12px] rounded-full bg-[#2bc841] border-[0.5px] border-[rgba(0,0,0,0.12)]" />
        </div>
      </div>

      {/* WindowBody */}
      <div className="mx-[4px] mb-[4px] flex flex-1 flex-col overflow-hidden rounded-[12px] bg-[var(--color-surface-window)] border-[0.5px] border-[var(--color-border-subtle)]">
        <Toolbar urlText="我一直都在" />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-1 flex-col items-center overflow-y-auto px-[12px] py-[24px] gap-[16px]">
            <div className="flex w-full max-w-[696px] flex-col gap-[36px]">
              {/* User bubble */}
              <div className="flex justify-end w-full">
                <div className="max-w-[450px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[2px] bg-[#f1f2f3] px-[20px] py-[10px]">
                  <p
                    className="text-[16px] leading-[26px] text-[var(--color-text-primary)]"
                    style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif", fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1" }}
                  >
                    把我电脑没用的文件都清理一下
                  </p>
                </div>
              </div>

              {/* Agent response area */}
              <div className="flex flex-col gap-[16px] items-start w-full">
                {!completed && <AnalyzingIndicator />}

                <div className="flex flex-col gap-[16px] items-start w-full">
                  <p
                    className="text-[16px] leading-[26px] text-[var(--color-text-primary)] w-full"
                    style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
                  >
                    根据扫描结果，分析具体的空间占用情况
                  </p>
                  <ExecutionCard completed={completed} />
                </div>

                <div className="flex flex-col gap-[12px] items-start w-full">
                  {!completed && (
                    <p
                      className="text-[16px] leading-[26px] text-[var(--color-text-primary)] w-full"
                      style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
                    >
                      好的，我将为您进行空间清理分析，请稍候。我会按照标准步骤流程检查并优化您的电脑。分析大文件占用情况，清理特定类型的文件
                    </p>
                  )}
                  {!completed && <AnalysisChip />}
                </div>

                {completed && (
                  <div className="flex flex-col gap-[16px] items-start w-full">
                    <p
                      className="text-[24px] leading-[30px] font-bold text-[var(--color-text-primary)] w-full"
                      style={{ fontFamily: "'HYQiHei:65S', 'PingFang SC', sans-serif" }}
                    >
                      清理任务已完成！
                    </p>
                    <p
                      className="text-[16px] leading-[26px] text-[var(--color-text-primary)] w-full"
                      style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
                    >
                      C盘清理已完成！成功清理了785项垃圾文件，释放了约207.3MB的磁盘空间。您的C盘目前有充足的可用空间（之前检查显示有239GB可用），这次清理虽然释放的空间不大，但已经清除了系统临时文件、缓存等不必要的文件。
                    </p>
                    <p
                      className="text-[16px] leading-[26px] text-[var(--color-text-primary)] w-full"
                      style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
                    >
                      如果您觉得C盘空间仍然紧张，或者想要进行更深度的清理，我可以帮您：
                    </p>
                    <p
                      className="text-[16px] leading-[26px] text-[var(--color-text-primary)] w-full"
                      style={{ fontFamily: "'PICO Sans VFE SC', 'PingFang SC', sans-serif" }}
                    >
                      需要进一步的操作吗？
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Task input at bottom */}
            <div className="flex w-full max-w-[720px] flex-col items-center mt-auto pt-[16px]">
              <InputBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
