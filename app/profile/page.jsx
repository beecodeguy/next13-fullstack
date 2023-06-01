"use client";
import React, { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, []);

  const handleEdit = () => {};

  const handleDelete = async () => {};

  console.log(posts)

  return (
    <Profile
      name=""
      desc="Welcome to Personalized Page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
