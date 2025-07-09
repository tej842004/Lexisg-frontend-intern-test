export interface Citation {
  text: string;
  source: string;
  link: string;
}

export interface ApiResponse {
  answer: string;
  citations: Citation[];
}
