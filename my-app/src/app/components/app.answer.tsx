import { Blog } from "@/types/backend";

interface AppAnswerProps {
  blogs: Blog[];
}

const AppAnswer = ({ blogs }: AppAnswerProps) => {
  const getLabel = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className="space-y-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="border border-gray-200 rounded-lg">
          <div className="flex justify-between p-5">
            <h1 className="text-xl font-bold text-[#2D286B]">
              Câu hỏi {blog.id}
            </h1>
            <p className="text-[#2D286B] font-medium">
              Điểm: {blog.pointValue}đ
            </p>
          </div>
          <h1 className="pl-5 text-[#2D286B]">{blog.questionContent}</h1>

          <div className="pl-5 pr-5">
            {blog.answerContents.map((content, idx) => (
              <div key={idx} className="flex gap-3 py-2 items-center">
                <span className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-[#2D286B] font-semibold text-sm">
                  {getLabel(idx)}
                </span>
                <p className="text-xs text-[#2D286B]">{content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppAnswer;
