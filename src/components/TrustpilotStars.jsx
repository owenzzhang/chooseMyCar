function TrustpilotStars({ stars }) {
  return (
    <img
      src={`/ratings/${Number(stars) * 10}.svg`}
      alt={`${stars}-star rating`}
      className="w-32 h-auto"
    />
  );
}

export default TrustpilotStars;
