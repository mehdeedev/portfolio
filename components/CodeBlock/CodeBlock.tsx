interface IProperty {
  key: string;
  value: string | string[];
}

function CodeBlock() {
  /* -------------------------------------------------------------------------------------------------------- */
  const renderDots = () => (
    <div className="flex items-center">
      <div className="code-container-header-circle bg-red-500" />
      <div className="code-container-header-circle bg-amber-400" />
      <div className="code-container-header-circle bg-green-500" />
    </div>
  );
  /* -------------------------------------------------------------------------------------------------------- */
  const renderProperty = ({ key, value }: IProperty) => {
    return (
      <div className="flex">
        <div className="text-green-300 mr-1 ml-6">{`"${key}"`}: </div>
        <div className="text-sky-300">
          {typeof value === "string" ? (
            `"${value}"`
          ) : (
            <div>
              [
              {value.map((item, index) => (
                <div key={index}>
                  {`"${item}"`}
                  {index !== value.length - 1 ? "," : ""}
                </div>
              ))}
              ]
            </div>
          )}
        </div>
      </div>
    );
  };
  /* -------------------------------------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------------------------------------- */
  return (
    <div className="bg-gray-800 text-white rounded p-4 ">
      {renderDots()}
      <div className="mt-6">
        <div className="flex">{"{"}</div>
        <div>
          {renderProperty({
            key: "author",
            value: "Mehdi Pouladgar",
          })}

          {renderProperty({
            key: "description",
            value: "Front-End Developer",
          })}

          {renderProperty({
            key: "homePage",
            value: "mehdee.dev",
          })}

          {renderProperty({
            key: "coding",
            value: [
              "JavaScript",
              "React",
              "TypeScript",
              "Next",
              "GraphQL",
              "Redux",
              "Sass",
              "TailwindCss",
              "Jest",
              "PWA",
            ],
          })}

          {renderProperty({
            key: "tools",
            value: ["Git", "Webpack", "Jira", "Trello"],
          })}
        </div>
        <div>
          <div className="inline-block ml-2">{"}"}</div>
        </div>
      </div>
    </div>
  );
}

export { CodeBlock };
