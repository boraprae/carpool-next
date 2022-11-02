import { pool } from "../../config/db";

export default async function handler(req, res) {
//   const data = [{ postID: 0, titile: "abc", price: 100 }];
  switch (req.method) {
    case "GET":
      return await getPosts(req, res);
    default:
      return res.status(400).send("Methods not allowed");
  }
}

const getPosts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM post");
    return res.json(rows);
  } catch (error) {
    console.error(error);
  }
};
