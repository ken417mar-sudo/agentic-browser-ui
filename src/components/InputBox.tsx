import icIcon from '../assets/figma/inputbox-ic@1x.svg'
import modelToggleIcon from '../assets/figma/inputbox-model-toggle@1x.svg'
import voiceIcon from '../assets/figma/inputbox-voice@1x.svg'
import sendIcon from '../assets/figma/inputbox-send@1x.svg'

interface InputBoxProps {
  placeholder?: string
  modelLabel?: string
  onSend?: (value: string) => void
}

export function InputBox({
  placeholder = '输入要找内容或问题',
  modelLabel = '默认模型',
  onSend,
}: InputBoxProps) {
  return (
    <div className="bg-[var(--color-surface-base)] border-[0.5px] border-[rgba(0,105,193,0.26)] border-solid flex flex-col gap-[12px] items-start justify-center w-[720px] pb-[12px] pt-[16px] px-[12px] rounded-[var(--radius-24)] shadow-[0px_4px_32px_0px_rgba(10,88,245,0.06)]">
      {/* input area */}
      <div className="flex h-[40px] items-start px-[8px] w-full">
        <div className="flex flex-1 items-center">
          <p
            className="text-[16px] leading-[24px] text-[rgba(0,0,0,0.3)] whitespace-nowrap"
            style={{ fontFamily: "'HYQiHei:55S', sans-serif" }}
          >
            {placeholder}
          </p>
        </div>
      </div>

      {/* bottom toolbar */}
      <div className="flex h-[32px] items-center justify-between w-full">
        {/* left: function icons */}
        <div className="flex gap-[10px] h-[32px] items-center">
          {/* ic_ hotzone */}
          <div className="relative rounded-[var(--radius-8)] size-[32px] flex items-center justify-center">
            <img src={icIcon} alt="" className="size-[20px]" />
          </div>

          {/* model toggle switch */}
          <div className="bg-[var(--color-surface-overlay-white)] flex gap-[6px] h-[32px] items-center px-[8px] rounded-[var(--radius-8)]">
            <p
              className="text-[14px] leading-normal text-[var(--color-text-primary)] whitespace-nowrap"
              style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
            >
              {modelLabel}
            </p>
            <img src={modelToggleIcon} alt="" className="h-[20px] w-[12px]" />
          </div>
        </div>

        {/* right: voice + send */}
        <div className="flex gap-[16px] h-[32px] items-center">
          {/* voice button */}
          <div className="flex items-center justify-center rounded-[var(--radius-8)] size-[32px]">
            <img src={voiceIcon} alt="语音" className="size-[24px]" />
          </div>

          {/* send button */}
          <button
            onClick={() => onSend?.('')}
            className="flex items-center justify-center size-[32px]"
            aria-label="发送"
          >
            <div className="bg-[var(--color-surface-button-secondary)] flex items-center justify-center p-[3.5px] rounded-[var(--radius-99)] size-[32px]">
              <div className="flex items-center justify-center size-[21px]">
                <img src={sendIcon} alt="" className="w-[10px] h-[11px]" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
