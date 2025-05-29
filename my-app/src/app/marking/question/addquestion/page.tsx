"use client";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import {
  Bold,
  Italic,
  Underline,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Trash2,
  Plus,
  Settings,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Answer {
  id: number;
  type: string;
  title: string;
  content: string;
}

interface ToolbarButtonProps {
  icon: LucideIcon;
  active?: boolean;
}

const SurveyInterface = () => {
  const [answers, setAnswers] = useState<Answer[]>([
    {
      id: 1,
      type: "essay",
      title:
        "Lorem ipsum dolor sit amet consectetur. Fermentum lacus pellentesque molestie integer morbi. Ultrices pulvinar viverra porttitor cras nunc at interdum quam ut. Orci iaculis tempus risus suspendisse purus cursus justo. Dolor quis nulla a eget ultrices aliquam. Magna habitasse amet nunc nunc lectus.",
      content: "",
    },
  ]);

  const [showIntro, setShowIntro] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState("Deanna Curtis");
  const [pointValue, setPointValue] = useState(1);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [questionContent, setQuestionContent] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [label, setLabel] = useState<string>("");

  const handleSubmit = async () => {
    toast.success("Đang gửi dữ liệu...");

    const answerContents = answers.map((answer) => answer.content);

    const formData = {
      question: questionContent,
      answers: answerContents,
      pointValue: pointValue,
    };
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          questionContent,
          answerContents,
          pointValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("=== RESPONSE SUCCESS ===");
      console.log("Response data:", responseData);

      toast.success("Gửi dữ liệu thành công!");
    } catch (error) {
      console.error("=== FETCH ERROR ===");
      console.error("Error details:", error);
      toast.error("Có lỗi xảy ra khi gửi dữ liệu!");
    }
  };

  const nextIdRef = useRef(2);

  const addAnswer = (type: string) => {
    const newAnswer: Answer = {
      id: nextIdRef.current,
      type: type,
      title:
        "Lorem ipsum dolor sit amet consectetur. Fermentum lacus pellentesque molestie integer morbi. Ultrices pulvinar viverra porttitor cras nunc at interdum quam ut. Orci iaculis tempus risus suspendisse purus cursus justo. Dolor quis nulla a eget ultrices aliquam. Magna habitasse amet nunc nunc lectus.",
      content: "",
    };
    setAnswers([...answers, newAnswer]);
    nextIdRef.current++;
  };

  const removeAnswer = (id: number) => {
    setAnswers(answers.filter((q) => q.id !== id));
  };

  // Hàm cập nhật content cho từng answer riêng biệt
  const updateAnswerContent = (id: number, newContent: string) => {
    setAnswers(
      answers.map((answer) =>
        answer.id === id ? { ...answer, content: newContent } : answer
      )
    );
  };

  const ToolbarButton: React.FC<ToolbarButtonProps> = ({
    icon: Icon,
    active = false,
  }) => (
    <button
      className={`p-1.5 rounded hover:bg-gray-100 ${
        active ? "bg-gray-200" : ""
      }`}
    >
      <Icon size={14} className="text-gray-600" />
    </button>
  );

  const EditorToolbar = () => (
    <div className="flex items-center gap-1 mb-3">
      <ToolbarButton icon={Italic} />
      <ToolbarButton icon={Bold} active />
      <ToolbarButton icon={Underline} />
      <div className="w-px h-4 bg-gray-300 mx-1"></div>
      <ToolbarButton icon={List} />
      <div className="w-px h-4 bg-gray-300 mx-1"></div>
      <ToolbarButton icon={AlignLeft} />
      <ToolbarButton icon={AlignCenter} />
      <ToolbarButton icon={AlignRight} />
    </div>
  );

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
      <div className="flex flex-1">
        <div className="border-r border-gray-200 h-full">
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
                href="/"
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
        {/* {body} */}
        <div className="w-full">
          <div className="flex flex-col gap-3 w-full p-5">
            <h1 className="text-lg font-medium text-[#2D286B]">Câu hỏi 1</h1>
            <div className="w-full border border-gray-200 rounded-xl">
              <div className="pt-2 border-b border-gray-200">
                <EditorToolbar />
              </div>
              <textarea
                value={questionContent}
                onChange={(e) => setQuestionContent(e.target.value)}
                rows={5}
                className="w-full text-sm text-gray-700 leading-relaxed mb-6 px-3 py-2 border-none focus:outline-none resize-none"
                placeholder="Nhập nội dung câu hỏi ..."
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between px-5 items-center">
            <div>
              <div className="text-sm font-medium mb-2">Loại câu hỏi</div>
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Deanna Curtis</option>
              </select>
            </div>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="text-sm font-medium mb-2">Điểm</div>
              <div className="flex border border-gray-300 rounded">
                <button
                  onClick={() => setPointValue(Math.max(0, pointValue - 1))}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus size={14} className="text-gray-600 rotate-45" />
                </button>
                <input
                  type="number"
                  value={pointValue}
                  onChange={(e) => setPointValue(parseInt(e.target.value) || 1)}
                  className="w-12 text-center text-sm py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => setPointValue(pointValue + 1)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus size={14} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Render các answer với content riêng biệt */}
          {answers.map((answer, index) => (
            <div
              key={answer.id}
              className="flex justify-between gap-3 w-full p-5"
            >
              <div className="w-full border border-gray-200 rounded-xl">
                <div className="pt-2 border-b border-gray-200">
                  <EditorToolbar />
                </div>
                <textarea
                  value={answer.content}
                  onChange={(e) =>
                    updateAnswerContent(answer.id, e.target.value)
                  }
                  rows={5}
                  className="w-full text-sm text-gray-700 leading-relaxed mb-6 px-3 py-2 border-none focus:outline-none resize-none"
                  placeholder="Nhập nội dung đáp án ..."
                ></textarea>
              </div>
              <button
                onClick={() => removeAnswer(answer.id)}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          <button
            onClick={() => addAnswer("essay")}
            className="w-full border-2 border-dashed border-blue-300 rounded-lg py-3 text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={16} />
            <span className="text-sm font-medium">Thêm đáp án</span>
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-3 p-5">
        <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors">
          Hủy
        </button>
        <Link href={"/marking/question"}>
          <button
            onClick={() => handleSubmit()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Xác nhận
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SurveyInterface;

// {
/* <div className="flex-1 bg-gray-50 p-6">
  <div className="h-full w-full">
    <h1 className="text-lg font-medium mb-4">Câu hỏi 1</h1>
      
      <div className="flex items-center justify-between mb-6">
      </div>
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="border border-gray-200 rounded-lg p-4 mb-4"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <EditorToolbar />
            </div>
            <button
              onClick={() => removeQuestion(question.id)}
              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <div className="text-sm text-gray-700 leading-relaxed">
            {question.title}
          </div>
        </div>
      ))}
      <button
        onClick={() => addQuestion("essay")}
        className="w-full border-2 border-dashed border-blue-300 rounded-lg py-3 text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={16} />
        <span className="text-sm font-medium">Thêm đáp án</span>
      </button>
    </div>
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-lg font-medium mb-4">Giải thích</h2>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-700">
          Chúng tôi với số hỗ trợ của AI. Vui lòng kiểm tra xác minh
          <br />
          thông tin trước khi cập nhật kết quả cuối cùng.
        </div>
        <div className="relative">
          <input
            type="checkbox"
            checked={showIntro}
            onChange={(e) => setShowIntro(e.target.checked)}
            className="sr-only"
          />
          <div
            onClick={() => setShowIntro(!showIntro)}
            className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
              showIntro ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform mt-0.5 ${
                showIntro ? "translate-x-6 ml-0.5" : "translate-x-0.5"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <EditorToolbar />

      <div className="text-sm text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Fermentum lacus pellentesque
        molestie integer morbi. Ultrices pulvinar viverra porttitor cras nunc at
        interdum quam ut. Orci iaculis tempus risus suspendisse purus cursus
        justo. Dolor quis nulla a eget{" "}
        <span className="underline">ultrices</span> aliquam. Magna habitasse
        amet nunc nunc lectus.
      </div>
    </div>
    <div className="flex justify-end gap-3">
      <button className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors">
        Hủy
      </button>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Xác nhận
      </button>
    </div>
  </div>
</div>; */
// }
