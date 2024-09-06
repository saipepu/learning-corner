// Learning Corner is an innovative language learning app designed to make vocabulary acquisition more engaging and effective. Unlike traditional language learning platforms, which often focus on isolated vocabulary words, Learning Corner uses a story-based approach to teach multiple words within the context of interconnected sentences. This method helps learners create mental links between words, making it easier to remember and use them in real-life situations.

type User = {
  _id: string;
  name: string;
  email: string;
  password: string
  courses: Course[]
  totalExpe: number;
  totalPoint: number;
  assets: Asset[]
}

type Course = {
  _id: string;
  title: string;
  description: string;
  photo: string;
  exp: number;
  difficulty: Difficulty;
  quizzes: Quiz[];
  script: Sentence[];
}

type Quiz = {
  _id: string;
  question: string;
  photo: string;
  options: Option[];
  answer: string;
  point: number;
}

type Option = {
  _id: string;
  content: string;
  photo: string;
}

type Sentence = {
  _id: string;
  speaker: Speaker;
  content: string;
  audioFile: string;
  words: Word[];
}

type Word = {
  _id: string;
  content: string;
  translation: string;
  examples: string[];
}

type Asset = {
  _id: string;
  name: string;
  point: number;
  photo: string;
}