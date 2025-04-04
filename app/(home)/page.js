
import AuthorSection from "./_components/author";
import BookDescriptionSection from "./_components/book-description";
import BooksDisplaySection from "./_components/books-display";
import HeroSection from "./_components/hero";
import ReviewsSection from "./_components/reviews";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <BookDescriptionSection/>
    <BooksDisplaySection/>
    <AuthorSection/>
    <ReviewsSection/>
  </div>
  );
}
