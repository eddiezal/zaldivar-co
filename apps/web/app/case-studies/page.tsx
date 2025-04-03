import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type CaseStudy = {
  slug: string;
  title: string;
  date: string;
};

export default async function CaseStudiesPage() {
  const dir = path.join(process.cwd(), "apps/web/content/case-studies");
  const files = await fs.readdir(dir);

  const caseStudies: CaseStudy[] = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(dir, filename);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);
        return {
          slug: filename.replace(/\.mdx$/, ""),
          title: data.title,
          date: data.date,
        };
      })
  );

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <ul className="space-y-4">
        {caseStudies.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/case-studies/${slug}`}>
              <div className="text-xl font-semibold hover:underline">{title}</div>
              <div className="text-sm text-neutral-500">{date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
