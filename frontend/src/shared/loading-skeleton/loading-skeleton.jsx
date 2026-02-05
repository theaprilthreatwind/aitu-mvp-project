export function LoadingSkeleton() {
  return (
    <div className="w-full gap-x-2 flex justify-center items-center h-screen text-2xl">
      <div className="w-5 bg-[#91b6d9] animate-pulse h-5 rounded-full animate-bounce"></div>
      <div className="w-5 animate-pulse h-5 bg-[#698fb8] rounded-full animate-bounce"></div>
      <div className="w-5 h-5 animate-pulse bg-[#5674cc] rounded-full animate-bounce"></div>
    </div>
  );
}
  