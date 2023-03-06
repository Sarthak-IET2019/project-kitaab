import Loader from "@/components/loader";
import TopicListing from "@/pageComponents/AdminPanel/TopicList";
import { AuthServices } from "@/services/auth.service";
import { FetchTopicsFromStore } from "@/services/content.service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Admin = () => {
  return (
    <>
      <div className="flex py-8 w-full h-full justify-center items-center">
        <TopicListing />
      </div>
    </>
  );
};

export default Admin;
