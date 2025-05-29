"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronsUpDown,
  ChevronDown,
  ChevronUp,
  Search,
  Home,
  Settings,
  HelpCircle,
  Layout,
  Cpu,
  BookOpen,
  Plus,
} from "lucide-react";
export default function Marking() {
  return (
    <div className="flex p-10 w-screen justify-between">
      <div className="w-1/3 flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-[#2D286B]">Chấm thi</h1>
        <h2 className="text-[#2D286B]">
          Chấm thi với sự hỗ trợ của AI. Vui lòng kiểm tra xác minh thông tin
          trước khi cập nhật kết quả cuối cùng.
        </h2>
      </div>
      <button className="flex items-center rounded-lg border border-gray-200 h-10 w-40">
        <div className="flex items-center justify-center w-10 h-full border-r border-gray-200 text-[#2D286B]">
          <Plus size={20} />
        </div>
        <div className="flex-1 text-center text-[#2D286B]">Thêm mới</div>
      </button>
    </div>
  );
}
