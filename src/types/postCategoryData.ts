import { PostCategoryBgColors } from "./postCategoryBgColors";

export interface PostCategoryData {
  id: number;
  name: string;
  nameColor: string;
  imageSrc: string;
  iconSrc: string;
  bgColor: PostCategoryBgColors;
}
