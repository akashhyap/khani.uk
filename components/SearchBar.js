"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { fetchSearchResults } from "@/utils/storyblok";
import Image from "next/image";
import Link from "next/link";

const SearchBar = ({ blok }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery).then(setResults);
    }
  }, [searchQuery]);

  const handleSearch = (newQuery) => {
    // Perform navigation with the new search query
    router.push(`?query=${newQuery}`);
  };

  return (
    <div className="px-6 py-14 max-w-5xl mx-auto">
      <h1 className="text-4xl text-center">{blok.title}</h1>
      <SearchForm onSearch={handleSearch} />
      {/* Render search results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {results.map((result) => {
          console.log(result);
          return (
            <div key={result.id}>
              <Link href={`/${result.full_slug}`}>
                {result?.content?.body[2]?.image && (
                  <div className="w-full relative aspect-w-16 aspect-h-9">
                    <Image
                      alt={result?.content?.body[2]?.image?.alt}
                      src={`${result?.content?.body[2]?.image?.filename}`}
                      fill
                      className="w-full h-full object-cover object-center rounded-xl"
                      loading="lazy"
                    />
                  </div>
                )}
                {result.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
