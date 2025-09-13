import axios from "axios";
import { PostSchema, type Post } from "../schemas/post";

export const defaultPost: Post = {
  id: 1,
  title: `His mother had always taught him not to ever think of himself as better than others. 
    He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. 
    But the stupidity of the group of people he was talking to made him change his mind.`,
  body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};

export async function getPost(): Promise<Post> {
  const randomID = Math.floor(Math.random() * 10) + 1;

  try {
    const response = await axios.get(`https://dummyjson.com/posts/${randomID}`);

    const result = PostSchema.safeParse(response.data);

    if (result.success) {
      return result.data;
    } else {
      console.error("Invalid Post data:", result.error.format());
      return defaultPost;
    }
  } catch (error) {
    console.error("Failed to fetch Post data from API:", error);
    return defaultPost;
  }
}
