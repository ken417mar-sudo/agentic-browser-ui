import desktopIcon from '../assets/figma/workspacetoolbar-desktop@1x.svg'
import mobileIcon from '../assets/figma/workspacetoolbar-mobile@1x.svg'
import customIcon from '../assets/figma/workspacetoolbar-custom@1x.svg'
import bookmarkInnerIcon from '../assets/figma/workspacetoolbar-bookmark-inner@1x.svg'
import moreIcon from '../assets/figma/workspacetoolbar-more@1x.svg'
import dividerIcon from '../assets/figma/workspacetoolbar-divider@1x.svg'

export default function WorkspaceToolbar() {
  return (
    <div
      className="flex items-center justify-between px-[8px] border-b-[0.5px] border-l-[0.5px] border-solid border-[rgba(0,0,0,0.08)] shrink-0"
      style={{ width: 1144, height: 40 }}
    >
      {/* View switcher */}
      <div className="flex items-center gap-[8px]">
        <div className="flex items-center justify-center size-[24px] rounded-[4px]">
          <img src={desktopIcon} alt="桌面" className="size-[24px]" />
        </div>
        <div className="flex items-center justify-center size-[24px]">
          <img src={mobileIcon} alt="手机" className="size-[24px]" />
        </div>
        <div className="flex items-center justify-center size-[24px]">
          <img src={customIcon} alt="自定义" className="size-[24px]" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-[12px]">
        {/* Divider: 2×24 canvas, visible stroke 8px centered, #CCCCCC */}
        <img src={dividerIcon} alt="" className="w-[2px] h-[24px]" />
        {/* Bookmark: action wrapper h-[24px] px-[4px], inner icon 16×16 */}
        <div className="flex items-center gap-[4px] h-[24px] px-[4px]">
          <img src={bookmarkInnerIcon} alt="书签" className="size-[16px]" />
        </div>
        {/* More */}
        <img src={moreIcon} alt="更多" className="size-[24px]" />
      </div>
    </div>
  )
}
