import Link from "next/link";
import React from "react";
import { RxUpdate } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { documentId } from "firebase/firestore";
import { DeleteDocumentFromStore } from "@/services/content.service";
import { CODES } from "@/globals/globals";
const TopicRow = ({ data, setupdateDocData, setUpdateModalToggle }) => {
  const HandleDelete = async (documentId) => {
    let responseCode = await DeleteDocumentFromStore(documentId)
    if (responseCode === CODES.SUCCESS) {
      alert("Document Deleted Successfully")

    }
    else {
      alert("Could Not Delete Document")

    }
  }
  return (
    <>
      <div className="w-full relative flex whitespace-nowrap py-1 px-2 overflow-hidden border-b border-[#ebebeb] border-l border-r">
        <div className="w-[100px] flex  justify-start items-center">
          {data?.day}
        </div>
        <div className="w-1/6 flex  justify-start items-center flex-grow-[2]">
          {data?.title}
        </div>
        <div className="w-1/6 flex  justify-start items-center flex-grow">
          {data?.author?.name}
        </div>
        <div className="w-1/6 flex  justify-start items-center flex-grow">
          <button
            className={`px-2 rounded-full w-[100px] text-center font-medium text-sm py-2 ${data?.status
              ? "bg-green text-green_text"
              : "bg-red text-[#ff0000]"
              }`}
          >
            {data?.status ? "Open" : "Closed"}
          </button>
        </div>
        <div className="w-1/6 flex  justify-start items-center flex-grow">
          <Link href={data?.psp_url} className="text-blueLink">
            PROBLEM LINK
          </Link>
        </div>
        <div className="w-1/6 flex  justify-start items-center gap-x-2">
          <button
            className="bg-accent overflow-hidden px-4 rounded-[4px] py-2 text-sm text-white hover:bg-hoverBg flex justify-center items-center gap-x-2"
            onClick={() => {
              setupdateDocData(data);
              setUpdateModalToggle(true);
            }}
          >
            <RxUpdate fill="#fff" size={"20px"} />
          </button>
          <button
            className="bg-[#d11a2a] overflow-hidden rounded-[4px] px-4 py-2 text-sm text-white flex justify-center items-center gap-x-2"
            onClick={() => {
              if (
                confirm(
                  `Are you sure you want to delete this topic : ${data?.title}`
                )

              ) {
                HandleDelete(data?.id)
              }
              // call delete
            }}
          >
            <AiFillDelete fill="#fff" size={"20px"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopicRow;
