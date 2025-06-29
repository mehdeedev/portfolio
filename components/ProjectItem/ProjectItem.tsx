import Image from "next/image";
import ArrowIcon from "utils/icons/IconArrow";

interface ProjectItemProps {
  name: string;
  description: string;
  linkUrl: string;
  linkText: string;
  logoUrl: string;
}
function ProjectItem({
  name,
  description,
  linkText,
  linkUrl,
  logoUrl,
}: ProjectItemProps) {
  return (
    <div className="flex mt-4">
      <div className="w-20 h-20 box-border p-4 rounded-md bg-black bg-opacity-20 relative">
        <Image
          className="opacity-50"
          src={logoUrl}
          alt="Next.js"
          width={80}
          height={80}
          objectFit="contain"
        />
      </div>
      <div className="pl-4 flex flex-col justify-between pt-1">
        <div>
          <div className="text-gray-400 text-sm font-bold">{name}</div>
          <div className="text-xs mt-1 text-gray-500">{description}</div>
        </div>
        <a rel="noopener noreferrer" target="_blank" href={linkUrl}>
          <div className="flex text-cyan-700 items-end">
            <div className="text-sm  underline pt-3 pb-1 ">{linkText}</div>
            <div className="w-6 h-6 ml-1 mb-0.5">
              <ArrowIcon />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export { ProjectItem };
