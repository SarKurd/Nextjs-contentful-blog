function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}

      <style jsx>
        {`
          p {
            height: 100%;
            display: flex;
            margin: auto;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
