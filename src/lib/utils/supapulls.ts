import supabase from '$lib/db'

export async function getCourses(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	.order('id')
	.limit(4)
	if (error) throw new Error(error.message)
	return data
}

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

export async function getRecent(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','event')
	.order('sequence',{ascending: false})
	.limit(4)
	if (error) throw new Error(error.message)
	return data
}

export async function getArticles(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','Article')
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}

export async function getYoutube(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('bettag',true)
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}

export async function getPartners(){
	const { data, error } = await supabase
	.from('brhat-about')
	.select()
	.eq('type','betpartner')
	.eq('sequence',1)
	if (error) throw new Error(error.message)
	return data
}

export async function getIKSEvents(){
	const { data, error } = await supabase
	.from('brhat-iks')
	.select()
	.order('seq',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}