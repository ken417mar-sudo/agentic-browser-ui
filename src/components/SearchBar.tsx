import { useState, useRef } from 'react'
import SearchIconSvg from '../assets/figma/nav-search-icon@1x.svg?react'
import ClearIconSvg from '../assets/figma/nav-clear-icon@1x.svg?react'

export interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onClear?: () => void
  className?: string
}

export function SearchBar({
  placeholder = '搜索',
  value: controlledValue,
  onChange,
  onClear,
  className = '',
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e.target.value)
  }

  function handleClear() {
    if (!isControlled) setInternalValue('')
    onChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div
      className={[
        'flex items-center gap-[8px] h-[32px] px-[8px] rounded-[12px]',
        'border-[1.5px] border-[rgba(51,51,51,0.12)]',
        'bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.06)]',
        'focus-within:border-[rgba(51,51,51,0.9)]',
        className,
      ].join(' ')}
    >
      <SearchIconSvg className="size-[18px] shrink-0 text-[rgba(0,0,0,0.4)]" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={[
          'flex-1 min-w-0 bg-transparent outline-none',
          'text-[14px] leading-[22px] text-[#1f2329]',
          'placeholder:text-[rgba(0,0,0,0.3)]',
        ].join(' ')}
        style={{
          fontFamily: "'HYQiHei:60S', 'PingFang SC', sans-serif",
          fontFeatureSettings: "'ss01' 1, 'cv01' 1, 'cv11' 1",
        }}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="清除搜索"
          className="flex items-center justify-center size-[18px] shrink-0 text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]"
        >
          <ClearIconSvg className="size-[18px]" />
        </button>
      )}
    </div>
  )
}
