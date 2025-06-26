export default function Page() {
  return (
    <div className="space-y-4 p-4">
      <div className="bg-red-500 p-2 text-white">Tailwind 기본 색상</div>
      <div className="bg-alert-400 p-2 text-black">alert-400 커스텀 색상</div>
      <div className="bg-[color:theme('colors.alert.400')] p-2 text-white">
        alert-400 직접 theme에서 불러오기
      </div>
    </div>
  );
}
