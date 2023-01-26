export async function load({ params }){
  const post = await import(`../${params.doc}.md`)
  const { title, tag } = post.metadata
  const content = post.default

  return {
    content,
    title,
    tag,
  }
}