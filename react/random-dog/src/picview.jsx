export function Picview({picdata}) {
  return (
    <div>
      <figure>
        <img src={picdata.message} alt="" />
      </figure>
    </div>
  );
}
