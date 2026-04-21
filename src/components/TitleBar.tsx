export default function TitleBar() {
  return (
    <div
      className="flex items-center pl-[16px] border-b-[0.5px] border-solid border-[rgba(0,0,0,0.08)] shrink-0"
      style={{ width: 448, height: 40 }}
    >
      <div className="flex items-center gap-[8px] pl-[8px]">
        <div className="size-[14px] rounded-[49.5px] bg-[#fe5f57] border-[0.5px] border-solid border-[rgba(0,0,0,0.12)] shrink-0" />
        <div className="size-[14px] rounded-[49.5px] bg-[#febc2e] border-[0.5px] border-solid border-[rgba(0,0,0,0.12)] shrink-0" />
        <div className="size-[14px] rounded-[49.5px] bg-[#2bc841] border-[0.5px] border-solid border-[rgba(0,0,0,0.12)] shrink-0" />
      </div>
    </div>
  )
}
