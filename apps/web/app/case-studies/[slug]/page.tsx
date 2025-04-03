import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import { Hero } from "@/components/sections/Hero";

const components = { Hero };

export default async function CaseStudyPage(props: { params: { slug: string } }) {
  // Await params before using its properties
  const { slug } = await props.params;
  const filePath = path.join(process.cwd(), "apps/web/content/case-studies", `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { content, frontmatter } = await compileMDX({
      source,
      options: { parseFrontmatter: true },
      components,
    });

    return (
      <article className="prose prose-lg max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
        <p className="text-neutral-500 text-sm mb-8">{frontmatter.date}</p>
        {content}
      </article>
    );
  } catch (err) {
    console.error(`[MDX Error] Could not render ${slug}:`, err);
    return notFound();
  }
}
