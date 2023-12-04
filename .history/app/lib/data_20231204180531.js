import User from '../model/User'
import { connectToDb } from '../lib/ulti'

export const fetchUser = async (q, page) => {
  const regex = new RegExp(q, "i")
  const ITEM_PER_PAGE = 1
  try {
    await connectToDb();
    const users = await User.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE);
    return users
  } catch (error) {
    console.log(error);
  }
}
export const fetchDetailUser = async (id) => {
  try {
    await connectToDb()
    const users = await User.findOne({ _id: id });
    return users;
  } catch (error) {
    console.log(error);
  }
}
export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];