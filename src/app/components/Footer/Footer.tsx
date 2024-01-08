import {
  BsTwitter,
  BsTiktok,
  BsInstagram,
  BsReddit,
  BsSpotify,
  BsTwitch,
} from "react-icons/bs";

export function Footer() {
  return (
    <div className="max-w-full h-[22rem]  border-t-[1px] border-zinc-700 ">
      <div className="flex flex-col mt-4 gap-4 justify-center ">
        <div className="flex w-full justify-center ">
          <img src="Logo.png" alt="" className="w-28 h-30" />
        </div>

        <div className="flex justify-center">
          <div className="flex w-[44rem] justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-bold">Overview</span>
              <span>About</span>
              <span>Contact Us</span>
              <span>Privacy Policy</span>
              <span>Terms Of Use</span>
            </div>

            <div className="flex flex-col gap-2 w-32 items-center">
              <span className="font-bold">Follow Us</span>
              <div className="flex gap-4">
                <BsInstagram className="w-8 h-8" />
                <BsTiktok className="w-8 h-8" />
                <BsTwitter className="w-8 h-8" />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-32 items-center">
              <span className="font-bold ">More About</span>
              <div className="flex gap-4">
                <BsReddit className="w-8 h-8" />
                <BsSpotify className="w-8 h-8" />
                <BsTwitch className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span> © 2023 ZTAAR, INC. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </div>
  );
}
