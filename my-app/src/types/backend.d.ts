export interface Blog {
  questionContent: string;
  answerContents: string[];
  pointValue: number;
  id: number;
}

export interface BlogsPayload {
  blogs: Blog[];
}
