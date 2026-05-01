import TitleIconSvg from '../assets/figma/filelistcard-title-icon@1x.svg?react'
import CollapseArrowSvg from '../assets/figma/filelistcard-collapse-arrow@1x.svg?react'
import FileIconSvg from '../assets/figma/filelistcard-file-icon@1x.svg?react'

type FileItem = {
  name: string
  path: string
  size: string
}

const DEFAULT_FILES: FileItem[] = [
  { name: '么么的汇报.pptx', path: 'C:\\crashdumps\\esplorer\\wechat\\multi\\exexe.30736.dmp', size: '878.8MB' },
  { name: '么么的汇报.pptx', path: 'C:\\crashdumps\\esplorer\\wechat\\multi\\exexe.30736.dmp', size: '878.8MB' },
  { name: '么么的汇报.pptx', path: 'C:\\crashdumps\\esplorer\\wechat\\multi\\exexe.30736.dmp', size: '878.8MB' },
  { name: '么么的汇报.pptx', path: 'C:\\crashdumps\\esplorer\\wechat\\multi\\exexe.30736.dmp', size: '878.8MB' },
  { name: '么么的汇报.pptx', path: 'C:\\crashdumps\\esplorer\\wechat\\multi\\exexe.30736.dmp', size: '878.8MB' },
  { name: '么么的汇报.pptx', path: 'C:\\crashdumps\\esplorer\\wechat\\multi\\exexe.30736.dmp', size: '878.8MB' },
]

function FileRow({ file }: { file: FileItem }) {
  return (
    <div className="flex items-center justify-between w-full shrink-0">
      <div className="flex flex-1 gap-[12px] items-center min-w-0">
        <FileIconSvg className="size-[16px] shrink-0" />
        <div className="flex flex-1 flex-col items-start justify-center max-w-[400px] min-w-0">
          <p
            className="text-[14px] leading-[24px] text-[var(--color-text-primary)] overflow-hidden text-ellipsis whitespace-nowrap w-full"
            style={{ fontFamily: "'HYQiHei:65S', 'PingFang SC', sans-serif" }}
          >
            {file.name}
          </p>
          <p
            className="text-[12px] leading-[16px] text-[#908ea8] overflow-hidden text-ellipsis whitespace-nowrap w-full"
            style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', sans-serif" }}
          >
            {file.path}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[96px] shrink-0">
        <p
          className="text-[12px] leading-[20px] text-[#908ea8] text-right w-[52px]"
          style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', sans-serif" }}
        >
          {file.size}
        </p>
      </div>
    </div>
  )
}

export function FileListCard({
  title = '发现40个文件可以分析清理',
  files = DEFAULT_FILES,
  onCancel,
  onConfirm,
}: {
  title?: string
  files?: FileItem[]
  onCancel?: () => void
  onConfirm?: () => void
}) {
  return (
    <div className="bg-[#f9f9fa] border-[0.5px] border-[rgba(0,0,0,0.12)] flex flex-col items-start overflow-hidden rounded-[12px] w-full">
      {/* 标题栏 */}
      <div className="border-b border-b-[#eee] flex items-center justify-between pl-[12px] pr-[16px] py-[16px] w-full shrink-0">
        <div className="flex flex-1 items-center justify-between min-w-0">
          <div className="flex gap-[8px] items-center justify-center shrink-0">
            <TitleIconSvg className="size-[24px] shrink-0" />
            <p
              className="text-[16px] leading-[26px] text-[var(--color-text-primary)] w-[252px]"
              style={{ fontFamily: "'HYQiHei:65S', 'PingFang SC', sans-serif" }}
            >
              {title}
            </p>
          </div>
          <button
            type="button"
            aria-label="收起"
            className="flex size-[24px] items-center justify-center overflow-hidden shrink-0"
          >
            <CollapseArrowSvg className="size-[8.54px] shrink-0" />
          </button>
        </div>
      </div>

      {/* 内容区 */}
      <div className="flex flex-col items-start justify-center p-[16px] w-full shrink-0">
        <div className="flex flex-col gap-[16px] items-start w-full">
          {files.map((file, i) => (
            <FileRow key={i} file={file} />
          ))}
        </div>
      </div>

      {/* 操作区 */}
      <div className="border-t border-t-[#eee] flex items-center justify-between p-[16px] w-full shrink-0">
        <div className="flex flex-1 items-center justify-between min-w-0">
          <button
            type="button"
            onClick={onCancel}
            className="bg-[rgba(0,0,0,0.08)] flex h-[32px] items-center justify-center min-w-[56px] px-[14px] py-[4px] rounded-[8px] shrink-0"
          >
            <span
              className="text-[14px] leading-[20px] text-[var(--color-text-primary)]"
              style={{ fontFamily: "'HYQiHei:65S', 'PingFang SC', sans-serif" }}
            >
              取消全选
            </span>
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="bg-[#335eff] flex h-[32px] items-center justify-center min-w-[56px] px-[14px] py-[4px] rounded-[8px] shrink-0"
          >
            <span
              className="text-[14px] leading-[20px] text-white"
              style={{ fontFamily: "'HYQiHei:65S', 'PingFang SC', sans-serif" }}
            >
              立即更新
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
