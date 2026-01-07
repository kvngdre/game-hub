import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </>
  );
};

export default GenreList;
