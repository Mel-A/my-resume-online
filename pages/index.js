import * as component from '../components/homepage'
import * as education from '../components/education-section'
import * as knowledge from '../components/knowledge-section'


export default function Home() {
  return (
    <>
      <component.Navbar />
      <component.MainBanner />
      <component.Thumbnail />
      <component.Summary />
      <education.ImagesGrid />
      <knowledge.Banner />
    </>
  )
}
