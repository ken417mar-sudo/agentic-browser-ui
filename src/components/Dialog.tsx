import closeDefaultIcon from '../assets/figma/dialog-close-default@1x.svg'
import closeHoverIcon from '../assets/figma/dialog-close-hover@1x.svg'
import closeCircleIcon from '../assets/figma/dialog-close-circle@1x.svg'
import { useState } from 'react'

// --- Close icon ---

interface CloseIconProps {
  variant?: 'default' | 'hover' | 'none' | 'circle'
  onClick?: () => void
}

function CloseIcon({ variant = 'default', onClick }: CloseIconProps) {
  const [hovered, setHovered] = useState(false)

  if (variant === 'none') return <div className="size-[16px]" />

  if (variant === 'circle') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center"
        aria-label="关闭"
      >
        <img src={closeCircleIcon} alt="" className="size-[32px]" />
      </button>
    )
  }

  // variant='hover' forces hover icon; variant='default' uses pointer state
  const showHover = variant === 'hover' || hovered

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center size-[32px]"
      aria-label="关闭"
    >
      <img
        src={showHover ? closeHoverIcon : closeDefaultIcon}
        alt=""
        className="size-[16px]"
      />
    </button>
  )
}

// --- Button ---

type ButtonType = 'solid' | 'outline' | 'text'

interface DialogButtonProps {
  type?: ButtonType
  label?: string
  onClick?: () => void
}

export function DialogButton({ type = 'solid', label = '确认', onClick }: DialogButtonProps) {
  const [hovered, setHovered] = useState(false)

  const base = 'flex items-center justify-center w-full cursor-pointer transition-colors'

  const styles: Record<ButtonType, string> = {
    solid: hovered
      ? 'h-[44px] rounded-[12px] bg-[#333]'
      : 'h-[44px] rounded-[12px] bg-[#1a1a1a]',
    outline: hovered
      ? 'h-[44px] rounded-[12px] border border-[rgba(0,0,0,0.12)] bg-[rgba(0,0,0,0.04)]'
      : 'h-[44px] rounded-[12px] border border-[rgba(0,0,0,0.12)]',
    text: 'h-[24px] rounded-[8px]',
  }

  const textStyles: Record<ButtonType, string> = {
    solid: 'text-white text-[14px] font-["HYQiHei:60S",sans-serif]',
    outline: 'text-[var(--color-text-primary)] text-[14px] font-["HYQiHei:60S",sans-serif]',
    text: 'text-[var(--color-text-tertiary)] text-[14px] font-["HYQiHei:60S",sans-serif]',
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${base} ${styles[type]}`}
    >
      <span className={textStyles[type]}>{label}</span>
    </button>
  )
}

// --- Button group ---

type ButtonLayout = 'single' | 'vertical' | 'horizontal'

interface ButtonGroupProps {
  layout?: ButtonLayout
  primaryLabel?: string
  secondaryLabel?: string
  onPrimary?: () => void
  onSecondary?: () => void
}

function ButtonGroup({
  layout = 'single',
  primaryLabel = '确认',
  secondaryLabel = '取消',
  onPrimary,
  onSecondary,
}: ButtonGroupProps) {
  if (layout === 'single') {
    return (
      <div className="w-full">
        <DialogButton type="solid" label={primaryLabel} onClick={onPrimary} />
      </div>
    )
  }

  if (layout === 'vertical') {
    return (
      <div className="flex flex-col gap-[16px] w-full">
        <DialogButton type="solid" label={primaryLabel} onClick={onPrimary} />
        <DialogButton type="text" label={secondaryLabel} onClick={onSecondary} />
      </div>
    )
  }

  // horizontal
  return (
    <div className="flex gap-[8px] w-full">
      <DialogButton type="outline" label={secondaryLabel} onClick={onSecondary} />
      <DialogButton type="solid" label={primaryLabel} onClick={onPrimary} />
    </div>
  )
}

// --- Dialog content ---

type ContentVariant = 'text' | 'title-left' | 'image'

export type CloseIconVariant = 'default' | 'hover' | 'none' | 'circle'

interface DialogContentProps {
  variant?: ContentVariant
  title?: string
  description?: string
  imageSrc?: string
  onClose?: () => void
  closeVariant?: CloseIconVariant
}

function DialogContent({
  variant = 'text',
  title = '提示文案',
  description = '为了保障您的信息安全，请登录后使用',
  imageSrc,
  onClose,
  closeVariant = 'default',
}: DialogContentProps) {
  if (variant === 'image') {
    return (
      <div className="flex flex-col gap-[8px] w-full">
        <div className="relative w-full aspect-[288/162] rounded-[16px] overflow-hidden bg-[#d9d9d9]">
          {imageSrc && <img src={imageSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />}
          {closeVariant !== 'none' && (
            <div className="absolute top-[8px] right-[8px]">
              <CloseIcon variant="circle" onClick={onClose} />
            </div>
          )}
        </div>
        <div className="p-[8px]">
          <p className="text-[16px] leading-[24px] text-[var(--color-text-primary)] font-['HYQiHei:60S',sans-serif]">
            {description}
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'title-left') {
    return (
      <div className="flex flex-col gap-[8px] w-full">
        <div className="flex items-center justify-between">
          <p className="text-[20px] leading-[30px] text-[#1a1a1a] font-['HYQiHei:75W',sans-serif] p-[8px]">
            {title}
          </p>
          <CloseIcon variant={closeVariant} onClick={onClose} />
        </div>
        <div className="p-[8px]">
          <p className="text-[16px] leading-[24px] text-[var(--color-text-secondary)] font-['HYQiHei:60S',sans-serif]">
            {description}
          </p>
        </div>
      </div>
    )
  }

  // text (default)
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div className="flex items-start w-full">
        <div className="size-[32px] shrink-0" />
        <div className="flex-1 flex items-center justify-center p-[8px]">
          <p className="text-[20px] leading-[30px] text-[#1a1a1a] font-['HYQiHei:75W',sans-serif] text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
        </div>
        <div className="size-[32px] shrink-0 flex items-center justify-center">
          <CloseIcon variant={closeVariant} onClick={onClose} />
        </div>
      </div>
      <div className="p-[8px]">
        <p className="text-[16px] leading-[24px] text-[var(--color-text-secondary)] font-['HYQiHei:60S',sans-serif] text-center">
          {description}
        </p>
      </div>
    </div>
  )
}

// --- Dialog ---

export type DialogLayout = 'single' | 'vertical' | 'horizontal'

interface DialogProps {
  layout?: DialogLayout
  contentVariant?: ContentVariant
  closeVariant?: CloseIconVariant
  title?: string
  description?: string
  imageSrc?: string
  primaryLabel?: string
  secondaryLabel?: string
  onClose?: () => void
  onPrimary?: () => void
  onSecondary?: () => void
}

export function Dialog({
  layout = 'single',
  contentVariant = 'text',
  closeVariant,
  title = '提示文案',
  description = '为了保障您的信息安全，请登录后使用',
  imageSrc,
  primaryLabel = '确认',
  secondaryLabel = '取消',
  onClose,
  onPrimary,
  onSecondary,
}: DialogProps) {
  const resolvedCloseVariant: CloseIconVariant = closeVariant ?? (onClose ? 'default' : 'none')
  const outerGap = layout === 'horizontal' ? 'gap-[8px]' : 'gap-[16px]'
  const contentWrapClass = contentVariant === 'image' ? '' : 'p-[8px]'
  return (
    <div className={`bg-white border-[0.5px] border-[rgba(0,0,0,0.12)] rounded-[24px] shadow-[0px_10px_20px_0px_rgba(100,106,112,0.15)] w-[320px] flex flex-col ${outerGap} p-[8px]`}>
      <div className={contentWrapClass}>
        <DialogContent
          variant={contentVariant}
          title={title}
          description={description}
          imageSrc={imageSrc}
          onClose={onClose}
          closeVariant={resolvedCloseVariant}
        />
      </div>
      <div className="p-[8px]">
        <ButtonGroup
          layout={layout}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
          onPrimary={onPrimary}
          onSecondary={onSecondary}
        />
      </div>
    </div>
  )
}
