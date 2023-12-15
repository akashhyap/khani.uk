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
  // State to track if a search was performed
  const [searchPerformed, setSearchPerformed] = useState(false);
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      // Set that a search has been performed
      setSearchPerformed(true);
      fetchSearchResults(searchQuery).then((data) => {
        const filteredResults = data.filter((result) => {
          const queryKeywords = searchQuery
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);

          if (result.content.component !== "blog") return false;
          // Extract keywords from the slug
          const slugKeywords = result.full_slug
            .toLowerCase()
            .split(/[\s/-]+/)
            .filter(Boolean);

          // Check if all query keywords are present in the slug keywords
          return queryKeywords.some((queryKeyword) =>
            slugKeywords.some((slugKeyword) =>
              slugKeyword.includes(queryKeyword)
            )
          );
        });
        setResults(filteredResults);
      });
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
      {/* Render search results or no results message */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {searchPerformed ? (
          results.length > 0 ? (
            results.map((result) => (
              <div key={result.id}>
                <Link href={`/${result.full_slug}`} className="capitalize">
                  {/* Image and name rendering */}
                  {result?.content?.body[2]?.image && (
                    <div className="w-full relative aspect-w-16 aspect-h-9 mb-3">
                      <Image
                        alt={result?.content?.body[2]?.image?.alt}
                        src={`${result?.content?.body[2]?.image?.filename}`}
                        fill
                        className="w-full h-full object-cover object-center rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <p className="leading-6 font-semibold">
                    {result?.content?.body[0].text}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              There are no results for this query.
            </div>
          )
        ) : (
          <div className="col-span-full text-center">
            Search your query here...
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
