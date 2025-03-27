import fs from 'fs'
import path from 'path'

export type FrontMatter = {
  title: string
  date: string
  excerpt: string
  author: string
  slug: string
  [key: string]: any
}

export type MDXContent = {
  frontMatter: FrontMatter
  slug: string
  content: string
}

export const getMDXContent = async (filePath: string): Promise<MDXContent | null> => {
  try {
    const source = await import(`../content/${filePath}`)
    
    return {
      frontMatter: source.frontMatter,
      slug: source.slug || path.basename(filePath, path.extname(filePath)),
      content: source.default
    }
  } catch (error) {
    console.error(`Error loading MDX file: ${filePath}`, error)
    return null
  }
}

export const getAllMDXFiles = async (contentType: 'blog' | 'case-studies'): Promise<MDXContent[]> => {
  try {
    const contextModule = import.meta.glob([
      '../content/**/*.mdx',
      '../content/**/*.md'
    ])
    
    const mdxFiles = Object.keys(contextModule)
      .filter(file => file.includes(`/${contentType}/`))
    
    const contents = await Promise.all(
      mdxFiles.map(file => getMDXContent(file.replace('../content/', '')))
    )
    
    return contents.filter((content): content is MDXContent => content !== null)
      .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
  } catch (error) {
    console.error(`Error loading MDX files from ${contentType}`, error)
    return []
  }
}