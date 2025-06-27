interface Props {
  children: string;
}

function Button(props: Props) {
  const { children } = props;

  return (
    <div className="bg-white rounded shadow-md text-[#5F94D3] font-bold px-2 py-3 text-center">
      {children}
    </div>
  );
}

export { Button };
