import Loader from "@/components/loader";
import TopicListing from "@/pageComponents/AdminPanel/TopicList";
import { AuthServices } from "@/services/auth.service";
import { FetchTopicsFromStore } from "@/services/content.service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [topics, setTopics] = useState(null);
  const router = useRouter("");

  // Fetch topics from store
  useEffect(() => {
    FetchTopicsFromStore()
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => {
        alert("You are not allowed to view this page. Please sign in");
        AuthServices.HandleUserLogout();
        router.push("/");
      });
  }, []);
  return (
    <>
      {!topics && <Loader />}
      {topics && (
        <div className="flex py-8 w-full h-full justify-center items-center">
          <TopicListing topicList={topics} />
        </div>
      )}
    </>
  );
};

export default Admin;
