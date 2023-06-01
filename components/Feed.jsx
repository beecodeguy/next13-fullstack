"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
        // <p>Feed</p>
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeOut, setSearchTimeOut] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeOut);
    const { value = "" } = e.target;
    setSearchText(value);

    //Debounce Method
    setSearchTimeOut(
      setTimeout(() => {
        const searchResult = filterPrompts(value);
        setSearchedResults(searchResult);
      }, 800)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or a username"
          required
          className="search_input peer"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
