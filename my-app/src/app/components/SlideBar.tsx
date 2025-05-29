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
} from "lucide-react";
export default function SlideBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="flex items-center justify-between border border-gray-200 rounded-lg w-5/6 mt-6 cursor-pointer p-3 mx-auto">
        <div className="flex flex-col">
          <span className="text-xs">Khối</span>
          <select
            name=""
            id="course"
            defaultValue="K-12"
            className="appearance-none focus:outline-none text-[#2D286B] font-bold cursor-pointer"
          >
            <option>K-12</option>
            <option>K-11</option>
            <option>K-10</option>
            <option>K-09</option>
            <option>K-08</option>
          </select>
        </div>
        <div className="cursor-pointer">
          <button className="p-2">
            <ChevronsUpDown className="w-4 h-4 " />
          </button>
        </div>
      </div>
      <div className="flex border gap-2 border-gray-200 rounded-lg w-5/6 mx-auto mt-5 p-3 text-[#2D286B]">
        <Search className="w-6 h-6 min-w-5" />
        <input
          type="text"
          placeholder="Tìm Kiếm"
          className="focus:outline-none w-full placeholder:text-[#2D286B] text-sm"
        />
      </div>
      <div className="mt-6 px-4">
        <Link
          href="/"
          className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
        >
          <Home className="text-[#2D286B]" />
          <span className="text-[#2D286B] font-medium">Trang chủ</span>
        </Link>
      </div>

      <div>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center justify-between h-15 p-3 pt-5 hover:bg-[#F0EFFD] mx-4 rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-2 ">
            <BookOpen className="text-[#2D286B]" />
            <span className="text-[#2D286B] font-medium">Chấm thi</span>
          </div>
          <ChevronUp
            size={18}
            className={`${
              openMenu ? "rotate-180" : ""
            } transition-transform text-[#2D286B]`}
          />
        </div>

        {openMenu && (
          <div className="pl-12 pr-4 mt-1 flex flex-col gap-2">
            <Link
              href="/marking/layout"
              className="text-[#2D286B] py-2 hover:bg-[#F0EFFD] rounded-md"
            >
              Bố cục
            </Link>
            <Link
              href="/marking"
              className="flex items-center justify-between text-[#2D286B] hover:bg-[#F0EFFD] py-2 rounded-md"
            >
              Quét với AI
            </Link>
            <Link
              href="/exam/grading"
              className="text-[#2D286B] py-2 hover:bg-[#F0EFFD] rounded-md"
            >
              Chấm thi
            </Link>
          </div>
        )}
      </div>
      <div className="mt-6 px-4">
        <Link
          href="/"
          className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
        >
          <Settings className="text-[#2D286B]" />
          <span className="text-[#2D286B] font-medium">Cài đặt</span>
        </Link>
      </div>
      <div className="mt-6 px-4">
        <Link
          href="/"
          className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
        >
          <HelpCircle className="text-[#2D286B]" />
          <span className="text-[#2D286B] font-medium">Trợ giúp</span>
        </Link>
      </div>
    </aside>
  );
}
