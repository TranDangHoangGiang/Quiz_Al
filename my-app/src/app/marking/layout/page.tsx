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
import MyLayout from "@/app/components/MyLayout";
import LayoutUsed from "@/app/components/LayoutUsed";
export default function Marking() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex p-6 w-full justify-between border-b border-gray-300">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-[#2D286B]">Tạo bài thi</h1>
          <h2 className="text-[#2D286B] w-110">
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
      <div className="flex">
        <div className="border-r border-gray-200 h-screen">
          <div>
            <div className="p-5 w-50">
              <Link
                href="/marking/layout"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" />
                <span className="text-[#2D286B] font-medium">Bố cục</span>
              </Link>
            </div>
            <div className="p-5 w-50 -mt-10">
              <Link
                href="/marking/question"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" />
                <span className="text-[#2D286B] font-medium">Câu hỏi</span>
              </Link>
            </div>
            <div className="p-5 w-50 -mt-10">
              <Link
                href="/"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" />
                <span className="text-[#2D286B] font-medium">Thiết lập</span>
              </Link>
            </div>
            <div className="p-5 w-50 -mt-10">
              <Link
                href="/"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" />
                <span className="text-[#2D286B] font-medium">Thang điểm</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#2D286B] font-medium text-xl">
              Bố cục bài thi
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[#2D286B] font-medium">
              Bố cục đã sử dụng gần đây
            </h1>
            <div className="flex gap-15 justify-center">
              <LayoutUsed />
              <LayoutUsed />
              <LayoutUsed />
            </div>
            <h1 className="text-[#2D286B] font-medium">Bố cục của tôi</h1>
            <div className="flex gap-15 justify-center">
              <MyLayout />
              <MyLayout />
              <MyLayout />
            </div>
            <div className="flex gap-15 justify-center">
              <MyLayout />
              <MyLayout />
              <MyLayout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
