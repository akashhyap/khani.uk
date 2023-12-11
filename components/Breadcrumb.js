import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = ({ pathname }) => {
  // console.log("path", pathname);
  // Split the pathname into segments and filter out empty segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Function to create URL from segments
  const createBreadcrumbLink = (index) => {
    return "/" + pathSegments.slice(0, index + 1).join("/");
  };

  return (
    <nav aria-label="breadcrumb" className="mt-5">
      <ol className="breadcrumb flex text-sm items-center">
        <li>
          <Link href="/"><FaHome /></Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const segmentName = segment.replace(/-/g, " ");

          return (
            <li
              key={index}
              className={`capitalize ${isLast ? "text-gray-400" : "text-poppy-900"}`}
            >
              {isLast ? (
                segmentName
              ) : (
                <Link href={createBreadcrumbLink(index)}>{segmentName}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
