import Title from "./Blurbs/Title";
import AboutBlurb from "./Blurbs/AboutBlurb";
import GalleryBlurb from "./Blurbs/GalleryBlurb";
import MerchBlurb from "./Blurbs/MerchBlurb";
import CalendarBlurb from "./Blurbs/CalendarBlurb";
import JournalPrompts from "./Blurbs/JournalPrompts";
import ProgramsBlurb from "./Blurbs/ProgramsBlurb";

export default function Home() {
  return (
    <div>
      <Title />
      <AboutBlurb />
      <JournalPrompts />
      <ProgramsBlurb />
      <GalleryBlurb />
      <MerchBlurb />
      <CalendarBlurb />
    </div>
  );
}
