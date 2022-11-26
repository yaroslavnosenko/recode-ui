interface Props {
  title: JSX.Element | string
  body: JSX.Element | string
  icon: JSX.Element
}

export const Feature = ({ title, body, icon }: Props) => {
  return (
    <div className="mt-12 first:mt-0">
      <div className="inline-block">{icon}</div>
      <h2 className="text-3xl font-medium leading-tight mt-4">{title}</h2>
      <p className="opacity-50 mt-4">{body}</p>
    </div>
  )
}
