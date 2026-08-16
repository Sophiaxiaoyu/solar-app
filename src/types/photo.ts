export type Photo = {
  id: string;
  url: string;
  title: string;
  description: string;
  tips: string[];
  tags: string[];
  likes?: number;
}