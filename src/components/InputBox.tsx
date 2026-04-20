import sendIcon from '../assets/figma/inputbox-send@1x.svg'
import icIcon from '../assets/figma/inputbox-ic@1x.svg'
import modelToggleIcon from '../assets/figma/inputbox-model-toggle@1x.svg'
import voiceIcon from '../assets/figma/inputbox-voice@1x.svg'

type InputBoxState = 'default' | 'focus' | 'disabled' | 'error'

interface InputBoxProps {
  state?: InputBoxState
  size?: 'default' | 'compact'
  placeholder?: string
  modelLabel?: string
  className?: string
  onSend?: (value: string) => void
}

// Geometry is always stable: 1.5px transparent border reserved in all states.
// Visual ring expressed via inset box-shadow — no layout shift between states.
const ringClass: Record<InputBoxState, string> = {
  default:  'border-[1.5px] border-transparent shadow-[0px_4px_32px_0px_rgba(10,88,245,0.06),inset_0_0_0_0.5px_rgba(0,105,193,0.26)]',
  focus:    'border-[1.5px] border-[var(--color-border-focus)] shadow-[0px_4px_32px_0px_rgba(10,88,245,0.06)]',
  disabled: 'border-[1.5px] border-transparent shadow-[0px_4px_32px_0px_rgba(10,88,245,0.06),inset_0_0_0_0.5px_rgba(0,105,193,0.26)]',
  error:    'border-[1.5px] border-transparent shadow-[0px_4px_32px_0px_rgba(10,88,245,0.06),inset_0_0_0_1px_var(--color-border-error)]',
}

const bgClass: Record<InputBoxState, string> = {
  default:  'bg-[var(--color-surface-base)]',
  focus:    'bg-[var(--color-surface-base)]',
  disabled: 'bg-[var(--color-surface-disabled)]',
  error:    'bg-[var(--color-surface-base)]',
}

export function InputBox({
  state = 'default',
  size = 'default',
  placeholder = '输入要找内容或问题',
  modelLabel = '默认模型',
  className = '',
  onSend,
}: InputBoxProps) {
  const isDisabled = state === 'disabled'
  const widthClass = size === 'compact' ? 'w-[368px]' : 'w-[720px]'

  return (
    <div
      className={[
        bgClass[state],
        ringClass[state],
        widthClass,
        'border-solid flex flex-col gap-[12px] items-start justify-center pb-[12px] pt-[16px] px-[12px] rounded-[var(--radius-24)]',
        isDisabled ? 'opacity-55' : '',
        className,
      ].join(' ')}
    >
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
        <div className="flex gap-[10px] h-[32px] items-center">
          <div className="relative rounded-[var(--radius-8)] size-[32px] flex items-center justify-center">
            <img src={icIcon} alt="" className="size-[20px]" />
          </div>
          <div className="bg-[var(--color-surface-overlay-white)] flex gap-[6px] h-[32px] items-center px-[8px] rounded-[var(--radius-8)]">
            <p
              className="text-[14px] leading-normal text-[var(--color-text-primary)] whitespace-nowrap"
              style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
            >
              {modelLabel}
            </p>
            <img src={modelToggleIcon} alt="" />
          </div>
        </div>

        <div className="flex gap-[16px] h-[32px] items-center">
          <div className="flex items-center justify-center rounded-[var(--radius-8)] size-[32px]">
            <img src={voiceIcon} alt="" className="size-[24px]" />
          </div>
          <button
            onClick={() => onSend?.('')}
            disabled={isDisabled}
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
