import { useRouter } from "next/router";

//https://github.com/mschwarzmueller/nextjs-course-code/commit/e66d15f8fd88470c0faa645d2db18762b1b8a964
function FilteredEventsPage() {
  const router = useRouter();
  const slug = router.query.slug;
  return <div>FilteredEventsPage</div>;
}
export default FilteredEventsPage;
