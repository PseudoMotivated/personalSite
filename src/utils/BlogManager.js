// utils/blogManager.js

// Import all .md files from the blog directory
const blogFiles = import.meta.glob('../pages/blogs/*.md')

export async function getAllPosts() {
  const posts = []
  
  for (const path in blogFiles) {
    const module = await blogFiles[path]()
    const slug = path.split('/').pop().replace('.md', '')
    
    posts.push({
      slug,
      component: module.ReactComponent,
      frontmatter: module.attributes,
      timestamp: module.attributes.date ? new Date(module.attributes.date).getTime() : 0
    })
  }
  
  return posts.sort((a, b) => b.timestamp - a.timestamp)
}

export function getPostsByTag(posts, tag) {
  return posts.filter(post => 
    post.frontmatter?.tags && Array.isArray(post.frontmatter.tags) &&
    post.frontmatter.tags.includes(tag)
  )
}

export function getAllTags(posts) {
  const tags = new Set()
  posts.forEach(post => {
    if (post.frontmatter?.tags && Array.isArray(post.frontmatter.tags)) {
      post.frontmatter.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags)
}