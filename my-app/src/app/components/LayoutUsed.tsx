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
function LayoutUsed() {
  return (
    <div className="flex flex-col gap-3 border rounded-lg border-gray-200 w-1/4 h-60 p-4">
      <div className="flex justify-between items-center mt-auto">
        <div className="flex text-[#2D286B] gap-3">
          <Home className="text-[#2D286B]" />
          <h1 className="text-[#2D286B]">Trắc nghiệm</h1>
        </div>
        <Star className="text-[#2D286B]" />
      </div>
      <div className="text-xs text-[#2D286B]">
        Chấm thi với sự hỗ trợ của AI
      </div>
    </div>
  );
}

export default LayoutUsed;
