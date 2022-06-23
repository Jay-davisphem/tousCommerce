import NewsItem from "../../components/NewsItem";
function NewsList() {
  return (
    <>
      <h3>BREAKING NEWS</h3>
      <main>
        {[1, 2, 3, 4, 5].map(() => (
          <NewsItem />
        ))}
      </main>
    </>
  );
}
export default NewsList;
