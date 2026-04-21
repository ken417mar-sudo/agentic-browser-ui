import TitleBar from './TitleBar'
import WorkspaceToolbar from './WorkspaceToolbar'
import Sidebar from './Sidebar'
import TaskChatPanel from './TaskChatPanel'
import wallpaper from '../assets/figma/workspacepreview-wallpaper@1x.png'

export default function WorkspacePage() {
  return (
    <div
      className="flex items-center justify-center bg-[#ebeef5]"
      style={{ width: 1600, height: 900 }}
    >
      {/* Window shell */}
      <div
        className="relative bg-[#fafafa] overflow-hidden"
        style={{
          width: 1592,
          height: 892,
          borderRadius: 12,
          border: '0.5px solid rgba(0,0,0,0.12)',
        }}
      >
        {/* Top chrome row: TitleBar (448) + WorkspaceToolbar (1144) */}
        <div className="flex shrink-0" style={{ height: 40 }}>
          <TitleBar />
          <WorkspaceToolbar />
        </div>

        {/* Content row: Sidebar (48) + TaskChatPanel (400) + WorkspacePreview (1144) */}
        <div className="flex" style={{ height: 852 }}>
          <Sidebar />
          <TaskChatPanel />
          {/* WorkspacePreview — wallpaper */}
          <div
            className="relative overflow-hidden shrink-0"
            style={{ width: 1144, height: 852 }}
          >
            <img
              src={wallpaper}
              alt=""
              className="absolute object-cover opacity-60 pointer-events-none"
              style={{ inset: '-318px -913px -550px -679px', width: 2736, height: 1720 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
