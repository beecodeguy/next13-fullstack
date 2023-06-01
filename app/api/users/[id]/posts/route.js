import Prompt from "@models/prompts";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  const {params} = res
  try {
    await connectToDB();
    const prompts = await Prompt.find({
      creator: params.id
    }).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all Prompts", { status: 500 });
  }
};
