"use client";

export default function about() {
  return (
    <div className="space-y-12 pt-6 bg-transparent rounded-lg pb-5">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4 col-start-2">
          <img src="/assets/11.png" alt="About us banner" className="w-full h-auto object-cover" />
        </div>

        <div className="italic col-start-2 col-end-4 text-center title font-bold">
          About us
        </div>

        <div className="col-span-2 col-end-6 text-gray-700 paragraph">
            <img
    src="/assets/5.png"
    alt="Stickerland"
    className="w-50 h-auto"
  /> is the adorable land where each stickers live happily and most importantly, ADORABLY!

        </div>
      </div>

</div>
  );
}
