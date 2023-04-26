"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [isyearly, setIsYearly] = useState(false);
  const router = useRouter();
  const toPurchasePage = () => {
    router.push("/subscription/payment");
  };
  return (
    <div className="">
      <div className="flex min-h-screen pt-[30px] px-[40px]">
        <div className="min-w-full">
          <p className="text-gray-100 text-[20px] leading-[40px] font-semibold">
            Your Subscriptions packages
          </p>

          <div>
            <p className="text-[#717F87] text-[15px] leading-[27px] font-medium">
              Pick your flexible packages with 30 day refund policy
            </p>
          </div>

          <div className="mt-[30px] inline-flex border border-[#E1E3E5] shadow-[0px 1px 2px #E1E3E5] divide-[#E1E3E5] divide-x rounded-[5px]">
            <button
              onClick={() => {
                setIsYearly(false);
              }}
              className={`${
                isyearly ? "bg-white" : "bg-sky-600"
              } hover:text-[#717F87] text-[#0E1823] leading-[16px] text-[13px] font-semibold  py-[15px] px-[25px] rounded-l`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                setIsYearly(true);
              }}
              className={`${
                !isyearly ? "bg-white" : "bg-sky-600"
              } hover:text-[#717F87] text-[#0E1823] leading-[16px] text-[13px] font-semibold  py-[15px] px-[25px] rounded-l`}
            >
              Annual
            </button>
          </div>

          <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
            <div
              key="1"
              className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
            >
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Starter
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Trial
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    Free
                  </p>
                </div>

                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    5 Credits
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    1 User
                  </p>
                </div>
              </div>

              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Only one screen and one time
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Low resolution (480p)
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    No customer service available
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Only one users
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    No updates regarding movies
                  </p>
                </div>

                <div className="mt-[25px]">
                  <button
                    onClick={toPurchasePage}
                    className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>

            <div
              key="2"
              className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
            >
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Value
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Fast Start
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    $49
                  </p>
                </div>

                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    50 Credits per month
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    1 users
                  </p>
                </div>
              </div>

              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Only one screen
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    High resolution video stream (1080p)
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Good customer service
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Only one users
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Updates regarding movies
                  </p>
                </div>

                <div className="mt-[25px]">
                  <button
                    onClick={toPurchasePage}
                    className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>

            <div
              key="3"
              className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
            >
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Purchase
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Accelerate
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    $89
                  </p>
                </div>

                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    100 Credits per month
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    5 users
                  </p>
                </div>
              </div>

              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    5 users, 5 screens.
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Highest (4K) video quality
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Faster customer service
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Multiple users
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Latest update about movies
                  </p>
                </div>

                <div className="mt-[25px]">
                  <button
                    onClick={toPurchasePage}
                    className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
