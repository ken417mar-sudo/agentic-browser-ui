import sendIcon from '../assets/figma/inputbox-send@1x.svg'

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3.33325 10L16.6666 10" stroke="currentColor" strokeWidth="1.25"/>
      <path d="M10 3.33334V16.6667" stroke="currentColor" strokeWidth="1.25"/>
    </svg>
  )
}

function ModelToggleIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9 9.5L6 11.5L3 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function VoiceIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14.4159 7.50576C14.4159 6.17119 13.3341 5.08929 11.9995 5.08929C10.6649 5.08929 9.58301 6.17119 9.58301 7.50576V11.3031C9.58301 12.6377 10.6649 13.7195 11.9995 13.7195C13.3341 13.7195 14.4159 12.6377 14.4159 11.3031V7.50576Z" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.1792 10.3124C17.534 10.3125 17.8216 10.6001 17.8218 10.955C17.8218 12.4988 17.2084 13.9795 16.1167 15.0712C15.1773 16.0104 13.9499 16.5941 12.6421 16.7391V18.2059C12.6421 18.561 12.3545 18.8485 11.9995 18.8485C11.6445 18.8485 11.3569 18.561 11.3569 18.2059V16.7391C10.0504 16.5935 8.82385 16.0096 7.88525 15.0712C6.79385 13.9796 6.18018 12.4986 6.18018 10.955C6.18039 10.6002 6.46802 10.3126 6.82275 10.3124C7.17766 10.3124 7.46512 10.6001 7.46533 10.955C7.46533 12.1576 7.94415 13.3115 8.79443 14.162C9.64475 15.0122 10.7981 15.4899 12.0005 15.4901C13.2032 15.4901 14.357 15.0124 15.2075 14.162C16.0581 13.3115 16.5366 12.1578 16.5366 10.955C16.5368 10.6002 16.8245 10.3126 17.1792 10.3124Z" fill="currentColor"/>
    </svg>
  )
}

type InputBoxState = 'default' | 'focus' | 'disabled' | 'error'

interface InputBoxProps {
  state?: InputBoxState
  placeholder?: string
  modelLabel?: string
  onSend?: (value: string) => void
}

const borderClass: Record<InputBoxState, string> = {
  default:  'border-[0.5px] border-[rgba(0,105,193,0.26)]',
  focus:    'border-[1.5px] border-[var(--color-border-focus)]',
  disabled: 'border-[0.5px] border-[rgba(0,105,193,0.26)]',
  error:    'border border-[var(--color-border-error)]',
}

const bgClass: Record<InputBoxState, string> = {
  default:  'bg-[var(--color-surface-base)]',
  focus:    'bg-[var(--color-surface-base)]',
  disabled: 'bg-[var(--color-surface-disabled)]',
  error:    'bg-[var(--color-surface-base)]',
}

export function InputBox({
  state = 'default',
  placeholder = '输入要找内容或问题',
  modelLabel = '默认模型',
  onSend,
}: InputBoxProps) {
  const isDisabled = state === 'disabled'

  return (
    <div
      className={[
        bgClass[state],
        borderClass[state],
        'border-solid flex flex-col gap-[12px] items-start justify-center w-[720px] pb-[12px] pt-[16px] px-[12px] rounded-[var(--radius-24)] shadow-[0px_4px_32px_0px_rgba(10,88,245,0.06)]',
        isDisabled ? 'opacity-55' : '',
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
            <PlusIcon className="size-[20px] text-[var(--color-text-primary)]" />
          </div>
          <div className="bg-[var(--color-surface-overlay-white)] flex gap-[6px] h-[32px] items-center px-[8px] rounded-[var(--radius-8)]">
            <p
              className="text-[14px] leading-normal text-[var(--color-text-primary)] whitespace-nowrap"
              style={{ fontFamily: "'HYQiHei:60S', sans-serif" }}
            >
              {modelLabel}
            </p>
            <ModelToggleIcon className="text-[var(--color-text-tertiary)]" />
          </div>
        </div>

        <div className="flex gap-[16px] h-[32px] items-center">
          <div className="flex items-center justify-center rounded-[var(--radius-8)] size-[32px]">
            <VoiceIcon className="size-[24px] text-[var(--color-text-primary)]" />
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
