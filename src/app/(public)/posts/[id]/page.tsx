import Feed from "@/components/Feed";
import PostItemContent from "@/components/PostItemContent";
import PostList from "@/components/PostList";
import { Prompt } from "@/types";
import Link from "next/link";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";
import { GoArchive } from "react-icons/go";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IoCalendarOutline, IoShareSocialOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";

type Props = {};

const fakeData: Prompt[] = [
  {
    id: 1,
    tag: "test",
  },
  {
    id: 1,
    tag: "test",
  },
  {
    id: 1,
    tag: "test",
  },
  {
    id: 1,
    tag: "test",
  },
  {
    id: 1,
    tag: "test",
  },
];

export default function PostPage({}: Props) {
  return (
    <div className="container flex flex-col pt-5 gap-4">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="flex flex-col md:flex-row gap-3">
          <button className="avatar">
            <div className="w-20 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </button>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold max-w-[500px]">
              Calm Colors Mosaic: Art Oil Painting with Flowers
            </h1>
            <div className="flex gap-1 items-center">
              <span>
                By{" "}
                <Link href="#" className="font-bold">
                  @User
                </Link>
              </span>

              <div> - </div>

              <button className="btn btn-ghost btn-sm">Follow</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="font-bold">12</span>
              <IoMdHeart size={28} className="text-red-600" />
            </div>

            <div className="flex flex-col items-center">
              <span className="font-bold">75</span>
              <MdRemoveRedEye size={28} className="text-gray-700" />
            </div>
          </div>

          <div className="flex gap-5">
            <button className="btn btn-circle btn-primary">
              <BiCommentDetail size={24} className="text-white" />
            </button>

            <button className="btn btn-circle btn-primary">
              <IoShareSocialOutline size={24} className="text-white" />
            </button>

            <button className="btn btn-circle btn-primary">
              <GoArchive size={24} className="text-white" />
            </button>

            <button className="btn btn-info text-white">
              <IoMdHeartEmpty size={24} /> Like
            </button>
          </div>
        </div>
      </div>

      <div className="columns-1 md:columns-2 gap-6">
        <div className="md:bg-gray-100 rounded-xl flex justify-center items-center p-0 md:px-12 md:py-3">
          <div className="w-full md:w-3/5">
            <PostItemContent prompt={{ id: 1, tag: "" }} />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 mt-5 md:mt-0">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">Prompt Description</h2>

            <p className="text-gray-700">
              Embark on a cosmic journey with this stunning canvas art print
              featuring stars and planets reflected in water, brought to life in
              the vibrant style of synthwave. Lose yourself in the intricate
              details of the fantasy landscapes and background elements,
              enhanced by the mesmerizing lens flare. Created by a talented sea
              and coast painter, this panoramic piece is a scattered composition
              of pure magic.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex justify-center items-center gap-2">
              <div className="p-2 bg-gray-200 rounded-md">
                <GiProcessor size={18} />
              </div>
              <span className="font-semibold">MidJourney</span>
            </div>

            <div className="flex justify-center items-center gap-2">
              <div className="p-2 bg-gray-200 rounded-md">
                <IoCalendarOutline size={18} />
              </div>
              Created <span className="font-semibold">05/01/2023</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="font-bold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 8].map((item) => (
                <Link
                  href="#"
                  className="px-4 py-2 text-sm bg-gray-200 rounded-full"
                >
                  Tag {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold text-2xl">More by @User</h2>
        <PostList posts={fakeData} />
      </div>
    </div>
  );
}
