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

export async function nitividhanaOverview(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','overview')
	.order('id')
	if(error) throw new Error(error.message)
	return data
}

export async function nitividhanaTopics(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','topics')
	.order('id')
	.limit(4)
	if(error) throw new Error(error.message)
	return data
}

export async function nitividhanaTopicsOverview(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','topics')
	.order('id', {ascending: false})
	.limit(1)
	if(error) throw new Error(error.message)
	return data
}

export async function nitividhanaQual(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','qualifications')
	.order('id')
	if(error) throw new Error(error.message)
	return data
}

export async function nitiDay1(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','schedule')
	.eq('day','1 - 11th May')
	.order('id')
	if(error) throw new Error(error.message)
	return data
}

export async function nitiDay2(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','schedule')
	.eq('day','2 - 12th May')
	.order('id')
	if(error) throw new Error(error.message)
	return data
}

export async function nitiDay3(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','schedule')
	.eq('day','3 - 13th May')
	.order('id')
	if(error) throw new Error(error.message)
	return data
}

export async function nitiDay4(){
	const { data, error } = await supabase
	.from('brhat-nitividhana')
	.select()
	.eq('type','schedule')
	.eq('day','4 - 14th May')
	.order('id')
	if(error) throw new Error(error.message)
	return data
}