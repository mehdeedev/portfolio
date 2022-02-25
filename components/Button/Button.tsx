
interface Props {
  children: string
}

function Button(props: Props) {
  const { children } = props;
  
  return (
    <div className="relative">
      <div className="absolute -right-0.5 -top-0.5 px-3 py-1">
        {children}
      </div>
      <div className="rounded border-2 border-red-600 text-red-600 px-3 py-1 font-bold">
        {children}
      </div>
    </div>
  )
}

export { Button };