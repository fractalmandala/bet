import supabase from '$lib/db'

export async function courseDetails(dynamizer:string) {
	const { data, error } = await supabase
		.from('brhat-drashta2')
		.select()
		.eq('type','course details')
		.eq('dynamizer',dynamizer)
		.order('id', {ascending: false})
		.limit(3)
  if (error) throw new Error(error.message)
  return data
}

export async function courseContents(dynamizer:string) {
	const { data, error } = await supabase
		.from('brhat-drashta2')
		.select()
		.eq('type','course content')
		.eq('dynamizer',dynamizer)
		.order('id')
  if (error) throw new Error(error.message)
  return data
}

export async function courseTakeaways(dynamizer:string) {
	const { data, error } = await supabase
		.from('brhat-drashta2')
		.select()
		.eq('type','takeaway')
		.eq('dynamizer', dynamizer)
		.order('id')
  if (error) throw new Error(error.message)
  return data
}

export async function courseInstructor(dynamizer:string) {
	const { data, error } = await supabase
		.from('brhat-drashta2')
		.select()
		.eq('type','facilitator')
		.eq('dynamizer',dynamizer)
		.order('id')
  if (error) throw new Error(error.message)
  return data
}