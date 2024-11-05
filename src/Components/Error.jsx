export const Error = ({err}) => {
  return (
    <section>
      <p>Something went wrong</p>
      <p>{err.res.status}</p>
      <p>{err.res.data.msg}</p>
    </section>
  )
}