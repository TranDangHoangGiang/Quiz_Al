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
  Star,
} from "lucide-react";
function MyLayout() {
  return (
    <div className="flex flex-col gap-3 border rounded-lg border-gray-200 w-1/4 h-80 p-4">
      <div className="flex justify-between items-center mt-auto">
        <div className="flex text-[#2D286B] gap-3">
          <Home className="text-[#2D286B]" />
          <h1 className="text-[#2D286B]">Trắc nghiệm</h1>
        </div>
      </div>
      <div className="text-xs text-[#2D286B]">
        Chấm thi với sự hỗ trợ của AI
      </div>
      <button className="text-white bg-[#5B51D5] rounded-lg h-10">
        Sử dụng bố cục
      </button>
    </div>
  );
}

export default MyLayout;
