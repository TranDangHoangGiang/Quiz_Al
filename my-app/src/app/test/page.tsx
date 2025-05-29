"use client";
import React, { useState } from "react";
import {
  Plus,
  Settings,
  Trash2,
  Edit3,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  MoreHorizontal,
} from "lucide-react";

// Mock CreateModal component
const CreateModal = ({ showModalCreate, setShowModalCreate }) => {
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("multiple-choice");

  const handleSave = () => {
    if (questionText.trim()) {
      // Logic to save question would go here
      console.log("Saving question:", { questionText, questionType });
      setShowModalCreate(false);
      setQuestionText("");
    }
  };

  if (!showModalCreate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h3 className="text-lg font-medium text-[#2D286B] mb-4">
          Thêm câu hỏi mới
        </h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#2D286B] mb-2">
            Loại câu hỏi
          </label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="multiple-choice">Trắc nghiệm</option>
            <option value="essay">Tự luận</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#2D286B] mb-2">
            Nội dung câu hỏi
          </label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24"
            placeholder="Nhập nội dung câu hỏi..."
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => setShowModalCreate(false)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
          >
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#2D286B] text-white rounded-lg"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Question() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      label: "A",
      content:
        "Lorem ipsum dolor sit amet consectetur. Fermentum lacus pellentesque molestie integer nulla. Ultricies dolor est nunc et ullamcorper platea dolor sunt quis. Orci lectus tempus nibh suspendisse porta curs id ante. Dolor quis enim nulla ex vulputate aliquam. Magna habitasse amet auctor nunc libero.",
      type: "multiple-choice",
    },
    {
      id: 2,
      label: "B",
      content:
        "Lorem ipsum dolor sit amet consectetur. Fermentum lacus pellentesque molestie integer nulla. Ultricies dolor est nunc et ullamcorper platea dolor sunt quis. Orci lectus tempus nibh suspendisse porta curs id ante. Dolor quis enim nulla ex vulputate aliquam. Magna habitasse amet auctor nunc libero.",
      type: "multiple-choice",
    },
  ]);
  const [selectedQuestions, setSelectedQuestions] = useState(new Set());

  const handleDeleteQuestion = (questionId) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
    setSelectedQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.delete(questionId);
      return newSet;
    });
  };

  const handleToggleSelect = (questionId) => {
    setSelectedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleDeleteSelected = () => {
    setQuestions(questions.filter((q) => !selectedQuestions.has(q.id)));
    setSelectedQuestions(new Set());
  };

  const TextEditor = ({ placeholder = "Nhập nội dung..." }) => (
    <div className="border border-gray-300 rounded-lg">
      <div className="flex items-center gap-2 p-2 border-b border-gray-300">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Bold size={16} className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Italic size={16} className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Underline size={16} className="text-gray-600" />
        </button>
        <div className="w-px h-4 bg-gray-300"></div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <AlignLeft size={16} className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <AlignCenter size={16} className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <AlignRight size={16} className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <List size={16} className="text-gray-600" />
        </button>
      </div>
      <textarea
        className="w-full p-3 resize-none outline-none"
        rows="4"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <div className="flex p-6 w-full justify-between border-b border-gray-300">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-[#2D286B]">Tạo bài thi</h1>
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

      <div className="flex flex-1">
        <div className="border-r border-gray-200">
          <div className="w-52">
            <div className="p-5">
              <a
                href="/marking/layout"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" size={20} />
                <span className="text-[#2D286B] font-medium">Bố cục</span>
              </a>
            </div>
            <div className="px-5 pb-5">
              <a
                href="/"
                className="flex items-center p-3 gap-2 rounded-lg bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" size={20} />
                <span className="text-[#2D286B] font-medium">Câu hỏi</span>
              </a>
            </div>
            <div className="px-5 pb-5">
              <a
                href="/"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" size={20} />
                <span className="text-[#2D286B] font-medium">Thiết lập</span>
              </a>
            </div>
            <div className="px-5 pb-5">
              <a
                href="/"
                className="flex items-center p-3 gap-2 rounded-lg hover:bg-[#F0EFFD]"
              >
                <Settings className="text-[#2D286B]" size={20} />
                <span className="text-[#2D286B] font-medium">Thang điểm</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#2D286B] font-medium text-xl">
              Danh sách câu hỏi
            </h1>
            <div className="flex gap-3">
              <button className="flex items-center rounded-lg border border-gray-200 h-10 w-44">
                <div className="flex items-center justify-center w-10 h-full border-r border-gray-200 text-[#2D286B]">
                  <Plus size={20} />
                </div>
                <div className="flex-1 text-center text-[#2D286B]">
                  Sắp xếp câu hỏi
                </div>
              </button>
              <button
                className="flex items-center rounded-lg border border-gray-200 h-10 w-40 bg-[#2D286B]"
                onClick={() => setShowModalCreate(true)}
              >
                <div className="flex items-center justify-center w-10 h-full border-r border-gray-200 text-white">
                  <Plus size={20} />
                </div>
                <div className="flex-1 text-center text-white">
                  Thêm câu hỏi
                </div>
              </button>
            </div>
          </div>

          {selectedQuestions.size > 0 && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg flex justify-between items-center">
              <span className="text-sm text-blue-700">
                Đã chọn {selectedQuestions.size} câu hỏi
              </span>
              <button
                onClick={handleDeleteSelected}
                className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                <Trash2 size={14} />
                Xóa đã chọn
              </button>
            </div>
          )}

          <div className="space-y-6">
            {questions.map((question) => (
              <div
                key={question.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={selectedQuestions.has(question.id)}
                    onChange={() => handleToggleSelect(question.id)}
                    className="mt-1"
                  />
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2D286B] text-white rounded-full flex items-center justify-center font-medium">
                    {question.label}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">{question.content}</p>
                    <TextEditor />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-[#2D286B] mb-2">
                Giải thích
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Chứng kỳ vọng để có cùng AI vui lòng kiểm kê các thông minh
                thông tin sẽ có cập nhật khá là này của đây
              </p>
              <TextEditor placeholder="Nhập giải thích..." />
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Hủy
              </button>
              <button className="px-6 py-2 bg-[#2D286B] text-white rounded-lg hover:bg-[#252157]">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
    </div>
  );
}
