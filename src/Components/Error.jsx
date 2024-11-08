export const Error = ({ error }) => {
  console.log(error);

  return (
    <section>
      <p>Something went wrong</p>
      {error.response.data.status ? <p>{error.response.data.status}</p> : null}
      {error.response.data.msg ? <p>{error.response.data.msg}</p> : null}
    </section>
  );
};
