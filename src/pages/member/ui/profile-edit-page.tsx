"use client";

import { ChangeEvent, useRef, useState } from "react";

export const ProfileEditPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="flex w-full items-center justify-center h-full">
      <div className="flex flex-col gap-2">
        <label className="text-gray-600 font-medium">프로필 이미지</label>
        <input
          type="file"
          accept=".png, .jpg"
          ref={fileInputRef}
          className="hidden"
          onChange={handleSelectImage}
        />

        <div className="flex gap-3 items-end">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="border border-primary border-dotted bg-white w-30 h-30 rounded-md"
          >
            {/* TODO: icon svg 교체 */}
            <span className="w-6 h-6 text-primary">+</span>
          </button>
          <span className="text-gray-500 font-medium">
            5MB 미만의 .png, .jpg 파일
          </span>
        </div>
      </div>
    </div>
  );
};
