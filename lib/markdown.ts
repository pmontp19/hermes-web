import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const contentDir = path.join(process.cwd(), 'content');

export async function getMarkdownFiles(dir: string): Promise<string[]> {
  const dirPath = path.join(contentDir, dir);
  return fs.readdirSync(dirPath);
}

export interface ContentFrontmatter {
  title: string;
  description: string;
  icon?: keyof typeof dynamicIconImports;
  [key: string]: unknown;
}

export async function getMarkdownBySlug(dir: string, slug: string) {
  const filePath = path.join(contentDir, dir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    frontmatter: data as ContentFrontmatter,
    htmlContent,
  }
}

export async function getLandingContent() {
  const filePath = path.join(contentDir, 'landing.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}